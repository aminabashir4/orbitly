"use client";

import Image from "next/image";
import amazonLogo from "./../../public/images/Amazon_logo.svg";
import asanaLogo from "./../../public/images/Asana_logo.svg";
import merckLogo from "./../../public/images/Merck_Logo.svg.png";
import airbnbLogo from "./../../public/images/Airbnb_Logo_Bélo.svg.png";
import accentureLogo from "./../../public/images/Accenture_logo.svg";

export default function TrustedSection() {
  const companies = [
    { id: "01", name: "Amazon", logo: amazonLogo },
    { id: "02", name: "Asana", logo: asanaLogo },
    { id: "03", name: "Merck", logo: merckLogo },
    { id: "04", name: "Airbnb", logo: airbnbLogo },
    { id: "05", name: "Accenture", logo: accentureLogo },
  ];

  return (
    <section className="bg-[#f6f6f5] pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col items-center px-4 sm:px-8">
      {/* Heading */}
      <h2 className="text-gray-700 text-base sm:text-lg md:text-lg font-medium mb-8 sm:mb-10 text-center max-w-xs sm:max-w-none">
        Trusted by thousands of agencies and consulting firms
      </h2>

      {/* Logos container */}
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 sm:gap-y-6 rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
        {companies.map((company, index) => (
          <div
            key={company.id}
            className={`relative flex flex-col items-center justify-center 
              w-32 sm:w-40 md:w-52 lg:w-56 h-24 sm:h-28 
              border-gray-200 transition-all duration-500 hover:scale-105
              ${index !== companies.length - 1 ? "border-r-0 md:border-r-2" : ""}`}
          >
            {/* ID top-left */}
            <span className="absolute top-2 left-3 text-xs text-gray-400">
              {company.id}
            </span>

            {/* Logo */}
            <Image
              src={company.logo}
              alt={company.name}
              className="h-5 sm:h-6 md:h-7 w-auto object-contain z-10 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Gradient */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md"
              style={{
                background: "linear-gradient(to top, #b3e9b7 0%, #ffffff 80%)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
