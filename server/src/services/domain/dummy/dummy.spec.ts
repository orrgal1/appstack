import { createChannel, createClient, Metadata } from 'nice-grpc';
import { main, shutdownComponents } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import { isE2E, login, useHost, usePorts } from '../../../../tests/utils';
import {
  DummyServiceClient,
  DummyServiceDefinition,
} from '../../../libs/client';
import * as process from 'process';

jest.setTimeout(10000);

describe('Dummy', () => {
  let client: DummyServiceClient;
  const metadata = new Metadata();
  const rpmLimit = process.env.WRITE_RPM_LIMIT;

  beforeAll(async () => {
    process.env.WRITE_RPM_LIMIT = '10';
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(DummyServiceDefinition, channel);
    if (!isE2E()) await main({ ports });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    process.env.WRITE_RPM_LIMIT = rpmLimit;
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    const input = {
      text: uuid(),
    };
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne({ id: created.id }, { metadata });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    const input = { text: uuid() };
    const update = { text: uuid() };
    const created = await client.createOne(input, { metadata });
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    const input = {
      text: uuid(),
    };
    const created = await client.createOne(input, { metadata });
    await client.removeOne({ id: created.id }, { metadata });
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('Search', async () => {
    const input = { text: uuid().replace(/-/g, ' ') };
    const token = input.text.split(' ')[0];
    for (let i = 0; i < 4; i++) {
      await client.createOne(
        { ...input, text: `${input.text} ${i}` },
        { metadata },
      );
    }
    const all = await client.search(
      {
        filter: { text: token },
        opts: { limit: 10, waitForSync: true },
      },
      { metadata },
    );
    expect(all.results.length).toEqual(4);

    const page1 = await client.search(
      {
        filter: { text: token },
        opts: { limit: 3, waitForSync: true },
      },
      { metadata },
    );
    expect(page1.results).toEqual(all.results.slice(0, 3));
    const lastOffset = page1.meta.offset;

    const page2 = await client.search(
      {
        filter: { text: token },
        opts: { limit: 3, offset: lastOffset, waitForSync: true },
      },
      { metadata },
    );
    expect(page2.results).toEqual(all.results.slice(3, 6));
  });

  test('Exceed rate limit', async () => {
    const input = {
      text: uuid(),
    };
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(client.createOne(input, { metadata }));
      }
      return await Promise.all(requests);
    };
    await expect(bombard()).rejects.toThrow(
      '/main.DummyService/CreateOne UNKNOWN: rate limit exceeded',
    );
  });
});
