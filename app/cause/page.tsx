import CauseHero from "@/components/cause/hero";
import ImpactSection from "@/components/cause/our-impact";
import SolutionsSection from "@/components/cause/our-solution";
import StatisticsSection from "@/components/cause/the-problem";
import React from "react";

const CausePage = () => {
  return (
    <>
      <CauseHero />
      <StatisticsSection />
      <SolutionsSection />
      <ImpactSection />
    </>
  );
};

export default CausePage;
