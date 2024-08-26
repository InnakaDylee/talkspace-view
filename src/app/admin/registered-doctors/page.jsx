"use client";

import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import SidebarAdmin from "../component/Sidebar";

const DoctorsRegistered = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Contoh fetch data
    setDoctors([
      {
        profilePicture: '/images/default-profile.jpg', 
        fullname: 'Dr. Jane Doe',
        email: 'jane.doe@example.com',
        specialization: 'Cardiologist',
        licenseNumber: '123456',
        alumnus: 'Harvard University',
        yearsOfExperience: '10',
        about: 'Experienced Cardiologist with a focus on heart diseases.',
        location: 'New York, NY',
        gender: 'Female',
        registrationDate: '2024-08-22',
      },
    ]);
  }, []);

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
            Registered Doctors
          </h1>

          <div className="overflow-x-auto overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile Picture</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Number</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alumnus</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Years of Experience</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">About</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {doctors.map((doctor, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-2 px-4 text-sm">
                      <img
                        src={doctor.profilePicture}
                        alt="Profile"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border border-gray-300"
                      />
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.fullname}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.email}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.specialization}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.licenseNumber}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.alumnus}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.yearsOfExperience}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.about}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.location}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.gender}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{doctor.registrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorsRegistered;

