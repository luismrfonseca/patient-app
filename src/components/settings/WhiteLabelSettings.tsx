import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { useTenantStore } from '@/store/tenantStore';

const whiteLabelSchema = z.object({
  branding: z.object({
    primaryColor: z.string(),
    secondaryColor: z.string(),
    logo: z.string().optional(),
    favicon: z.string().optional(),
  }),
  customization: z.object({
    companyName: z.string(),
    emailDomain: z.string().optional(),
    supportEmail: z.string().email(),
    termsUrl: z.string().url().optional(),
    privacyUrl: z.string().url().optional(),
  }),
});

export const WhiteLabelSettings = () => {
  const { currentTenant } = useTenantStore();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(whiteLabelSchema),
  });

  const onSubmit = async (data: z.infer<typeof whiteLabelSchema>) => {
    // Implementation for updating white label settings
    console.log(data);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-lg font-semibold">White Label Settings</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-md font-medium">Branding</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Primary Color
            </label>
            <input
              type="color"
              {...register('branding.primaryColor')}
              className="mt-1 block w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Logo URL
            </label>
            <input
              type="text"
              {...register('branding.logo')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="https://your-domain.com/logo.png"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-medium">Customization</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              {...register('customization.companyName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Support Email
            </label>
            <input
              type="email"
              {...register('customization.supportEmail')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Save White Label Settings
        </Button>
      </form>
    </div>
  );
};