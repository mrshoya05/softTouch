import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-gray-800">Skincare Dashboard</h1>
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/logout"
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
