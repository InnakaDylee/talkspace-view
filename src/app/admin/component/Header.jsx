"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaBars, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { deleteCookie } from "cookies-next";

const HeaderAdmin = ({ adminName, isSidebarOpen, onSidebarToggle }) => {
  const [scrolled, setScrolled] = useState(false);

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
        className={`w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-[#001F3F] shadow-md"
            : "bg-gradient-to-r from-[#001F3F] to-[#003366]"
        }`}
        style={{
          marginLeft: isSidebarOpen ? "256px" : "0",
          marginTop: "0",
          boxSizing: "border-box",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center">
          {/* Button to toggle sidebar */}
          <button
            onClick={onSidebarToggle}
            className={`p-2 rounded-full mr-4 transition-colors duration-300 ${
              scrolled ? "bg-[#003366] text-white" : "bg-white text-[#003366]"
            }`}
          >
            <FaBars />
          </button>

          <div className="flex items-center flex-grow">
            <div
              className={`text-2xl font-bold mr-10 ${
                scrolled ? "text-white" : "text-white"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Admin Dashboard
            </div>
          </div>

          <div className="flex items-center space-x-2 mr-3">
            {/* Admin Profile */}
            <div className="flex items-center space-x-2">
              <FaUserShield
                className={`text-2xl ${
                  scrolled ? "text-white" : "text-white"
                }`}
              />
              <span
                className={`font-bold ${
                  scrolled ? "text-white" : "text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {adminName}
              </span>
            </div>
          </div>
          <div
              className="group flex items-center justify-center bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300"
              onClick={() => {
                deleteCookie('token');
                window.location.reload();  // Refresh halaman pada path yang sama
              }}
            >
              <FaSignOutAlt size={25} className="text-slate-200 group-hover:text-white transition-colors duration-300" />
              <span className="ml-2 group-hover:text-white">Logout</span>
            </div>
        </div>
      </header>
    </>
  );
};

export default HeaderAdmin;
