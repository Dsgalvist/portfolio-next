"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#10192c]/90 text-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:text-lime-400 ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-10 opacity-0"
            }`}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
}