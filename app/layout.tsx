import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/headers/NavBar";
import DonateCTA from "@/components/cta";
import JoinUs from "@/components/Join-the-movement";
import PartnersSection from "@/components/partners";
import Footer from "@/components/headers/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "You-Skilled Fundraiser",
  description:
    "Empowering underprivileged communities through skills training, mentorship, and education to create sustainable career opportunities.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
    other: {
      rel: "apple-touch-icon",
      url: "/logo.svg",
    },
  },
  keywords:
    "fundraiser, skills training, mentorship, education, community empowerment",
  authors: [{ name: "Ajeibi Oche Francis", url: "https://github.com/Ajeibi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="max-w-[1600px] mx-auto bg-white min-h-screen">
          <Navbar />
          {children}
          <JoinUs />
          <PartnersSection />
          <DonateCTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
