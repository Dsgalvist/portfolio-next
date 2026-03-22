"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0f19]/70 backdrop-blur-xl">
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

                {/* NAV DESKTOP (NO CAMBIADO 👇) */}
                <nav className="hidden md:flex gap-6 text-gray-400">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#skills" className="hover:text-white transition">Skills</a>
                    <a href="#experience" className="hover:text-white transition">Experience</a>
                    <a href="#education" className="hover:text-white transition">Education</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#rhino" className="hover:text-white transition">Rhino</a>
                    <a href="#game" className="hover:text-white transition">Game</a>
                    <a href="#certifications" className="hover:text-white transition">Certifications</a>
                    <a href="#languages" className="hover:text-white transition">Languages</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white md:hidden text-2xl"
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="border-t border-white/10 bg-[#0b0f19] px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4 text-gray-300">

                        <a href="#about" onClick={() => setOpen(false)}>About</a>
                        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
                        <a href="#education" onClick={() => setOpen(false)}>Education</a>
                        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
                        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                        <a href="#rhino" onClick={() => setOpen(false)}>Rhino</a>
                        <a href="#game" onClick={() => setOpen(false)}>Game</a>
                        <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
                        <a href="#languages" onClick={() => setOpen(false)}>Languages</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

                    </div>
                </div>
            )}
        </header>
    );
}