import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Calendar, Bell, Settings, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Users, label: 'Patients', to: '/patients' },
    { icon: Calendar, label: 'Appointments', to: '/appointments' },
    { icon: Bell, label: 'Notifications', to: '/notifications' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <aside className="bg-white w-64 min-h-screen shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">MedManager</h1>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;