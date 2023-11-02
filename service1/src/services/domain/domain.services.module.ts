import { Module } from '@nestjs/common';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { DummyModule } from './dummy/dummy.module';
import { ClientModule } from '../../libs/client/client.module';

@Module({
  imports: [DummyModule, ArangodbModule, ClientModule],
})
export class DomainServicesModule {}
