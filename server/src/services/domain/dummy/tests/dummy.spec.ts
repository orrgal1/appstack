import { createChannel, createClient, Metadata } from 'nice-grpc';
import { shutdownComponents } from '../../../../main/main';
import { v4 as uuid } from 'uuid';
import {
  isE2E,
  login,
  runMain,
  useHost,
  usePorts,
} from '../../../../../tests/utils';
import {
  DummyServiceClient,
  DummyServiceDefinition,
} from '../../../../libs/client';

jest.setTimeout(10000);

describe('Dummy', () => {
  let client: DummyServiceClient;
  const metadata = new Metadata();
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
    client = createClient(DummyServiceDefinition, channel);
    if (!isE2E()) await runMain({ ports });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };

    // Act
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne({ id: created.id }, { metadata });

    // Assert
    expect(found).toEqual(created);
  });

  test('CreateOne + FindOne: Non Public', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const { accessToken } = await login(ports);
    const otherMetadata = new Metadata();
    otherMetadata.set('jwt', accessToken);

    // Act
    const created = await client.createOne(input, { metadata });
    const p = client.findOne({ id: created.id }, { metadata: otherMetadata });

    // Assert
    await expect(p).rejects.toThrow('permission denied');
  });

  test('CreateOne + FindOne: Public', async () => {
    // Arrange
    const input = {
      text: uuid(),
      isPublic: true,
    };
    const { accessToken } = await login(ports);
    const otherMetadata = new Metadata();
    otherMetadata.set('jwt', accessToken);

    // Act
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne(
      { id: created.id },
      { metadata: otherMetadata },
    );

    // Assert
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    // Arrange
    const input = { text: uuid() };
    const update = { text: uuid() };
    const created = await client.createOne(input, { metadata });

    // Act
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );

    // Assert
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const created = await client.createOne(input, { metadata });

    // Act
    await client.removeOne({ id: created.id }, { metadata });

    // Assert
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('Search', async () => {
    // Arrange
    const input = { text: uuid().replace(/-/g, ' ') };
    const token = input.text.split(' ')[0];
    for (let i = 0; i < 4; i++) {
      await client.createOne(
        { ...input, text: `${input.text} ${i}` },
        { metadata },
      );
    }

    // Act
    const all = await client.search(
      {
        filter: { text: token },
        opts: { limit: 10, waitForSync: true },
      },
      { metadata },
    );
    const page1 = await client.search(
      {
        filter: { text: token },
        opts: { limit: 3, waitForSync: true },
      },
      { metadata },
    );
    const lastOffset = page1.meta.offset;
    const page2 = await client.search(
      {
        filter: { text: token },
        opts: { limit: 3, offset: lastOffset, waitForSync: true },
      },
      { metadata },
    );

    // Assert
    expect(all.results.length).toEqual(4);
    expect(page1.results).toEqual(all.results.slice(0, 3));
    expect(page2.results).toEqual(all.results.slice(3, 6));
  });
});
