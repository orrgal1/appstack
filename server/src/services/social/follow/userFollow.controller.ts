import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import {
  Follower,
  UserFindFolloweesInput,
  UserFindFolloweesResult,
  UserFindFollowersInput,
  UserFindFollowersResult,
  UserFollowCreateOneInput,
  UserFollowRemoveOneInput,
} from '../../../proto/interfaces';
import { UserFollowLogic } from './userFollow.logic';
import { RpcAuthEntityCreateOwnershipInterceptor } from '../../../libs/auth/rpcAuthEntityCreateOwnership.interceptor';
import { RpcAuthEntityAssertWriteableInterceptor } from '../../../libs/auth/rpcAuthEntityAssertWriteable.interceptor';
import { RpcAuthRequiredInterceptor } from '../../../libs/auth/rpcAuthRequired.interceptor';
import { GrpcAuthenticatedUserId } from '../../../libs/auth/rpcAuthenticatedUserId.decorator';
import { RpcPermissionDeniedException } from '../../../libs/auth/rpcPermissionDeniedException';

@Controller()
export class UserFollowController {
  constructor(private logic: UserFollowLogic) {}

  @UseInterceptors(RpcAuthEntityCreateOwnershipInterceptor)
  @GrpcMethod('UserFollowService', 'CreateOne')
  async createOne(
    @Payload() input: UserFollowCreateOneInput,
  ): Promise<Follower> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('UserFollowService', 'RemoveOne')
  async removeOne(
    @Payload() input: UserFollowRemoveOneInput,
  ): Promise<Follower> {
    return await this.logic.removeOne(input);
  }

  @UseInterceptors(RpcAuthRequiredInterceptor)
  @GrpcMethod('UserFollowService', 'FindFollowers')
  async findFollowers(
    @GrpcAuthenticatedUserId() userId: string,
    @Payload() input: UserFindFollowersInput,
  ): Promise<UserFindFollowersResult> {
    if (userId === input.filter.followeeId) {
      return await this.logic.findFollowers(input);
    }
    throw new RpcPermissionDeniedException();
  }

  @UseInterceptors(RpcAuthRequiredInterceptor)
  @GrpcMethod('UserFollowService', 'FindFollowees')
  async findFollowees(
    @GrpcAuthenticatedUserId() userId: string,
    @Payload() input: UserFindFolloweesInput,
  ): Promise<UserFindFolloweesResult> {
    if (userId === input.filter.followerId) {
      return await this.logic.findFollowees(input);
    }
    throw new RpcPermissionDeniedException();
  }
}
