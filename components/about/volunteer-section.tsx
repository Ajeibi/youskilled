"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const VolunteersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [direction, setDirection] = useState(0);
  const prevIndexRef = useRef(currentIndex);

  const volunteers = [
    {
      name: "Sarah Johnson",
      image: "/vol1.webp",
      social: ["/X.svg", "/Instagram.svg"],
    },
    {
      name: "Michael Chen",
      image: "/vol2.webp",
      social: ["/X.svg", "/Instagram.svg"],
    },
    {
      name: "Priya Sharma",
      image: "/vol3.webp",
      social: ["/X.svg", "/Instagram.svg"],
    },
    {
      name: "David Kim",
      image: "/vol4.webp",
      social: ["/X.svg", "/Instagram.svg"],
    },
    {
      name: "Zara Mohamed",
      image: "/vol5.webp",
      social: ["/X.svg", "/Instagram.svg"],
    },
    {
      name: "Luis Fernandez",
      image: "/vol6.webp",
      social: ["/X.svg", "/Instagram.svg"],
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = useMemo(() => {
    if (windowSize >= 1024) return 3;
    if (windowSize >= 768) return 2;
    return 1;
  }, [windowSize]);

  const totalSlides = Math.ceil(volunteers.length / itemsPerSlide);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, totalSlides - 1));
  }, [totalSlides]);

  useEffect(() => {
    const prevIndex = prevIndexRef.current;
    if (currentIndex > prevIndex) setDirection(1);
    else if (currentIndex < prevIndex) setDirection(-1);
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  useEffect(() => {
    if (itemsPerSlide !== 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [itemsPerSlide, totalSlides]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Volunteers
      </h2>
      <div className="relative overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) {
                setDirection(1);
                setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
              } else if (offset.x > 50) {
                setDirection(-1);
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
              }
            }}
            className="flex w-full"
          >
            {volunteers
              .slice(
                currentIndex * itemsPerSlide,
                (currentIndex + 1) * itemsPerSlide
              )
              .map((volunteer, idx) => (
                <div
                  key={idx}
                  style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
                  className="p-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg shadow-lg overflow-hidden"
                  >
                    <Image
                      src={volunteer.image}
                      alt={`Volunteer ${volunteer.name}`}
                      width={600}
                      height={600}
                      className="w-full h-150 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">{volunteer.name}</h3>
                      <p className="text-orange-500 text-base">Volunteer</p>
                      <div className="flex justify-center gap-4 mt-4">
                        {volunteer.social.map((platform) => (
                          <motion.a
                            key={platform}
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-500 hover:text-orange-500"
                          >
                            <Image
                              src={platform}
                              alt={`${platform.replace(/\.\w+$/, "")} icon`}
                              width={30}
                              height={30}
                            />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default VolunteersSection;
