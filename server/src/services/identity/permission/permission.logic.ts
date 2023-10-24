import { Injectable } from '@nestjs/common';
import {
  Permission,
  PermissionCreateOneInput,
  PermissionFindAllActionsInput,
  PermissionFindByPermittedInput,
  PermissionFindOneInput,
  PermissionFindWhereInput,
  PermissionFindWhereOrStarInput,
  PermissionRemoveAllActionsInput,
  PermissionRemoveOneInput,
  PermissionRemoveWhereInput,
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

  async findWhere(input: PermissionFindWhereInput): Promise<Permission | void> {
    return await this.service.findWhere(input);
  }

  async findWhereOrStar(
    input: PermissionFindWhereOrStarInput,
  ): Promise<Permission | void> {
    return await this.service.findWhereOrStar(input);
  }

  async validateOne(
    input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    return await this.service.validateOne(input);
  }

  async removeOne(input: PermissionRemoveOneInput): Promise<void> {
    await this.service.removeOne(input);
  }

  async removeWhere(
    input: PermissionRemoveWhereInput,
  ): Promise<Permission | void> {
    return await this.service.removeWhere(input);
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
