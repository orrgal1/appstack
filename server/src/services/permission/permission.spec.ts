import { createChannel, createClient } from 'nice-grpc';
import {
  PermissionServiceClient,
  PermissionServiceDefinition,
} from '../../libs/client';
import { shutdownComponents } from '../../main/main';
import { v4 as uuid } from 'uuid';
import { isE2E, runMain, useHost, usePorts } from '../../../tests/utils';

describe('Permission', () => {
  let client: PermissionServiceClient;

  beforeAll(async () => {
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.protoInternal}`);
    client = createClient(PermissionServiceDefinition, channel);
    if (!isE2E()) await runMain({ ports });
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    const created = await client.createOne(input);
    const found = await client.findOne({ id: created.id });
    expect(found).toEqual(created);
  });

  test('FindWhere', async () => {
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    const created = await client.createOne(input);
    const found = await client.findWhere(input);
    expect(found).toEqual(created);
  });

  test('RemoveOne', async () => {
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    const created = await client.createOne(input);
    await client.removeOne({ id: created.id });
    await expect(client.findOne({ id: created.id })).rejects.toThrow(
      'not found',
    );
  });

  test('RemoveWhere', async () => {
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    await client.createOne(input);
    await client.removeWhere(input);
    await expect(client.findWhere(input)).rejects.toThrow('not found');
  });

  test('FindByPermitted', async () => {
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    for (let i = 0; i < 7; i++) {
      await client.createOne({
        ...input,
        entity: uuid(),
        entityId: uuid(),
      });
    }
    const all = await client.findByPermitted({
      filter: {
        permittedEntity: input.permittedEntity,
        permittedEntityId: input.permittedEntityId,
      },
      opts: { limit: 10 },
    });
    expect(all.results.length).toEqual(7);
  });
});
