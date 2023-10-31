import { Module } from '@nestjs/common';
import { DummyWorkerService } from './dummyWorker.service';
import { MqModule } from '../../../../libs/mq/mq.module';

@Module({
  imports: [MqModule],
  providers: [DummyWorkerService],
})
export class DummyWorkerModule {}
