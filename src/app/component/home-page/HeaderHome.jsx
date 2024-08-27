'use client';

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { deleteCookie } from 'cookies-next';
import { useUser } from '@context/UserContext';
import { useRouter } from 'next/navigation';
import { WebsocketContext } from '@context/socketProvide';

const HeaderHome = ({ userName, profileImage }) => {
  const [scrolled, setScrolled] = useState(false);
  const { fullname } = useUser();
  const router = useRouter();
  const { conn, setConn } = useContext(WebsocketContext);

  const handleCloseConnection = () => {
    if (conn) {
      conn.close(); // Menutup koneksi WebSocket
      setConn(null); // Memastikan state koneksi direset
    }
  };

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
      <header className={`w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-purple-500 to-purple-700'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-2">
          <div className="flex items-center flex-grow">
            <div className={`text-2xl font-bold mr-10 ${scrolled ? 'text-purple-700' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Talkspace
            </div>
            <nav className="flex gap-4 items-center">
              <Link href="/home" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Home
              </Link>
              <Link href="/talkbot" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Talk Bot
              </Link>
              <Link href="/chat-doctor" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Chat Doctor
              </Link>
              <Link href="/subscription" className={`transition duration-300 ease-in-out ${scrolled ? 'text-purple-700 hover:text-purple-500' : 'text-white hover:text-gray-300'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Subscription
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
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
                Hi, {fullname} !
              </div>
            </Link>
            <div
              className="group flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300"
              onClick={() => {
                handleCloseConnection();
                router.push('/login');  // Refresh halaman pada path yang sama
                deleteCookie('token');
              }}
            >
              <FaSignOutAlt size={25} className="text-slate-200 group-hover:text-white transition-colors duration-300" />
              <span className="ml-2 group-hover:text-white">Logout</span>
            </div>


          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
