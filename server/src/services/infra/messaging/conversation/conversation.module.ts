import { Global, Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ConversationLogic } from './conversation.logic';
import { RpcGatewayModule } from '../../../../libs/gateway/rpc/rpcGateway.module';

@Global()
@Module({
  imports: [RpcGatewayModule],
  controllers: [ConversationController],
  providers: [ConversationService, ConversationLogic],
  exports: [],
})
export class ConversationModule {}
