import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
import type { Analytics } from '@/types/analytics';

interface MetricCardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ElementType;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, icon: Icon }) => (
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
      <span className={trend >= 0 ? "text-green-500" : "text-red-500"}>
        {trend >= 0 ? "+" : ""}{trend}%
      </span>
      {" "}vs last month
    </p>
  </div>
);

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Patients"
          value="1,284"
          trend={12.5}
          icon={Users}
        />
        <MetricCard
          title="Monthly Revenue"
          value="$15,200"
          trend={8.1}
          icon={DollarSign}
        />
        <MetricCard
          title="Appointments"
          value="42"
          trend={-2.4}
          icon={Calendar}
        />
        <MetricCard
          title="Growth Rate"
          value="24%"
          trend={4.2}
          icon={TrendingUp}
        />
      </div>

      {/* Add charts and detailed analytics here */}
    </div>
  );
};