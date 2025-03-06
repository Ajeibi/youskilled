"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { src: "/partner1.svg", alt: "Partner 1" },
  { src: "/partner2.svg", alt: "Partner 2" },
  { src: "/partner3.svg", alt: "Partner 3" },
  { src: "/partner4.svg", alt: "Partner 4" },
  { src: "/partner5.svg", alt: "Partner 5" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners & Supporters</h2>

        {/* Desktop View */}
        <div className="hidden lg:flex gap-12 mb-8 justify-between items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={100}
                height={50}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden overflow-hidden relative h-24">
          <motion.div
            className="flex items-center absolute"
            initial={{ x: 0 }}
            animate={{
              x: [-partners.length * 180, 0],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 px-4">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={100}
                  height={50}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
