import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserLogic } from './user.logic';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserLogic],
  exports: [],
})
export class UserModule {}
