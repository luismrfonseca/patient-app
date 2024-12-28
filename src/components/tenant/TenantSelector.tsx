import React from 'react';
import { useTenantStore } from '@/store/tenantStore';
import { Button } from '../ui/Button';

export const TenantSelector = () => {
  const { currentTenant, setCurrentTenant } = useTenantStore();

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
          {currentTenant?.name.charAt(0)}
        </div>
        <span>{currentTenant?.name}</span>
      </Button>
    </div>
  );
};