import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen overflow-hidden bg-[#0b0f19] px-6 pt-20 text-white md:pt-24"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-16 md:min-h-[calc(100vh-96px)] md:grid-cols-[1.05fr_0.95fr]">

                {/* LEFT SIDE */}
                <Reveal>
                    <div>

                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-lime-400">
                            SOFTWARE DEVELOPMENT STUDENT & FULL-STACK DEVELOPER
                        </p>

                        <h1 className="mb-6 text-5xl font-extrabold leading-[0.95] md:text-6xl">
                            Diego Galvis
                            <br />
                            Tapasco
                        </h1>

                        <p className="mb-8 max-w-xl text-lg leading-8 text-gray-400">
                            Software Development student at SAIT passionate about building 
                            modern and responsive full-stack applications with real-world 
                            functionality and clean user experiences.
                        </p>

                        {/* STACK */}
                        <div className="mb-10 flex flex-wrap gap-2">
                            {[
                                "React",
                                "Next.js",
                                "TypeScript",
                                "Firebase",
                                "Python",
                                "SQL",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4">

                            <a
                                href="#projects"
                                className="rounded-full bg-lime-400 px-7 py-3 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.25)]"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-white/15 px-7 py-3 text-white transition duration-300 hover:border-lime-400 hover:text-lime-400"
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