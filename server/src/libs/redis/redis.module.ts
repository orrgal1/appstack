import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [ConfigService, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
