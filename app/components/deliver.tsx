"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import taskIcon from "./../../public/images/Prototype_cbf2700afe.webp";
import timeIcon from "./../../public/images/Prototype_cbf2700afe.webp";
import resourceIcon from "./../../public/images/Prototype_cbf2700afe.webp";
import budgetIcon from "./../../public/images/Prototype_cbf2700afe.webp";
import supportIcon from "./../../public/images/Prototype_cbf2700afe.webp";
import portalIcon from "./../../public/images/Prototype_cbf2700afe.webp";

const features = [
  {
    title: "Tasks",
    description: "Assign, prioritize, estimate & track tasks across projects.",
    image: taskIcon,
  },
  {
    title: "Time tracking",
    description: "Track your team’s hours, get accurate timesheets.",
    image: timeIcon,
  },
  {
    title: "Resource planning",
    description: "Allocate your team’s time across projects.",
    image: resourceIcon,
  },
  {
    title: "Budgets",
    description: "Control & track your budget in real time across projects.",
    image: budgetIcon,
  },
  {
    title: "Live Support",
    description: "You will be assigned a team who you can contact.",
    image: supportIcon,
  },
  {
    title: "Client-portal",
    description:
      "Share key files and updates with your clients in their branded portal.",
    image: portalIcon,
  },
];

export default function DeliverSection() {
  const fullText = "Deliver projects on\ntime & budget";
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const contentControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let index = 0;
          const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
          }, 60); // typing speed

          // Trigger bottom-to-top animation
          contentControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, contentControls]);

  return (
    <section ref={sectionRef} className="bg-[#f9f9f9] py-20 px-6 md:px-32">
      <div className="mx-auto md:text-left">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contentControls}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight whitespace-pre-line">
              {displayedText.split("projects")[0]}
              {displayedText.includes("projects") && (
                <>
                  <span className="text-gray-900 font-bold">projects</span>
                  {displayedText.split("projects")[1]}
                </>
              )}
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-80">
            Organise and monitor your project delivery with integrated tools that
            your team will love using.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={contentControls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {/* Row 1 */}
          <div className="flex gap-4 mb-5">
            {/* Big Card */}
            <div className="max-w-[618px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-lg">
              <Image
                src={features[0].image}
                alt={features[0].title}
                className="w-auto h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {features[0].title}
              </h3>
              <p className="text-gray-500">{features[0].description}</p>
            </div>

            {/* Small Cards */}
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col justify-between max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-lg"
              >
                <Image
                  src={features[i].image}
                  alt={features[i].title}
                  className="w-auto h-auto mb-4 mx-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {features[i].title}
                  </h3>
                  <p className="text-gray-500">{features[i].description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            {[5, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col justify-between max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-lg"
              >
                <Image
                  src={features[i].image}
                  alt={features[i].title}
                  className="w-auto h-auto mb-4 mx-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {features[i].title}
                  </h3>
                  <p className="text-gray-500">{features[i].description}</p>
                </div>
              </div>
            ))}

            {/* Big Card */}
            <div className="max-w-[618px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-lg">
              <Image
                src={features[4].image}
                alt={features[4].title}
                className="w-auto h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {features[4].title}
              </h3>
              <p className="text-gray-500">{features[4].description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
