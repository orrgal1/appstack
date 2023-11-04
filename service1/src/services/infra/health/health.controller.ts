import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HealthCheckResult } from '../../../proto/interfaces';

@Controller()
export class HealthController {
  @GrpcMethod('HealthService', 'HealthCheck')
  async healthCheck(): Promise<HealthCheckResult> {
    return { ok: true };
  }
}
