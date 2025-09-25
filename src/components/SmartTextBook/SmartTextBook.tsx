import React from "react";

const SmartTextbook: React.FC = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-12 px-6 md:px-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left side */}
        <div className="md:w-1/3 space-y-6 text-center md:text-left">
          <h3 className="text-sm tracking-widest font-semibold text-blue-200 uppercase">
            Smart Textbook
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Learning is better when you can see, touch, and explore.
          </h1>
          <button className="w-full md:w-auto px-6 py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            WATCH DEMO
          </button>
        </div>

        {/* Middle image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/iPhone.png" 
            alt="Smart textbook phone preview"
            className="w-full max-w-xs sm:max-w-sm md:w-[300px] drop-shadow-2xl"
          />
        </div>

        {/* Right side */}
        <div className="md:w-1/3 space-y-5 text-center md:text-left">
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>🚀</span> Smarter exam preparation
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>🎥</span> Interactive 3D study models
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>✨</span> Learn faster, remember more
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>💻</span> Study anywhere—even offline
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SmartTextbook;
