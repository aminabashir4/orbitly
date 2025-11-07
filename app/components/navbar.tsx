"use client";

import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-8 md:px-24 py-4 bg-[#16190e] overflow-hidden">
      {/* Left: Logo */}
      <div className="flex gap-14">
        <div className="flex items-center space-x-2 mb-4">
          <div className="bg-[#d0f18e] p-2 rounded-md">
            <Leaf className="w-5 h-5 text-green-700" />
          </div>
          <h2 className="text-xl font-semibold text-[#d0f18e]">Orbitly</h2>
        </div>

        {/* Middle: Nav links */}
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

      {/* Right: Button */}
      <div className="z-10">
        <button className="bg-white text-black px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition">
          Book a demo
        </button>
      </div>
    </nav>
  );
}
