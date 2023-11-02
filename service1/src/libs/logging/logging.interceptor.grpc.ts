import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class LoggingInterceptorGrpc implements NestInterceptor {
  private logger: Logger = new Logger(LoggingInterceptorGrpc.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    const base = {
      handler: context.getHandler().name,
      input: context.switchToRpc().getData(),
    };
    this.logger.log({ ...base, place: 'handler-in' }, context.getClass().name);
    return next
      .handle()
      .pipe(
        catchError((err: Error) => {
          const end = Date.now();
          this.logger.error(
            {
              ...base,
              place: 'handler-error',
              error: err.message,
              duration: end - start,
            },
            err.stack,
            context.getClass().name,
          );
          return throwError(() => new RpcException(err.message));
        }),
      )
      .pipe(
        map((result) => {
          const end = Date.now();
          this.logger.debug(
            {
              ...base,
              place: 'handler-out',
              ts: end,
              result,
              duration: end - start,
            },
            context.getClass().name,
          );
          return result;
        }),
      );
  }
}
