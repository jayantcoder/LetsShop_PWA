import React from 'react';

const Dashboard = ({ setPage }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-16">
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 mb-4">
            Explore your shopping preferences and manage your account here.
          </p>
          <button
            onClick={() => setPage('home')}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;