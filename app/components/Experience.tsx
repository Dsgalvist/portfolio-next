import Image from "next/image";

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-[#0b0f19] px-6 py-24 text-white"
        >
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Experience
                    </p>

                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Professional Experience
                    </h2>
                </div>

                <div className="space-y-6">

                    {/* MOUNTAIN AIR */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 transition duration-300 hover:border-lime-400/40">

                        <div className="mb-5 flex items-start gap-4">
                            
                            <Image
                                src="/experience/mountain.png"
                                alt="ForConcrete logo"
                                width={70}
                                height={70}
                                className="h-16 w-16 rounded-xl object-contain"
                            />

                            <div>
                                <h3 className="text-xl font-bold md:text-2xl">
                                    Mountain Air Construction LTD
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Construction Worker · Contract Part-time
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Calgary, Alberta · On-site
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Sep 2025 - May 2026 · 9 mos
                                </p>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-400">
                            Currently working in construction, supporting on-site
                            operations and assisting with tasks such as vapor barrier
                            installation, insulation, drywall installation, and general
                            site work. Developed strong teamwork, adaptability,
                            communication, and problem-solving skills while working in
                            fast-paced environments.
                        </p>
                    </div>

                    {/* FORCONCRETE */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 transition duration-300 hover:border-lime-400/40">

                        {/* COMPANY HEADER */}
                        <div className="mb-8 flex items-start gap-4">

                            <Image
                                src="/experience/logot.png"
                                alt="ForConcrete logo"
                                width={70}
                                height={70}
                                className="h-16 w-16 rounded-xl object-contain"
                            />

                            <div>
                                <h3 className="text-xl font-bold md:text-2xl">
                                    ForConcrete
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Calgary, Alberta, Canada
                                </p>
                            </div>
                        </div>

                        {/* TIMELINE */}
                        <div className="relative ml-6 border-l border-white/10 pl-8 space-y-10">

                            {/* WEB DEV */}
                            <div className="relative">

                                <div className="absolute -left-[42px] top-2 h-3 w-3 rounded-full bg-slate-400" />

                                <h4 className="text-lg font-bold">
                                    Junior Web Developer
                                </h4>

                                <p className="mt-1 text-sm text-slate-500">
                                    Self-employed · Remote
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Nov 2025 - Jan 2026 · 3 mos
                                </p>

                                <p className="mt-4 leading-7 text-slate-400">
                                    Worked on a website project for a construction
                                    business where I designed and developed the site
                                    using HTML, CSS, and JavaScript. Focused on
                                    responsive layouts, usability improvements, and
                                    building a clean and modern digital presentation.
                                </p>
                            </div>

                            {/* CONSTRUCTION */}
                            <div className="relative">

                                <div className="absolute -left-[42px] top-2 h-3 w-3 rounded-full bg-slate-500" />

                                <h4 className="text-lg font-bold">
                                    Construction Worker
                                </h4>

                                <p className="mt-1 text-sm text-slate-500">
                                    Contract Full-time · On-site
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Aug 2025 - Oct 2025 · 3 mos
                                </p>

                                <p className="mt-4 leading-7 text-slate-400">
                                    Worked in construction supporting daily site
                                    operations including demolition, concrete work,
                                    and formwork stripping. Developed teamwork,
                                    problem-solving, adaptability, and time management
                                    skills while working in demanding project
                                    environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* TANKECO */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 transition duration-300 hover:border-lime-400/40">

                        <div className="mb-5 flex items-start gap-4">

                            <Image
                                src="/experience/logo.png"
                                alt="Tankeco logo"
                                width={70}
                                height={70}
                                className="h-16 w-16 rounded-xl object-contain"
                            />

                            <div>
                                <h3 className="text-xl font-bold md:text-2xl">
                                    TANKECO — Web Developer
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Bogotá, Colombia · On-site
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Jan 2022 - Nov 2022 · 11 mos
                                </p>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-400">
                            Worked on a personal web development project using HTML,
                            CSS, JavaScript, PHP, and MySQL. Contributed to responsive
                            layouts, interface structure, database setup, and overall
                            user experience improvements.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}