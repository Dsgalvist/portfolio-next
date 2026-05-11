"use client";

import { useEffect, useRef, useState } from "react";

export default function Game() {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observer.disconnect();
        };
    }, []);

    return (
        <section
            id="game"
            ref={ref}
            className="bg-[#0b0f19] px-6 py-10 text-white"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Game Development
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        2D Platformer Game
                    </h2>
                    <p className="mt-4 max-w-3xl text-slate-400">
                        A level-based platformer built with Godot, focused on player
                        movement, collision, collectibles.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10192c]">
                    {isVisible ? (
                        <iframe
                            src="/game/index.html"
                            title="2D Platformer Game"
                            className="h-[650px] w-full"
                        />
                    ) : (
                        <div className="flex h-[650px] w-full items-center justify-center">
                            <p className="text-slate-400">Scroll here to load the game 🎮</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}