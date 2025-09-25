import { motion } from "framer-motion";

const StudySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-8 md:py-16 max-w-6xl mx-auto md:gap-16">
      {/* Left content (second on mobile, first on desktop) */}
      <div className="order-2 md:order-1 md:w-1/2 space-y-6 mt-6 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
          What if <span className="text-lime-500">studying</span> felt less like memorizing—and more like{" "}
          <span className="text-blue-900">discovering?</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Imagine learning biology by rotating a DNA strand in your hand. Or understanding physics by watching forces move
          in real-time. With our Smart Textbook, complex concepts become clear, fun, and unforgettable.
        </p>
        <button className="w-full md:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          WATCH DEMO
        </button>
      </div>

      {/* Right content - animated squares (first on mobile, second on desktop) */}
      <div className="order-1 md:order-2 md:w-1/2 flex justify-center mt-0 md:mt-0">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-6 md:mb-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-purple-700 rounded-sm"
              initial={{ rotate: i * 10 }}
              animate={{ rotate: [i * 10, i * 10 + 20, i * 10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          ))}
          <motion.div
            className="absolute inset-8 bg-pink-600"
            animate={{ rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default StudySection;
