import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search patients, appointments..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            DR
          </div>
          <span className="text-gray-700">Dr. Roberts</span>
        </div>
      </div>
    </header>
  );
};

export default Header;