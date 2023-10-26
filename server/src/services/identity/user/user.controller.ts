import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import {
  User,
  UserCreateOneInput,
  UserFindOneInput,
  UserRemoveOneInput,
  UserSearchInput,
  UserSearchResult,
  UserUpdateOneInput,
} from '../../../proto/interfaces';
import { UserLogic } from './user.logic';
import {
  RpcAuthAssertInternalInterceptor,
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthRequiredInterceptor,
} from '../../../libs/auth/rpc/rpcAuth.module';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '../../../libs/gateway/rpc/rpcGateway.module';

@Controller()
export class UserController {
  constructor(private logic: UserLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('UserService', 'FindOne')
  async findOne(@Payload() input: UserFindOneInput): Promise<User> {
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
    RpcAuthAssertInternalInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('UserService', 'CreateOne')
  async createOne(@Payload() input: UserCreateOneInput): Promise<User> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('UserService', 'UpdateOne')
  async updateOne(@Payload() input: UserUpdateOneInput): Promise<User> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthAssertInternalInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('UserService', 'RemoveOne')
  async removeOne(@Payload() input: UserRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  // TODO: all searches should filter according to current uesr
  @UseInterceptors(RpcAuthRequiredInterceptor, RpcRateLimitReadInterceptor)
  @GrpcMethod('UserService', 'Search')
  async search(@Payload() input: UserSearchInput): Promise<UserSearchResult> {
    const users = await this.logic.search(input);
    return {
      meta: { offset: (input.opts.offset || 0) + users.length },
      users,
    };
  }
}
