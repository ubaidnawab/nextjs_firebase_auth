'use client';
import React from 'react';
import ContactForm from './_component/ContactForm';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen fixed">
      <h1 className="text-3xl font-bold mb-4">Welcome to your dashboard!</h1>
      <div className='flex justify-center space-x-2 mb-4'>
      <button type="button" className="focus:outline-none text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View data</button>

      <button type="button" className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Logout</button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* <p className='text-stone-950'>Welcome to your dashboard!</p> */}
        {/* Add more dashboard components here */}
        < ContactForm />
      </div>
    </div>
  );
};

export default Dashboard;