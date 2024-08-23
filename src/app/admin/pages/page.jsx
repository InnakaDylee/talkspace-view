
"use client";

import React, { useState } from "react";
import Header from "../../admin/component/Header";
import Sidebar from "../../admin/component/Sidebar";

const AdminDashboardBody = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [doctorData, setDoctorData] = useState({
    fullname: "",
    email: "",
    specialization: "",
    licenseNumber: "",
    alumnus: "",
    yearsOfExperience: "",
    about: "",
    location: "",
    gender: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleGeneratePassword = () => {
    const generatedPassword = Math.random().toString(36).slice(-8);
    setPassword(generatedPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctor = {
      ...doctorData,
      profilePicture,
      password,
      registrationDate: new Date().toLocaleDateString(),
    };
    setDoctors([...doctors, newDoctor]);

    // Reset form
    setDoctorData({
      fullname: "",
      email: "",
      specialization: "",
      licenseNumber: "",
      alumnus: "",
      yearsOfExperience: "",
      about: "",
      location: "",
      gender: "",
    });
    setProfilePicture(null);
    setPassword("");
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar onToggle={handleSidebarToggle} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header onSidebarToggle={handleSidebarToggle} />

        <main className="p-8 flex-1 bg-gray-900">
          <h1
            className="text-3xl font-bold mb-8 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Admin Dashboard - Doctor Registration
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={doctorData.fullname}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={doctorData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {profilePicture && (
                  <div className="mt-4">
                    <img
                      src={profilePicture}
                      alt="Profile Preview"
                      className="w-32 h-32 object-cover rounded-md border border-gray-300"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={doctorData.specialization}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">License Number</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={doctorData.licenseNumber}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">Alumnus</label>
                <input
                  type="text"
                  name="alumnus"
                  value={doctorData.alumnus}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="yearsOfExperience"
                  value={doctorData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">About</label>
                <textarea
                  name="about"
                  value={doctorData.about}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={doctorData.location}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <label className="block text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={doctorData.gender}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  style={{ backgroundColor: "white" }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleGeneratePassword}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Auto-generate Password
                </button>
                {password && (
                  <p className="ml-4 text-gray-700">
                    Generated Password: <strong>{password}</strong>
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Add Doctor
              </button>
            </div>
          </form>

          <h2 className="text-2xl font-bold mb-4 text-white">
            Registered Doctors
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Profile Picture
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    License Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Alumnus
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Years of Experience
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    About
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Registration Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 text-gray-800">
                {doctors.map((doctor, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm">
                      {doctor.profilePicture ? (
                        <img
                          src={doctor.profilePicture}
                          alt="Profile"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      ) : (
                        "No Image"  
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">{doctor.fullname}</td>
                    <td className="px-6 py-4 text-sm">{doctor.email}</td>
                    <td className="px-6 py-4 text-sm">
                      {doctor.specialization}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {doctor.licenseNumber}
                    </td>
                    <td className="px-6 py-4 text-sm">{doctor.alumnus}</td>
                    <td className="px-6 py-4 text-sm">
                      {doctor.yearsOfExperience}
                    </td>
                    <td className="px-6 py-4 text-sm">{doctor.about}</td>
                    <td className="px-6 py-4 text-sm">{doctor.location}</td>
                    <td className="px-6 py-4 text-sm">{doctor.gender}</td>
                    <td className="px-6 py-4 text-sm">
                      {doctor.registrationDate}
                    </td>
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

export default AdminDashboardBody;
