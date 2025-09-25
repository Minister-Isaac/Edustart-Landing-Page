import React from "react";

const SmartLearning: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-6 md:pt-16 pb-8 md:pb-16 max-w-6xl mx-auto md:gap-16">
      
      {/* Image (mobile first, desktop second) */}
      <div className="md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src="/isaac.png"
          alt="3D Learning demo"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>

      {/* Text content + button (mobile second, desktop first) */}
      <div className="md:w-1/2 space-y-4 md:space-y-6 order-2 md:order-1 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Learning, Made Smarter <br /> in 3 Simple Steps
        </h2>

        <ol className="list-decimal list-inside text-gray-600 space-y-2 md:space-y-3">
          <li>
            Open your smart textbook <span className="text-gray-400">→ (works offline)</span>
          </li>
          <li>
            Tap any concept <span className="text-gray-400">→ (see it in 3D)</span>
          </li>
          <li>
            Explore, learn &amp; retain{" "}
            <span className="text-gray-400">→ (study faster, remember longer)</span>
          </li>
        </ol>

        {/* Button always inside text, but styled for full width on mobile */}
        <button className="w-full md:w-auto px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default SmartLearning;
