import { Module, OnModuleInit } from '@nestjs/common';
import { PubsubService } from './pubsub.service';
import { PubsubModule } from './pubsub.module';

@Module({
  imports: [PubsubModule],
})
export class PubsubServerModule implements OnModuleInit {
  constructor(private pubsub: PubsubService) {}

  onModuleInit(): any {
    this.pubsub.listen();
  }
}
