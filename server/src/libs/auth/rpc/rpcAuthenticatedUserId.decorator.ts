import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthUtils } from '../authUtils';

const authUtils = new AuthUtils();

export const GrpcAuthenticatedUserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const { permitted } = authUtils.getAuthData(context);
    const permittedUser = permitted.find((p) => p.permittedEntity === 'user');
    return permittedUser.permittedEntityId;
  },
);
