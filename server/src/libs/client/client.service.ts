import { Injectable } from '@nestjs/common';
import { createChannel, createClient } from 'nice-grpc';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClientService {
  constructor(private config: ConfigService) {}

  private serviceChannel = createChannel(
    `${this.config.get('PROTO_HOST')}:${this.config.get('PROTO_PORT')}`,
  );

  private serviceInternalChannel = createChannel(
    `${this.config.get('PROTO_INTERNAL_HOST')}:${this.config.get(
      'PROTO_INTERNAL_PORT',
    )}`,
  );

  private workersChannel = createChannel(
    `${this.config.get('WORKERS_HOST')}:${this.config.get('WORKERS_PORT')}`,
  );

  getServiceClient<C>(T: any): C {
    return createClient(T, this.serviceChannel) as C;
  }

  getServiceInternalClient<C>(T: any): C {
    return createClient(T, this.serviceInternalChannel) as C;
  }

  getWorkersClient<C>(T: any): C {
    return createClient(T, this.workersChannel) as C;
  }
}
