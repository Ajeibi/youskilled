"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import MobileMenuSheet from "./Sidebar";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white font-light py-4 px-5 md:px-20 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="font-normal great-vibes text-orange-500 font-great-vibes">
          You-Skilled
        </p>
      </div>

      <div className="hidden md:flex space-x-6 font-extralight">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-white great-vibes font-bold underline decoration-orange-500 underline-offset-10"
                : "text-gray-400"
            } font-medium hover:underline hover:decoration-orange-500 hover:underline-offset-2`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <MobileMenuSheet />

        <Button variant="ocx" className="hidden md:inline-flex">
          <Link href="/donate">DONATE</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
