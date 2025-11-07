"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Calendar,
  Workflow,
  Settings,
  Users,
  Handshake,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <Workflow className="w-10 h-10 text-teal-400" />,
    title: "CRM",
    desc: "Manage projects, contracts & payments.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-purple-400" />,
    title: "Meetings",
    desc: "Let clients book you, charge upfront.",
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-400" />,
    title: "Automations",
    desc: "Manage everything from start to finish.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-400" />,
    title: "Contacts",
    desc: "Make, send, sign contracts you trust.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-pink-400" />,
    title: "Deals",
    desc: "Manage everything from start to finish.",
  },
  {
    icon: <FileText className="w-10 h-10 text-gray-400" />,
    title: "Forms",
    desc: "Gather all client info in one place.",
  },
];

export default function ClientWorkflowSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Streamline your\nclient workflow";

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typing effect for heading
  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-6 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
      <div
        className={`mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-14 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight whitespace-pre-line">
              {displayedText.split("your")[0]}
              {displayedText.includes("your") && (
                <>
                  <span className="text-gray-900 font-bold">your</span>
                  {displayedText.split("your")[1]}
                </>
              )}
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-80">
            Everything you need to manage leads, automate your client workflow &
            provide a top experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col items-center justify-center text-center 
              hover:bg-linear-to-b from-gray-50 to-white transition-all duration-500
              ${
                index < 3 ? "border-b-0 lg:border-b border-gray-200" : ""
              } ${index % 3 !== 2 ? "border-r-0 lg:border-r border-gray-200" : ""}
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } transition-all duration-700 delay-[${index * 100}ms]`}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2 text-black text-xl">{item.title}</h3>
              <p className="text-gray-500 text-md mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
