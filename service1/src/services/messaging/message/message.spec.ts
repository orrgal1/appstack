import * as uniq from 'lodash.uniq';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
  MessageServiceClient,
  MessageServiceDefinition,
} from '../../../libs/client';
import { shutdownComponents } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import {
  isE2E,
  login,
  runMain,
  sleep,
  useHost,
  usePorts,
} from '../../../../tests/utils';
import { MessageCreateOneInput } from '../../../proto/interfaces';
import { io } from 'socket.io-client';
import * as process from 'process';

describe('Message', () => {
  let client: MessageServiceClient;
  let conversationClient: ConversationServiceClient;
  const metadata = new Metadata();
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    workers: number;
    ws: number;
  };
  let host: any;
  let loggedInUserId;

  beforeAll(async () => {
    ports = await usePorts();
    host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(MessageServiceDefinition, channel);
    conversationClient = createClient(ConversationServiceDefinition, channel);
    if (!isE2E()) await runMain({ ports });
    const { accessToken, userId } = await login(ports);
    metadata.set('jwt', accessToken);
    loggedInUserId = userId;
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    // Arrange
    const conversation = await conversationClient.createOne(
      {
        participantIds: [uuid()],
      },
      { metadata },
    );
    const input: MessageCreateOneInput = {
      conversationId: conversation.id,
      uniqueness: uuid(),
      senderId: '',
      media: { text: uuid() },
    };

    // Act
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne({ id: created.id }, { metadata });

    // Assert
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    // Arrange
    const conversation = await conversationClient.createOne(
      {
        participantIds: [uuid()],
      },
      { metadata },
    );
    const input = { conversationId: conversation.id, uniqueness: uuid() };
    const update = { media: { text: uuid() } };
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
    const conversation = await conversationClient.createOne(
      {
        participantIds: [uuid()],
      },
      { metadata },
    );
    const input: MessageCreateOneInput = {
      conversationId: conversation.id,
      uniqueness: uuid(),
      senderId: '',
      media: { text: uuid() },
    };
    const created = await client.createOne(input, { metadata });

    // Act
    await client.removeOne({ id: created.id }, { metadata });

    // Assert
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('FindByConversation', async () => {
    // Arrange
    const conversation = await conversationClient.createOne(
      {
        participantIds: [uuid()],
      },
      { metadata },
    );
    const conversationId = conversation.id;
    const input: MessageCreateOneInput = {
      conversationId,
      uniqueness: uuid(),
      senderId: '',
      media: { text: uuid() },
    };
    for (let i = 0; i < 3; i++) {
      await client.createOne({ ...input, uniqueness: uuid() }, { metadata });
    }

    // Act
    const all = await client.findByConversation(
      {
        filter: {
          conversationId,
        },
        opts: { limit: 10 },
      },
      { metadata },
    );

    // Assert
    expect(all.results.length).toEqual(3);
    function assertSortedDesc() {
      expect(
        all.results.map((r) => r).sort((a, b) => b.createdAt - a.createdAt),
      ).toEqual(all.results);
    }

    assertSortedDesc();
  });

  test('Uniqueness', async () => {
    // Arrange
    const conversation = await conversationClient.createOne(
      {
        participantIds: [uuid()],
      },
      { metadata },
    );
    const conversationId = conversation.id;
    const input: MessageCreateOneInput = {
      conversationId,
      uniqueness: uuid(),
      senderId: '',
      media: { text: uuid() },
    };

    // Act
    const created = await client.createOne(input, { metadata });
    const dups = [];
    for (let i = 0; i < 3; i++) {
      dups.push(await client.createOne(input, { metadata }));
    }

    // Assert
    expect(uniq(dups.map((dup) => dup.id))).toEqual([created.id]);
    const found = await client.findUnique(
      { uniqueness: input.uniqueness },
      { metadata },
    );
    expect(found.id).toEqual(created.id);
  });

  test('Create: Side-effects: Publish + Update conversation', async () => {
    // Arrange
    let published;
    const socket = io(`http://${host}:${process.env.WS_PORT}`, {
      query: {
        token: metadata.get('jwt'),
      },
    });
    socket.on('message.created', (data) => {
      published = data;
    });
    await sleep(10);
    const conversation = await conversationClient.createOne(
      {
        participantIds: [loggedInUserId, '2'],
      },
      { metadata },
    );
    const input: MessageCreateOneInput = {
      conversationId: conversation.id,
      uniqueness: uuid(),
      senderId: '',
      media: { text: uuid() },
    };

    // Act
    const created = await client.createOne(input, { metadata });
    await sleep(10);

    // Assert
    expect(published.id).toEqual(created.id);
    expect(published.media.text).toEqual(created.media.text);

    const updatedConversation = await conversationClient.findOne(
      { id: conversation.id },
      { metadata },
    );
    expect(updatedConversation.lastMessageAt).toEqual(created.createdAt);
  });

  test('Update: Side-effects: Publish + Update conversation', async () => {
    // Arrange
    let published;
    const socket = io(`http://${host}:${process.env.WS_PORT}`, {
      query: {
        token: metadata.get('jwt'),
      },
    });
    socket.on('message.updated', (data) => {
      published = data;
    });

    await sleep(10);
    const conversation = await conversationClient.createOne(
      {
        participantIds: [loggedInUserId, '2'],
      },
      { metadata },
    );
    const input: MessageCreateOneInput = {
      conversationId: conversation.id,
      uniqueness: uuid(),
      senderId: '',
      media: { text: uuid() },
    };

    const created = await client.createOne(input, { metadata });

    // Act
    const updated = await client.updateOne(
      { id: created.id, media: { text: uuid() } },
      { metadata },
    );

    // Assert
    const updatedConversation = await conversationClient.findOne(
      { id: conversation.id },
      { metadata },
    );
    expect(updatedConversation.lastMessageAt).toEqual(updated.updatedAt);

    await sleep(10);
    expect(published.id).toEqual(updated.id);
    expect(published.media.text).toEqual(updated.media.text);
  });
});
