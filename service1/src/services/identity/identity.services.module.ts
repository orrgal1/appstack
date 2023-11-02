import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { LoginModule } from './login/login.module';
import { ClientModule } from '../../libs/client/client.module';

@Module({
  imports: [UserModule, LoginModule, ArangodbModule, ClientModule],
})
export class IdentityServicesModule {}
