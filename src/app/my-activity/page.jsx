"use client";

import React, { useState } from "react";
import Header from "../../app/component/home-page/Header";
import Footer from "../../app/component/Footer";
import { FaCalendarAlt, FaCog, FaInfoCircle } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Registering the components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const MyActivityPage = () => {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Activity Over Time",
        data: [30, 45, 25, 60, 50, 70, 90],
        borderColor: "#4B8B3B",
        backgroundColor: "rgba(75, 193, 92, 0.2)",
        fill: true,
      },
    ],
  });

  const [selectedTab, setSelectedTab] = useState("overview");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-grow p-6 mt-16">
        {" "}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-700 mb-6">
            My Activity
          </h1>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => handleTabClick("overview")}
              className={`py-2 px-4 rounded-lg ${
                selectedTab === "overview"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("details")}
              className={`py-2 px-4 rounded-lg ${
                selectedTab === "details"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => handleTabClick("settings")}
              className={`py-2 px-4 rounded-lg ${
                selectedTab === "settings"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Settings
            </button>
          </div>

          <div className="mb-6">
            {selectedTab === "overview" && (
              <div>
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                  Activity Overview
                </h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <Line data={chartData} />
                </div>
              </div>
            )}
            {selectedTab === "details" && (
              <div>
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                  Activity Details
                </h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <FaCalendarAlt className="text-purple-600" size={24} />
                      <span className="text-gray-700">
                        Recent Activity: Completed 20 sessions in the last
                        month.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaInfoCircle className="text-purple-600" size={24} />
                      <span className="text-gray-700">
                        Last Session: Discussed anxiety management strategies.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {selectedTab === "settings" && (
              <div>
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                  Settings
                </h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Notification Preferences
                      </label>
                      <select className="block w-full border-gray-300 rounded-lg p-2">
                        <option>Email Notifications</option>
                        <option>SMS Notifications</option>
                        <option>Push Notifications</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Account Privacy
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="profileVisibility"
                          className="form-checkbox"
                        />
                        <label
                          htmlFor="profileVisibility"
                          className="text-gray-700"
                        >
                          Make Profile Public
                        </label>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyActivityPage;
