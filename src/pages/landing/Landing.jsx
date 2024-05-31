import Navbar from "../../components/organismos/Navbar";
import HeroSection from "../../components/organismos/HeroSection";
import FeatureSection from "../../components/organismos/FeatureSection";
import Workflow from "../../components/organismos/Workflow";
import Footer from "../../components/organismos/Footer";
import Pricing from "../../components/organismos/Pricing";
import Testimonials from "../../components/organismos/Testimonials";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
