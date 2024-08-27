"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaUserMd, FaBars, FaComments, FaSignOutAlt } from "react-icons/fa";
import updateStatus from "@/api/doctor/updateStatus";
import { useUser } from "@context/UserContext";
import { getCookie, deleteCookie } from "cookies-next";
import { usePathname } from "next/navigation";

const HeaderDoctor = ({
  doctorName,
  profileImage,
  isSidebarOpen,
  onSidebarToggle,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const { id, fullname, premium } = useUser();
  const [isEnabled, setIsEnabled] = useState(premium);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsEnabled(prev => !prev);
    changeStatusDoctor();
  };

  const changeStatusDoctor = async () => {
    try {
      const res = await updateStatus({status: isEnabled}, id, getCookie('token') )
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
            body {
              margin: 0;
              padding: 0;
            }
          `}</style>
      </Head>
      <header
        className={`w-full z-50 transition-all duration-300 ease-in-out ${scrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-blue-600 to-blue-800"
          }`}
        style={{
          marginLeft: isSidebarOpen ? "256px" : "0",
          marginTop: "0",
          boxSizing: "border-box",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center">
          {/* Button to toggle sidebar */}
          { pathname !== '/doctor/chat' &&
            <button
            onClick={onSidebarToggle}
            className={`p-2 rounded-full mr-4 transition-colors duration-300 ${scrolled ? "bg-blue-800 text-white" : "bg-white text-blue-800"
              }`}
          >
            <FaBars />
          </button>}

          <div className="flex items-center flex-grow">
            <Link
              className={`text-2xl font-bold mr-10 ${scrolled ? "text-blue-800" : "text-white"
                }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
              href={'/doctor'}
            >
              Talkspace
            </Link>

            {/* Chat Icon */}
            <Link
              className={`p-2 rounded-full transition-colors duration-300 ${scrolled ? "bg-blue-800 text-white" : "bg-white text-blue-800"
                }`}
              href={"/doctor/chat"}
              title="Open Chat"
            >
              <FaComments className="w-6 h-6" />
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <label  className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    // id={id}
                    checked={isEnabled}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div className={`block w-14 h-8 rounded-full ${isEnabled ? 'bg-green-200' : 'bg-red-200'}`}></div>
                  <div
                    className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${isEnabled ? 'translate-x-full bg-green-600' : 'translate-x-0 bg-red-700'
                      }`}
                  ></div>
                </div>
                {/* {label &&  */}
                <span className="ml-3 text-slate-50">{isEnabled ? "Available" : "Not Available"}</span>
              </label>
            </div>
            

            {/* Profile and Doctor Name */}
            <Link
              href="/doctor/profile"
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserMd
                      className={`w-full h-full ${scrolled ? "text-blue-800" : "text-white"
                        }`}
                    />
                  )}
                </div>
              </div>
              <div
                className={`font-bold ${scrolled ? "text-blue-800" : "text-white"
                  }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {fullname}
              </div>
            </Link>

            <div
              className="group flex items-center justify-center bg-blue-200 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl cursor-pointer transition-colors duration-300"
              onClick={() => {
                deleteCookie('token');
                window.location.reload();  // Refresh halaman pada path yang sama
              }}
            >
              <FaSignOutAlt size={25} className="text-slate-600 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderDoctor;
