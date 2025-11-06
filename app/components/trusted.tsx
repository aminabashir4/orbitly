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
    <section className="bg-[#f6f6f4] pt-32 pb-16 flex flex-col items-center">
      <h2 className="text-gray-700 text-lg font-medium mb-10 text-center">
        Trusted by thousands of agencies and consulting firms
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-0 rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative flex flex-col items-center justify-center w-40 sm:w-52 md:w-56 h-28 border-r-2 last:border-r-0 border-gray-200 transition-all duration-500 hover:scale-105"
          >
            {/* ID in top-left corner */}
            <span className="absolute top-2 left-3 text-xs text-gray-400">
              {company.id}
            </span>

            {/* Company Logo */}
            <Image
              src={company.logo}
              alt={company.name}
              className="h-6 w-auto object-contain z-10 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay on Hover */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md"
              style={{
                background:
                  "linear-gradient(to top, #b3e9b7 0%, #ffffff 80%)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
