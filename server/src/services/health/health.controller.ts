import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { GrpcLocalHealthIndicator } from './indicators/grpcLocal.healthIndicator';
import { WorkersHealthIndicator } from './indicators/workers.healthIndicator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private grpc: GrpcLocalHealthIndicator,
    private workers: WorkersHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.grpc.isHealthyExternal(),
      () => this.grpc.isHealthyInternal(),
      () => this.workers.isHealthy(),
    ]);
  }
}
