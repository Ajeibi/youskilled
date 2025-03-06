import Image from "next/image";

interface Solution {
  title: string;
  description: string;
  icon: string;
}

const solutions: Solution[] = [
  {
    title: "Mentorship & Guidance",
    description:
      "Offering mentorship and career guidance to help individuals explore opportunities, develop essential skills, and make informed decisions that lead to long-term success and financial independence.",
    icon: "/youskill36.webp",
  },
  {
    title: "Skills Acquisition",
    description:
      "Equipping individuals with hands-on, job-ready skills that empower them to earn a sustainable income, achieve self-sufficiency, and build a better future.",
    icon: "/cause10.webp",
  },
  {
    title: "Arts & Crafts Training",
    description:
      "Empowering individuals with creative skills in arts, crafts, and design, equipping them with the tools to generate income, start their own businesses, and achieve long-term financial independence through their talents.",
    icon: "/aboutJoin.webp",
  },
  {
    title: "Agriculture & Farming",
    description:
      "Providing communities with sustainable farming knowledge, modern agricultural techniques, and essential resources to improve food security, create economic opportunities, and promote self-sufficiency.",
    icon: "/causeJoin.webp",
  },
  {
    title: "Entrepreneurship & Small Business Support",
    description:
      "Empowering individuals to pursue self-employment by providing entrepreneurship training, business development support, and access to resources, fostering economic growth and long-term financial stability.",
    icon: "/cause9.webp",
  },
  {
    title: "Access to Learning Resources",
    description:
      "Ensuring that individuals in underprivileged communities have access to essential educational tools, digital resources, and technology, empowering them to enhance their skills, pursue knowledge, and unlock better opportunities for personal and professional growth.",
    icon: "/casssss.webp",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Solution – How We’re Making a Difference
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-orange-500/20 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={solution.icon}
                  alt={`${solution.title} icon`}
                  width={200}
                  height={200}
                  className="mb-4 w-full h-60 rounded-2xl object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 p-3">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
