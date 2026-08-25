import Image from "next/image";
import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#0b0f19] px-6 py-10 text-white"
        >
            <div className="mx-auto max-w-6xl">

                <Reveal>
                    <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-[#10192c] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)] md:grid-cols-[1fr_0.9fr] md:p-10">

                        {/* LEFT CONTENT */}
                        <div>

                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                                Contact
                            </p>

                            <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
                                Let’s Build Something Great Together.
                            </h2>

                            <p className="mb-10 max-w-2xl leading-8 text-slate-400">
                                Currently open to internships, junior developer opportunities,
                                and collaborative software projects focused on modern web,
                                cloud, and mobile development.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-wrap gap-4">

                                <a
                                    href="mailto:diegogalvis682@gmail.com?subject=Portfolio%20Contact&body=Hi%20Diego%2C%0D%0A%0D%0AIt's%20nice%20to%20connect%20with%20you.%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ABest%2C"
                                    className="rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition duration-300 hover:scale-105"
                                >
                                    Email Me
                                </a>

                                <a
                                    href="https://github.com/Dsgalvist"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/15 px-6 py-3 font-semibold transition duration-300 hover:border-lime-400 hover:text-lime-400"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/diego-galvis-63014b2bb"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/15 px-6 py-3 font-semibold transition duration-300 hover:border-lime-400 hover:text-lime-400"
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/15 px-6 py-3 font-semibold transition duration-300 hover:border-lime-400 hover:text-lime-400"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>

                        {/* RIGHT ANIMATION */}
                        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">

                            {/* Glow */}
                            <div className="absolute -inset-8 rounded-full bg-lime-400/10 blur-3xl" />
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[100px]" />

                            {/* Animation Container */}
                            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f19] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                                <Image
                                    src="/brand/animacion.gif"
                                    alt="Developer animation"
                                    width={500}
                                    height={500}
                                    unoptimized
                                    className="h-[320px] w-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}