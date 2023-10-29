import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { GrpcLocalHealthIndicator } from './indicators/grpcLocal.healthIndicator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private grpc: GrpcLocalHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.grpc.isHealthyExternal('PROTO'),
      () => this.grpc.isHealthyInternal('PROTO_INTERNAL'),
    ]);
  }
}
