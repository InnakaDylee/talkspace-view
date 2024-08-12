"use client";

import React, { useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaLock,
  FaUserCircle,
} from "react-icons/fa";

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("Frahari Putra");
  const [email, setEmail] = useState("frahari@example.com");
  const [phone, setPhone] = useState("+62 812-3456-7890");
  const [birthDate, setBirthDate] = useState("1990-01-01");

  const [modalProfilePicture, setModalProfilePicture] = useState(null);
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalBirthDate, setModalBirthDate] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setModalProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    // Update main profile state with modal state values
    setProfilePicture(modalProfilePicture);
    setName(modalName);
    setEmail(modalEmail);
    setPhone(modalPhone);
    setBirthDate(modalBirthDate);
    setIsModalOpen(false);
  };

  const openModal = () => {
    // Set modal state with current profile state values
    setModalProfilePicture(profilePicture);
    setModalName(name);
    setModalEmail(email);
    setModalPhone(phone);
    setModalBirthDate(birthDate);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="relative">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <FaUserCircle size={128} className="text-gray-400" />
            )}
            <label
              htmlFor="profilePicture"
              className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer"
            >
              <FaCamera />
            </label>
            <input
              type="file"
              id="profilePicture"
              className="hidden"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2 text-black">{name}</h1>
            <button
              className="text-purple-600 hover:underline"
              onClick={openModal}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center border-b pb-4">
            <FaEnvelope className="mr-4 text-purple-600" />
            <div>
              <p className="text-gray-600">Email</p>
              <p className="text-black">{email}</p>
            </div>
          </div>
          <div className="flex items-center border-b pb-4">
            <FaPhone className="mr-4 text-purple-600" />
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="text-black">{phone}</p>
            </div>
          </div>
          <div className="flex items-center border-b pb-4">
            <FaCalendarAlt className="mr-4 text-purple-600" />
            <div>
              <p className="text-gray-600">Birth Date</p>
              <p className="text-black">{birthDate}</p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-black">Account Settings</h2>
          <div className="flex items-center">
            <FaLock className="mr-4 text-purple-600" />
            <button className="text-purple-600 hover:underline">
              Change Password
            </button>
          </div>
        </div>

        {/* Subscription & Payment */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-black">
            Subscription & Payment
          </h2>
          <p className="text-black">
            Current Plan:{" "}
            <span className="font-semibold text-black">Premium</span>
          </p>
          <div className="flex space-x-8">
            <button className="text-purple-600 hover:underline">
              Manage Subscription
            </button>
            <button className="text-purple-600 hover:underline">
              View Payment History
            </button>
          </div>
        </div>

        {/* Logout & Delete Account */}
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
            Logout
          </button>
          <button className="text-red-500 hover:underline">
            Delete Account
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Edit Profile
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600">
                  <FaUserCircle className="inline mr-2 text-purple-600" />
                  Name
                </label>
                <input
                  type="text"
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  <FaEnvelope className="inline mr-2 text-purple-600" />
                  Email
                </label>
                <input
                  type="email"
                  value={modalEmail}
                  onChange={(e) => setModalEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  <FaPhone className="inline mr-2 text-purple-600" />
                  Phone
                </label>
                <input
                  type="text"
                  value={modalPhone}
                  onChange={(e) => setModalPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  <FaCalendarAlt className="inline mr-2 text-purple-600" />
                  Birth Date
                </label>
                <input
                  type="date"
                  value={modalBirthDate}
                  onChange={(e) => setModalBirthDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="flex items-center mt-4">
                <FaCamera className="text-purple-600 mr-4" />
                <input
                  type="file"
                  id="modalProfilePicture"
                  className="hidden"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
                <label
                  htmlFor="modalProfilePicture"
                  className="bg-purple-600 text-white py-2 px-4 rounded-full cursor-pointer"
                >
                  Change Profile Picture
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEditProfile}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
