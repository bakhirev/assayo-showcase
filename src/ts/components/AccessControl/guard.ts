import { USER_ROLES } from 'ts/helpers/constants';
import authorizationStore from 'ts/pages/Authorization/store/AuthorizationStore';

export default function userHasRole(roles?: string | string[]): boolean {
  const user = authorizationStore.user || {};

  if (!user) return false;
  if (!roles?.length) return true;

  const userRoles = {
    [USER_ROLES.ADMIN]: user.isAdmin,
    [USER_ROLES.AUDITOR]: user.isAuditor,
  };

  const formattedRoles = Array.isArray(roles) ? roles : [roles];
  return formattedRoles?.some((role: string) => userRoles[role]);
}
