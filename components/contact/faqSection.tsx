"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState<string>("item-1");

  const faqs = [
    {
      id: "item-1",
      question: "What programs do you offer?",
      answer:
        "We offer skill development programs tailored for underprivileged communities, focusing on tech, entrepreneurship, and vocational training. Our initiatives include hands-on coding workshops, small business development courses, and practical trade skills such as carpentry, electrical work, and digital marketing. These programs aim to empower individuals with the knowledge and experience needed to secure better job opportunities and build sustainable livelihoods.",
    },
    {
      id: "item-2",
      question: "How can I volunteer?",
      answer:
        "We welcome volunteers passionate about supporting underprivileged communities through education and skill development. Visit our contact page and leave a message to express your interest. You can choose to mentor, train, or assist in various programs, including tech education, entrepreneurship workshops, and vocational training. Your involvement can make a lasting impact on those striving for better opportunities",
    },
    {
      id: "item-3",
      question: "Are donations tax-deductible?",
      answer:
        "Yes, all donations are 100% tax-deductible under section 501(c)(3). Your contributions directly support skill development programs for underprivileged communities, including tech education, entrepreneurship training, and vocational workshops. Upon donating, you will receive a receipt for tax purposes. We appreciate your generosity in helping us create lasting opportunities for those in need.",
    },
    {
      id: "item-4",
      question: "What communities do you serve?",
      answer:
        "We currently operate in 15 countries across Africa and Southeast Asia, focusing on underprivileged communities with limited access to education and job opportunities. Our programs provide skill development in tech, entrepreneurship, and vocational training, empowering individuals to build sustainable livelihoods. Through strategic partnerships and local engagement, we strive to create lasting impact where it is needed most.",
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
        <div className="order-1 md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Find answers to common questions about our programs and initiatives
          </p>
        </div>

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
