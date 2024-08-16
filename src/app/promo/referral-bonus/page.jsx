"use client";

import React from "react";
import Header from "../../component/home-page/header";
import Footer from "../../component/Footer";

const ReferralBonus = () => {
  const promoCode = "REFERRAL50";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };

  return (
    <div>
      <Header />
      <div className="py-20 px-10 bg-gradient-to-r from-red-500 to-red-700 text-white">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-red-700">Referral Bonus</h1>
            <p className="text-lg mb-6 text-gray-800">
              Earn Rp50,000 for every successful referral!
            </p>
            <p className="text-lg mb-6 text-gray-800">
              Share your referral code with friends and family. Once they successfully book a consultation, you will earn a bonus.
            </p>
            <p className="text-lg mb-6 text-gray-800">
              The more referrals you make, the more you earn! Start sharing now to enjoy the rewards.
            </p>

            {/* Term and Conditions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-red-700">Terms and Conditions</h2>
              <ul className="list-disc pl-5 text-gray-800">
                <li>Referral bonus is credited only after a successful consultation.</li>
                <li>No limit on the number of referrals you can make.</li>
                <li>Referral bonus is non-transferable and cannot be exchanged for cash.</li>
                <li>Valid for a limited time only.</li>
              </ul>
            </div>

            {/* Copy Promo Code Button */}
            <div className="text-center">
              <button
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Copy Promo Code
              </button>
              <p className="text-gray-600 mt-4">Use code: <span className="font-bold">{promoCode}</span></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReferralBonus;
