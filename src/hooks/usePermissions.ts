import { useCallback } from 'react';
import { useUser } from './useUser';
import { hasPermission } from '../lib/permissions';

export const usePermissions = () => {
  const { user } = useUser();

  const can = useCallback(
    (action: string, resource: string) => {
      if (!user) return false;
      return hasPermission(user.role, resource, action);
    },
    [user]
  );

  return { can };
};