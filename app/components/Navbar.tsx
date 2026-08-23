"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Game", href: "#game" },
    { label: "Certifications", href: "#certifications" },
    { label: "Languages", href: "#languages" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0f19]/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                {/* LOGO */}
                <a href="#home" className="flex items-center">
                    <Image
                        src="/brand/logo-letras.png"
                        alt="Diego Logo"
                        width={120}
                        height={120}
                        className="h-12 w-auto brightness-0 invert transition duration-300 hover:scale-105"
                        priority
                    />
                </a>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-6 text-sm font-medium text-gray-400 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors duration-300 hover:text-lime-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xl text-white transition hover:border-lime-400 hover:text-lime-400 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                >
                    {open ? "×" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="border-t border-white/10 bg-[#0b0f19]/95 px-6 py-5 backdrop-blur-xl md:hidden">
                    <nav className="flex flex-col gap-4 text-sm font-medium text-gray-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="transition-colors duration-300 hover:text-lime-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}