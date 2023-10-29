import { createChannel, createClient, Metadata } from 'nice-grpc';
import { shutdownComponents } from '../../../main/main';
import { v4 as uuid } from 'uuid';
import {
  getMetadata,
  isE2E,
  login,
  runMain,
  sleep,
  useHost,
  usePorts,
} from '../../../../tests/utils';
import {
  DummyServiceClient,
  DummyServiceDefinition,
} from '../../../libs/client';
import * as process from 'process';

jest.setTimeout(10000);

describe('Dummy: Rate limits', () => {
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
  const rpmLimit = process.env.WRITE_RPM_LIMIT;

  beforeAll(async () => {
    process.env.WRITE_RPM_LIMIT = '1';
    ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(DummyServiceDefinition, channel);
    if (!isE2E()) await runMain({ ports });
    await sleep(1000);
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    process.env.WRITE_RPM_LIMIT = rpmLimit;
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne: Exceed rate limit', async () => {
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(client.createOne(input, { metadata: metadata1 }));
      }
      return await Promise.all(requests);
    };
    await expect(bombard()).rejects.toThrow(
      '/main.DummyService/CreateOne UNKNOWN: rate limit exceeded',
    );
  });

  test('UpdateOne: Exceed rate limit', async () => {
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);
    const created = await client.createOne(input, { metadata: metadata1 });
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(
          client.updateOne(
            { id: created.id, ...input },
            { metadata: metadata1 },
          ),
        );
      }
      return await Promise.all(requests);
    };
    await expect(bombard()).rejects.toThrow(
      '/main.DummyService/UpdateOne UNKNOWN: rate limit exceeded',
    );
  });

  test('RemoveOne: Exceed rate limit', async () => {
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);
    const createMany = async () => {
      process.env.WRITE_RPM_LIMIT = '99999';
      const requests = [];
      for (let i = 0; i < 5; i++) {
        requests.push(client.createOne({ ...input }, { metadata: metadata1 }));
      }
      const results = await Promise.all(requests);
      process.env.WRITE_RPM_LIMIT = '1';
      return results;
    };

    const bombard = async (many) => {
      const requests = [];
      requests.push(
        ...many.map((created) =>
          client.removeOne(
            { id: created.id, ...input },
            { metadata: metadata1 },
          ),
        ),
      );
      return await Promise.all(requests);
    };

    const many = await createMany();
    await expect(bombard(many)).rejects.toThrow(
      '/main.DummyService/RemoveOne UNKNOWN: rate limit exceeded',
    );
  });
});
