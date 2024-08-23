"use client";

import React from "react";
// import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Header  from "@/component/Header"


import { FaStethoscope, FaRobot } from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { redirect } from "next/dist/server/api-utils";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-500 hover:bg-purple-700 rounded-full p-2 cursor-pointer transition-all duration-300 mr-2"
        style={{ right: "-25px" }}
      >
        <div className="text-white">→</div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-500 hover:bg-purple-700 rounded-full p-2 cursor-pointer transition-all duration-300 ml-2"
        style={{ left: "-25px" }}
      >
        <div className="text-white">←</div>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <div className="body-content">
        {/* Section 1 */}
        <div className="flex flex-col justify-center items-center py-20 px-10 bg-gradient-to-r from-purple-500 to-purple-700 text-white">
          <div className="text-center mb-10">
            <h1
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Empowering Your Mental Health Journey
            </h1>
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
          <div className="features-section grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-item flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="icon-wrapper bg-white p-4 rounded-full mb-4">
                <FaStethoscope size={50} className="text-purple-700" />
              </div>
              <p className="text-xl font-semibold">Chat with Doctor</p>
            </div>
            <Link href={"/chat"}>
              <div className="feature-item flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="icon-wrapper bg-white p-4 rounded-full mb-4">
                  <FaRobot size={50} className="text-gray-500" />
                </div>
                <p className="text-xl font-semibold">Chat with AI</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Section 2 */}
        <div className="py-20 px-10 bg-white text-purple-700">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Exciting Offers
            </h2>
          </div>
          <Slider {...settings} className="relative">
            <div className="p-4">
              <Link href="/promo/discount-new-user">
                <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4">
                    Discount for New Users
                  </h3>
                  <p>Get Rp20,000 cashback on your first consultation.</p>
                </div>
              </Link>
            </div>
            <div className="p-4">
              <Link href="/promo/specialist-exclusion">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4">
                    Specialist Exclusion
                  </h3>
                  <p>Valid for all specialists except Dermatologists.</p>
                </div>
              </Link>
            </div>
            <div className="p-4">
              <Link href="/promo/referral-bonus">
                <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4">Referral Bonus</h3>
                  <p>Earn Rp50,000 for every successful referral.</p>
                </div>
              </Link>
            </div>
          </Slider>
        </div>

        {/* Section 3 */}
        <div className="py-20 px-10 bg-white text-purple-700">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mental Health Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <a
                href="https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Building Better Mental Health
                  </h3>
                  <p>
                    Tips and strategies for improving mental health and
                    well-being.
                  </p>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a
                href="https://www.apa.org/monitor/2023/01/trends-improving-youth-mental-health"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Trends in Improving Youth Mental Health
                  </h3>
                  <p>
                    Recent trends and insights on improving mental health for
                    youth.
                  </p>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a
                href="https://www.siloamhospitals.com/en/informasi-siloam/artikel/apa-itu-mental-health"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    What is Mental Health?
                  </h3>
                  <p>Introduction to mental health and its importance.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
