import { Module } from '@nestjs/common';
import { MqService } from './mq.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [ConfigService, MqService],
  exports: [MqService],
})
export class MqModule {}
