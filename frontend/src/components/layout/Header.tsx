"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { title: "محیط نرم‌افزار و امکانات", href: "#features" },
        { title: "لیست قیمت", href: "#pricing" },
        { title: "مشاهده دمو", href: "#demo" },
        { title: "ارتباط با ما", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <div className="flex items-center shrink-0">
                        <Link href="/" className="flex items-center gap-2 focus:outline-none">
                            <Image
                                src="/logo.svg"
                                alt="نمایندگی نرم‌افزار محک"
                                width={80}
                                height={80}
                                /* تنظیم ارتفاع برای موبایل و دسکتاپ و حفظ تناسب عرض */
                                className="w-auto h-12 lg:h-20 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors text-sm lg:text-base"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="#demo"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-sm lg:text-base"
                        >
                            درخواست مشاوره رایگان
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="block px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <Link
                            href="#consultation"
                            className="block mt-4 text-center bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium shadow-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            درخواست مشاوره رایگان
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}