import React, { useRef } from "react";
import {
  FaBolt,
  FaGlobeAfrica,
  FaBullseye,
  FaVolumeUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiNginx } from "react-icons/si";

interface School {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const schools: School[] = [
  { id: 1, name: "Lorem ipsum", icon: <FaGlobeAfrica className="text-4xl text-gray-700" /> },
  { id: 2, name: "Lorem ipsum", icon: <FaBolt className="text-4xl text-gray-700" /> },
  { id: 3, name: "Lorem ipsum", icon: <FaBullseye className="text-4xl text-gray-700" /> },
  { id: 4, name: "Lorem ipsum", icon: <FaVolumeUp className="text-4xl text-gray-700" /> },
  { id: 5, name: "Lorem ipsum", icon: <SiNginx className="text-4xl text-gray-700" /> },
];

const TrustedSchools: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-6 md:pt-12 pb-12 bg-white px-5 md:px-20">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">
        Schools that trust us
      </h2>

      {/* Mobile View (Horizontal scroll with arrows) */}
      <div className="relative block md:hidden">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8 px-10 scroll-smooth"
        >
          {schools.map((school) => (
            <div
              key={school.id}
              className="flex flex-row items-center flex-shrink-0 justify-center text-gray-800 gap-3 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              {school.icon}
              <span className="text-base font-medium">{school.name}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Desktop View (Original grid, aligned + spaced) */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14">
        {schools.map((school) => (
          <div
            key={school.id}
            className="flex flex-row items-center justify-center text-gray-800 gap-3 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            {school.icon}
            <span className="text-lg font-medium">{school.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSchools;
