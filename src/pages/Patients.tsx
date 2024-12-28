import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PatientDialog } from '../components/patients/PatientDialog';
import type { Patient, PatientFormData } from '../types/patient';

const Patients = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>();

  const handleAddPatient = (data: PatientFormData) => {
    // TODO: Implement patient creation
    console.log('Adding patient:', data);
    setIsDialogOpen(false);
  };

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedPatient(undefined);
    setIsDialogOpen(false);
  };

  const tableHeaders = [
    { key: 'name', label: t('patients.table.name') },
    { key: 'contact', label: t('patients.table.contact') },
    { key: 'birthDate', label: t('patients.table.birthDate') },
    { key: 'lastVisit', label: t('patients.table.lastVisit') },
    { key: 'status', label: t('patients.table.status') },
    { key: 'actions', label: t('patients.table.actions') }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t('patients.title')}</h1>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          {t('patients.addNew')}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="relative w-96">
            <input
              type="text"
              placeholder={t('patients.search')}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            {t('patients.filters')}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example patient rows */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">João Silva</div>
                      <div className="text-sm text-gray-500">ID: #12345</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">joao@exemplo.pt</div>
                  <div className="text-sm text-gray-500">+351 912 345 678</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  15 Jan 1990
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10 Mar 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {t('patients.status.active')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    {t('common.edit')}
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    {t('common.delete')}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              A mostrar 1 a 5 de 50 resultados
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50">
                Anterior
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>

      <PatientDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleAddPatient}
        patient={selectedPatient}
      />
    </div>
  );
};

export default Patients;