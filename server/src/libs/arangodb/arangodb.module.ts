import { Global, Module } from '@nestjs/common';
import { ArangodbService } from './arangodb.service';
import { ArangodbUtils } from './arangodbUtils';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [ConfigService, ArangodbService, ArangodbUtils],
  exports: [ArangodbService, ArangodbUtils],
})
export class ArangodbModule {}
