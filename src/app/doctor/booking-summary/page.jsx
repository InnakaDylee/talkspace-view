"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";
import Header from "../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../component/Sidebar";

const BookingSummary = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const bookingData = [
    {
      patientName: "John Doe",
      date: "2024-08-18",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      patientName: "Jane Smith",
      date: "2024-08-18",
      time: "11:00 AM",
      status: "Pending",
    },
    {
      patientName: "Mike Johnson",
      date: "2024-08-18",
      time: "12:00 PM",
      status: "Cancelled",
    },
    {
      patientName: "Anna Williams",
      date: "2024-08-18",
      time: "01:00 PM",
      status: "Confirmed",
    },
    {
      patientName: "Tom Brown",
      date: "2024-08-18",
      time: "02:00 PM",
      status: "Pending",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Confirmed":
        return <FaCheckCircle className="text-green-600" />;
      case "Pending":
        return <FaHourglassHalf className="text-yellow-500" />;
      case "Cancelled":
        return <FaTimesCircle className="text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onToggle={handleSidebarToggle} isOpen={isSidebarOpen} />

      <div
        className={`flex flex-col flex-grow transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header onSidebarToggle={handleSidebarToggle} />
        <main className="flex-grow bg-gray-100 p-8">
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Booking Summary
            </h2>
            <div className="overflow-x-auto">
              <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full bg-white border rounded-lg shadow">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-gray-800 font-semibold">
                        Patient Name
                      </th>
                      <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-gray-800 font-semibold">
                        Date
                      </th>
                      <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-gray-800 font-semibold">
                        Time
                      </th>
                      <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-gray-800 font-semibold">
                        Status
                      </th>
                      <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-gray-800 font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData.map((booking, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="px-6 py-4 border-b border-gray-200 text-gray-800">
                          {booking.patientName}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-gray-800">
                          {booking.date}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-gray-800">
                          {booking.time}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 flex items-center text-gray-800">
                          {getStatusIcon(booking.status)}
                          <span className="ml-2">{booking.status}</span>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200">
                          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BookingSummary;
