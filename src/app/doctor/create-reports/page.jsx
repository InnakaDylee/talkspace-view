"use client";

import React, { useState } from "react";
import Select from "react-select";
import Header from "../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../component/Sidebar";
import { FaFileAlt, FaDownload } from "react-icons/fa";

const CreateReportsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [reportType, setReportType] = useState("patients");
  const [selectedPatient, setSelectedPatient] = useState("");

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleReportTypeChange = (type) => {
    setReportType(type);
  };

  const handlePatientChange = (selectedOption) => {
    setSelectedPatient(selectedOption.value);
  };

  const handleGenerateReport = () => {
    if (selectedPatient) {
      alert(`Generating ${reportType} report for ${selectedPatient}...`);
    } else {
      alert("Please select a patient to generate the report.");
    }
  };

  const patientOptions = [
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
    { value: "Michael Johnson", label: "Michael Johnson" },
    { value: "Patient 4", label: "Patient 4" },
    { value: "Patient 5", label: "Patient 5" },
    { value: "Patient 6", label: "Patient 6" },
    { value: "Patient 7", label: "Patient 7" },
    { value: "Patient 8", label: "Patient 8" },
    { value: "Patient 9", label: "Patient 9" },
    { value: "Patient 10", label: "Patient 10" },
    { value: "Patient 11", label: "Patient 11" },
    { value: "Patient 12", label: "Patient 12" },
  ];

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
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Generate Reports
            </h1>
            <p className="text-lg text-gray-600">
              Select the type of report and the patient for whom you want to
              generate the report, then click the "Generate Report" button.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Report Type
            </h2>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => handleReportTypeChange("patients")}
                className={`px-4 py-2 rounded ${
                  reportType === "patients"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Patients Report
              </button>
              <button
                onClick={() => handleReportTypeChange("treatments")}
                className={`px-4 py-2 rounded ${
                  reportType === "treatments"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Treatments Report
              </button>
            </div>

            <div className="mb-6">
              <label
                htmlFor="patient"
                className="block text-gray-800 font-semibold mb-2"
              >
                Select Patient
              </label>
              <Select
                id="patient"
                value={patientOptions.find(
                  (option) => option.value === selectedPatient
                )}
                onChange={handlePatientChange}
                options={patientOptions}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-800"
                maxMenuHeight={150} // Limit the dropdown height to 5 patients
              />
            </div>

            <div className="flex items-center">
              <button
                onClick={handleGenerateReport}
                className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition-colors duration-300"
              >
                <FaFileAlt className="mr-2" />
                Generate Report
              </button>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Download Previous Reports
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow">
                <p className="text-gray-800">Patients Report - July 2024</p>
                <button
                  onClick={() => alert("Downloading report...")}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </li>
              <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow">
                <p className="text-gray-800">Treatments Report - July 2024</p>
                <button
                  onClick={() => alert("Downloading report...")}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CreateReportsPage;
