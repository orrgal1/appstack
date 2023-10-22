import { Global, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [ConfigService, ClientService],
  exports: [ClientService],
})
export class ClientModule {}
