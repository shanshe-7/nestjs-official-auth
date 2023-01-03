import { ActiveUserData } from '../authentication/interfaces/active-user-data.interface';
import { REQUEST_USER_KEY } from '../iam.constants';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ActiveUser = createParamDecorator(function (
  field: keyof ActiveUserData | undefined,
  ctx: ExecutionContext,
) {
  const request = ctx.switchToHttp().getRequest();
  const user: ActiveUserData | undefined = request[REQUEST_USER_KEY];

  return field ? user?.[field] : user;
});
