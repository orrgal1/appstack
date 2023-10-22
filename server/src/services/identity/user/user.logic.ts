import { Injectable } from '@nestjs/common';
import {
  User,
  UserCreateOneInput,
  UserFindOneInput,
  UserRemoveOneInput,
  UserSearchInput,
  UserUpdateOneInput,
} from '../../../proto/interfaces';
import { UserService } from './user.service';

@Injectable()
export class UserLogic {
  constructor(private service: UserService) {}

  async createOne(input: Partial<UserCreateOneInput>): Promise<User> {
    return await this.service.createOne(input);
  }

  async findOne(input: UserFindOneInput): Promise<User | void> {
    return await this.service.findOne(input);
  }

  async updateOne(input: Partial<UserUpdateOneInput>): Promise<User> {
    return await this.service.updateOne(input);
  }

  async removeOne(input: UserRemoveOneInput): Promise<void> {
    await this.service.removeOne(input);
  }

  async search(input: UserSearchInput): Promise<User[]> {
    return await this.service.search(input);
  }
}
