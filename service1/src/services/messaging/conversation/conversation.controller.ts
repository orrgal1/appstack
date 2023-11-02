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
  ConversationFindTempsInput,
  ConversationRemoveOneInput,
  ConversationRemoveTempsInput,
  ConversationUpdateOneInput,
} from '../../../proto/interfaces';
import {
  RpcAuthAssertInternalInterceptor,
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthEntityCreateOwnershipInterceptor,
  RpcAuthRequiredInterceptor,
} from '../../../libs/auth/rpc/rpcAuth.module';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '../../../libs/gateway/rpc/rpcGateway.module';

// TODO: conversations should be readable by all participants
@Controller()
export class ConversationController {
  constructor(private logic: ConversationLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('ConversationService', 'FindOne')
  async findOne(
    @Payload() input: ConversationFindOneInput,
  ): Promise<Conversation> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityCreateOwnershipInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('ConversationService', 'CreateOne')
  async createOne(
    @Payload() input: ConversationCreateOneInput,
  ): Promise<Conversation> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('ConversationService', 'UpdateOne')
  async updateOne(
    @Payload() input: ConversationUpdateOneInput,
  ): Promise<Conversation> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('ConversationService', 'RemoveOne')
  async removeOne(
    @Payload() input: ConversationRemoveOneInput,
  ): Promise<Conversation> {
    const removed = await this.logic.removeOne(input);
    if (!removed) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return removed;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('ConversationService', 'RemoveTemps')
  async removeTemps(
    @Payload() input: ConversationRemoveTempsInput,
  ): Promise<void> {
    await this.logic.removeTemps(input);
  }

  @UseInterceptors(RpcAuthRequiredInterceptor, RpcRateLimitReadInterceptor)
  @GrpcMethod('ConversationService', 'FindByParticipant')
  async findByParticipant(
    @Payload() input: ConversationFindByParticipantInput,
  ): Promise<ConversationFindByParticipantResult> {
    const result = await this.logic.findByParticipant(input);
    return result;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('ConversationService', 'FindByPermissionIntegrityWarning')
  async findByPermissionIntegrityWarning(
    input: any,
    metadata: any,
    call: any,
  ): Promise<void> {
    const cursor = this.logic.findByPermissionIntegrityWarning();
    for await (const next of cursor) {
      call.write(next);
    }
    call.end();
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('ConversationService', 'FindTemps')
  async findTemps(
    input: ConversationFindTempsInput,
    metadata: any,
    call: any,
  ): Promise<void> {
    const cursor = this.logic.findTemps(input);
    for await (const next of cursor) {
      call.write(next);
    }
    call.end();
  }
}
