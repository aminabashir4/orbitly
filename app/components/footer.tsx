"use client";

import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-7 gap-10">
        {/* Left Section - takes more width */}
        <div className="md:col-span-3">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-lime-200 p-2 rounded-md">
              <Leaf className="w-5 h-5 text-green-700" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Orbitly</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-60">
            Don’t let confusion and lack of understanding hold your business
            back any longer.
          </p>
        </div>

        {/* Products */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-3 text-gray-900">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>CRM</li>
            <li>Proposals</li>
            <li>Contracts</li>
            <li>Scheduling</li>
            <li>Forms</li>
            <li>Time tracking</li>
          </ul>
        </div>

        {/* Use cases */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-3 text-gray-900">Use cases</h3>
          <ul className="space-y-2 text-sm">
            <li>Consulting</li>
            <li>Marketing</li>
            <li>Design</li>
            <li>Engineering & IT</li>
            <li>Architecture</li>
            <li>Accounting</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3 text-gray-900">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>How to Bill a Client</li>
            <li>Online Signature Maker</li>
            <li>Freelance Resources</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 px-6 max-w-7xl mx-auto">
        <p>Copyright © 2025 – Orbitly LLC | All Right Reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-700">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
