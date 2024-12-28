export interface License {
  id: string;
  tenantId: string;
  type: 'trial' | 'basic' | 'premium' | 'enterprise';
  status: 'active' | 'expired' | 'suspended';
  startDate: Date;
  endDate: Date;
  maxUsers: number;
  maxPatients: number;
  features: string[];
  restrictions?: {
    locationsLimit?: number;
    storageLimit?: number;
    apiCallsLimit?: number;
  };
}

export interface LicenseUsage {
  currentUsers: number;
  currentPatients: number;
  storageUsed: number;
  apiCallsUsed: number;
  lastUpdated: Date;
}