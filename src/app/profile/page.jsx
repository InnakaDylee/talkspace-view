"use client"

import Header from "../component/home-page/HeaderHome";
import Footer from "../../app/component/Footer";
import React, { useEffect, useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaLock,
  FaUserCircle,
  FaVenusMars,
  FaTint,
  FaRulerVertical,
  FaWeight,
} from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { getCookie, deleteCookie } from "cookies-next";
import { jwtDecode } from 'jwt-decode';
import getProfile from "@/api/user/getProfile";
import updateProfile from "@/api/user/updateProfile";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = getCookie("token");

  const fetchProfile = async () => {
    try {
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken) {
          const res = await getProfile(decodedToken.id, token);
          if (res.status) {
            setProfile(res.data);
          }
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // const handleProfilePictureChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setProfile((prev) => ({
  //         ...prev,
  //         profile_picture: e.target.result,
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Membuat objek FormData
      const formData = new FormData();
      formData.append('profile_picture', file);
      try {

        const res = await updateProfile(formData, profile.id, token)
        if (response.ok) {
          const data = await response.json();
          // Memperbarui state profil dengan URL gambar yang diunggah
          setProfile((prev) => ({
            ...prev,
            profile_picture: data.profile_picture, // Sesuaikan dengan key yang dikembalikan dari server
          }));
        } else {
          console.error('Failed to upload image', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading image', error);
      }
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChanges = async () => {
    const formData = new FormData();

    formData.append("fullname", profile.fullname);
    formData.append("email", profile.email);
    formData.append("gender", profile.gender);
    formData.append("birthdate", profile.birthdate);
    formData.append("blood_type", profile.blood_type);
    formData.append("height", profile.height);
    formData.append("weight", profile.weight);
    try {
      const res = await updateProfile(formData, profile.id, token);
      if (res.status) {
        setProfile(res.data);
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile()
  }, [])

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 mt-16">

        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 mt-16">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
            <div className="flex items-center space-x-6 mb-6">
              <div className="relative">
                {profile.profile_picture ? (
                  <img
                    src={profile.profile_picture}
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
                <h1 className="text-3xl font-semibold mb-2 text-black">{profile.fullname}</h1>
                <button
                  className="text-purple-600 hover:underline"
                  onClick={() => setIsModalOpen(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center border-b pb-4">
                <FaEnvelope className="mr-4 text-purple-600" />
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="text-black">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center border-b pb-4">
                <MdBloodtype className="mr-4 text-purple-600" />
                <div>
                  <p className="text-gray-600">Blood Type</p>
                  <p className="text-black">{profile.blood_type}</p>
                </div>
              </div>
              <div className="flex items-center border-b pb-4">
                <FaCalendarAlt className="mr-4 text-purple-600" />
                <div>
                  <p className="text-gray-600">Birth Date</p>
                  <p className="text-black">{profile.birthdate}</p>
                </div>
              </div>
            </div>

            {/* <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold text-black">Account Settings</h2>
              <div className="flex items-center">
                <FaLock className="mr-4 text-purple-600" />
                <button className="text-purple-600 hover:underline">
                  Change Password
                </button>
              </div>
            </div> */}

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

            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                onClick={() => {
                  deleteCookie("token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
              {/* <button className="text-red-500 hover:underline">
                Delete Account
              </button> */}
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                // Klik di luar modal tidak akan menutup modal atau mempengaruhi elemen lain
                e.stopPropagation();
              }
            }}
            tabIndex="-1" // memastikan modal dalam fokus
          >
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Edit Profile
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600">
                    <FaUserCircle className="inline mr-2 text-purple-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    value={profile.fullname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    <FaEnvelope className="inline mr-2 text-purple-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    <FaVenusMars className="inline mr-2 text-purple-600" />
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600">
                    <FaCalendarAlt className="inline mr-2 text-purple-600" />
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    value={profile.birthdate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    <FaTint className="inline mr-2 text-purple-600" />
                    Blood Type
                  </label>
                  <select
                    name="blood_type"
                    value={profile.blood_type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600">
                    <FaRulerVertical className="inline mr-2 text-purple-600" />
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={profile.height}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    <FaWeight className="inline mr-2 text-purple-600" />
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={profile.weight}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                  onClick={saveChanges}
                >
                  Save
                </button>
                <button
                  className="ml-3 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
``
