import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PubsubService } from './pubsub.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
  ],
  providers: [PubsubService],
  exports: [PubsubService],
})
export class PubsubModule {}
