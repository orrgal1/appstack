import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import {
  Message,
  MessageCreateOneInput,
  MessageFindByConversationInput,
  MessageFindByConversationResult,
  MessageFindOneInput,
  MessageFindUniqueInput,
  MessageRemoveOneInput,
  MessageUpdateOneInput,
} from '../../../../proto/interfaces';
import { MessageLogic } from './message.logic';
import {
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthEntityCreateOwnershipInterceptor,
  RpcAuthRequiredInterceptor,
} from '../../../../libs/auth/rpc/rpcAuth.module';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '../../../../libs/gateway/rpc/rpcGateway.module';
import { RpcNotFoundException } from '../../../../libs/exceptions/rpcNotFoundException';

@Controller()
export class MessageController {
  constructor(private logic: MessageLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('MessageService', 'FindOne')
  async findOne(@Payload() input: MessageFindOneInput): Promise<Message> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('MessageService', 'FindUnique')
  async findUnique(@Payload() input: MessageFindUniqueInput): Promise<Message> {
    const found = await this.logic.findUnique(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityCreateOwnershipInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('MessageService', 'CreateOne')
  async createOne(@Payload() input: MessageCreateOneInput): Promise<Message> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('MessageService', 'UpdateOne')
  async updateOne(@Payload() input: MessageUpdateOneInput): Promise<Message> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('MessageService', 'RemoveOne')
  async removeOne(@Payload() input: MessageRemoveOneInput): Promise<Message> {
    const removed = await this.logic.removeOne(input);
    if (!removed) {
      throw new RpcNotFoundException();
    }
    return removed;
  }

  @UseInterceptors(RpcAuthRequiredInterceptor, RpcRateLimitReadInterceptor)
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
