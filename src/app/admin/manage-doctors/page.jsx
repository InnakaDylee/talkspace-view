"use client";

import React, { useState } from 'react';
import Header from "../component/Header";
import SidebarAdmin from "../component/Sidebar";

const ManageDoctors = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      fullname: 'Dr. John Smith',
      email: 'john.smith@example.com',
      specialization: 'Pediatrician',
      status: 'Active',
    },
    {
      id: 2,
      fullname: 'Dr. Jane Doe',
      email: 'jane.doe@example.com',
      specialization: 'Cardiologist',
      status: 'Inactive',
    },
  ]);

  // Filter doctors berdasarkan search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <SidebarAdmin isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header onSidebarToggle={handleSidebarToggle} />

        <main className="p-8 flex-1 bg-gray-900">
          <h1 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Manage Doctors
          </h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name or specialization..."
              className="p-2 w-full sm:w-1/2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ backgroundColor: 'white' }}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-left text-black">Full Name</th>
                  <th className="p-4 text-left text-black">Email</th>
                  <th className="p-4 text-left text-black">Specialization</th>
                  <th className="p-4 text-left text-black">Status</th>
                  <th className="p-4 text-left text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    className="border-b hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="p-4 text-black">{doctor.fullname}</td>
                    <td className="p-4 text-black">{doctor.email}</td>
                    <td className="p-4 text-black">{doctor.specialization}</td>
                    <td className="p-4 text-black">
                      <span className={`px-2 py-1 rounded-full text-white ${
                        doctor.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {doctor.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-blue-500 hover:text-blue-700">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-700 ml-4">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredDoctors.length === 0 && (
              <div className="text-center text-white mt-4">
                No doctors found matching your criteria.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageDoctors;
