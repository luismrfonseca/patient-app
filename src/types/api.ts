export interface ApiKey {
  id: string;
  name: string;
  key: string;
  tenantId: string;
  createdAt: Date;
  lastUsed?: Date;
  expiresAt?: Date;
  permissions: string[];
  status: 'active' | 'revoked';
}

export interface ApiUsage {
  endpoint: string;
  method: string;
  timestamp: Date;
  responseTime: number;
  statusCode: number;
  apiKeyId: string;
}