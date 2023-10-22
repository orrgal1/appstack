import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AuthUtils } from './authUtils';
import { RpcPermissionDeniedException } from './rpcPermissionDeniedException';

@Injectable()
export class RpcAuthRequiredInterceptor implements NestInterceptor {
  private authUtils = new AuthUtils();

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const { decoded, external } = this.authUtils.extractAuth(context);

    if (!external) return next.handle();

    if (!decoded) {
      throw new RpcPermissionDeniedException();
    }

    return next.handle();
  }
}
