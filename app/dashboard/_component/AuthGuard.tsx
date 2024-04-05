'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AuthGuard = () => {
    const pathName = usePathname(); 
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen fixed bg-black text-white">
      <p className="text-2xl mb-4">You are trying to access: {pathName}</p>
      <p className="text-lg">You have found a secret place! Please <Link href="/" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> Login </Link> to your account</p>
    </div>
  );
};

export default AuthGuard;