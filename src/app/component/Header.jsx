'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { getCookie } from 'cookies-next';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const cookies = getCookie('token')

  

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
          <div className={`text-2xl font-bold ${scrolled ? 'text-purple-700' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Link href="/">
              Talkspace
            </Link>
          </div>
          <nav className="space-x-6">
            <Link href="/home" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Home
            </Link>
            {/* <Link href="/features" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Features
            </Link>
            <Link href="/about" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              About
            </Link>
            <Link href="/contact" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact
            </Link> */}
            <Link href="/login" className={`px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out ${scrolled ? 'bg-purple-700 text-white hover:bg-purple-500' : 'bg-white text-purple-700 hover:bg-gray-100'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Sign In
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;


