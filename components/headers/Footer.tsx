import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-12 items-center">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2 mb-6 lg:mb-0">
            <Image
              src="/logo.svg"
              alt="Organization Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="font-normal text-2xl text-orange-500 font-great-vibes">
              You-Skilled
            </p>
          </div>

          <div className="flex flex-col md:flex-row text-center md:gap-10 gap-3 lg:gap-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500">
          © {new Date().getFullYear()} You-Skilled. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
