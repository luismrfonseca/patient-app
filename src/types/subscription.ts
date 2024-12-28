export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  features: string[];
  limits: {
    patients: number;
    users: number;
    storage: number;
  };
}

export interface Subscription {
  id: string;
  tenantId: string;
  planId: string;
  status: 'active' | 'past_due' | 'cancelled';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}