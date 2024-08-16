"use client";

import React, { useState } from "react";
import Header from "../../../doctor/component/Header";
import Sidebar from "../../../doctor/component/Sidebar";
import Footer from "../../../component/Footer";
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

const DoctorProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
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

        {/* Main profile content */}
        <main className="flex-grow bg-gray-100 p-8">
          <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Doctor Profile
              </h1>

              <div className="flex items-center mb-6">
                <FaUserMd className="w-24 h-24 rounded-full mr-6 text-gray-400" />{" "}
                {/* Default doctor icon */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Dr. Frahari Putra
                  </h2>
                  <p className="text-gray-600">Psychiatrist</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Contact Information
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2 text-blue-500" />{" "}
                    frahari.putra@example.com
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-blue-500" /> +62 812 3456 7890
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Birth Date
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-blue-500" /> January 1,
                    1980
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Address
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" /> Jl. Kebon
                    Jeruk No. 21, Jakarta
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Nomor PDSKJI/IPK
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaIdBadge className="mr-2 text-blue-500" /> PDSKJI:
                    12345678
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Education
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaGraduationCap className="mr-2 text-blue-500" /> MD,
                    University of Indonesia
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaGraduationCap className="mr-2 text-blue-500" /> PhD,
                    Psychiatry, Harvard Medical School
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Experience
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaBriefcase className="mr-2 text-blue-500" /> Senior
                    Psychiatrist at XYZ Hospital (2015-present)
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaBriefcase className="mr-2 text-blue-500" /> Psychiatrist
                    Fellow at ABC Medical Center (2012-2015)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Certifications
                  </h3>
                  <p className="flex items-center text-gray-600">
                    <FaCertificate className="mr-2 text-blue-500" /> Certified
                    in Cognitive Behavioral Therapy (CBT)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-800">
                Introduction
              </h3>
              <p className="text-gray-600 mb-6">
                Dr. Frahari Putra is a highly experienced psychiatrist with over
                a decade of experience in treating various mental health
                conditions. He has a deep understanding of psychiatric disorders
                and is dedicated to providing the highest quality of care to his
                patients.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">
                Published Journals
              </h3>
              <ul className="list-disc ml-6 text-gray-600">
                <li>
                  "Cognitive Behavioral Therapy for Anxiety Disorders" - Journal
                  of Psychiatry, 2020
                </li>
                <li>
                  "The Role of Neuroplasticity in Depression Treatment" - Mental
                  Health Journal, 2019
                </li>
                <li>
                  "Advances in Psychopharmacology" - International Psychiatry
                  Journal, 2018
                </li>
              </ul>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DoctorProfile;
