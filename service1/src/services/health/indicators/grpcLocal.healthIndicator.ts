import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { ClientService } from '../../../libs/client/client.service';
import {
  HealthServiceClient,
  HealthServiceDefinition,
} from '../../../libs/client';

@Injectable()
export class GrpcLocalHealthIndicator extends HealthIndicator {
  private client: HealthServiceClient;
  private clientInternal: HealthServiceClient;

  constructor(private grpc: ClientService) {
    super();
    this.clientInternal = this.grpc.getServiceInternalClient(
      HealthServiceDefinition,
    );
    this.client = this.grpc.getServiceClient(HealthServiceDefinition);
  }

  private async isHealthy(
    key: string,
    client: HealthServiceClient,
  ): Promise<HealthIndicatorResult> {
    if (!process.env.COMPONENT_TOPOLOGY || process.env[`COMPONENT_${key}`]) {
      const result = await client.healthCheck({});
      if (result.ok) {
        return this.getStatus(key, true, result);
      }
      throw new HealthCheckError('grpc check failed', result);
    }
    return this.getStatus(key, true, { skipped: true });
  }

  async isHealthyExternal(): Promise<HealthIndicatorResult> {
    return await this.isHealthy('PROTO', this.client);
  }

  async isHealthyInternal(): Promise<HealthIndicatorResult> {
    return await this.isHealthy('PROTO_INTERNAL', this.clientInternal);
  }
}
