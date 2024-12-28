import React from 'react';
import { X } from 'lucide-react';
import { PatientForm } from './PatientForm';
import type { Patient, PatientFormData } from '@/types/patient';

interface PatientDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PatientFormData) => void;
  patient?: Patient;
}

export const PatientDialog: React.FC<PatientDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
  patient
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              {patient ? 'Editar Paciente' : 'Adicionar Paciente'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            <PatientForm
              patient={patient}
              onSubmit={onSubmit}
              onCancel={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};