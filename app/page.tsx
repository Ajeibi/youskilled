import FundAllocation from "@/components/home/Allocation";
import HeroSection from "@/components/home/hero";
import HowWeHelp from "@/components/home/how-we-help";
import HowYouCanHelp from "@/components/home/how-you-can-help";
import TheNeed from "@/components/home/need";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TheNeed />
      <HowWeHelp />
      <HowYouCanHelp />
      <FundAllocation />
    </>
  );
};

export default HomePage;
