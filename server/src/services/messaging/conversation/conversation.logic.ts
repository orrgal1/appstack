import * as difference from 'lodash.difference';
import { Injectable } from '@nestjs/common';
import {
  Conversation,
  ConversationCreateOneInput,
  ConversationFindByParticipantInput,
  ConversationFindByParticipantResult,
  ConversationFindOneInput,
  ConversationRemoveOneInput,
  ConversationUpdateOneInput,
} from '../../../proto/interfaces';
import { ConversationService } from './conversation.service';
import { ClientService } from '../../../libs/client/client.service';
import {
  PermissionServiceClient,
  PermissionServiceDefinition,
} from '../../../libs/client';
import { ConversationValidation } from './conversation.validation';

@Injectable()
export class ConversationLogic {
  private permissionClient: PermissionServiceClient;
  private validate: ConversationValidation = new ConversationValidation();

  constructor(
    private service: ConversationService,
    private clientService: ClientService,
  ) {
    this.permissionClient = this.clientService.getServiceInternalClient(
      PermissionServiceDefinition,
    );
  }

  async createOne(input: ConversationCreateOneInput): Promise<Conversation> {
    this.validate.createOne(input);
    const created = await this.service.createOne({
      ...input,
      isTemp: true,
    });
    await this.permissionClient.createMany({
      entity: 'conversation',
      entityId: created.id,
      permittedEntity: 'user',
      permittedEntityIds: created.participantIds,
      action: 'read',
    });
    await this.service.updateOne({ id: created.id, isTemp: false });
    return created;
  }

  async findOne(input: ConversationFindOneInput): Promise<Conversation | void> {
    return await this.service.findOne(input);
  }

  async updateOne(input: ConversationUpdateOneInput): Promise<Conversation> {
    await this.service.updateOne({
      id: input.id,
      permissionIntegrityWarning: true,
    });
    if (input.participantIds?.length > 0) {
      await this.syncPermissions(input);
    }
    return await this.service.updateOne({
      ...input,
      permissionIntegrityWarning: false,
    });
  }

  private async syncPermissions(input: ConversationUpdateOneInput) {
    const permissions = await this.permissionClient.findByEntity({
      filter: {
        entity: 'conversation',
        entityId: input.id,
        action: 'read',
      },
      opts: {
        limit: 99999,
        offset: 0,
      },
    });
    const current = permissions.results.map(
      (permission) => permission.permittedEntityId,
    );
    const desired = input.participantIds;
    const add = difference(desired, current);
    const remove = difference(current, desired);
    if (add?.length > 0) {
      await this.permissionClient.createMany({
        entity: 'conversation',
        entityId: input.id,
        permittedEntity: 'user',
        permittedEntityIds: add,
        action: 'read',
      });
    }
    if (remove?.length > 0) {
      await this.permissionClient.removeWhereMany({
        entity: 'conversation',
        entityId: input.id,
        permittedEntity: 'user',
        permittedEntityIds: remove,
        action: 'read',
      });
    }
  }

  async removeOne(
    input: ConversationRemoveOneInput,
  ): Promise<Conversation | void> {
    return await this.service.removeOne(input);
  }

  async findByParticipant(
    input: ConversationFindByParticipantInput,
  ): Promise<ConversationFindByParticipantResult> {
    return await this.service.findByParticipant(input);
  }

  async *findByPermissionIntegrityWarning(): AsyncGenerator<Conversation> {
    const cursor = this.service.findByPermissionIntegrityWarning();
    for await (const next of cursor) {
      yield next;
    }
  }
}
