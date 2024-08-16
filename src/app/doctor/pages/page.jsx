"use client";

import React, { useState } from "react";
import Header from "../../doctor/component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../../doctor/component/Sidebar";
import Link from "next/link";
import {
  FaUserMd,
  FaCalendarAlt,
  FaFileAlt,
  FaRegCalendarCheck,
} from "react-icons/fa";

const DoctorHomeBody = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNotificationClick = (message) => {
    // Handle notification click here
    alert(message);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onToggle={handleSidebarToggle} isOpen={isSidebarOpen} />

      <div
        className={`flex flex-col flex-grow transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header onSidebarToggle={handleSidebarToggle} />{" "}
        <main className="flex-grow bg-gray-100 p-8">
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome Back, Dr. Frahari!
            </h1>
            <p className="text-lg text-gray-600">
              Here's a quick overview of your activities today.
            </p>
          </section>

          {/* Patient Management Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Patient Management
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Manage Patients */}
              <Link
                href="/manage-patients"
                className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <FaUserMd className="text-blue-700 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Manage Patients
                  </h3>
                  <p className="text-gray-600">
                    Access and update patient information
                  </p>
                </div>
              </Link>

              {/* View Schedule */}
              <Link
                href="/view-schedule"
                className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <FaCalendarAlt className="text-blue-700 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    View Schedule
                  </h3>
                  <p className="text-gray-600">
                    Check your daily and weekly appointments
                  </p>
                </div>
              </Link>

              {/* Create Reports */}
              <Link
                href="/create-reports"
                className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <FaFileAlt className="text-blue-700 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Create Reports
                  </h3>
                  <p className="text-gray-600">
                    Generate patient and treatment reports
                  </p>
                </div>
              </Link>

              {/* Booking Summary */}
              <Link
                href="/booking-summary"
                className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <FaRegCalendarCheck className="text-blue-700 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Booking Summary
                  </h3>
                  <p className="text-gray-600">
                    View patient bookings and statuses
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Notifications
            </h2>
            <ul className="space-y-4">
              <li
                onClick={() =>
                  handleNotificationClick(
                    "You have 2 new appointment requests."
                  )
                }
                className="p-4 bg-gray-50 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-gray-800">
                  You have 2 new appointment requests.
                </p>
              </li>
              <li
                onClick={() =>
                  handleNotificationClick(
                    "Your last patient record update was successful."
                  )
                }
                className="p-4 bg-gray-50 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-gray-800">
                  Your last patient record update was successful.
                </p>
              </li>
              <li
                onClick={() =>
                  handleNotificationClick(
                    "Remember to update your availability for next week."
                  )
                }
                className="p-4 bg-gray-50 rounded-lg shadow hover:bg-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <p className="text-gray-800">
                  Remember to update your availability for next week.
                </p>
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DoctorHomeBody;
