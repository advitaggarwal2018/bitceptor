"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/public/Assets/logo.jpeg";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "AI Solutions", href: "#ai-solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-slate-900/40"
                : "bg-white dark:bg-slate-950 border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={(e) => {
                            setOpen(false);
                            if (window.location.pathname === "/" || window.location.pathname === "") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                        className="flex items-center gap-2.5 group focus:outline-none"
                    >
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-md shadow-blue-500/10 transition-transform duration-200 group-hover:scale-105">
                            <Image src={logo} alt="Bitceptor" width={32} height={32} className="object-cover" />
                        </div>
                        <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                            Bitceptor<span className="text-blue-600 dark:text-blue-400 font-semibold"> Systems</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-150 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group"
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 dark:shadow-blue-500/10 hover:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-200 hover:scale-105 active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 focus:outline-none"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col gap-1 px-4 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2.5 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors duration-150"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-150"
                    >
                        Get in Touch
                    </a>
                </nav>
            </div>
        </header>
    );
}