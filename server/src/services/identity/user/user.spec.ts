import { createChannel, createClient, Metadata } from 'nice-grpc';
import { UserServiceClient, UserServiceDefinition } from '../../../libs/client';
import { main } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import { isE2E, retry, useHost, usePorts } from '../../../../tests/utils';

describe('User', () => {
  let client: UserServiceClient;
  const metadata = new Metadata();
  metadata.set(
    'jwt',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pF3q46_CLIyP_1QZPpeccbs-hC4n9YW2VMBjKrSO6Wg',
  );

  beforeAll(
    retry(
      async () => {
        const ports = await usePorts();
        const host = useHost();
        const channel = createChannel(`${host}:${ports.proto}`);
        client = createClient(UserServiceDefinition, channel);
        if (!isE2E()) await main({ ports });
      },
      5,
      1000,
    ),
  );

  test('CreateOne + FindOne', async () => {
    const input = { name: uuid() };
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne({ id: created.id }, { metadata });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    const input = { name: uuid() };
    const update = { name: uuid() };
    const created = await client.createOne(input, { metadata });
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    const input = { name: uuid() };
    const created = await client.createOne(input, { metadata });
    await client.removeOne({ id: created.id }, { metadata });
    await expect(
      client.findOne({ id: created.id }, { metadata }),
    ).rejects.toThrow('not found');
  });

  test('Search', async () => {
    const input = { name: uuid().replace(/-/g, ' ') };
    const token = input.name.split(' ')[0];
    for (let i = 0; i < 7; i++) {
      await client.createOne(
        { ...input, name: `${input.name} ${i}` },
        { metadata },
      );
    }
    const all = await client.search(
      {
        filter: { name: token },
        opts: { limit: 10, waitForSync: true },
      },
      { metadata },
    );
    expect(all.users.length).toEqual(7);

    const page1 = await client.search(
      {
        filter: { name: token },
        opts: { limit: 3, waitForSync: true },
      },
      { metadata },
    );
    expect(page1.users).toEqual(all.users.slice(0, 3));
    const lastOffset = page1.meta.offset;

    const page2 = await client.search(
      {
        filter: { name: token },
        opts: { limit: 3, offset: lastOffset, waitForSync: true },
      },
      { metadata },
    );
    expect(page2.users).toEqual(all.users.slice(3, 6));
  });
});
