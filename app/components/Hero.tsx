import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#0b0f19] px-6 pt-20 text-white md:pt-24"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:min-h-[calc(100vh-96px)] md:grid-cols-[1.05fr_0.95fr]">
                <Reveal>
                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                            Front-End Developer & Software Development Student
                        </p>

                        <h1 className="mb-6 text-5xl font-extrabold leading-[0.95] md:text-7xl">
                            Diego Galvis Tapasco
                        </h1>

                        <p className="mb-8 max-w-xl text-lg leading-8 text-gray-400">
                            I build modern, responsive web and mobile applications focused on
                            clean UI, performance, and real-world functionality.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.18)]"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-white/15 px-6 py-3 text-white transition duration-300 hover:border-lime-400 hover:text-lime-400"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.12}>
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10192c] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                        <Image
                            src="/brand/animacion.gif"
                            alt="Diego Animation"
                            width={900}
                            height={700}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}