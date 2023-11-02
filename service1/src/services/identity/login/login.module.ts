import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginLogic } from './login.logic';
import { ClientModule } from '../../../libs/client/client.module';
import { RpcGatewayModule } from '../../../libs/gateway/rpc/rpcGateway.module';

@Module({
  imports: [ClientModule, RpcGatewayModule],
  controllers: [LoginController],
  providers: [LoginService, LoginLogic],
  exports: [LoginService],
})
export class LoginModule {}
