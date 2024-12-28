import { useEffect, useState } from 'react';
import { useTenantStore } from '../store/tenantStore';
import type { License, LicenseUsage } from '../types/license';

export const useLicense = () => {
  const { currentTenant } = useTenantStore();
  const [license, setLicense] = useState<License | null>(null);
  const [usage, setUsage] = useState<LicenseUsage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLicenseInfo = async () => {
      if (!currentTenant) return;
      
      try {
        // Implement API call to fetch license info
        // For now, using mock data
        const mockLicense: License = {
          id: '1',
          tenantId: currentTenant.id,
          type: 'premium',
          status: 'active',
          startDate: new Date('2024-01-01'),
          endDate: new Date('2024-12-31'),
          maxUsers: 10,
          maxPatients: 1000,
          features: ['whatsapp', 'api_access', 'custom_forms'],
          restrictions: {
            storageLimit: 10 * 1024, // 10GB in MB
            apiCallsLimit: 10000
          }
        };

        const mockUsage: LicenseUsage = {
          currentUsers: 5,
          currentPatients: 450,
          storageUsed: 2.5 * 1024, // 2.5GB in MB
          apiCallsUsed: 5230,
          lastUpdated: new Date()
        };

        setLicense(mockLicense);
        setUsage(mockUsage);
      } catch (error) {
        console.error('Error fetching license info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLicenseInfo();
  }, [currentTenant]);

  const isFeatureEnabled = (feature: string) => {
    return license?.features.includes(feature) ?? false;
  };

  const checkLicenseLimit = (type: 'users' | 'patients' | 'storage' | 'apiCalls') => {
    if (!license || !usage) return false;

    switch (type) {
      case 'users':
        return license.maxUsers === -1 || usage.currentUsers < license.maxUsers;
      case 'patients':
        return license.maxPatients === -1 || usage.currentPatients < license.maxPatients;
      case 'storage':
        return !license.restrictions?.storageLimit || 
          usage.storageUsed < license.restrictions.storageLimit;
      case 'apiCalls':
        return !license.restrictions?.apiCallsLimit || 
          usage.apiCallsUsed < license.restrictions.apiCallsLimit;
      default:
        return false;
    }
  };

  return {
    license,
    usage,
    loading,
    isFeatureEnabled,
    checkLicenseLimit
  };
};