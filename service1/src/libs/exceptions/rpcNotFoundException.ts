import { RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';

export class RpcNotFoundException extends RpcException {
  constructor() {
    super({
      message: 'not found',
      code: grpc.status.NOT_FOUND,
    });
  }
}
