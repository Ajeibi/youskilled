import Image from "next/image";

const HowWeHelp = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            How We Help – Our Approach
          </h2>
          <p className="text-lg text-gray-600">
            From Learning to Earning – A Life-Changing Journey
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                Training Programs
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                Hands-on training in crafts, repairs, and more
              </p>
              <div className="grid grid-cols-1 lg:px-5 lg:gap-6 md:gap-3 gap-2">
                {[
                  "Crafts and Handicrafts – Teaching skills like pottery, tailoring, weaving, and wood carving to promote creativity and self-employment.",
                  "Basic Repairs and Maintenance – Providing training in electrical, plumbing, and mechanical repairs for practical problem-solving and livelihood opportunities.",
                  "Tailoring and Stitching – Equipping individuals with sewing, embroidery, and fabric design skills for personal use or business ventures",
                  "Upcycling and Sustainable Production – Encouraging the reuse of materials to create eco-friendly products, reducing waste, and promoting sustainability.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/cause12.webp"
                alt="Training Program"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                Skill Development
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                Hands-on training for sustainable agricultural practices
              </p>
              <div className="grid grid-cols-1 lg:px-5 lg:gap-6 md:gap-3 gap-2">
                {[
                  "Soil Health Management – Teaching composting, crop rotation, and organic fertilizers to maintain soil fertility and prevent degradation.",
                  "Water Conservation Techniques – Training on drip irrigation, rainwater harvesting, and efficient water management to reduce wastage.",
                  "Eco-Friendly Pest and Weed Control – Using biological pest control, companion planting, and natural repellents to minimize chemical use.",
                  "Agroforestry and Crop Diversification – Promoting mixed farming systems that integrate trees and diverse crops to enhance productivity and sustainability.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/causeHome.webp"
                alt="Skill Development"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                Mentorship & Career Support
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                Guiding individuals toward sustainable development
              </p>
              <div className="grid grid-cols-1 lg:px-5 lg:gap-6 md:gap-3 gap-2">
                {[
                  "Education and Awareness – Promoting knowledge about sustainable practices, environmental conservation, and responsible resource management.",
                  "Skill Development and Employment – Equipping individuals with skills for green jobs and sustainable livelihoods to ensure economic and environmental balance.",
                  "Encouraging Eco-Friendly Practices – Advocating for reduced waste, renewable energy use, and sustainable consumption habits in daily life.",
                  "Community Engagement and Empowerment – Involving people in local sustainability projects and decision-making to foster long-term commitment to sustainable development.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/home2.webp"
                alt="Mentorship"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                Tools & Resources
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                Providing essential tools and basic amenities for better living
              </p>
              <div className="grid grid-cols-1 lg:px-5 lg:gap-6 md:gap-3 gap-2">
                {[
                  "Access to Clean Water and Sanitation – Ensuring availability of safe drinking water and proper sanitation facilities to improve health and hygiene.",
                  "Affordable Housing and Shelter – Providing secure and adequate housing to enhance living standards and reduce homelessness.",
                  "Basic Healthcare Services – Ensuring access to essential medical care, vaccinations, and preventive health measures for overall well-being.",
                  "Sustainable Energy and Infrastructure – Developing reliable electricity, transportation, and communication systems to support daily life and economic growth.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/home3.webp"
                alt="Tools"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
