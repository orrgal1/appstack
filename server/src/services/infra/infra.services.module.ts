import { Module } from '@nestjs/common';
import { MessagingServicesModule } from './messaging/messaging.services.module';

@Module({
  imports: [MessagingServicesModule],
})
export class InfraServicesModule {}
