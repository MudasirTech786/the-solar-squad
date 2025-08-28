"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu, ChevronUp } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Show "Scroll to top" button after 300px
            setShowTopBtn(currentScroll > 300);

            // Hide navbar on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 100) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-md z-50 transition-transform duration-300 ${hideNavbar ? "-translate-y-full" : "translate-y-0"
                    }`}
            >
                <Link href="/">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Image
                            src="/tss.png"
                            alt="Logo"
                            width={70}
                            height={70}
                            className="object-contain"
                        />
                        <span className="text-gray-100 font-semibold text-lg sm:text-2xl">
                            The Solar Squad
                        </span>
                    </div>
                </Link>

                <ul className="hidden md:flex space-x-8 text-white font-medium">
                    <li>
                        <Link href="/" className="hover:text-[#3b82f6]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-[#3b82f6]">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-[#3b82f6]">
                            Learn Solar
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-[#3b82f6]">
                            Coverage
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:block">
                    <Link
                        href="/consultation"
                        className="px-5 py-2 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6] hover:text-white transition"
                    >
                        Get Free Plan
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* Mobile Fullscreen Menu */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white z-[99999] flex flex-col items-center justify-center p-6">
                    <div className="flex items-center space-x-2 mb-10">
                        <Image
                            src="/tss.png"
                            alt="Logo"
                            width={90}
                            height={90}
                            className="object-contain"
                        />
                        <span className="text-lg font-semibold text-gray-900">
                            The Solar Squad
                        </span>
                    </div>

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

                    <Link
                        href="/consultation"
                        onClick={() => setIsOpen(false)}
                        className="mt-8 w-full max-w-xs text-center py-4 px-6 text-lg border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-bold hover:bg-[#3b82f6] hover:text-white transition"
                    >
                        Get Free Plan
                    </Link>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-gray-800"
                    >
                        <X size={32} />
                    </button>
                </div>
            )}

            {/* Scroll to Top Button */}
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50 animate-bounce hover:animate-none hover:bg-blue-700 transition-colors duration-300"
                >
                    <ChevronUp size={24} />
                </button>
            )}

        </>
    );
}
