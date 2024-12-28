import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import type { Patient, PatientFormData } from '@/types/patient';

const patientSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Número de telefone inválido'),
  birthDate: z.string(),
  address: z.string().min(5, 'Morada deve ter pelo menos 5 caracteres'),
  healthNumber: z.string().optional(),
  notes: z.string().optional(),
  status: z.enum(['active', 'inactive'])
});

interface PatientFormProps {
  patient?: Patient;
  onSubmit: (data: PatientFormData) => void;
  onCancel: () => void;
}

export const PatientForm: React.FC<PatientFormProps> = ({
  patient,
  onSubmit,
  onCancel
}) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: patient ? {
      ...patient,
      birthDate: new Date(patient.birthDate).toISOString().split('T')[0]
    } : {
      status: 'active'
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
          <input
            type="date"
            {...register('birthDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.birthDate && (
            <p className="mt-1 text-sm text-red-600">{errors.birthDate.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Morada</label>
          <input
            type="text"
            {...register('address')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número de Utente</label>
          <input
            type="text"
            {...register('healthNumber')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Estado</label>
          <select
            {...register('status')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Notas</label>
          <textarea
            {...register('notes')}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">
          {patient ? 'Guardar Alterações' : 'Adicionar Paciente'}
        </Button>
      </div>
    </form>
  );
};