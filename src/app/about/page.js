"use client";

import GetStarted from "@/components/GetStarted";
import Image from "next/image";
import ClientLogoSection from "@/components/About/ClientLogoSection";
import AboutCardSection from "@/components/About/AboutCardSection";

export default function AboutPage() {
  return (
    <div className="w-full py-12 p-0 overflow-x-hidden">
      {/* Hero Section */}

      <section className="text-center mb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold text-[#313332] text-4xl sm:text-5xl lg:text-6xl leading-tight">
          About Us
        </h1>
        <p className="mt-4 text-base text-[#646966] leading-relaxed">
          Here’s what brings you to the table and what we offer and how our
          eCommerce site evolved through.
        </p>
      </section>

      {/* Image + Intro Section */}
      <section className="max-w-[83rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20 px-4 sm:px-6 lg:px-8">
        {/* Left: Image */}
        <div className=" h-[300px] sm:h-[350px] md:h-[400px] lg:h-[286px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/about.jpg"
            alt="About Lungta.biz"
            width={674}
            height={286}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Right: Text + Button */}
        <div className="text-gray-700 space-y-6">
          <p className="text-base sm:text-lg text-left font-[500] leading-relaxed">
            Welcome to{" "}
            <a
              href="https://lungta.biz"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://lungta.biz
            </a>
            , a comprehensive eCommerce and business management platform
            developed by Dots and Dashes Technology Services Pvt. Ltd. We are
            dedicated to helping businesses of all sizes establish and grow
            their online presence with a full suite of integrated solutions
            designed for the modern marketplace.
          </p>
          <div className="w-30">
            <GetStarted  />
          </div>
        </div>
      </section>

      {/* About Cards Section Full Width (remove padding/margin from parent) */}

      <AboutCardSection />

      {/* Client Logos Section */}
      <ClientLogoSection />
    </div>
  );
}
