import { Module } from '@nestjs/common';
import { HttpController } from './http.controller';
import { HttpService } from './http.service';
import { AuthModule } from '../../services/identity/auth/auth.module';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { ClientModule } from '../../libs/client/client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    AuthModule,
    ArangodbModule,
    ClientModule,
  ],
  controllers: [HttpController],
  providers: [HttpService],
})
export class HttpModule {}
