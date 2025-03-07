const DonateHero = () => {
  return (
    <section
      className="relative md:h-[80vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/donateHero.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex h-full py-5 max-w-7xl flex-col px-6 md:flex-row md:px-10 items-center">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="mb-5 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent md:mb-8 md:text-5xl lg:text-6xl">
            Make a Difference with Your Donation
          </h1>

          <p className="mb-4 text-base font-semibold uppercase text-orange-500 md:mb-6 md:text-base">
            Your generosity fuels change and transforms lives.
          </p>

          <p className="mb-8 text-sm text-gray-300 md:text-lg lg:text-xl">
            Every contribution you make helps provide essential resources,
            education, and support to those in need. Whether big or small, your
            donation empowers communities, creates opportunities, and builds a
            brighter future. Join us in making a lasting impact today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;
