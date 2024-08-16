"use client";

import React from "react";
import Header from "../../component/home-page/header";
import Footer from "../../component/Footer";

const DiscountNewUser = () => {
  const promoCode = "NEWUSER20";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };

  return (
    <div>
      <Header />
      <div className="py-20 px-10 bg-gradient-to-r from-green-500 to-green-700 text-white">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-700">
              Discount for New Users
            </h1>
            <p className="text-lg mb-6 text-gray-800">
              Enjoy a special discount for new users! Get Rp20,000 cashback on
              your first consultation.
            </p>
            <p className="text-lg mb-6 text-gray-800">
              To redeem this offer, simply register and book your first
              consultation. The cashback will be applied automatically.
            </p>
            <p className="text-lg mb-6 text-gray-800">
              This offer is valid for a limited time only, so make sure to take
              advantage of it today!
            </p>

            {/* Term and Conditions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">
                Terms and Conditions
              </h2>
              <ul className="list-disc pl-5 text-gray-800">
                <li>Promo valid for new users only.</li>
                <li>Applicable only on the first consultation.</li>
                <li>Cannot be combined with other promotions.</li>
                <li>Valid for a limited time only.</li>
              </ul>
            </div>

            {/* Copy Promo Code Button */}
            <div className="text-center">
              <button
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Copy Promo Code
              </button>
              <p className="text-gray-600 mt-4">
                Use code: <span className="font-bold">{promoCode}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscountNewUser;
