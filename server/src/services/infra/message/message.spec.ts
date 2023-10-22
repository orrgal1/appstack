import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
  MessageServiceClient,
  MessageServiceDefinition,
} from '../../../libs/client';
import { main } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import {
  isE2E,
  retry,
  sleep,
  useHost,
  usePorts,
} from '../../../../tests/utils';
import { MessageCreateOneInput } from '../../../proto/interfaces';
import { io } from 'socket.io-client';

describe('Message', () => {
  let client: MessageServiceClient;
  let conversationClient: ConversationServiceClient;
  const metadata = new Metadata();
  metadata.set(
    'jwt',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pF3q46_CLIyP_1QZPpeccbs-hC4n9YW2VMBjKrSO6Wg',
  );
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    workers: number;
    ws: number;
  };
  let host: any;

  beforeAll(
    retry(
      async () => {
        ports = await usePorts();
        host = useHost();
        const channel = createChannel(`${host}:${ports.proto}`);
        client = createClient(MessageServiceDefinition, channel);
        conversationClient = createClient(
          ConversationServiceDefinition,
          channel,
        );
        if (!isE2E()) await main({ ports });
      },
      5,
      1000,
    ),
  );

  test('CreateOne + FindOne', async () => {
    const conversation = await conversationClient.createOne(
      {
        participantIds: [],
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
    const found = await client.findOne({ id: created.id }, { metadata });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    const conversation = await conversationClient.createOne(
      {
        participantIds: [],
      },
      { metadata },
    );
    const input = { conversationId: conversation.id, uniqueness: uuid() };
    const update = { media: { text: uuid() } };
    const created = await client.createOne(input, { metadata });
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    const conversation = await conversationClient.createOne(
      {
        participantIds: [],
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
    await client.removeOne({ id: created.id }, { metadata });
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('FindByConversation', async () => {
    const conversation = await conversationClient.createOne(
      {
        participantIds: [],
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
    for (let i = 0; i < 7; i++) {
      await client.createOne({ ...input, uniqueness: uuid() }, { metadata });
    }
    const all = await client.findByConversation(
      {
        filter: {
          conversationId,
        },
        opts: { limit: 10 },
      },
      { metadata },
    );
    expect(all.results.length).toEqual(7);

    function assertSortedDesc() {
      expect(
        all.results.map((r) => r).sort((a, b) => b.createdAt - a.createdAt),
      ).toEqual(all.results);
    }

    assertSortedDesc();
  });

  test('Uniqueness', async () => {
    const conversation = await conversationClient.createOne(
      {
        participantIds: [],
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
    const created = await client.createOne(input, { metadata });
    for (let i = 0; i < 3; i++) {
      const dup = await client.createOne(input, { metadata });
      expect(dup.id).toEqual(created.id);
    }
    const found = await client.findUnique(
      { uniqueness: input.uniqueness },
      { metadata },
    );
    expect(found.id).toEqual(created.id);
  });

  test('Publish: message.created+updated', async () => {
    let published;
    const socket = io(`http://${host}:${ports.ws}`, {
      query: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLzQxMzUyMSIsImlhdCI6MTY5NjA4MzY3OSwiZXhwIjoxNzgyMzk3Mjc5fQ.yHwdm9NCLQNxWHeerOC5GiUCoVi2CExMYmae5OOAJ1E',
      },
    });
    socket.on('message.created', (data) => {
      published = data;
    });
    socket.on('message.updated', (data) => {
      published = data;
    });
    await sleep(100);
    const conversation = await conversationClient.createOne(
      {
        participantIds: ['user/413521', '2'],
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
    await sleep(100);
    expect(published.id).toEqual(created.id);
    expect(published.media.text).toEqual(created.media.text);

    const updated = await client.updateOne(
      { id: created.id, media: { text: uuid() } },
      { metadata },
    );
    await sleep(100);
    expect(published.id).toEqual(updated.id);
    expect(published.media.text).toEqual(updated.media.text);
  });
});
