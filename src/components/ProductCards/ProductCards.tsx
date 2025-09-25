import type { FC } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  logo: string;
}

const ProductCard: FC<ProductCardProps> = ({ title, subtitle, logo }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-3 w-full">
      {/* Card with badge + image */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-4 w-full hover:shadow-lg transition-shadow">
        <div className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full self-center md:self-start">
          Our Products
        </div>
        <img src={logo} alt={title} className="h-20 md:h-24 object-contain" />
      </div>

      {/* Texts below the card */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="text-gray-500 text-sm">{subtitle}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button className="flex items-center text-blue-600 text-sm font-medium mt-1 hover:underline">
          View <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ProductCategories: FC = () => {
  const products = [
    {
      title: "Easy Prep Ai",
      subtitle: "for students",
      logo: "/easyprep.png",
    },
    {
      title: "Classs-fi",
      subtitle: "for private tutors",
      logo: "/class-fi.png",
    },
    {
      title: "Class - Prime",
      subtitle: "for schools",
      logo: "/classprime.png",
    },
  ];

  return (
    <section className="bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Choose the categories that Best fit you
          </h2>
          <button className="flex items-center justify-center text-blue-600 font-medium hover:underline">
            Explore Products <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
