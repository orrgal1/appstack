import { Module } from '@nestjs/common';
import { UserModule } from './identity/user/user.module';
import { ArangodbModule } from '../libs/arangodb/arangodb.module';
import { PermissionModule } from './identity/permission/permission.module';
import { LoginModule } from './identity/login/login.module';
import { DummyModule } from './domain/dummy/dummy.module';
import { ClientModule } from '../libs/client/client.module';
import { MessageModule } from './infra/message/message.module';
import { ConversationModule } from './infra/conversation/conversation.module';
import { WorkersModule } from '../workers/workers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    UserModule,
    PermissionModule,
    LoginModule,
    DummyModule,
    MessageModule,
    ConversationModule,
    WorkersModule,
    ArangodbModule,
    ClientModule,
  ],
})
export class ServicesModule {}
