"use client";
import Image from "next/image";
import { Wallet, CreditCard, Receipt } from "lucide-react";
import Image1 from "./../../public/Adobe Express - file.png";

export default function BillingSection() {
  const features = [
    {
      icon: <Wallet className="w-10 h-10 text-[#d0f18e] mb-4" />,
      title: "Invoicing",
      desc: "Create beautiful invoices, send & track them with ease.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-[#d0f18e] mb-4" />,
      title: "Payments",
      desc: "Get paid via credit card or bank transfer quickly.",
    },
    {
      icon: <Receipt className="w-10 h-10 text-[#d0f18e] mb-4" />,
      title: "Expenses",
      desc: "Log all project expenses as billable and non-billable.",
    },
  ];

  return (
    <section className="bg-[#16190e] text-gray-100 py-24 px-32 relative overflow-hidden">
      {/* Top content */}
      <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center justify-between">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#969c8a] to-white">
            Track <span className="text-gray-400">&nbsp;revenue&nbsp;</span> &
            <br /> simplify billing
          </h2>
        </div>
        <div>
          <p className="text-[#777b70] text-lg max-w-80 ml-auto">
            Monitor revenue with detailed finance reports. Put billing on
            autopilot with recurring payments & retainers.
          </p>
        </div>
      </div>

      {/* Centered image */}
      <div className="flex justify-center mb-24">
        <div className="relative rounded-2xl overflow-hidden">
          <Image src={Image1} alt="Billing Dashboard Preview" />
        </div>
      </div>

      {/* Bottom features (mapped) */}
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div key={index}>
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
