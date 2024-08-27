"use client";

import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../../component/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaIdBadge,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaUserMd, // Import the default doctor icon
} from "react-icons/fa";
import { useUser } from "@context/UserContext";
import { getCookie } from "cookies-next";
import getProfile from "@/api/doctor/getProfile";

const DoctorProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useUser();
  const token = getCookie('token')
  const [loading, setLoading] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [profileDoctor, setProfileDoctor] = useState({
    id: '',
    fullname: '',
    email: '',
    profile_picture: '',
    gender: '',
    birthdate: '',
    blood_type: '',
    height: '',
    weight: ''
  });

  const fetchProfile = async () => {
    try {
      const res = await getProfile(id, token);
      if (res.status) {
        setProfileDoctor(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile()
  }, [])

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen">
      <Sidebar onToggle={handleSidebarToggle} isOpen={isSidebarOpen} />

      {/* Main content area */}
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"
          }`}
      >
        <Header onSidebarToggle={handleSidebarToggle} />

        {/* Main profile content */}
        <main className="flex-grow bg-gray-100 p-8">
          <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Doctor Profile</h1>

              <div className="flex items-center mb-6">
                <img
                  src={profileDoctor.profile_picture}
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full mr-6 object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{profileDoctor.fullname}</h2>
                  <p className="text-gray-600">{profileDoctor.specialization}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                  <p className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2 text-blue-500" /> {profileDoctor.email}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-blue-500" /> +62 812 3456 7890 {/* Replace with real data if available */}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                  <p className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" /> {profileDoctor.location}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">License Number</h3>
                  <p className="flex items-center text-gray-600">
                    <FaIdBadge className="mr-2 text-blue-500" /> {profileDoctor.license_number}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                  <p className="flex items-center text-gray-600">
                    <FaGraduationCap className="mr-2 text-blue-500" /> {profileDoctor.alumnus}
                  </p>
                </div>

              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-800">Introduction</h3>
              <p className="text-gray-600 mb-6">
                {profileDoctor.about}
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DoctorProfile;
