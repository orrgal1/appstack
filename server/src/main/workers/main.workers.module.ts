import { Module } from '@nestjs/common';
import { WorkersModule } from '../../services/workers/workers.module';
import { DummyWorkerModule } from '../../services/domain/dummy/workers/dummyWorker.module';

@Module({
  imports: [WorkersModule, DummyWorkerModule],
})
export class MainWorkersModule {}
