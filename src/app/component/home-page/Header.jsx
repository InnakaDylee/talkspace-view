'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaUserCircle } from 'react-icons/fa';

const HeaderHome = ({ userName, profileImage }) => {
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
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <style>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Head>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-purple-500 to-purple-700'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`text-2xl font-bold mr-10 ${scrolled ? 'text-purple-700' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Talkspace
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Home
              </Link>
              <Link href="/chat-doctor" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Chat Doctor
              </Link>
              <Link href="/my-activity" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                My Activity
              </Link>
              <Link href="/subscription" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Subscription
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/profile" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className={`w-full h-full ${scrolled ? 'text-purple-700' : 'text-white'}`} />
                  )}
                </div>
              </div>
              <div className={`font-bold ${scrolled ? 'text-purple-700' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Hi, Frahari Perdana Putra {userName}!
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
