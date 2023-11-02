import { Module } from '@nestjs/common';
import { MqModule } from '../../libs/mq/mq.module';
import { MqService } from '../../libs/mq/mq.service';
import { ClientModule } from '../../libs/client/client.module';
import { WorkersController } from './workers.controller';

// TODO: support flows
@Module({
  imports: [MqModule, ClientModule],
  providers: [MqService],
  controllers: [WorkersController],
})
export class WorkersModule {}
