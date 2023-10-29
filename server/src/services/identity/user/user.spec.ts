import { createChannel, createClient, Metadata } from 'nice-grpc';
import { UserServiceClient, UserServiceDefinition } from '../../../libs/client';
import { shutdownComponents } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import {
  isE2E,
  login,
  runMain,
  useHost,
  usePorts,
} from '../../../../tests/utils';

describe('User', () => {
  let client: UserServiceClient;
  let clientInternal: UserServiceClient;
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    ws: number;
    workers: number;
  };

  beforeAll(async () => {
    ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    const channelInternal = createChannel(`${host}:${ports.protoInternal}`);
    client = createClient(UserServiceDefinition, channel);
    clientInternal = createClient(UserServiceDefinition, channelInternal);
    if (!isE2E()) await runMain({ ports });
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne with self ownership', async () => {
    const metadata = new Metadata();
    const { accessToken, userId } = await login(ports);
    metadata.set('jwt', accessToken);

    const update = { name: uuid() };
    await client.updateOne({ id: userId, ...update }, { metadata });

    await client.findOne({ id: userId }, { metadata });

    await expect(
      client.removeOne({ id: userId }, { metadata }),
    ).rejects.toThrow('permission denied');
  });

  test('CreateOne + FindOne', async () => {
    const input = { name: uuid() };
    const created = await clientInternal.createOne(input);
    const found = await clientInternal.findOne({ id: created.id });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    const input = { name: uuid() };
    const update = { name: uuid() };
    const created = await clientInternal.createOne(input);
    const updated = await clientInternal.updateOne({
      id: created.id,
      ...update,
    });
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    const input = { name: uuid() };
    const created = await clientInternal.createOne(input);
    await clientInternal.removeOne({ id: created.id });
    await expect(clientInternal.findOne({ id: created.id })).rejects.toThrow(
      'not found',
    );
  });

  test('Search', async () => {
    const input = { name: uuid().replace(/-/g, ' ') };
    const token = input.name.split(' ')[0];
    for (let i = 0; i < 7; i++) {
      await clientInternal.createOne({ ...input, name: `${input.name} ${i}` });
    }
    const all = await clientInternal.search({
      filter: { name: token },
      opts: { limit: 10, waitForSync: true },
    });
    expect(all.users.length).toEqual(7);

    const page1 = await clientInternal.search({
      filter: { name: token },
      opts: { limit: 3, waitForSync: true },
    });
    expect(page1.users).toEqual(all.users.slice(0, 3));
    const lastOffset = page1.meta.offset;

    const page2 = await clientInternal.search({
      filter: { name: token },
      opts: { limit: 3, offset: lastOffset, waitForSync: true },
    });
    expect(page2.users).toEqual(all.users.slice(3, 6));
  });
});
