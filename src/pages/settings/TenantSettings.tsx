import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/ui/Button';
import { useTenantStore } from '../../store/tenantStore';

const settingsSchema = z.object({
  name: z.string().min(2),
  customDomain: z.string().optional(),
  theme: z.object({
    primaryColor: z.string(),
    logo: z.string().optional(),
  }),
  notifications: z.object({
    appointmentReminders: z.boolean(),
    birthdayGreetings: z.boolean(),
    followUpReminders: z.boolean(),
  }),
});

export const TenantSettings = () => {
  const { currentTenant } = useTenantStore();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: currentTenant?.name,
      customDomain: currentTenant?.customDomain,
      theme: currentTenant?.settings.theme,
      notifications: currentTenant?.settings.notifications,
    },
  });

  const onSubmit = async (data: z.infer<typeof settingsSchema>) => {
    // Handle settings update
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Practice Settings</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Practice Name</label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Custom Domain</label>
          <input
            type="text"
            {...register('customDomain')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('notifications.appointmentReminders')}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2">Appointment Reminders</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('notifications.birthdayGreetings')}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2">Birthday Greetings</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('notifications.followUpReminders')}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2">Follow-up Reminders</span>
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </div>
  );
};