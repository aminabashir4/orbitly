"use client";

import React from "react";
import Image from "next/image";
import Image1 from "./../../public/Adobe Express - file.png";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col bg-[#16190e] text-white overflow-hidden px-8 md:px-24 pt-24 ">
      <div className="max-w-xl relative z-10 space-y-8">
        <div className="inline-block px-2 py-1 rounded-md border border-gray-500 text-gray-300 text-xs tracking-wider">
          FOR FREELANCERS & AGENCIES
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#969c8a] to-[#d2dbcb]">
          One platform to <br />
          handle everything
        </h1>

        <p className="text-[#939d91] text-lg leading-relaxed max-w-md ">
          Consolidate your projects, clients, and team into one integrated,
          easy-to-use platform.
        </p>

        <div className="flex gap-3">
          {/* Primary button with glow */}
          <div className="relative inline-block">
            <div className="absolute right-0 top-0 h-full w-1/2 rounded-xl bg-linear-to-l from-[#d3f295] to-transparent blur-lg opacity-80"></div>

            <button className="relative px-6 py-2 rounded-xl font-semibold text-black bg-linear-to-r from-[#a6ba7b] to-[#d3f295] hover:opacity-90 transition">
              Get started
            </button>
          </div>

          <button className="px-6 py-2 text-[#939d91] rounded-full font-medium hover:text-[#00FF8C] transition">
            Book a demo ❯
          </button>
        </div>
      </div>

      {/* Centered Image */}
      <div className="mt-16 flex justify-center">
        <Image
          src={Image1}
          alt="Hero Image"
          className="mx-auto  w-full h-[600px]"
        />
      </div>
    </section>
  );
}
