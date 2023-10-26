import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserLogic } from './user.logic';
import { PermissionModule } from '../permission/permission.module';
import { RpcGatewayModule } from '../../../libs/gateway/rpc/rpcGateway.module';

@Module({
  imports: [PermissionModule, RpcGatewayModule],
  controllers: [UserController],
  providers: [UserService, UserLogic],
  exports: [],
})
export class UserModule {}
