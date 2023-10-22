import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import {
  Login,
  LoginCreateOneInput,
  LoginFindOneByPlatformIdInput,
  LoginFindOneInput,
  LoginRemoveOneInput,
  LoginUpdateOneInput,
} from '../../../proto/interfaces';
import { LoginLogic } from './login.logic';
import { RpcAuthEntityAssertReadableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertReadable.interceptor';
import { RpcAuthEntityCreateOwnershipInterceptor } from '../../../libs/auth/rpcAuthEntityCreateOwnership.interceptor';
import { RpcAuthEntityAssertWriteableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertWriteable.interceptor';

@Controller()
export class LoginController {
  constructor(private logic: LoginLogic) {}

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
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

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
  @GrpcMethod('LoginService', 'FindOneByPlatformId')
  async findOneByPlatformId(
    @Payload() input: LoginFindOneByPlatformIdInput,
  ): Promise<Login> {
    const found = await this.logic.findOneByPlatformId(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthEntityCreateOwnershipInterceptor)
  @GrpcMethod('LoginService', 'CreateOne')
  async createOne(@Payload() input: LoginCreateOneInput): Promise<Login> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('LoginService', 'UpdateOne')
  async updateOne(@Payload() input: LoginUpdateOneInput): Promise<Login> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('LoginService', 'RemoveOne')
  async removeOne(@Payload() input: LoginRemoveOneInput): Promise<Login> {
    return await this.logic.removeOne(input);
  }
}
