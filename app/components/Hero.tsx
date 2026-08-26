import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen overflow-hidden bg-[#0b0f19] px-6 pt-30 pb-20 text-white md:pt-20"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-16 md:min-h-[calc(100vh-96px)] md:grid-cols-[1.05fr_0.95fr]">

                {/* LEFT SIDE */}
                <Reveal>
                    <div>

                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-lime-400">
                            SOFTWARE DEVELOPER • FULL-STACK • CLOUD & AI
                        </p>

                        <h1 className="mb-6 text-5xl font-extrabold leading-[0.95] md:text-5xl">
                            Diego Samuel
                            <br />
                            Galvis Tapasco
                        </h1>

                        <p className="mb-8 max-w-xl text-lg leading-8 text-gray-400">
                            Software Development graduate from SAIT building
                            full-stack, cloud, and AI-powered applications with
                            a focus on scalable architecture, clean user experiences,
                            and real-world solutions.
                        </p>

                        {/* STACK */}
                        <div className="mb-10 grid w-fit grid-cols-3 gap-2">
                            {[
                                "React",
                                "TypeScript",
                                "Python",
                                "Azure",
                                "PostgreSQL",
                                "Microsoft Foundry",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className={`whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-medium text-gray-200 backdrop-blur-md ${
                                        tech === "Microsoft Foundry"
                                        ? "max-sm:px-2 max-sm:text-[11px]"
                                        : ""
                                    }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* BUTTONS */}
                        <div className="grid w-full max-w-lg grid-cols-3 gap-3">
                            <a
                                href="#projects"
                                className="flex items-center justify-center rounded-full bg-lime-400 px-3 py-3 text-center text-sm font-bold text-black transition hover:scale-105"
                            >
                                View Projects
                            </a>
                            
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center rounded-full border border-white/15 px-3 py-3 text-center text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
                            >
                                Resume
                            </a>
                            
                            <a
                                href="#contact"
                                className="flex items-center justify-center rounded-full border border-white/15 px-3 py-3 text-center text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT SIDE */}
                <Reveal delay={0.12}>
                    <div className="relative mx-auto w-full max-w-[430px]">

                        {/* Glow */}
                        <div className="absolute -inset-10 rounded-full bg-lime-400/5 blur-3xl" />
                        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[120px]" />

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#10192c] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                            <div className="absolute inset-0 bg-linear-to-tr from-lime-400/5 via-transparent to-blue-500/10" />

                            <Image
                                src="/brand/diego-profile.jpeg"
                                alt="Diego Galvis Tapasco"
                                width={700}
                                height={850}
                                priority
                                className="relative z-10 h-[470px] w-full rounded-3xl object-cover object-center"
                            />
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}