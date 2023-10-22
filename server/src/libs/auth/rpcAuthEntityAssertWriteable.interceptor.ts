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
import { RpcPermissionDeniedException } from './rpcPermissionDeniedException';

@Injectable()
export class RpcAuthEntityAssertWriteableInterceptor
  implements NestInterceptor
{
  private authUtils = new AuthUtils();
  private permissionServiceClient: PermissionServiceClient;

  constructor(private clientService: ClientService) {
    this.permissionServiceClient =
      this.clientService.getServiceInternalClient<PermissionServiceClient>(
        PermissionServiceDefinition,
      );
  }

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const { jwt, decoded, external, permitted, entity, entityId } =
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

    try {
      const metadata = new Metadata();
      metadata.set('jwt', jwt);
      await this.permissionServiceClient.validateOne(
        {
          permitted,
          entity,
          entityId,
          action: 'write',
        },
        { metadata },
      );
      return next.handle();
    } catch (e) {
      throw new RpcPermissionDeniedException();
    }
  }
}
