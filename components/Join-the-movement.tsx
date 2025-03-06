import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const JoinUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5 md:px-14 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6">
              <FaQuoteLeft className="text-orange-300" size={80} />

              <h2 className="text-3xl lg:text-4xl font-bold md:pt-10 my-4">
                Join Us in Making a Difference
              </h2>
              <p className="text-gray-600 text-xl mb-4">
                Your support transforms lives. By joining our community, you
                help provide education, mentorship, and resources to
                underprivileged individuals across Africa. Together, we&aposre
                building sustainable futures through skill development and
                empowerment programs.
              </p>
              <p className="text-orange-500 font-medium great-vibes">
                – Ajeibi Oche
              </p>
            </div>
          </div>

          <div className="flex-1 relative rounded-lg overflow-hidden">
            <Image
              src="/join.webp"
              alt="Community empowerment"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
