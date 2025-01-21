import React, { useState } from 'react';
import {
  FaUsers,
  FaUserMd,
  FaBox,
} from 'react-icons/fa';
import UsersList from '../components/Admin/UsersList';
import DoctorsList from '../components/Admin/DoctorsList';
import ProductsList from '../components/Admin/ProductsList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UsersList />;
      case 'doctors':
        return <DoctorsList />;
      case 'products':
        return <ProductsList />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-54 bg-white shadow-md flex flex-col">
        <div className="p-6 text-lg font-bold text-gray-800 border-b">
          Admin Dashboard
        </div>
        <nav className="flex-1">
          <button
            onClick={() => setActiveTab('users')}
            className={`p-4 flex items-center gap-2 w-full text-left hover:bg-gray-200 ${
              activeTab === 'users' ? 'bg-gray-200 font-semibold' : ''
            }`}
          >
            <FaUsers /> Users
          </button>
          <button
            onClick={() => setActiveTab('doctors')}
            className={`p-4 flex items-center gap-2 w-full text-left hover:bg-gray-200 ${
              activeTab === 'doctors' ? 'bg-gray-200 font-semibold' : ''
            }`}
          >
            <FaUserMd /> Doctors
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`p-4 flex items-center gap-2 w-full text-left hover:bg-gray-200 ${
              activeTab === 'products' ? 'bg-gray-200 font-semibold' : ''
            }`}
          >
            <FaBox /> Products
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
