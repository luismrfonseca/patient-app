import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Database, Activity } from 'lucide-react';
import type { License, LicenseUsage } from '@/types/license';

interface LicenseInfoProps {
  license: License;
  usage: LicenseUsage;
}

export const LicenseManager: React.FC<LicenseInfoProps> = ({ license, usage }) => {
  const { t } = useTranslation();
  const daysRemaining = Math.ceil((new Date(license.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">License Information</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${license.status === 'active' ? 'bg-green-100 text-green-800' : 
              license.status === 'expired' ? 'bg-red-100 text-red-800' : 
              'bg-yellow-100 text-yellow-800'}`}>
            {t(`license.status.${license.status}`)}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Plan Type</span>
            </div>
            <p className="text-lg font-semibold capitalize">{license.type}</p>
            <p className="text-sm text-gray-500">
              {daysRemaining > 0 ? t('license.daysRemaining', { days: daysRemaining }) : t('license.status.expired')}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Users</span>
            </div>
            <p className="text-lg font-semibold">
              {t('license.limits.users', { 
                used: usage.currentUsers,
                total: license.maxUsers === -1 ? '∞' : license.maxUsers 
              })}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Storage</span>
            </div>
            <p className="text-lg font-semibold">
              {t('license.limits.storage', {
                used: Math.round(usage.storageUsed / 1024 * 100) / 100,
                total: license.restrictions?.storageLimit ? 
                  Math.round(license.restrictions.storageLimit / 1024 * 100) / 100 : 
                  '∞'
              })}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="font-medium">API Calls</span>
            </div>
            <p className="text-lg font-semibold">
              {usage.apiCallsUsed.toLocaleString()} / 
              {license.restrictions?.apiCallsLimit ? 
                license.restrictions.apiCallsLimit.toLocaleString() : 
                '∞'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};