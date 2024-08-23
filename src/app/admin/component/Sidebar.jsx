'use client';

import React, { useState, useEffect } from 'react';
import { FaHome, FaUserCheck, FaCogs } from 'react-icons/fa';
import Link from 'next/link';

const SidebarAdmin = ({ isOpen, onToggle }) => {
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
      className={`bg-[#001F3F] text-white w-64 h-full flex flex-col fixed top-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
      style={{ top: '0' }}
    >
      <div className="p-4 text-center text-2xl font-bold border-b border-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Admin Dashboard
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li className="flex items-center cursor-pointer hover:bg-[#003366] p-2 rounded">
            <Link href="/admin/home" className="flex items-center w-full">
              <FaHome className="mr-3 text-lg" />
              Home
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-[#003366] p-2 rounded">
            <Link href="/admin/doctors-registered" className="flex items-center w-full">
              <FaUserCheck className="mr-3 text-lg" />
              Registered Doctors
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-[#003366] p-2 rounded">
            <Link href="/admin/manage-doctors" className="flex items-center w-full">
              <FaCogs className="mr-3 text-lg" />
              Manage Doctors
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
