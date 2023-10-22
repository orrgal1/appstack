import { Injectable } from '@nestjs/common';
import {
  Permission,
  PermissionCreateOneInput,
  PermissionFindAllActionsInput,
  PermissionFindByPermittedInput,
  PermissionFindOneInput,
  PermissionFindOneOrStarInput,
  PermissionRemoveAllActionsInput,
  PermissionRemoveOneInput,
  PermissionValidateOneInput,
  PermissionValidateOneResult,
} from '../../../proto/interfaces';
import { PermissionService } from './permission.service';

@Injectable()
export class PermissionLogic {
  constructor(private service: PermissionService) {}

  async createOne(input: PermissionCreateOneInput): Promise<Permission> {
    return await this.service.createOne(input);
  }

  async findOne(input: PermissionFindOneInput): Promise<Permission | void> {
    return await this.service.findOne(input);
  }

  async findOneOrStar(
    input: PermissionFindOneOrStarInput,
  ): Promise<Permission | void> {
    return await this.service.findOneOrStar(input);
  }

  async validateOne(
    input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    return await this.service.validateOne(input);
  }

  async removeOne(input: PermissionRemoveOneInput): Promise<Permission | void> {
    return await this.service.removeOne(input);
  }

  async findByPermitted(
    input: PermissionFindByPermittedInput,
  ): Promise<Permission[]> {
    return await this.service.findByPermitted(input);
  }

  async findAllActions(
    input: PermissionFindAllActionsInput,
  ): Promise<Permission[]> {
    return await this.service.findAllActions(input);
  }

  async removeAllActions(
    input: PermissionRemoveAllActionsInput,
  ): Promise<void> {
    await this.service.removeAllActions(input);
  }
}
