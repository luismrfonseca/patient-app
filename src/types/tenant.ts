export interface Tenant {
  id: string;
  name: string;
  plan: 'free' | 'basic' | 'premium';
  status: 'active' | 'suspended' | 'cancelled';
  customDomain?: string;
  createdAt: Date;
  settings: TenantSettings;
}

export interface TenantSettings {
  theme: {
    primaryColor: string;
    logo?: string;
  };
  features: {
    whatsappNotifications: boolean;
    multipleLocations: boolean;
    customForms: boolean;
    apiAccess: boolean;
  };
  notifications: {
    appointmentReminders: boolean;
    birthdayGreetings: boolean;
    followUpReminders: boolean;
  };
}