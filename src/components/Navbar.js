// components/Navbar.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-md z-[100]">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <Image
                    src="/TheSolarSquad2.png"
                    alt="The Solar Squad Logo"
                    width={70}   // fallback for Next.js Image
                    height={70}  // fallback for Next.js Image
                    className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
                <span className="text-lg font-semibold text-gray-100">
                    The Solar Squad
                </span>
            </div>


            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-white font-medium">
                <li><Link href="/" className="hover:text-[#3b82f6]">About</Link></li>
                <li><Link href="/" className="hover:text-[#3b82f6]">Services</Link></li>
                <li><Link href="/" className="hover:text-[#3b82f6]">Learn Solar</Link></li>
                <li><Link href="/" className="hover:text-[#3b82f6]">Coverage</Link></li>
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
                <Link
                    href="/"
                    className="px-5 py-2 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6] hover:text-white transition"
                >
                    Get Free Plan
                </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-white z-[101]"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={28} />
            </button>

            {/* Mobile Fullscreen Menu */}
{isOpen && (
  <div className="fixed top-0 left-0 w-screen h-screen bg-white z-[99999] flex flex-col items-center justify-center space-y-8 p-6">
    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <Image
        src="/TheSolarSquad2.png"
        alt="The Solar Squad Logo"
        width={60}
        height={60}
        className="object-contain"
      />
      <span className="text-lg font-semibold text-gray-900">
        The Solar Squad
      </span>
    </div>

    {/* Menu Items */}
    <div className="flex flex-col items-center space-y-6 text-xl font-semibold text-gray-900">
      <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#3b82f6]">
        About
      </Link>
      <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#3b82f6]">
        Services
      </Link>
      <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#3b82f6]">
        Learn Solar
      </Link>
      <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#3b82f6]">
        Coverage
      </Link>
    </div>

    {/* CTA Button */}
    <Link
      href="/"
      onClick={() => setIsOpen(false)}
      className="block w-full max-w-xs text-center px-6 py-3 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6] hover:text-white transition"
    >
      Get Free Plan
    </Link>

    {/* Close Button at Top Right */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-6 right-6 text-gray-800"
    >
      <X size={32} />
    </button>
  </div>
)}


        </nav>
    );
}
