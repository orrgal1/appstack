import { Global, Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionLogic } from './permission.logic';

@Global()
@Module({
  imports: [],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionLogic],
  exports: [],
})
export class PermissionModule {}
