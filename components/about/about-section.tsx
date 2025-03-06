"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            About Our Organization
          </h2>

          <div className="space-y-6">
            <div className="items-start">
              <div className="flex gap-3 items-center">
                <div className="bg-orange-500 rounded-full p-2">
                  <Image
                    alt="icons"
                    src="/mission.svg"
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold">Our Mission</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 pt-4">
                Empowering underprivileged communities through skill development
                and job placement programs
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex gap-3 items-center">
                <div className="bg-orange-500 rounded-full p-2">
                  <Image alt="icons" src="/vision.svg" width={30} height={30} />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold">Our Vision</h3>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Creating a world where everyone has equal opportunities for
              economic growth
            </p>

            <div className="flex gap-4 items-start">
              <div className="flex gap-3 items-center">
                <div className="bg-orange-500 rounded-full p-2">
                  <Image alt="icons" src="/values.svg" width={30} height={30} />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold">Our Values</h3>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-600">
              Integrity, Inclusivity, Innovation, and Sustainable Impact
            </p>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/contactJoin.webp"
                alt="Our team working"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/cause11.webp"
                alt="Training workshop"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
