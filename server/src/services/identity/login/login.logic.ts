import { Injectable } from '@nestjs/common';
import {
  Login,
  LoginCreateOneInput,
  LoginFindOneInput,
  LoginRemoveOneInput,
  LoginUpdateOneInput,
} from '../../../proto/interfaces';
import { LoginService } from './login.service';
import { LoginFindOneByPlatformIdInput } from '../../../libs/client';

@Injectable()
export class LoginLogic {
  constructor(private service: LoginService) {}

  async createOne(input: Partial<LoginCreateOneInput>): Promise<Login> {
    return await this.service.createOne(input);
  }

  async findOne(input: LoginFindOneInput): Promise<Login | void> {
    return await this.service.findOne(input);
  }

  async updateOne(input: Partial<LoginUpdateOneInput>): Promise<Login> {
    return await this.service.updateOne(input);
  }

  async findOneByPlatformId(
    input: LoginFindOneByPlatformIdInput,
  ): Promise<Login | void> {
    return await this.service.findOneByPlatformId(input);
  }

  async removeOne(input: LoginRemoveOneInput): Promise<Login> {
    return await this.service.removeOne(input);
  }
}
