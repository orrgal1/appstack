import { Empty } from './google/protobuf/empty';
export interface HealthChekcResult {
  ok: boolean;
}

import { postToUnary } from './utils';

export class HealthService {
  private readonly serviceName: string = 'HealthService';

  async healthCheck(data: Empty): Promise<HealthChekcResult> {
    return postToUnary<HealthChekcResult>(
      this.serviceName,
      'healthCheck',
      data,
    );
  }
}
