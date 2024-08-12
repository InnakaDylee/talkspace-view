import React from 'react';
import { FaStethoscope, FaRobot } from 'react-icons/fa';

const Body = () => {
  return (
    <div className="body-content flex flex-col justify-center items-center py-20 px-10 bg-gradient-to-r from-purple-500 to-purple-700 text-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Empowering Your Mental Health Journey</h1>
        <div className="relative w-full md:max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search in Talkspace"
            className="w-full px-4 py-2 mb-4 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gradient-to-r from-purple-500 to-purple-700 text-white placeholder-white"
          />
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font py-1.5 px-4 rounded-full shadow-lg hover:from-purple-700 hover:to-purple-900 transition duration-300 ease-in-out">
          See More
        </button>
      </div>
      {/* Features Section */}
      <div className="features-section grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="feature-item flex flex-col items-center text-center">
          <div className="icon-wrapper bg-white p-4 rounded-full mb-4">
            <FaStethoscope size={50} className="text-purple-700" />
          </div>
          <p className="text-xl font-semibold">Chat with Doctor</p>
        </div>
        <div className="feature-item flex flex-col items-center text-center">
          <div className="icon-wrapper bg-white p-4 rounded-full mb-4">
            <FaRobot size={50} className="text-gray-500" />
          </div>
          <p className="text-xl font-semibold">Chat with AI</p>
        </div>
      </div>
    </div>
  );
};

export default Body;



