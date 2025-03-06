import ContactSection from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/Contact-hero";
import FAQSection from "@/components/contact/faqSection";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default ContactPage;
