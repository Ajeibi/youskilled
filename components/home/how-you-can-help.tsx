import Image from "next/image";

const HowYouCanHelp = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Be Part of the Change – Here’s How
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="border border-orange-500 rounded-xl overflow-hidden">
            <Image
              src="/home.webp"
              alt="Donate"
              width={600}
              height={400}
              className="w-full h-60 rounded-b-2xl object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">💳 Donate</h3>
              <p className="text-gray-600">
                Fund a student’s education and help break the cycle of poverty
              </p>
            </div>
          </div>

          <div className="border border-orange-500 rounded-xl overflow-hidden">
            <Image
              src="/home55.webp"
              alt="Partner with Us"
              width={600}
              height={400}
              className="w-full h-60 rounded-b-2xl object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">🤝 Partner with Us</h3>
              <p className="text-gray-600">
                Join as a corporate or nonprofit sponsor to amplify our impact
              </p>
            </div>
          </div>

          <div className="border border-orange-500 rounded-xl overflow-hidden">
            <Image
              src="/home66.webp"
              alt="Spread the Word"
              width={600}
              height={400}
              className="w-full h-60 rounded-b-2xl object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">📢 Spread the Word</h3>
              <p className="text-gray-600">
                Share our mission on social media and inspire others to act
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
