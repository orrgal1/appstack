import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '../../../libs/arangodb/arangodb.service';
import { DocumentCollection } from 'arangojs/collection';
import {
  Permission,
  PermissionCreateOneInput,
  PermissionFindAllActionsInput,
  PermissionFindByPermittedInput,
  PermissionFindOneInput,
  PermissionFindWhereInput,
  PermissionFindWhereOrStarInput,
  PermissionRemoveAllActionsInput,
  PermissionRemoveOneInput,
  PermissionRemoveWhereInput,
  PermissionValidateOneInput,
  PermissionValidateOneResult,
} from '../../../proto/interfaces'; // TODO: refactor standard functions to be id based and add special functions instead.

// TODO: refactor standard functions to be id based and add special functions instead.
@Injectable()
export class PermissionService implements OnModuleInit {
  collection: DocumentCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('permission');
  }

  async createOne(input: PermissionCreateOneInput): Promise<Permission> {
    return this.arangodb.utils.format(
      (
        await this.collection.save(this.arangodb.utils.addTs(input), {
          returnNew: true,
        })
      ).new,
    );
  }

  async findOne(input: PermissionFindOneInput): Promise<Permission | void> {
    try {
      return this.arangodb.utils.format(
        await this.collection.document(input.id),
      );
    } catch (e) {
      if (e.message === 'document not found') {
        return;
      }
      throw e;
    }
  }

  async findWhere(input: PermissionFindWhereInput): Promise<Permission | void> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND doc.entityId == @entityId
      AND doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      AND doc.action == @action
      LIMIT 1
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      return this.arangodb.utils.format(result[0]);
    }
  }

  async findWhereOrStar(
    input: PermissionFindWhereOrStarInput,
  ): Promise<Permission | void> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND doc.entityId == @entityId
      AND doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      AND (doc.action == @action OR doc.action == '*')
      LIMIT 1
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      return this.arangodb.utils.format(result[0]);
    }
  }

  async validateOne(
    input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    const { permitted, entity, entityId, action } = input;
    const results = await Promise.all(
      permitted.map(async (p) => {
        const { permittedEntity, permittedEntityId } = p;
        const found = await this.findWhereOrStar({
          entity,
          entityId,
          action,
          permittedEntity,
          permittedEntityId,
        });
        return Boolean(found);
      }),
    );
    const validated = results.some((r) => r);
    return { validated };
  }

  async removeOne(input: PermissionRemoveOneInput): Promise<void> {
    const found = await this.findOne(input);
    if (found) {
      await this.collection.remove(found.id);
    }
  }

  async removeWhere(input: PermissionRemoveWhereInput): Promise<void> {
    const found = await this.findWhere(input);
    if (found) {
      await this.collection.remove(found.id);
    }
  }

  async findByPermitted(
    input: PermissionFindByPermittedInput,
  ): Promise<Permission[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN permission
      FILTER doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async findAllActions(
    input: PermissionFindAllActionsInput,
  ): Promise<Permission[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN permission
      FILTER doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      AND doc.entityId == @entityId
      AND doc.entity == @entity
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async removeAllActions(
    input: PermissionRemoveAllActionsInput,
  ): Promise<void> {
    const found = await this.findAllActions({
      ...input,
      opts: { limit: 9999999, offset: 0 },
    });
    if (found) {
      await this.collection.removeAll(found.map((item) => item.id));
    }
  }

  async onModuleInit(): Promise<void> {
    await this.arangodb.utils.tryDdl(
      () => this.arangodb.db.createCollection('permission', {}),
      () =>
        this.arangodb.db.collection('permission').ensureIndex({
          name: 'idx-permission-v0',
          type: 'persistent',
          fields: [
            'entity',
            'entityId',
            'permittedEntity',
            'permittedEntityId',
            'action',
          ],
        }),
    );
  }
}
