import { Module } from '@nestjs/common';
import { MessagingServicesModule } from './messaging/messaging.services.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [MessagingServicesModule, HealthModule],
})
export class InfraServicesModule {}
