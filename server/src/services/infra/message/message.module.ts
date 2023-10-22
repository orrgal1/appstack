import { Global, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageLogic } from './message.logic';
import { PubsubService } from '../../../libs/pubsub/pubsub.service';

@Global()
@Module({
  imports: [],
  controllers: [MessageController],
  providers: [MessageService, MessageLogic, PubsubService],
  exports: [],
})
export class MessageModule {}
