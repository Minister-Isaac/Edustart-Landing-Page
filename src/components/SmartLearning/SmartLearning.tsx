import React from "react";

const SmartLearning: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 md:py-16 max-w-6xl mx-auto md:gap-16">
      
      <div className="md:w-1/2 space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-center md:text-left">
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

        <button className="w-full md:w-auto px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          WATCH DEMO
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/isaac.png"
          alt="3D Learning demo"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default SmartLearning;
