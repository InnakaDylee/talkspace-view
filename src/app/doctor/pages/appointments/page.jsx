"use client";

import React, { useState } from "react";
import Header from "../../../doctor/component/Header";
import Sidebar from "../../../doctor/component/Sidebar";
import Footer from "../../../component/Footer";
import { FaCalendarCheck, FaUser, FaClock, FaPhone, FaRegCalendarAlt } from "react-icons/fa";

const Appointments = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const closePopup = () => {
    setSelectedAppointment(null);
  };

  // Sample data for appointments
  const appointments = [
    { id: 1, patientName: "Innaka Dylee", date: "August 20, 2024", time: "10:00 AM", contact: "+62 812 3456 7890", completed: true },
    { id: 2, patientName: "Muhammad Talim", date: "August 21, 2024", time: "02:00 PM", contact: "+62 811 2345 6789", completed: false },
    { id: 3, patientName: "Frahari Putra", date: "August 22, 2024", time: "11:00 AM", contact: "+62 813 4567 8901", completed: true },
    { id: 4, patientName: "Hanisah Fildza", date: "August 23, 2024", time: "09:00 AM", contact: "+62 814 5678 9012", completed: false },
    { id: 5, patientName: "Aria Dewi", date: "August 24, 2024", time: "01:00 PM", contact: "+62 815 6789 0123", completed: true },
    { id: 6, patientName: "Budi Santoso", date: "August 25, 2024", time: "03:00 PM", contact: "+62 816 7890 1234", completed: false },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar onToggle={handleSidebarToggle} isOpen={isSidebarOpen} />

      {/* Main content area */}
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header onSidebarToggle={handleSidebarToggle} />

        {/* Main Appointments content */}
        <main className="flex-grow bg-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Scheduled Appointments
          </h1>

          {/* Scrollable container */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-h-[calc(100vh-160px)] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  onClick={() => handleAppointmentClick(appointment)}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative cursor-pointer hover:bg-blue-50"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    <FaUser className="inline mr-2 text-blue-500" />
                    {appointment.patientName}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    <FaRegCalendarAlt className="inline mr-2 text-green-500" />
                    {appointment.date}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <FaClock className="inline mr-2 text-purple-500" />
                    {appointment.time}
                  </p>
                  <p className="text-gray-600">
                    <FaPhone className="inline mr-2 text-red-500" />
                    {appointment.contact}
                  </p>
                  {appointment.completed && (
                    <FaCalendarCheck className="absolute top-4 right-4 text-green-500 text-xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Popup for appointment details */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedAppointment.patientName}
            </h2>
            <p className="mb-2 text-gray-700">
              <FaRegCalendarAlt className="inline mr-2 text-green-500" />
              {selectedAppointment.date}
            </p>
            <p className="mb-2 text-gray-700">
              <FaClock className="inline mr-2 text-purple-500" />
              {selectedAppointment.time}
            </p>
            <p className="mb-2 text-gray-700">
              <FaPhone className="inline mr-2 text-red-500" />
              {selectedAppointment.contact}
            </p>
            {selectedAppointment.completed && (
              <p className="text-green-600 font-semibold mt-4">
                Appointment completed
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
