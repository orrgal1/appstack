import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import {
  Login,
  LoginCreateOneInput,
  LoginFindByPlatformIdInput,
  LoginFindOneInput,
  LoginFindWhereInput,
  LoginRemoveOneInput,
  LoginUpdateOneInput,
} from '../../../proto/interfaces';
import { LoginLogic } from './login.logic';
import {
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthEntityCreateOwnershipInterceptor,
} from '../../../libs/auth/rpc/rpcAuth.module';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '../../../libs/gateway/rpc/rpcGateway.module';

@Controller()
export class LoginController {
  constructor(private logic: LoginLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('LoginService', 'FindOne')
  async findOne(@Payload() input: LoginFindOneInput): Promise<Login> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('LoginService', 'FindWhere')
  async findWhere(@Payload() input: LoginFindWhereInput): Promise<Login> {
    const found = await this.logic.findWhere(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('LoginService', 'FindByPlatformId')
  async findByPlatformId(
    @Payload() input: LoginFindByPlatformIdInput,
  ): Promise<Login> {
    const found = await this.logic.findByPlatformId(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityCreateOwnershipInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('LoginService', 'CreateOne')
  async createOne(@Payload() input: LoginCreateOneInput): Promise<Login> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('LoginService', 'UpdateOne')
  async updateOne(@Payload() input: LoginUpdateOneInput): Promise<Login> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('LoginService', 'RemoveOne')
  async removeOne(@Payload() input: LoginRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }
}
