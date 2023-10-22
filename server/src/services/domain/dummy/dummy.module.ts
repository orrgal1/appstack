import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';
import { DummyLogic } from './dummy.logic';
import { ClientModule } from '../../../libs/client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [DummyController],
  providers: [DummyService, DummyLogic],
  exports: [],
})
export class DummyModule {}
