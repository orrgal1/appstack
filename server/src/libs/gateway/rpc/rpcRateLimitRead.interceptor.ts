import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { RedisService } from '../../redis/redis.service';
import { AuthUtils } from '../../auth/authUtils';
import * as process from 'process';
import BottleNeck from 'bottleneck';
import { RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';

@Injectable()
export class RpcRateLimitReadInterceptor implements NestInterceptor {
  private authUtils: AuthUtils = new AuthUtils();

  constructor(private redis: RedisService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const authData = this.authUtils.getAuthData(context);
    if (!this.authUtils.rpcIsExternal(context)) {
      return next.handle();
    }
    try {
      const {
        decoded: { sub: userId },
      } = authData;
      const limit = Number(process.env.READ_RPM_LIMIT || 1);
      const limiter = this.redis
        .getGroupLimiter({
          minTime: 60000 / limit,
          highWater: limit,
        })
        .key(`user-read-limit:${userId}`);
      return await limiter.schedule(async () => next.handle());
    } catch (e) {
      if (e instanceof BottleNeck.BottleneckError) {
        throw new RpcException({
          message: 'rate limit exceeded',
          code: grpc.status.RESOURCE_EXHAUSTED,
        });
      }
      throw e;
    }
  }
}
