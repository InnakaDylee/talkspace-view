"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaUserMd, FaBars, FaComments } from "react-icons/fa";

const HeaderDoctor = ({
  doctorName,
  profileImage,
  isSidebarOpen,
  onSidebarToggle,
}) => {
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
          <button
            onClick={onSidebarToggle}
            className={`p-2 rounded-full mr-4 transition-colors duration-300 ${
              scrolled ? "bg-blue-800 text-white" : "bg-white text-blue-800"
            }`}
          >
            <FaBars />
          </button>

          <div className="flex items-center flex-grow">
            <div
              className={`text-2xl font-bold mr-10 ${
                scrolled ? "text-blue-800" : "text-white"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Talkspace
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Chat Icon */}
            <button
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-blue-800 text-white" : "bg-white text-blue-800"
              }`}
              onClick={() => alert("Open chat")}
              title="Open Chat"
            >
              <FaComments className="w-6 h-6" />
            </button>

            {/* Profile and Doctor Name */}
            <Link
              href="/doctor-profile"
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
                      className={`w-full h-full ${
                        scrolled ? "text-blue-800" : "text-white"
                      }`}
                    />
                  )}
                </div>
              </div>
              <div
                className={`font-bold ${
                  scrolled ? "text-blue-800" : "text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Dr. {doctorName}
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderDoctor;
