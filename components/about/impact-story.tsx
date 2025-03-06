import Image from "next/image";

const ImpactStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl shadow-md">
            <Image
              src="/founder.webp"
              alt="Impact Story"
              width={800}
              height={800}
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-4 md:p-0">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              Make a Difference, Support Those in Need.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:text-base text-sm">
              <p className="text-gray-700">
                Our programs have positively impacted over 10,000 lives by
                providing essential skill development, vocational training, and
                access to quality education. Through these initiatives,
                individuals have gained the knowledge and resources needed to
                build sustainable careers, achieve financial independence, and
                uplift their communities.
              </p>
              <p className="text-gray-700">
                Community-driven initiatives foster long-term, sustainable
                change by equipping individuals with the skills, resources, and
                support needed to create economic opportunities, uplift their
                communities, and break the cycle of poverty.
              </p>
            </div>

            <div className="p-6">
              <div className="items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="font-semibold great-vibes text-base text-orange-500">
                    Ajeibi Oche
                  </p>
                  <p className="text-sm text-gray-600">Founder</p>
                </div>
                <div className="">
                  <Image
                    src="/signature.svg"
                    alt="Director's Signature"
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStory;
