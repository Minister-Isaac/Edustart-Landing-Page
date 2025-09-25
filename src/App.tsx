import { useState, useEffect } from "react";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import FirstScreen from "./components/First-Screen/First-Screen";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProductCategories from "./components/ProductCards/ProductCards";
import TrustedSchools from "./components/Schools/Schools";
import SmartLearning from "./components/SmartLearning/SmartLearning";
import SmartTextbook from "./components/SmartTextBook/SmartTextBook";
import Static from "./components/Static/Static";
import StudySection from "./StudySection/StudySection";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {isDesktop && <FirstScreen />}
      <TrustedSchools />
      <Static />
      <FeatureSection />
      <StudySection />
      <SmartLearning />
      <SmartTextbook />
      <ProductCategories />
      <Footer />
    </div>
  );
}

export default App;
