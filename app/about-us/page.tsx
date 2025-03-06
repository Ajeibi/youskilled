import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/about/hero";
import ImpactStory from "@/components/about/impact-story";
import VolunteersSection from "@/components/about/volunteer-section";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <ImpactStory />
      <AboutSection />
      <VolunteersSection />
    </>
  );
};

export default AboutPage;
