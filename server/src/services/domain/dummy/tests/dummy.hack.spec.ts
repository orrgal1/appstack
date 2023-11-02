import { createChannel, createClient, Metadata } from 'nice-grpc';
import { shutdownComponents } from '../../../../main/main';
import { v4 as uuid } from 'uuid';
import { isE2E, runMain, useHost, usePorts } from '../../../../../tests/utils';
import {
  DummyServiceClient,
  DummyServiceDefinition,
} from '../../../../libs/client';

describe('Dummy: Hack Attempts', () => {
  let client: DummyServiceClient;
  const metadata = new Metadata();
  metadata.set('external', 'false');
  const invalidJwt =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0In0.CQeNpTcAALHBIfPmIw8kscb5VqDvACxTmewZ-cvVptM';
  metadata.set('jwt', invalidJwt);
  metadata.set(
    'authData',
    JSON.stringify({
      jwt: invalidJwt,
      decoded: { sub: '123' },
      external: false,
      permitted: [{ permittedEntityId: '123', permittedEntity: 'user' }],
      entity: 'trip',
      entityId: '123',
    }),
  );

  beforeAll(async () => {
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(DummyServiceDefinition, channel);
    if (!isE2E()) await runMain({ ports });
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };

    // Act
    const p = client.createOne(input, { metadata });

    // Assert
    await expect(p).rejects.toThrow('permission denied');
  });

  test('FindOne', async () => {
    // Arrange
    const input = {
      id: uuid(),
    };

    // Act
    const p = client.findOne(input, { metadata });

    // Assert
    await expect(p).rejects.toThrow('permission denied');
  });

  test('RemoveOne', async () => {
    // Arrange
    const input = {
      id: uuid(),
    };

    // Act
    const p = client.removeOne(input, { metadata });

    // Assert
    await expect(p).rejects.toThrow('permission denied');
  });

  test('Search', async () => {
    // Arrange
    const input = { text: uuid().replace(/-/g, ' ') };
    const token = input.text.split(' ')[0];

    // Act
    const p = client.search(
      {
        filter: { text: token },
        opts: { limit: 10, waitForSync: true },
      },
      { metadata },
    );

    // Assert
    await expect(p).rejects.toThrow('permission denied');
  });
});
