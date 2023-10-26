import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
} from '../../../../libs/client';
import { main, shutdownComponents } from '../../../../main/main';
import { v4 as uuid } from 'uuid';
import { isE2E, login, useHost, usePorts } from '../../../../../tests/utils';
import { ConversationCreateOneInput } from '../../../../proto/interfaces';

describe('Conversation', () => {
  let client: ConversationServiceClient;
  const metadata = new Metadata();

  beforeAll(async () => {
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(ConversationServiceDefinition, channel);
    if (!isE2E()) await main({ ports });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    const input: ConversationCreateOneInput = {
      participantIds: [],
    };
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne({ id: created.id }, { metadata });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    const input = { participantIds: [] };
    const update = { participantIds: [] };
    const created = await client.createOne(input, { metadata });
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    const input: ConversationCreateOneInput = {
      participantIds: [],
    };
    const created = await client.createOne(input, { metadata });
    await client.removeOne({ id: created.id }, { metadata });
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('FindByParticipant', async () => {
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
    expect(all.results.length).toEqual(4);
  });
});
