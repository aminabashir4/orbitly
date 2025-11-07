"use client";
import { ArrowRight } from "lucide-react";

export default function GetStartedSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-[#0f120f] overflow-hidden">
      {/* Background angled stripes */}
      <div className="absolute inset-0 flex opacity-40">
        <div className="bg-linear-to-b from-transparent to-black/40 w-1/3 rotate-10 translate-x-[-10%]"></div>
        <div className="bg-linear-to-b from-transparent to-black/40 w-1/3 rotate-10 translate-x-[10%]"></div>
        <div className="bg-linear-to-b from-transparent to-black/40 w-1/3 rotate-10 translate-x-[30%]"></div>
      </div>

      {/* Text and buttons */}
      <div className="relative z-10 max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#969c8a] to-[#d2dbcb]">
          Get started in{" "}
         30 seconds.
          <br />
          Free for{" "}
         7 days.
        </h1>

        <p className="text-[#939d91] text-lg leading-relaxed max-w-lg mx-auto">
         Simplify your business operations & consolidate your projects, clients
          & team into one integrated, easy-to-use platform.
        </p>

        <div className="mt-10 flex justify-center items-center gap-6">
           <div className="flex gap-3">
          {/* Primary button with glow */}
          <div className="relative inline-block">
            <div className="absolute right-0 top-0 h-full w-1/2 rounded-xl bg-linear-to-l from-[#d3f295] to-transparent blur-lg opacity-80"></div>

            <button className="relative px-6 py-2 rounded-xl font-semibold text-black bg-linear-to-r from-[#a6ba7b] to-[#d3f295] hover:opacity-90 transition">
              Get started
            </button>
          </div>

          <button className="px-6 py-2 text-[#939d91] rounded-full font-medium  transition">
            Book a demo ❯
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
