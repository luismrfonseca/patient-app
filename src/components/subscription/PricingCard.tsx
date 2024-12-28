import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import type { SubscriptionPlan } from '@/types/subscription';

interface PricingCardProps {
  plan: SubscriptionPlan;
  isCurrentPlan?: boolean;
  onSelect: (plan: SubscriptionPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  isCurrentPlan,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
      <div className="mt-4">
        <span className="text-3xl font-bold">${plan.price}</span>
        <span className="text-gray-500">/{plan.billingPeriod}</span>
      </div>
      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={isCurrentPlan ? 'outline' : 'primary'}
        className="w-full mt-6"
        onClick={() => onSelect(plan)}
        disabled={isCurrentPlan}
      >
        {isCurrentPlan ? 'Current Plan' : 'Select Plan'}
      </Button>
    </div>
  );
};