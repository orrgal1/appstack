import { Module } from '@nestjs/common';
import { MqModule } from '../libs/mq/mq.module';
import { MqService } from '../libs/mq/mq.service';
import { ClientModule } from '../libs/client/client.module';
import { WorkersController } from './workers.controller';
import { DummyWorker } from './dummy/dummy.worker';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    MqModule,
    ClientModule,
  ],
  providers: [MqService, DummyWorker],
  controllers: [WorkersController],
})
export class WorkersModule {}
