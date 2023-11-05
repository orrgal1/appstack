import { Empty } from './google/protobuf/empty';
export interface HealthCheckResult {
  ok: boolean;
}

import { postToUnary } from './utils';

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