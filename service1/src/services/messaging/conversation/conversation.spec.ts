import * as intersection from 'lodash.intersection';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
  PermissionServiceClient,
  PermissionServiceDefinition,
} from '../../../libs/client';
import { shutdownComponents } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import {
  getArangoDb,
  isE2E,
  login,
  runMain,
  sleep,
  useHost,
  usePorts,
} from '../../../../tests/utils';
import { ConversationCreateOneInput } from '../../../proto/interfaces';

describe('Conversation', () => {
  let client: ConversationServiceClient;
  let clientInternal: ConversationServiceClient;
  let permissionclientInternal: PermissionServiceClient;
  const metadata = new Metadata();

  beforeAll(async () => {
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    const channelInternal = createChannel(`${host}:${ports.protoInternal}`);
    client = createClient(ConversationServiceDefinition, channel);
    clientInternal = createClient(
      ConversationServiceDefinition,
      channelInternal,
    );
    permissionclientInternal = createClient(
      PermissionServiceDefinition,
      channelInternal,
    );
    if (!isE2E()) await runMain({ ports });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    // Arrange
    const input: ConversationCreateOneInput = {
      participantIds: [uuid()],
    };

    // Act
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne({ id: created.id }, { metadata });

    // Assert
    expect(found).toEqual({
      ...created,
      isTemp: false,
      updatedAt: expect.any(Number),
    });
  });

  test('UpdateOne', async () => {
    // Arrange
    const input = { participantIds: [uuid()] };
    const update = { participantIds: [uuid()] };
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
    const input: ConversationCreateOneInput = {
      participantIds: [uuid()],
    };
    const created = await client.createOne(input, { metadata });

    // Act
    await client.removeOne({ id: created.id }, { metadata });

    // Assert
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('FindByParticipant', async () => {
    // Arrange
    const start = Date.now();
    const participantId0 = uuid();
    const participantId1 = uuid();
    const input: ConversationCreateOneInput = {
      participantIds: [participantId0, participantId1],
    };
    for (let i = 0; i < 7; i++) {
      const created = await client.createOne(input, { metadata });
      await client.updateOne(
        { id: created.id, lastMessageAt: start + i * 10 },
        { metadata },
      );
    }

    // Act
    const all = await client.findByParticipant(
      {
        filter: {
          participantId: participantId0,
          fromLastMessageAt: start + 30,
        },
        opts: { limit: 10 },
      },
      { metadata },
    );

    // Assert
    expect(all.results.length).toEqual(4);
  });

  test('FindByPermissionIntegrityWarning', async () => {
    // Arrange
    const db = await getArangoDb();
    const collection = db.collection('conversation');
    const participantId0 = uuid();
    const participantId1 = uuid();
    const input: ConversationCreateOneInput = {
      participantIds: [participantId0, participantId1],
    };
    const created = [];
    for (let i = 0; i < 4; i++) {
      created.push(
        await collection.save({ ...input, permissionIntegrityWarning: true }),
      );
    }

    // Act
    const cursor = clientInternal.findByPermissionIntegrityWarning({});
    const results = [];
    for await (const next of cursor) {
      results.push(next);
    }

    // Assert
    expect(
      intersection(
        results.map((r) => r.id),
        created.map((c) => c._id),
      ).length,
    ).toEqual(4);
  });

  test('Sync Permissions', async () => {
    // Arrange
    const db = await getArangoDb();
    const permissionCollection = db.collection('permission');
    const participantId0 = uuid();
    const participantId1 = uuid();
    const input: ConversationCreateOneInput = {
      participantIds: [participantId0, participantId1],
    };
    const created = await clientInternal.createOne(input);
    for (let i = 0; i < 4; i++) {
      await permissionCollection.save({
        entity: 'conversation',
        entityId: created.id,
        permittedEntity: 'user',
        permittedEntityId: uuid(),
        action: 'read',
      });
    }

    // Act
    await clientInternal.updateOne({ id: created.id, ...input });
    await sleep(1000);

    // Assert
    const findPermissions = await permissionclientInternal.findByEntity({
      filter: {
        entity: 'conversation',
        entityId: created.id,
        action: 'read',
      },
      opts: {
        limit: 999,
        offset: 0,
      },
    });
    expect(
      findPermissions.results.map((permission) => permission.permittedEntityId),
    ).toEqual(input.participantIds);
  });

  test('FindTemps', async () => {
    // Arrange
    const db = await getArangoDb();
    const collection = db.collection('conversation');
    const participantId0 = uuid();
    const participantId1 = uuid();
    const input: ConversationCreateOneInput = {
      participantIds: [participantId0, participantId1],
    };
    const created = [];
    for (let i = 0; i < 4; i++) {
      created.push(await collection.save({ ...input, isTemp: true }));
    }

    // Act
    const cursor = clientInternal.findTemps({ millisAgo: -1 });
    const results = [];
    for await (const next of cursor) {
      results.push(next);
    }

    // Assert
    expect(
      intersection(
        results.map((r) => r.id),
        created.map((c) => c._id),
      ).length,
    ).toEqual(4);
  });

  test('RemoveTemps', async () => {
    // Arrange
    const db = await getArangoDb();
    const collection = db.collection('conversation');
    const participantId0 = uuid();
    const participantId1 = uuid();
    const input: ConversationCreateOneInput = {
      participantIds: [participantId0, participantId1],
    };
    const created = [];
    for (let i = 0; i < 4; i++) {
      created.push(await collection.save({ ...input, isTemp: true }));
    }

    // Act
    await clientInternal.removeTemps({ millisAgo: -1 });
    await sleep(500);

    // Assert
    const cursor = clientInternal.findTemps({ millisAgo: -1 });
    const results = [];
    for await (const next of cursor) {
      results.push(next);
    }
    expect(results.length).toEqual(0);
  });
});
