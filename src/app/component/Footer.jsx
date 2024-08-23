import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Talkspace</h2>
          <p>
            &copy; {new Date().getFullYear()} Talkspace. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-md font-bold mb-2">Follow Us</h3>
            <nav className="space-x-4 flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn />
              </a>
            </nav>
          </div>
          {/* <div>
            <h3 className="text-md font-bold mb-2">Contact Us</h3>
            <p>Email: talim@talkspace.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Pondok Gusgas, Cibiru, Bandung</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
