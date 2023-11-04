import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HealthChekcResult } from '../../../proto/interfaces';

@Controller()
export class HealthController {
  @GrpcMethod('HealthService', 'HealthCheck')
  //TODO: typo in HealthChekcResult
  async healthCheck(): Promise<HealthChekcResult> {
    return { ok: true };
  }
}
