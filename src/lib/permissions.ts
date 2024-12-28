import type { UserRole, Permission } from '../types/user';

const rolePermissions: Record<UserRole, Permission[]> = {
  owner: [
    { resource: '*', actions: ['create', 'read', 'update', 'delete'] }
  ],
  admin: [
    { resource: 'patients', actions: ['create', 'read', 'update', 'delete'] },
    { resource: 'appointments', actions: ['create', 'read', 'update', 'delete'] },
    { resource: 'users', actions: ['create', 'read', 'update'] },
    { resource: 'settings', actions: ['read', 'update'] }
  ],
  doctor: [
    { resource: 'patients', actions: ['read', 'update'] },
    { resource: 'appointments', actions: ['read', 'update'] },
    { resource: 'medical-records', actions: ['create', 'read', 'update'] }
  ],
  nurse: [
    { resource: 'patients', actions: ['read', 'update'] },
    { resource: 'appointments', actions: ['read', 'update'] },
    { resource: 'medical-records', actions: ['read', 'update'] }
  ],
  receptionist: [
    { resource: 'patients', actions: ['read'] },
    { resource: 'appointments', actions: ['create', 'read', 'update'] }
  ]
};

export const hasPermission = (
  userRole: UserRole,
  resource: string,
  action: string
): boolean => {
  const permissions = rolePermissions[userRole];
  return permissions.some(
    (permission) =>
      (permission.resource === '*' || permission.resource === resource) &&
      permission.actions.includes(action as any)
  );
};