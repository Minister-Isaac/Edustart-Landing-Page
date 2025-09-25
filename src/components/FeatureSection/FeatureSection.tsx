import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:gap-45 items-center justify-between px-6 md:px-43 py-6 md:py-10 bg-white">
      {/* Text (second on mobile, first on desktop) */}
      <div className="order-2 md:order-1 max-w-lg text-center md:text-left mt-6 md:mt-0">
        <p className="text-4xl sm:text-5xl  md:text-4xl font-bold mb-6 leading-snug">
          Made for <span className="text-gray-900">Students.</span> <br />
          Perfect for <span className="text-gray-900">Teachers.</span>
        </p>

        <ul className="space-y-3 text-gray-700 text-base md:text-lg mb-6">
          <li className="flex items-start gap-2">
            <span className="text-xl">🙎‍♀️</span>
            <span>Teach visually with 3D interactive aids</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">🎥</span>
            <span>Engage your class like never before</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">📈</span>
            <span>Save data compared to video-heavy platform</span>
          </li>
        </ul>

        {/* Button: full width on mobile, auto width on desktop */}
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
          Watch Demo
        </button>
      </div>

      {/* Image (first on mobile, second on desktop) */}
      <div className="order-1 md:order-2 mt-6 md:mt-0 md:ml-8">
        <img
          src="/3rd screen.png"
          alt="3D Interactive Learning"
          className="w-full max-w-lg rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
