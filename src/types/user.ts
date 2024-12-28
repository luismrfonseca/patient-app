export type UserRole = 'owner' | 'admin' | 'doctor' | 'nurse' | 'receptionist';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  tenantId: string;
  permissions: Permission[];
  status: 'active' | 'inactive';
  lastLogin?: Date;
}

export interface Permission {
  resource: string;
  actions: ('create' | 'read' | 'update' | 'delete')[];
}