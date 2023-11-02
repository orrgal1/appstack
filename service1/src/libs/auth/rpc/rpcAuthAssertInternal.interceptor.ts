import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AuthUtils } from '../authUtils';
import { RpcPermissionDeniedException } from './rpcPermissionDeniedException';

@Injectable()
export class RpcAuthAssertInternalInterceptor implements NestInterceptor {
  private authUtils = new AuthUtils();

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const external = this.authUtils.rpcIsExternal(context);

    if (!external) return next.handle();

    throw new RpcPermissionDeniedException();
  }
}
