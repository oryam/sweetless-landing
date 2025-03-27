
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductHighlights from "../components/ProductHighlights";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductHighlights />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
