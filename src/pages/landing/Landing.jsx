// src/pages/landing/Landing.jsx
import React from 'react';
import Navbar from "../../components/organismos/Navbar";
import HeroSection from "../../components/organismos/HeroSection";
import FeatureSection from "../../components/organismos/FeatureSection";
import Workflow from "../../components/organismos/Workflow";
import Footer from "../../components/organismos/Footer";
import Pricing from "../../components/organismos/Pricing";
import Testimonials from "../../components/organismos/Testimonials";
import TransitionWrapper from '../../components/organismos/TransitionWrapper';

const Landing = () => {
  return (
    <TransitionWrapper>
      <Navbar />
      <div className=" px-32 pt-20 bg-[url('../background.png')]">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </TransitionWrapper>
  );
};

export default Landing;
