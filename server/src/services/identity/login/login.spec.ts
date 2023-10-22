import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  LoginServiceClient,
  LoginServiceDefinition,
} from '../../../libs/client';
import { main } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import { LoginCreateOneInput } from '../../../proto/interfaces';
import { isE2E, retry, useHost, usePorts } from '../../../../tests/utils';

describe('Login', () => {
  let client: LoginServiceClient;
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
        client = createClient(LoginServiceDefinition, channel);
        if (!isE2E()) await main({ ports });
      },
      5,
      1000,
    ),
  );

  test('CreateOne + FindOne', async () => {
    const input: Partial<LoginCreateOneInput> = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });
    const found = await client.findOne(input, { metadata });
    expect(found).toEqual(created);
  });

  test('FindOne: ByPlatformId', async () => {
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });
    const found = await client.findOneByPlatformId(input, { metadata });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    // TODO: add update
    // const input = { title: uuid() };
    // const update = { title: uuid() };
    // const created = await client.createOne(input, { metadata });
    // const updated = await client.updateOne(
    //   { id: created.id, ...update },
    //   { metadata },
    // );
    // expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });
    await client.removeOne({ id: created.id }, { metadata });
    await expect(client.findOne(input, { metadata })).rejects.toThrow(
      'not found',
    );
  });
});
