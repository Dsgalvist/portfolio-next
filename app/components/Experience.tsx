import Image from "next/image";

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-[#0b0f19] px-6 py-10 text-white"
        >
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Experience
                    </p>

                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Professional Experience
                    </h2>
                </div>

                <div className="space-y-6">

                    {/* MEKK S.A.S. */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 transition duration-300 hover:border-lime-400/40">
                    
                        <div className="mb-5 flex items-start gap-4">
                            
                            <Image
                                src="/experience/mekk-sas.png"
                                alt="MEKK S.A.S. logo"
                                width={70}
                                height={70}
                                className="h-16 w-16 rounded-xl object-contain"
                            />
                            
                            <div>
                                <h3 className="text-xl font-bold md:text-2xl">
                                    MEKK S.A.S. — Web Developer
                                </h3>
                                
                                <p className="mt-1 text-sm text-slate-500">
                                    Remote · Freelance
                                </p>
                                
                                <p className="mt-1 text-sm text-slate-500">
                                    Aug 2026 - Sep 2026 · 1 mo
                                </p>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-400">
                            Worked as part of a two-developer team to redesign and build MEKK S.A.S.&apos;s
                            corporate website using React, TypeScript, Vite, and Tailwind CSS. I focused on
                            creating the product experience, including a catalog of 70+ products with search,
                            filters, sorting, pagination, detailed product pages, related products, and an
                            interactive image zoom. I also implemented the WhatsApp contact flow, using a
                            serverless API and Upstash Redis to rotate customer inquiries between advisors.
                            Along the way, I worked on responsive design, integration, testing, bug fixes,
                            and the final Vercel deployment to get the site ready for production.
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