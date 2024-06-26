"use client";
import Link from 'next/link';
import { useState } from 'react';
import { signOut, UseUser } from "@/lib/auth";

const NavBar = () => {
  const user = UseUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <button className="text-white text-lg font-bold">My App</button>
            </Link>
          </div>
          {/* Hamburger menu button for mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
          {/* Navigation links */}
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</button>
              </Link>
              <Link href="/dashboard">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
              </Link>
              {user ? <button onClick={signOut}>Logout</button> : <Link href='/'>Login</Link>}
              {/* <small className='pl-4'> {user ? user.email : ''}</small> */}
              {/* Add more navigation links as needed */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;