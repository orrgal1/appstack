import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { ClientService } from '../../../libs/client/client.service';
import {
  WorkersServiceClient,
  WorkersServiceDefinition,
} from '../../../libs/client';

@Injectable()
export class WorkersHealthIndicator extends HealthIndicator {
  private client: WorkersServiceClient;

  constructor(private grpc: ClientService) {
    super();
    this.client = this.grpc.getWorkersClient(WorkersServiceDefinition);
  }

  async isHealthy(): Promise<HealthIndicatorResult> {
    const key = 'WORKERS';
    if (!process.env.COMPONENT_TOPOLOGY || process.env[`COMPONENT_${key}`]) {
      const result = await this.client.healthCheck({});
      if (result.ok) {
        return this.getStatus(key, true, result);
      }
      throw new HealthCheckError('grpc check failed', result);
    }
    return this.getStatus(key, true, { skipped: true });
  }
}
