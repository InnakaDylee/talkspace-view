"use client";

import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../../component/Footer";

import React, { useState } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaInfoCircle,
} from "react-icons/fa";

const ManagePatients = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { id: 1, name: "Innaka Dylee", age: 22, gender: "Male", status: "Active" },
    {
      id: 2,
      name: "Muhammad Talim",
      age: 22,
      gender: "Male",
      status: "Inactive",
    },
    { id: 3, name: "Frahari Putra", age: 29, gender: "Male", status: "Active" },
    { id: 4, name: "Siti Aisyah", age: 30, gender: "Female", status: "Active" },
    {
      id: 5,
      name: "Rudi Hartono",
      age: 35,
      gender: "Male",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Dewi Sartika",
      age: 27,
      gender: "Female",
      status: "Active",
    },
    {
      id: 7,
      name: "Budi Santoso",
      age: 40,
      gender: "Male",
      status: "Inactive",
    },
    { id: 8, name: "Nina Asmara", age: 26, gender: "Female", status: "Active" },
    {
      id: 9,
      name: "Rina Fitri",
      age: 33,
      gender: "Female",
      status: "Inactive",
    },
  ];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

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

        {/* Main Manage Patients content */}
        <main className="flex-grow bg-gray-100 p-8">
          <div className="bg-white p-4 rounded shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Manage Patients
              </h2>
              <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <FaUserPlus className="mr-2" />
                Add Patient
              </button>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search Patients..."
                className="w-full px-4 py-2 border rounded-l text-gray-800"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                <FaSearch />
              </button>
            </div>

            <div className="bg-white rounded shadow">
              <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                {" "}
                {/* Adjust height as needed */}
                <table className="min-w-full bg-white border text-gray-800">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b bg-gray-200">Name</th>
                      <th className="py-2 px-4 border-b bg-gray-200">Age</th>
                      <th className="py-2 px-4 border-b bg-gray-200">Gender</th>
                      <th className="py-2 px-4 border-b bg-gray-200">Status</th>
                      <th className="py-2 px-4 border-b bg-gray-200">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr
                        key={patient.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        onClick={() => handlePatientSelect(patient)}
                      >
                        <td className="py-2 px-4 border-b">{patient.name}</td>
                        <td className="py-2 px-4 border-b">{patient.age}</td>
                        <td className="py-2 px-4 border-b">{patient.gender}</td>
                        <td className="py-2 px-4 border-b">{patient.status}</td>
                        <td className="py-2 px-4 border-b">
                          <button className="text-blue-600 hover:text-blue-800 mx-1">
                            <FaEdit />
                          </button>
                          <button className="text-red-600 hover:text-red-800 mx-1">
                            <FaTrash />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 mx-1">
                            <FaInfoCircle />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedPatient && (
              <div className="mt-4 p-4 bg-white rounded shadow-md">
                <h3
                  className="text-xl font-bold mb-4 text-gray-800"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Patient Details: {selectedPatient.name}
                </h3>
                <p>
                  <strong>Age:</strong> {selectedPatient.age}
                </p>
                <p>
                  <strong>Gender:</strong> {selectedPatient.gender}
                </p>
                <p>
                  <strong>Status:</strong> {selectedPatient.status}
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ManagePatients;
