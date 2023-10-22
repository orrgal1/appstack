import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import {
  Message,
  MessageCreateOneInput,
  MessageFindByConversationInput,
  MessageFindByConversationResult,
  MessageFindOneInput,
  MessageFindUniqueInput,
  MessageRemoveOneInput,
  MessageUpdateOneInput,
} from '../../../proto/interfaces';
import { MessageLogic } from './message.logic';
import { RpcAuthEntityAssertWriteableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertWriteable.interceptor';
import { RpcAuthEntityAssertReadableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertReadable.interceptor';
import { RpcAuthRequiredInterceptor } from '../../../libs/auth/rpcAuthRequired.interceptor';
import { RpcAuthEntityCreateOwnershipInterceptor } from '../../../libs/auth/rpcAuthEntityCreateOwnership.interceptor';

@Controller()
export class MessageController {
  constructor(private logic: MessageLogic) {}

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
  @GrpcMethod('MessageService', 'FindOne')
  async findOne(@Payload() input: MessageFindOneInput): Promise<Message> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
  @GrpcMethod('MessageService', 'FindUnique')
  async findUnique(@Payload() input: MessageFindUniqueInput): Promise<Message> {
    const found = await this.logic.findUnique(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthEntityCreateOwnershipInterceptor)
  @GrpcMethod('MessageService', 'CreateOne')
  async createOne(@Payload() input: MessageCreateOneInput): Promise<Message> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('MessageService', 'UpdateOne')
  async updateOne(@Payload() input: MessageUpdateOneInput): Promise<Message> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('MessageService', 'RemoveOne')
  async removeOne(@Payload() input: MessageRemoveOneInput): Promise<Message> {
    const removed = await this.logic.removeOne(input);
    if (!removed) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return removed;
  }

  @UseInterceptors(RpcAuthRequiredInterceptor)
  @GrpcMethod('MessageService', 'FindByConversation')
  async search(
    @Payload() input: MessageFindByConversationInput,
  ): Promise<MessageFindByConversationResult> {
    const results = await this.logic.findByConversation(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }
}
