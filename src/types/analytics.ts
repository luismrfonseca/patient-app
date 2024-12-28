export interface Analytics {
  metrics: {
    activePatients: number;
    totalAppointments: number;
    cancelledAppointments: number;
    noShows: number;
  };
  revenue: {
    daily: number;
    monthly: number;
    yearly: number;
  };
  usage: {
    storageUsed: number;
    apiCalls: number;
    activeUsers: number;
  };
  trends: {
    patientGrowth: number;
    appointmentGrowth: number;
    revenueGrowth: number;
  };
}