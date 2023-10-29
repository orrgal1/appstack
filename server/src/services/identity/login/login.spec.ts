import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  LoginServiceClient,
  LoginServiceDefinition,
} from '../../../libs/client';
import { shutdownComponents } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import { LoginCreateOneInput } from '../../../proto/interfaces';
import {
  isE2E,
  login,
  runMain,
  useHost,
  usePorts,
} from '../../../../tests/utils';

describe('Login', () => {
  let client: LoginServiceClient;
  const metadata = new Metadata();

  beforeAll(async () => {
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(LoginServiceDefinition, channel);
    if (!isE2E()) await runMain({ ports });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindWhere', async () => {
    const input: Partial<LoginCreateOneInput> = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });
    const found = await client.findWhere(input, { metadata });
    expect(found).toEqual(created);
  });

  test('FindWhere: ByPlatformId', async () => {
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });
    const found = await client.findByPlatformId(input, { metadata });
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const update = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );
    expect(updated).toEqual({ ...created, ...updated });
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
    await expect(client.findWhere(input, { metadata })).rejects.toThrow(
      'not found',
    );
  });
});
