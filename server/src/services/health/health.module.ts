import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { ClientModule } from '../../libs/client/client.module';
import { GrpcLocalHealthIndicator } from './indicators/grpcLocal.healthIndicator';

@Module({
  imports: [TerminusModule, ClientModule],
  controllers: [HealthController],
  providers: [GrpcLocalHealthIndicator],
})
export class HealthModule {}
