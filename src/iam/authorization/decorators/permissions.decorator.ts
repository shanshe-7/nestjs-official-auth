import { PermissionType } from './../permission.type';
import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permissions';

export const Permissions = (...permissions: PermissionType[]) => {
  return SetMetadata(PERMISSIONS_KEY, permissions);
};
