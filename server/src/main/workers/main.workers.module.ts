import { Module } from '@nestjs/common';
import { WorkersModule } from '../../services/workers/workers.module';
import { DummyWorkerModule } from '../../services/domain/dummy/workers/dummyWorker.module';
import { ConversationWorkerModule } from '../../services/messaging/conversation/workers/conversationWorker.module';

@Module({
  imports: [WorkersModule, DummyWorkerModule, ConversationWorkerModule],
})
export class MainWorkersModule {}
