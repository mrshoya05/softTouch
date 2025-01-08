import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="container mx-auto p-6">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, User!</h2>
        <p className="mt-4 text-gray-600">
          This is your dashboard. Track your skincare routines, progress, and get recommendations.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Your Routines</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your morning and evening routines.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Progress Tracker</h3>
            <p className="mt-2 text-sm text-gray-600">Upload photos and view your skincare progress.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Recommendations</h3>
            <p className="mt-2 text-sm text-gray-600">Get personalized skincare recommendations.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
