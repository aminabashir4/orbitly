"use client";

import React from "react";
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
  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-32">
      <div className="mx-auto  md:text-left">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight">
              Deliver <span className="text-gray-900 font-bold">projects</span> on
              <br />
              time & budget
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-80">
            Organise and monitor your project delivery with integrated tools that
            your team will love using.
          </p>
        </div>

        {/* Custom Grid */}
        <div>
          {/* Row 1 */}
          <div className="flex gap-4 mb-5">
            {/* Big Card */}
            <div className="max-w-[618px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <Image
                src={features[0].image}
                alt={features[0].title}
                className="w-auto h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                {features[0].title}
              </h3>
              <p className="text-gray-500 ">
                {features[0].description}
              </p>
            </div>

            {/* Small Cards */}
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col justify-between max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <Image
                  src={features[i].image}
                  alt={features[i].title}
                  className="w-auto h-auto mb-4 mx-auto"
                />
                <div className="">
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
                className="flex flex-col justify-between max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <Image
                  src={features[i].image}
                  alt={features[i].title}
                  className="w-auto h-auto mb-4 mx-auto"
                />
                <div className="">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {features[i].title}
                  </h3>
                  <p className="text-gray-500">{features[i].description}</p>
                </div>
              </div>
            ))}

            {/* Big Card */}
            <div className="max-w-[618px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <Image
                src={features[4].image}
                alt={features[4].title}
                className="w-auto h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                {features[4].title}
              </h3>
              <p className="text-gray-500 ">
                {features[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
