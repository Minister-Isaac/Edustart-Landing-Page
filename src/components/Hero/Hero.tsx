import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-[700] text-gray-900 leading-snug">
          The Future of{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-600">Learning</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-purple-400"></span>
          </span>{" "}
          is Here – A
          <br className="hidden md:block" />
          <span className="md:inline block mt-2">
            Smart Textbook for Smarter Minds
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 px-2">
          Interactive 3D models, offline access, and faster exam prep—all in one
          powerful learning tool.
        </p>

        {/* Image - Mobile Only */}
        <div className="mt-6 md:hidden">
          <img
            src="/1st screen.png" // replace with your actual image path
            alt="Mobile Preview"
            className="w-full rounded-lg shadow"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex justify-center gap-3 flex-wrap">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition text-sm font-semibold text-center"
          >
            WATCH DEMO
          </a>
          <a
            href="#"
            className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition text-sm font-semibold text-center"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
