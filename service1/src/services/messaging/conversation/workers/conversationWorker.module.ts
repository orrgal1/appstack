import { Module } from '@nestjs/common';
import { ConversationPermissionIntegrityWorkerService } from './conversationPermissionIntegrityWorker.service';
import { MqModule } from '../../../../libs/mq/mq.module';

@Module({
  imports: [MqModule],
  providers: [ConversationPermissionIntegrityWorkerService],
})
export class ConversationWorkerModule {}
