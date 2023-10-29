import { Module } from '@nestjs/common';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { ClientModule } from '../../libs/client/client.module';
import { MessageModule } from './message/message.module';
import { ConversationModule } from './conversation/conversation.module';

@Module({
  imports: [MessageModule, ConversationModule, ArangodbModule, ClientModule],
})
export class MessagingServicesModule {}
