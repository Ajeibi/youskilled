"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState<string>("item-1");

  const faqs = [
    {
      id: "item-1",
      question: "What programs do you offer?",
      answer:
        "We offer skill development programs in tech, entrepreneurship, and vocational training...",
    },
    {
      id: "item-2",
      question: "How can I volunteer?",
      answer:
        "Visit our volunteer page to apply and select your preferred engagement type...",
    },
    {
      id: "item-3",
      question: "Are donations tax-deductible?",
      answer:
        "Yes, all donations are 100% tax-deductible under section 501(c)(3)...",
    },
    {
      id: "item-4",
      question: "What communities do you serve?",
      answer:
        "We currently operate in 15 countries across Africa and Southeast Asia...",
    },
  ];

  useEffect(() => {
    const element = document.getElementById(activeItem);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeItem]);

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="order-1 md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Find answers to common questions about our programs and initiatives
          </p>
        </div>

        {/* Right Column */}
        <div className="order-2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            onValueChange={(value) => setActiveItem(value)}
            className="rounded-lg border shadow-sm"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b last:border-b-0"
              >
                <AccordionTrigger className="flex items-center justify-between p-4 md:p-6 hover:bg-gray-100 transition rounded-t-lg">
                  <span className="text-lg md:text-xl font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 md:h-6 md:w-6 text-gray-500 transition-transform ${
                      activeItem === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </AccordionTrigger>
                <AccordionContent className="p-4 md:p-6 text-gray-600 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
