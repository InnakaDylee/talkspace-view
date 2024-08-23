"use client";

import React, { useState } from 'react';
import Header from "../../../admin/component/Header";
import SidebarAdmin from "../../../admin/component/Sidebar";

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

        <main className="p-4 sm:p-8 flex-1 bg-gray-900">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
              style={{ backgroundColor: 'white' }} // Menambahkan warna latar belakang putih
            />
          </div>

          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-300 bg-white text-black">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left text-xs font-medium uppercase tracking-wider">Full Name</th>
                  <th className="py-2 px-4 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                  <th className="py-2 px-4 text-left text-xs font-medium uppercase tracking-wider">Specialization</th>
                  <th className="py-2 px-4 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="py-2 px-4 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDoctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="py-2 px-4 text-sm font-medium">{doctor.fullname}</td>
                    <td className="py-2 px-4 text-sm font-medium">{doctor.email}</td>
                    <td className="py-2 px-4 text-sm font-medium">{doctor.specialization}</td>
                    <td className="py-2 px-4 text-sm font-medium">{doctor.status}</td>
                    <td className="py-2 px-4 text-sm font-medium">
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
