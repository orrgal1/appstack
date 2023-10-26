import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import {
  Permission,
  PermissionCreateOneInput,
  PermissionFindAllActionsInput,
  PermissionFindByPermittedInput,
  PermissionFindByPermittedResult,
  PermissionFindOneInput,
  PermissionFindWhereInput,
  PermissionFindWhereOrStarInput,
  PermissionRemoveAllActionsInput,
  PermissionRemoveOneInput,
  PermissionRemoveWhereInput,
  PermissionValidateOneInput,
  PermissionValidateOneResult,
} from '../../../proto/interfaces';
import { PermissionLogic } from './permission.logic';
import { RpcAuthAssertInternalInterceptor } from '../../../libs/auth/rpc/rpcAuthAssertInternal.interceptor';
import { RpcPermissionDeniedException } from '../../../libs/auth/rpc/rpcPermissionDeniedException';

@Controller()
export class PermissionController {
  constructor(private logic: PermissionLogic) {}

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindOne')
  async findOne(@Payload() input: PermissionFindOneInput): Promise<Permission> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindWhere')
  async findWhere(
    @Payload() input: PermissionFindWhereInput,
  ): Promise<Permission> {
    const found = await this.logic.findWhere(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindWhereOrStar')
  async findWhereOrStar(
    @Payload() input: PermissionFindWhereOrStarInput,
  ): Promise<Permission> {
    const found = await this.logic.findWhereOrStar(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'ValidateOne')
  async validateOne(
    @Payload() input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    const { validated } = await this.logic.validateOne(input);
    if (!validated) throw new RpcPermissionDeniedException();
    return { validated };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'CreateOne')
  async createOne(
    @Payload() input: PermissionCreateOneInput,
  ): Promise<Permission> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveOne')
  async removeOne(@Payload() input: PermissionRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveWhere')
  async removeWhere(
    @Payload() input: PermissionRemoveWhereInput,
  ): Promise<void> {
    await this.logic.removeWhere(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindByPermitted')
  async search(
    @Payload() input: PermissionFindByPermittedInput,
  ): Promise<PermissionFindByPermittedResult> {
    const results = await this.logic.findByPermitted(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindAllActions')
  async findAllActions(
    @Payload() input: PermissionFindAllActionsInput,
  ): Promise<PermissionFindByPermittedResult> {
    const results = await this.logic.findByPermitted(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveAllActions')
  async removeAllActions(
    @Payload() input: PermissionRemoveAllActionsInput,
  ): Promise<void> {
    await this.logic.removeAllActions(input);
  }
}
