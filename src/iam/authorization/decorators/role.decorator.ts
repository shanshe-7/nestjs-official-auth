import { Role } from './../../../users/enums/role.enum';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'Roles';

export const Roles = (...roles: Role[]) => {
  return SetMetadata(ROLES_KEY, roles);
};
