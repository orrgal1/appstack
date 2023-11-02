import { Injectable } from '@nestjs/common';
import { createChannel, createClient } from 'nice-grpc';

@Injectable()
export class ClientService {
  private serviceChannel = createChannel(
    `${process.env.PROTO_HOST}:${process.env.PROTO_PORT}`,
  );

  private serviceInternalChannel = createChannel(
    `${process.env.PROTO_INTERNAL_HOST}:${process.env.PROTO_INTERNAL_PORT}`,
  );

  private workersChannel = createChannel(
    `${process.env.WORKERS_HOST}:${process.env.WORKERS_PORT}`,
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
