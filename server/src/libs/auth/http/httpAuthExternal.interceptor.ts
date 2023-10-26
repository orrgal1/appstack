import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

// TODO: apply user based read/write rate limiting on external calls
@Injectable()
export class HttpAuthExternalInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const httpContext = context.switchToHttp().getRequest();
    httpContext.external = true;
    httpContext.noAuth = true;
    return next.handle();
  }
}