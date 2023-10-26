import { Global, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageLogic } from './message.logic';
import { PubsubModule } from '../../../../libs/pubsub/pubsub.module';
import { RpcGatewayModule } from '../../../../libs/gateway/rpc/rpcGateway.module';

@Global()
@Module({
  imports: [PubsubModule, RpcGatewayModule],
  controllers: [MessageController],
  providers: [MessageService, MessageLogic],
  exports: [],
})
export class MessageModule {}
