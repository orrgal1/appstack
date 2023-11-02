import { Module } from '@nestjs/common';
import { RedisModule } from '../../redis/redis.module';
import { RpcRateLimitReadInterceptor } from './rpcRateLimitRead.interceptor';
import { RpcRateLimitWriteInterceptor } from './rpcRateLimitWrite.interceptor';
import { RpcGatewayUtils } from './rpcGatewayUtils.service';

@Module({
  imports: [RedisModule],
  providers: [
    RpcRateLimitReadInterceptor,
    RpcRateLimitWriteInterceptor,
    RpcGatewayUtils,
  ],
  exports: [
    RpcRateLimitReadInterceptor,
    RpcRateLimitWriteInterceptor,
    RpcGatewayUtils,
  ],
})
export class RpcGatewayModule {}

export * from './rpcRateLimitRead.interceptor';
export * from './rpcRateLimitWrite.interceptor';
