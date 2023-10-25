import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import { ConversationLogic } from './conversation.logic';
import {
  Conversation,
  ConversationCreateOneInput,
  ConversationFindByParticipantInput,
  ConversationFindByParticipantResult,
  ConversationFindOneInput,
  ConversationRemoveOneInput,
  ConversationUpdateOneInput,
} from '../../../../proto/interfaces';
import { RpcAuthEntityAssertWriteableInterceptor } from '../../../../libs/auth/rpcAuthEntityAssertWriteable.interceptor';
import { RpcAuthEntityAssertReadableInterceptor } from '../../../../libs/auth/rpcAuthEntityAssertReadable.interceptor';
import { RpcAuthRequiredInterceptor } from '../../../../libs/auth/rpcAuthRequired.interceptor';
import { RpcAuthEntityCreateOwnershipInterceptor } from '../../../../libs/auth/rpcAuthEntityCreateOwnership.interceptor';

@Controller()
export class ConversationController {
  constructor(private logic: ConversationLogic) {}

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
  @GrpcMethod('ConversationService', 'FindOne')
  async findOne(
    @Payload() input: ConversationFindOneInput,
  ): Promise<Conversation> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcException({
        conversation: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthEntityCreateOwnershipInterceptor)
  @GrpcMethod('ConversationService', 'CreateOne')
  async createOne(
    @Payload() input: ConversationCreateOneInput,
  ): Promise<Conversation> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('ConversationService', 'UpdateOne')
  async updateOne(
    @Payload() input: ConversationUpdateOneInput,
  ): Promise<Conversation> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('ConversationService', 'RemoveOne')
  async removeOne(
    @Payload() input: ConversationRemoveOneInput,
  ): Promise<Conversation> {
    const removed = await this.logic.removeOne(input);
    if (!removed) {
      throw new RpcException({
        conversation: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return removed;
  }

  @UseInterceptors(RpcAuthRequiredInterceptor)
  @GrpcMethod('ConversationService', 'FindByParticipant')
  async search(
    @Payload() input: ConversationFindByParticipantInput,
  ): Promise<ConversationFindByParticipantResult> {
    const results = await this.logic.findByParticipant(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }
}
