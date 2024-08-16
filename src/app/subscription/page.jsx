"use client";

import React, { useState } from "react";
import Header from "../../app/component/home-page/Header";
import Footer from "../../app/component/Footer";
import { FaStethoscope, FaRobot } from "react-icons/fa";

const SubscriptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscriptionType, setSubscriptionType] = useState("monthly");

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscriptionTypeChange = (type) => {
    setSubscriptionType(type);
  };

  const handleSubscribeNow = () => {
    // Logic for subscribing
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow p-6 mt-16">
        {" "}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {/* Left Side: Subscribe Now Button */}
            <div>
              <h2 className="text-4xl font-bold text-purple-700 mb-4">
                Subscription Plans
              </h2>
              <button
                onClick={handleSubscribeClick}
                className="bg-purple-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-purple-700 transition duration-300"
              >
                Subscribe Now
              </button>
            </div>

            {/* Right Side: Talkspace Logo and Features */}
            <div className="text-right">
              <h1 className="text-6xl font-extrabold text-purple-700 mb-4">
                Talkspace
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Unlock exclusive features with our premium plans!
              </p>
              <div className="flex items-center space-x-6 justify-end">
                <div className="flex items-center space-x-2">
                  <FaStethoscope size={40} className="text-purple-600" />
                  <span className="text-lg text-black">Chat with Doctor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRobot size={40} className="text-purple-600" />
                  <span className="text-lg text-black">Chat with AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Details Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Why Subscribe?
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              By subscribing, you'll get unlimited access to our mental health
              resources, including live chat with doctors and AI-driven mental
              health tools. Choose the plan that suits you best and start your
              journey to better mental health today!
            </p>
          </div>
        </div>
        {/* Modal for Subscription Options */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Choose Your Plan
              </h2>
              <div className="space-y-4">
                <div
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPlan === "Premium"
                      ? "border-purple-700 bg-purple-50"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handlePlanSelect("Premium")}
                >
                  <h3 className="text-xl font-bold text-purple-700">Premium</h3>
                  <p className="text-gray-600">
                    Get full access to all features and content.
                  </p>
                </div>
                <div
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPlan === "Standard"
                      ? "border-purple-700 bg-purple-50"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handlePlanSelect("Standard")}
                >
                  <h3 className="text-xl font-bold text-purple-700">
                    Standard
                  </h3>
                  <p className="text-gray-600">
                    Access to most features with limited content.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Subscription Type
                </h4>
                <div className="flex justify-around">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="subscriptionType"
                      value="monthly"
                      checked={subscriptionType === "monthly"}
                      onChange={() => handleSubscriptionTypeChange("monthly")}
                      className="form-radio text-purple-700"
                    />
                    <span className="text-gray-700">Monthly</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="subscriptionType"
                      value="yearly"
                      checked={subscriptionType === "yearly"}
                      onChange={() => handleSubscriptionTypeChange("yearly")}
                      className="form-radio text-purple-700"
                    />
                    <span className="text-gray-700">Yearly</span>
                  </label>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubscribeNow}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;
