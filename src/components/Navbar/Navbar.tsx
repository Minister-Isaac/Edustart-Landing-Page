import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleActive = (page: string) => {
    setActive(page);
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Edustart Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Products", "Gallery"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => handleActive(item)}
              className={`font-medium transition ${
                active === item
                  ? "text-[#5580D4] border-b-2 border-[#5580D4]"
                  : "text-gray-600 hover:text-[#5580D4]"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            onClick={() => handleActive("Contact Us")}
            className={`px-3 py-1.5 rounded-md shadow transition text-sm ${
              active === "Contact Us"
                ? "bg-[#5580D4] text-white"
                : "bg-[#5580D4] text-white hover:bg-[#4a72bf]"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* 🔹 Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={handleToggle}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
          {["Home", "Products", "Gallery"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => handleActive(item)}
              className={`block font-medium ${
                active === item
                  ? "text-[#5580D4] border-l-4 border-[#5580D4] pl-2"
                  : "text-gray-600 hover:text-[#5580D4]"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            onClick={() => handleActive("Contact Us")}
            className={`block px-4 py-2 rounded-md shadow ${
              active === "Contact Us"
                ? "bg-[#5580D4] text-white"
                : "bg-[#5580D4] text-white hover:bg-[#4a72bf]"
            }`}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
