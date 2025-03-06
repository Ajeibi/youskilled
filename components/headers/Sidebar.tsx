"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

const MobileMenuSheet = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden focus:outline-none">
          <Menu className="h-8 w-8 text-white" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-black text-white w-full sm:w-3/4 px-5 md:w-2/3"
      >
        <SheetTitle>
          <VisuallyHidden>Select Category</VisuallyHidden>
        </SheetTitle>
        <SheetHeader>
          <div className="flex items-center gap-2 pt-5">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <p className="font-normal great-vibes text-base text-orange-500 font-great-vibes">
              You-Skilled
            </p>
          </div>
        </SheetHeader>
        <div className="flex flex-col space-y-10 mt-10">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "font-bold border-l-4 border-orange-500 pl-4 text-white"
                    : "text-gray-400"
                } text-lg hover:border-l-4 hover:border-orange-500 hover:pl-4 transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}

          <SheetClose asChild>
            <Button variant="ocx" className="mt-[100px] w-full">
              <Link href="/donate">DONATE</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSheet;
