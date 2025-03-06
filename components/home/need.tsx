import Image from "next/image";

const TheNeed = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20 md:my-20 my-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div className="order-1 md:order-2">
          <h2 className="mb-3 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-xl md:text-3xl font-bold text-transparent lg:text-4xl">
            Transforming Good Intentions into Good Actions
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase text-orange-500 md:text-base">
            Millions Struggle with Unemployment – We Can Change That!
          </p>
          <p className="mb-8 text-gray-600 dark:text-gray-300 text-base">
            Across many underprivileged communities, lack of access to education
            and skills training keeps people trapped in poverty. The You-Skilled
            Program provides practical training, mentorship, and resources to
            help individuals secure jobs and build a better future.
          </p>

          <div className="grid grid-cols-2 lg:px-5 lg:gap-6 md:gap-3 gap-2">
            {[
              "Interactive workshops",
              "Hands-on training",
              "1:1 mentorship",
              "Guidance for growth",
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

        <div className="order-2 md:order-1 h-96 md:h-auto">
          <Image
            src="/need.webp"
            alt="Skill development illustration"
            width={600}
            height={400}
            className="h-full w-full object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TheNeed;
