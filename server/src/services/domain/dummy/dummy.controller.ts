import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';
import { DummyLogic } from './dummy.logic';
import {
  Dummy,
  DummyCreateOneInput,
  DummyFindOneInput,
  DummyRemoveOneInput,
  DummySearchInput,
  DummySearchResult,
  DummyUpdateOneInput,
} from '../../../proto/interfaces';
import { RpcAuthEntityAssertWriteableInterceptor } from '../../../libs/auth/rpc/rpcAuthEntityAssertWriteable.interceptor';
import { RpcAuthEntityAssertReadableInterceptor } from '../../../libs/auth/rpc/rpcAuthEntityAssertReadable.interceptor';
import { RpcAuthEntityCreateOwnershipInterceptor } from '../../../libs/auth/rpc/rpcAuthEntityCreateOwnership.interceptor';
import { RpcAuthRequiredInterceptor } from '../../../libs/auth/rpc/rpcAuthRequired.interceptor';

@Controller()
export class DummyController {
  constructor(private logic: DummyLogic) {}

  @UseInterceptors(RpcAuthEntityAssertReadableInterceptor)
  @GrpcMethod('DummyService', 'FindOne')
  async findOne(@Payload() input: DummyFindOneInput): Promise<Dummy> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcException({
        message: 'not found',
        code: grpc.status.NOT_FOUND,
      });
    }
    return found;
  }

  @UseInterceptors(RpcAuthEntityCreateOwnershipInterceptor)
  @GrpcMethod('DummyService', 'CreateOne')
  async createOne(@Payload() input: DummyCreateOneInput): Promise<Dummy> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('DummyService', 'UpdateOne')
  async updateOne(@Payload() input: DummyUpdateOneInput): Promise<Dummy> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(RpcAuthEntityAssertWriteableInterceptor)
  @GrpcMethod('DummyService', 'RemoveOne')
  async removeOne(@Payload() input: DummyRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  @UseInterceptors(RpcAuthRequiredInterceptor)
  @GrpcMethod('DummyService', 'Search')
  async search(@Payload() input: DummySearchInput): Promise<DummySearchResult> {
    const results = await this.logic.search(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }
}
