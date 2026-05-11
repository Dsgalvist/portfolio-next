import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mb-12">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                            About
                        </p>
                        <h2 className="text-3xl font-extrabold md:text-5xl">About Me</h2>
                    </div>
                </Reveal>

                <Reveal delay={0.08}>
                    <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-3xl border border-white/10 bg-[#10192c] p-8 hover:border-lime-400/40 transition duration-300">
                            <p className="text-[16px] leading-8 text-slate-300">
                                I am a Software Development student at SAIT in Calgary, building full-stack web applications, mobile apps, 
                                and academic software projects. My work includes React, Next.js, TypeScript, Firebase, SQL, C#, Python, and React 
                                Native, with a focus on clean interfaces and practical real-world functionality.

                            </p>

                            <p className="mt-5 text-[16px] leading-8 text-slate-400">
                                I enjoy turning ideas into functional digital products 
                                while continuing to strengthen my backend, database, 
                                and software development skills.
                            </p>
                        </div>

                        <div className="grid gap-5">
                            <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 hover:border-lime-400/40 transition duration-300">
                                <p className="mb-2 text-sm text-slate-400">Location</p>
                                <h3 className="text-xl font-bold">Calgary, Alberta</h3>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 hover:border-lime-400/40 transition duration-300">
                                <p className="mb-2 text-sm text-slate-400">Education</p>
                                <h3 className="text-xl font-bold">
                                    Software Development Diploma, SAIT
                                </h3>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 hover:border-lime-400/40 transition duration-300">
                                <p className="mb-2 text-sm text-slate-400">Focus</p>
                                <h3 className="text-xl font-bold">
                                    Full-Stack Development, React, Databases, Mobile Apps
                                </h3>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}