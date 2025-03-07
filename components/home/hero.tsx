import Link from "next/link";
import CustomCountUp from "../countUp";
import { Button } from "../ui/button";

const HeroSection = () => {
  const donations = 1154372;
  const helped = 12460;
  return (
    <section
      className="relative md:h-[100vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex h-full py-5 max-w-7xl flex-col px-6 md:flex-row md:px-10 items-center">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="mb-5 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent md:mb-8 md:text-5xl lg:text-6xl">
            Empower Lives Through Skills:
          </h1>

          <p className="mb-4 text-base font-semibold uppercase text-orange-500 md:mb-6 md:text-base">
            Transform a Future Today!
          </p>

          <p className="mb-8 text-sm text-gray-300 md:text-lg lg:text-xl">
            Your support helps underprivileged individuals gain valuable skills,
            break barriers, and achieve financial independence.
          </p>
          <Link href="/donate">
            <Button variant="ocx" className="">
              DONATE
            </Button>
          </Link>
          <div className="md:py-10 py-5 flex gap-5 text-white  text-base md:text-lg lg:text-2xl">
            <div className="flex gap-3">
              <span className="text-orange-500">
                <CustomCountUp
                  start={0}
                  end={donations}
                  duration={2}
                  separator=","
                  decimals={0}
                />
              </span>
              <p className="md:text-base text-sm">Donation</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500">
                <CustomCountUp
                  start={0}
                  end={helped}
                  duration={2}
                  separator=","
                  decimals={0}
                />
              </span>
              <p className="md:text-base text-sm">People Helped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
