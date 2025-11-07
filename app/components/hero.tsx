"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "./../../public/Adobe Express - file.png";

export default function HeroSection() {
  const title1 = "One platform to";
  const title2 = "handle everything";
  const paragraph =
    "Consolidate your projects, clients, and team into one integrated, easy-to-use platform.";

  // Animation for letters
  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  // Button fade-in after paragraph finishes
  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 6.5, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex flex-col bg-[#16190e] text-white overflow-hidden px-6 sm:px-10 md:px-16 lg:px-32 pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-full lg:max-w-xl relative z-10 space-y-6 sm:space-y-8">
        {/* Tag */}
        <div className="inline-block px-2 py-1 rounded-md border border-gray-500 text-gray-300 text-xs tracking-wider">
          FOR FREELANCERS & AGENCIES
        </div>

        {/* Title Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#969c8a] to-[#d2dbcb]"
          initial="hidden"
          animate="visible"
        >
          {title1.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariant} custom={i}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br />
          {title2.split("").map((char, i) => (
            <motion.span
              key={`t2-${i}`}
              variants={letterVariant}
              custom={i + title1.length + 10}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-[#939d91] text-base sm:text-lg leading-relaxed max-w-sm"
          initial="hidden"
          animate="visible"
        >
          {paragraph.split(" ").map((word, i) => (
            <motion.span
              key={`p-${i}`}
              variants={letterVariant}
              custom={i}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-4 sm:items-center"
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="relative inline sm:inline-block">
            <div className="absolute right-0 top-0 h-full w-1/2 rounded-xl bg-linear-to-l from-[#d3f295] to-transparent blur-lg opacity-80"></div>
            <button className="relative px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-black bg-linear-to-r from-[#a6ba7b] to-[#d3f295] hover:opacity-90 transition">
              Get started
            </button>
          </div>
          <div className="inline-block">
            <button className=" px-5 sm:px-6 py-2 sm:py-2.5 text-[#939d91] rounded-full font-medium transition hover:text-white">
              Book a demo ❯
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="mt-10 sm:mt-14 md:mt-16 flex justify-center">
        <Image
          src={Image1}
          alt="Hero Image"
          className="mx-auto w-[90%] sm:w-[80%] md:w-full  h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
