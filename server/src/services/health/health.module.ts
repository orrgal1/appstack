import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { ClientModule } from '../../libs/client/client.module';
import { GrpcLocalHealthIndicator } from './indicators/grpcLocal.healthIndicator';
import { WorkersHealthIndicator } from './indicators/workers.healthIndicator';

@Module({
  imports: [TerminusModule, ClientModule],
  controllers: [HealthController],
  providers: [GrpcLocalHealthIndicator, WorkersHealthIndicator],
})
export class HealthModule {}
