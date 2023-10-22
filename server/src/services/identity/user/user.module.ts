import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserFollowModule } from './follow/userFollow.module';
import { UserLogic } from './user.logic';

@Module({
  imports: [UserFollowModule],
  controllers: [UserController],
  providers: [UserService, UserLogic],
  exports: [],
})
export class UserModule {}
