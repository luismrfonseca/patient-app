import React from 'react';
import { Users, Calendar, Clock, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DashboardCard = ({ icon: Icon, title, value, change }: any) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-blue-50 p-3 rounded-full">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
      <p className="text-sm mt-2">
        <span className={change >= 0 ? "text-green-500" : "text-red-500"}>
          {change >= 0 ? "+" : ""}{change}%
        </span>
        {" "}vs mês anterior
      </p>
    </div>
  );
};

const Dashboard = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Users, title: t('dashboard.stats.totalPatients'), value: "1.284", change: 12.5 },
    { icon: Calendar, title: t('dashboard.stats.appointments'), value: "42", change: 8.1 },
    { icon: Clock, title: t('dashboard.stats.pending'), value: "15", change: -2.4 },
    { icon: Activity, title: t('dashboard.stats.activeCases'), value: "64", change: 4.2 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{t('dashboard.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">{t('dashboard.upcomingAppointments')}</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-gray-500">Consulta Geral</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">14:00</p>
                  <p className="text-sm text-gray-500">Hoje</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">{t('dashboard.recentActivity')}</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-medium">Nova consulta agendada</p>
                  <p className="text-sm text-gray-500">há 15 minutos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;