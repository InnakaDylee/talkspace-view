"use client";

import React from "react";
import HeaderHome from "@/component/home-page/HeaderHome";
import Footer from "@/component/Footer";

const SpecialistExclusion = () => {
  const promoCode = "EXCLUDE20";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };

  return (
    <div>
      <HeaderHome />
      <div className="py-20 px-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">
              Specialist Exclusion
            </h1>
            <p className="text-lg mb-6 text-gray-800">
              This offer is valid for all specialists except Dermatologists.
            </p>
            <p className="text-lg mb-6 text-gray-800">
              When booking your consultation, please ensure you select a
              specialist other than a Dermatologist to enjoy the benefits of
              this offer.
            </p>
            <p className="text-lg mb-6 text-gray-800">
              Remember, this offer is only available for a limited time. Don’t
              miss out on this opportunity!
            </p>

            {/* Term and Conditions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                Terms and Conditions
              </h2>
              <ul className="list-disc pl-5 text-gray-800">
                <li>
                  Offer is valid for all specialists except Dermatologists.
                </li>
                <li>Applicable only for online consultations.</li>
                <li>Cannot be combined with other promotions.</li>
                <li>Valid for a limited time only.</li>
              </ul>
            </div>

            {/* Copy Promo Code Button */}
            <div className="text-center">
              <button
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
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

export default SpecialistExclusion;
