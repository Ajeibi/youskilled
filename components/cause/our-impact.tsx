import Image from "next/image";

const ImpactSection = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Real Lives, Real Change
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-orange-500/5 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/user2.webp"
              alt="Aisha’s avatar"
              width={128}
              height={128}
              className="rounded-full border-4 border-white shadow-sm"
            />

            <blockquote className="md:text-base text-sm italic text-gray-700 mt-4">
              &quot;Before joining the You-Skilled Program, I had the passion
              and drive to start my own business but lacked the necessary skills
              and guidance. Through their training and support, I learned how to
              manage a business, develop my skills, and access the right
              resources. Today, I successfully run my own business and have the
              privilege of employing others from my community, creating
              opportunities for those who once faced the same struggles as I
              did.&quot;
            </blockquote>
          </div>
        </div>

        <div className="flex-1 bg-orange-500/5 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/user1.webp"
              alt="Kwame’s avatar"
              width={128}
              height={128}
              className="rounded-full border-4 border-white shadow-sm"
            />

            <blockquote className="md:text-base text-sm italic text-gray-700 mt-4">
              &quot;For a long time, I struggled to find a stable job and
              provide for my family. Opportunities were scarce, and I lacked the
              necessary skills to break into a well-paying career. Thanks to the
              You-Skilled Program, I received the training and mentorship I
              needed to enter the tech industry. Today, I have a fulfilling job,
              financial stability, and the ability to support my family, giving
              us hope for a better future&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
