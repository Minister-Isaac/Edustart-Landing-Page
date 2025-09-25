// src/components/Footer.tsx
import type { FC } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#142b4d] text-white pt-10 pb-6 px-6 relative">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        {/* Logo (image) */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo.png" /* <-- replace with your logo path */
            alt="Edustart Tech Logo"
            className="w-36 object-contain"
          />
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-gray-200">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-gray-200">RESOURCES</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Schools</a></li>
            <li><a href="#" className="hover:text-white">Teachers</a></li>
            <li><a href="#" className="hover:text-white">Students</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-gray-200">HELP</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms Of Service</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-gray-200">FOLLOW US</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright (always at the base, centered) */}
      <div className="mt-10">
        <p className="text-center text-sm text-gray-400">
          © {year} Edustartech. All rights reserved.
        </p>
      </div>

      {/* Floating scroll-to-top button */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
