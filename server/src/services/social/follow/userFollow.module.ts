import { Module } from '@nestjs/common';
import { UserFollowService } from './userFollow.service';
import { UserFollowController } from './userFollow.controller';
import { UserFollowLogic } from './userFollow.logic';
import { RpcGatewayModule } from '../../../libs/gateway/rpc/rpcGateway.module';

@Module({
  imports: [RpcGatewayModule],
  controllers: [UserFollowController],
  providers: [UserFollowService, UserFollowLogic],
  exports: [],
})
export class UserFollowModule {}
