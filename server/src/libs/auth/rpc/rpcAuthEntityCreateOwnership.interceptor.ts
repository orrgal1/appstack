import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {
  PermissionServiceClient,
  PermissionServiceDefinition,
} from '../../client';
import { ClientService } from '../../client/client.service';
import { RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import { Metadata } from 'nice-grpc';
import { map } from 'rxjs';
import { AuthUtils } from '../authUtils';
import { RpcPermissionDeniedException } from './rpcPermissionDeniedException';

@Injectable()
export class RpcAuthEntityCreateOwnershipInterceptor
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

    try {
      return next.handle().pipe(
        map(async (result) => {
          const { id } = result;
          const metadata = new Metadata();
          metadata.set('jwt', jwt);
          await Promise.all(
            permitted.map(async (p) => {
              const { permittedEntityId, permittedEntity } = p;
              await this.permissionServiceClient.createOne(
                {
                  permittedEntityId,
                  permittedEntity,
                  entity,
                  entityId: id,
                  action: '*',
                },
                { metadata },
              );
            }),
          );
          return result;
        }),
      );
    } catch (e) {
      throw new RpcPermissionDeniedException();
    }
  }
}
