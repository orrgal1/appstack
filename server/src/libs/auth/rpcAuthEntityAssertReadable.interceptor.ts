import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {
  PermissionServiceClient,
  PermissionServiceDefinition,
} from '../client';
import { ClientService } from '../client/client.service';
import { RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import { Metadata } from 'nice-grpc';
import { AuthUtils } from './authUtils';
import { catchError, from, map, mergeMap, throwError } from 'rxjs';
import { RpcPermissionDeniedException } from './rpcPermissionDeniedException';

@Injectable()
export class RpcAuthEntityAssertReadableInterceptor implements NestInterceptor {
  private authUtils = new AuthUtils();
  private permissionServiceClient: PermissionServiceClient;

  constructor(private clientService: ClientService) {
    this.permissionServiceClient =
      this.clientService.getServiceInternalClient<PermissionServiceClient>(
        PermissionServiceDefinition,
      );
  }

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const { jwt, decoded, external, permitted, entity } =
      this.authUtils.extractAuth(context);

    if (!external) return next.handle();

    if (!decoded) {
      throw new RpcException({
        message: 'authentication required',
        code: grpc.status.UNAUTHENTICATED,
      });
    }

    if (entity === 'permission') {
      throw new RpcException({
        message: 'permission denied',
        code: grpc.status.PERMISSION_DENIED,
      });
    }

    return next.handle().pipe(
      mergeMap((result) => {
        const metadata = new Metadata();
        metadata.set('jwt', jwt);
        return from(
          this.permissionServiceClient.validateOne(
            {
              permitted,
              entity,
              entityId: result.id,
              action: 'read',
            },
            { metadata },
          ),
        ).pipe(
          map(() => result),
          catchError((e) => {
            throw new RpcPermissionDeniedException();
          }),
        );
      }),
      catchError((err: Error) => {
        return throwError(() => err);
      }),
    );
  }
}
