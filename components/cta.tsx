const DonateCTA = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/donate.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          Make a Difference – Empower a Future
        </h2>
        <p className="max-w-md md:max-w-lg text-white text-lg md:text-xl mb-8">
          Your donation provides education, mentorship, and essential resources
          to underprivileged communities. Every contribution creates lasting
          impact.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonateCTA;
