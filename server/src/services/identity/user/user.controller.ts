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
import { RpcAuthEntityAssertWriteableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertWriteable.interceptor';
import { RpcAuthEntityAssertReadableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertReadable.interceptor';
import { RpcAuthEntityCreateOwnershipInterceptor } from '../../../libs/auth/rpcAuthEntityCreateOwnership.interceptor';
import { RpcAuthRequiredInterceptor } from '../../../libs/auth/rpcAuthRequired.interceptor';

@Controller()
export class UserController {
  constructor(private logic: UserLogic) {}

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
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

  @UseInterceptors(RpcAuthEntityCreateOwnershipInterceptor)
  @GrpcMethod('UserService', 'CreateOne')
  async createOne(@Payload() input: UserCreateOneInput): Promise<User> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('UserService', 'UpdateOne')
  async updateOne(@Payload() input: UserUpdateOneInput): Promise<User> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('UserService', 'RemoveOne')
  async removeOne(@Payload() input: UserRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  @UseInterceptors(RpcAuthRequiredInterceptor)
  @GrpcMethod('UserService', 'Search')
  async search(@Payload() input: UserSearchInput): Promise<UserSearchResult> {
    const users = await this.logic.search(input);
    return {
      meta: { offset: (input.opts.offset || 0) + users.length },
      users,
    };
  }
}
