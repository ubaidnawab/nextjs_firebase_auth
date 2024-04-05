import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen fixed">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className='text-stone-950'>Welcome to your dashboard!</p>
        {/* Add more dashboard components here */}
      </div>
    </div>
  );
};

export default Dashboard;