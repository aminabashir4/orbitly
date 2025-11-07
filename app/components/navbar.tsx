"use client";

import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-24 py-4 bg-[#16190e] overflow-hidden">
      {/* Left Section (Logo + Menu Items for Desktop) */}
      <div className="flex gap-14 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-[#d0f18e] p-2 rounded-md">
            <Leaf className="w-5 h-5 text-green-700" />
          </div>
          <h2 className="text-xl font-semibold text-[#d0f18e]">Orbitly</h2>
        </div>

        {/* Desktop Menu Items (unchanged) */}
        <div className="hidden md:flex items-center gap-14 z-10">
          <Link href="#" className="text-[#939d91] hover:text-white transition">
            Product
          </Link>
          <Link href="#" className="text-[#939d91] hover:text-white transition">
            Customers
          </Link>
          <Link href="#" className="text-[#939d91] hover:text-white transition">
            About us
          </Link>
        </div>
      </div>

      {/* Right Button (Desktop only) */}
      <div className="hidden md:block z-10">
        <button className="bg-white text-black px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition">
          Book a demo
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#d0f18e] focus:outline-none z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Slide-in Menu (No black overlay) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-40 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header inside menu */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="bg-[#d0f18e] p-2 rounded-md">
              <Leaf className="w-5 h-5 text-green-700" />
            </div>
            <h2 className="text-xl font-semibold text-[#d0f18e]">Orbitly</h2>
          </div>
          <button
            className="text-[#d0f18e] focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col space-y-6">
          <Link
            href="#"
            className="text-[#939d91]  transition"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            href="#"
            className="text-[#939d91]  transition"
            onClick={() => setIsOpen(false)}
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-[#939d91]  transition"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>

          <button className="bg-white border-2 border-[#d0f18e] text-black px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition mt-4">
            Book a demo
          </button>
        </div>
      </div>
    </nav>
  );
}
