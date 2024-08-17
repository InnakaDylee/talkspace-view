"use client";

import React, { useState } from "react";
import Header from "../../../doctor/component/Header";
import Sidebar from "../../../doctor/component/Sidebar";
import Footer from "../../../component/Footer";
import { FaUser, FaPhone, FaCalendarAlt, FaSearch } from "react-icons/fa";

const PatientRecords = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const closePopup = () => {
    setSelectedPatient(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const patients = [
    {
      id: 1,
      name: "Innaka Dylee",
      birthDate: "January 15, 1990",
      contact: "+62 812 3456 7890",
      status: "Active",
      description: "Experiencing severe anxiety and panic attacks.",
    },
    {
      id: 2,
      name: "Muhammad Talim",
      birthDate: "March 22, 1985",
      contact: "+62 811 2345 6789",
      status: "Inactive",
      description: "Struggling with depression and low mood.",
    },
    {
      id: 3,
      name: "Frahari Putra",
      birthDate: "July 10, 1992",
      contact: "+62 813 4567 8901",
      status: "Active",
      description: "Dealing with PTSD and flashbacks.",
    },
    {
      id: 4,
      name: "Hanisah Fildza",
      birthDate: "November 5, 1988",
      contact: "+62 814 5678 9012",
      status: "Active",
      description: "Experiencing chronic stress and burnout.",
    },
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* Main Patient Records content */}
        <main className="flex-grow bg-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Patient Records
          </h1>

          {/* Search and Filter Bar */}
          <div className="mb-6 flex items-center border border-gray-300 rounded-lg bg-white">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search patients..."
              className="flex-grow p-2 border-none rounded-l-lg focus:outline-none"
            />
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <FaSearch />
            </button>
          </div>

          {/* Patient List */}
          <div className="max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <div
                    key={patient.id}
                    onClick={() => handlePatientClick(patient)}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative cursor-pointer hover:bg-blue-50"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      <FaUser className="inline mr-2 text-blue-500" />
                      {patient.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <FaCalendarAlt className="inline mr-2 text-green-500" />
                      {patient.birthDate}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <FaPhone className="inline mr-2 text-red-500" />
                      {patient.contact}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Description: </strong>
                      {patient.description}
                    </p>
                    <p className="text-gray-600">
                      Status:{" "}
                      <span
                        className={
                          patient.status === "Active"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {patient.status}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No patients found.</p>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedPatient.name}
            </h2>
            <p className="mb-2 text-gray-700">
              <FaCalendarAlt className="inline mr-2 text-green-500" />
              {selectedPatient.birthDate}
            </p>
            <p className="mb-2 text-gray-700">
              <FaPhone className="inline mr-2 text-red-500" />
              {selectedPatient.contact}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Description: </strong>
              {selectedPatient.description}
            </p>
            <p className="text-gray-700">
              Status:{" "}
              <span
                className={
                  selectedPatient.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedPatient.status}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRecords;
