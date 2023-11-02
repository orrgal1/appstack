import { Global, Module } from '@nestjs/common';
import { PubsubService } from './pubsub.service';

@Global()
@Module({
  imports: [],
  providers: [PubsubService],
  exports: [PubsubService],
})
export class PubsubModule {}
