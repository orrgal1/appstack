import { Empty } from './google/protobuf/empty';
import { postToUnary } from './utils';

export interface HealthCheckResult {
  ok: boolean;
}

export class HealthService {
  private readonly serviceName: string = 'HealthService';

  async healthCheck(data: Empty): Promise<HealthCheckResult> {
    return postToUnary<HealthCheckResult>(
      this.serviceName,
      'healthCheck',
      data,
    );
  }
}
