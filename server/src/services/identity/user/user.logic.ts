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
import { PermissionService } from '../permission/permission.service';

@Injectable()
export class UserLogic {
  constructor(
    private service: UserService,
    private permissionService: PermissionService,
  ) {}

  async createOne(input: Partial<UserCreateOneInput>): Promise<User> {
    const created = await this.service.createOne(input);
    await this.permissionService.createOne({
      permittedEntityId: created.id,
      permittedEntity: 'user',
      entity: 'user',
      entityId: created.id,
      action: '*',
    });
    return created;
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
