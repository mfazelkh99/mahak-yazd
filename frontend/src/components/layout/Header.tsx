"use client";

import { useState, useEffect } from "react";
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

    // ۱. افکت برای آپدیت شدن آدرس هنگام اسکرول
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        window.history.replaceState(null, "", `#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        const handleScrollToTop = () => {
            if (window.scrollY < 50) {
                window.history.replaceState(null, "", window.location.pathname);
            }
        };
        window.addEventListener("scroll", handleScrollToTop);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScrollToTop);
        };
    }, []);

    // ۲. تابع مدیریت کلیک روی لینک‌های منو
    // ۲. تابع مدیریت کلیک روی لینک‌های منو
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);

        if (element) {
            // ارتفاع هدر شما (کلاس h-20 در تیلویند برابر با 80 پیکسل است)
            const headerHeight = 80;

            // محاسبه موقعیت سکشن با در نظر گرفتن ارتفاع هدر
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;

            // اسکرول نرم به موقعیت جدید
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            window.history.pushState(null, "", `#${targetId}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">

                    {/* Logo Section */}
                    <div className="flex items-center shrink-0">
                        <Link href="/" onClick={(e) => handleNavClick(e, "hero")} className="flex items-center gap-2 focus:outline-none">
                            <Image
                                src="/logo.svg"
                                alt="نمایندگی نرم‌افزار محک"
                                width={80}
                                height={80}
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
                                // استفاده از onClick و حذف # از ابتدای href
                                onClick={(e) => handleNavClick(e, link.href.replace("#", ""))}
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
                            // اضافه شدن رویداد کلیک برای دکمه اصلی
                            onClick={(e) => handleNavClick(e, "demo")}
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
                                onClick={(e) => {
                                    // اول منو را ببند، بعد اسکرول کن
                                    setIsMobileMenuOpen(false);
                                    handleNavClick(e, link.href.replace("#", ""));
                                }}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <Link
                            href="#demo" // اینجا consultation بود که به demo تغییر دادم تا با دکمه دسکتاپ یکی باشد
                            className="block mt-4 text-center bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium shadow-sm"
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                handleNavClick(e, "demo");
                            }}
                        >
                            درخواست مشاوره رایگان
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}