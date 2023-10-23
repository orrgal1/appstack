import { Module } from '@nestjs/common';
import { HttpController } from './http.controller';
import { HttpService } from './http.service';
import { AuthModule } from '../../services/identity/auth/auth.module';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { ClientModule } from '../../libs/client/client.module';

@Module({
  imports: [AuthModule, ArangodbModule, ClientModule],
  controllers: [HttpController],
  providers: [HttpService],
})
export class HttpModule {}
