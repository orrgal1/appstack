import { Module, OnModuleInit } from '@nestjs/common';
import { ArangodbModule } from '../../src/libs/arangodb/arangodb.module';
import { ArangodbService } from '../../src/libs/arangodb/arangodb.service';

@Module({
  imports: [ArangodbModule],
  providers: [ArangodbService],
})
export class SetupModule implements OnModuleInit {
  constructor(private arangodb: ArangodbService) {}

  async onModuleInit(): Promise<any> {
    await this.arangodb.initDb();
  }
}
