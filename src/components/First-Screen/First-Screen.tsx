import React, { useState, useEffect } from "react";

const FirstScreen: React.FC = () => {
  const images = ["/1st screen.png", "/class rime.png", "/iPhone.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full md:w-[80%] lg:w-[70%] max-w-5xl overflow-hidden rounded-lg flex justify-center items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className={`max-h-[90vh] object-contain ${
                  src.includes("iPhone")
                    ? "scale-90 md:scale-100" // ensures full phone fits
                    : src.includes("easy prep")
                    ? "scale-90 md:scale-75"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
