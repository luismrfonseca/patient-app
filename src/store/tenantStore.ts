import { create } from 'zustand';
import type { Tenant } from '../types/tenant';

interface TenantStore {
  currentTenant: Tenant | null;
  setCurrentTenant: (tenant: Tenant | null) => void;
}

export const useTenantStore = create<TenantStore>((set) => ({
  currentTenant: null,
  setCurrentTenant: (tenant) => set({ currentTenant: tenant }),
}));