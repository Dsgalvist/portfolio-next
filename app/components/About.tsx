import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="bg-[#0b0f19] px-6 py-10 text-white">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mb-10">
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
                                I am a Software Development graduate from SAIT in Calgary with experience building full-stack, 
                                cloud, and AI-powered applications. My work spans web development, databases, cloud services, 
                                machine learning, and AI workflows using technologies such as React, TypeScript, Python, PostgreSQL, Azure, and Microsoft Foundry.
                            </p>

                            <p className="mt-5 text-[16px] leading-8 text-slate-400">
                                I enjoy turning real-world problems into practical software solutions, from enterprise management platforms and cloud applications 
                                to AI-assisted systems. I am currently focused on growing as a software developer and contributing to products that combine 
                                clean user experiences with reliable, scalable technology.
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
                                    Full-Stack Development, Cloud Computing, AI & Databases
                                </h3>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}