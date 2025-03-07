import Link from "next/link";
import { Button } from "../ui/button";

const ContactHero = () => {
  return (
    <section
      className="relative md:h-[80vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/contactHero.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex h-full py-5 max-w-7xl flex-col px-6 md:flex-row md:px-10 md:justify-end items-center">
        <div className="md:w-2/3 lg:w-1/2 md:ml-auto md:mr-0">
          <h1 className="mb-5 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent md:mb-8 md:text-5xl lg:text-6xl">
            Every Act of Kindness Counts
          </h1>

          <p className="mb-4 text-base font-semibold uppercase text-orange-500 md:mb-6 md:text-base">
            Get in Touch & Make an Impact
          </p>

          <p className="mb-8 text-sm text-gray-300 md:text-lg lg:text-xl">
            Whether you want to donate, volunteer, or collaborate, we’re here to
            connect with you.
          </p>
          <Link href="/donate">
            <Button variant="ocx" className="mr-auto md:mr-0">
              DONATE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
