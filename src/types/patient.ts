export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  address: string;
  healthNumber?: string;
  notes?: string;
  status: 'active' | 'inactive';
}

export interface PatientFormData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  healthNumber?: string;
  notes?: string;
  status: 'active' | 'inactive';
}