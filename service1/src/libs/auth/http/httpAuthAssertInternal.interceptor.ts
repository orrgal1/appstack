import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AuthUtils } from '../authUtils';

@Injectable()
export class HttpAuthAssertInternalInterceptor implements NestInterceptor {
  private authUtils = new AuthUtils();

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const external = this.authUtils.httpIsExternal(context);

    if (!external) return next.handle();

    throw new HttpException('permission denied', HttpStatus.FORBIDDEN);
  }
}
