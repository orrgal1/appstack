import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PubsubService } from './pubsub.service';
import { PubsubModule } from './pubsub.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    PubsubModule,
  ],
})
export class PubsubServerModule implements OnModuleInit {
  constructor(private pubsub: PubsubService) {}

  onModuleInit(): any {
    this.pubsub.listen();
  }
}
