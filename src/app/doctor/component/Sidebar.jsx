'use client';

import React, { useState, useEffect } from 'react';
import { FaHome, FaUserMd, FaCalendarAlt, FaFileAlt, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = ({ isOpen, onToggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside
      className={`bg-blue-800 text-white w-64 h-full flex flex-col fixed top-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
      style={{ top: '0' }} 
    >
      <div className="p-4 text-center text-2xl font-bold border-b border-blue-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Doctor Dashboard
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li className="flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded">
            <Link href="/doctor/home" className="flex items-center w-full">
              <FaHome className="mr-3 text-lg" />
              Home
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded">
            <Link href="/doctor/patients" className="flex items-center w-full">
              <FaUserMd className="mr-3 text-lg" />
              Manage Patients
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded">
            <Link href="/doctor/appointments" className="flex items-center w-full">
              <FaCalendarAlt className="mr-3 text-lg" />
              Appointments
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded">
            <Link href="/doctor/records" className="flex items-center w-full">
              <FaFileAlt className="mr-3 text-lg" />
              Patient Records
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded">
            <Link href="/doctor/tasks" className="flex items-center w-full">
              <FaClipboardList className="mr-3 text-lg" />
              Task Management
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-700">
        <Link href="/logout" className="flex items-center w-full hover:bg-blue-700 p-2 rounded">
          <FaSignOutAlt className="mr-3 text-lg" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
