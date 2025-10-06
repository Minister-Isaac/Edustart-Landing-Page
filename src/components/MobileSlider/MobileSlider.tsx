import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileSlider: React.FC = () => {
  const images: string[] = [
    "/assets/mobile1.png",
    "/assets/mobile2.png",
    "/assets/mobile3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="text-center px-4 py-8 md:hidden">
      {/* Text Section */}
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold leading-snug text-gray-900">
          The Future of{" "}
          <span className="text-blue-600 font-semibold">Learning</span> is Here
          — A
        </h2>
        <h3 className="text-lg font-semibold mt-2 text-gray-800">
          Smart Textbook for Smarter Minds
        </h3>
        <p className="text-sm text-gray-600 mt-3">
          Interactive 3D models, offline access, and faster exam prep — all in
          one powerful learning tool.
        </p>
      </div>

      {/* Slider Section */}
      <div className="mt-6 max-w-sm mx-auto">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt={`slide-${i}`}
                className="mx-auto w-4/5 max-w-xs rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all">
          Watch Demo
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MobileSlider;
