import { Injectable } from '@nestjs/common';
import { GatewayPayload } from './gatewayPayload';
import { Metadata } from 'nice-grpc';
import { Request } from 'express';
import { ClientService } from '../../libs/client/client.service';
import * as clientLib from '../../libs/client';

@Injectable()
export class GatewayService {
  constructor(private clientService: ClientService) {}

  extractMetadata(req: Request): Metadata {
    const jwt = (req.cookies || {})[process.env.GATEWAY_JWT_HEADER];
    const metadata = new Metadata();
    if (jwt) metadata.set('jwt', jwt);
    return metadata;
  }

  async invokeUnary(payload: GatewayPayload): Promise<any> {
    const { service, method, data, metadata } = payload;
    const definition = clientLib[`${service}Definition`];
    const client = this.clientService.getServiceClient(definition);
    const result = await client[method](data, { metadata });
    return result;
  }
}
