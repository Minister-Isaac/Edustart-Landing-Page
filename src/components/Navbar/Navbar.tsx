import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleActive = (page: string) => {
    setActive(page);
    setIsOpen(false); // close menu on mobile after selecting
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Edustart Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-blue-600">edustart</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Products", "Gallery"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => handleActive(item)}
              className={`font-medium transition ${
                active === item
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            onClick={() => handleActive("Contact Us")}
            className={`px-4 py-2 rounded-md shadow transition ${
              active === "Contact Us"
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={handleToggle}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
          {["Home", "Products", "Gallery"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => handleActive(item)}
              className={`block font-medium ${
                active === item
                  ? "text-blue-600 border-l-4 border-blue-600 pl-2"
                  : "text-gray-600 hover:text-blue-600"
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
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
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
