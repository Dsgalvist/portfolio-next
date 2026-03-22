import Image from "next/image";

export default function Experience() {
    return (
        <section id="experience" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Experience
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Experience
                    </h2>
                </div>

                {/* CARDS */}
                <div className="space-y-6">

                    {/* FORCONCRETE */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 flex flex-col justify-between hover:border-lime-400/40 transition duration-300">

                        <div className="mb-4 flex items-start gap-4">
                            <Image
                                src="/experience/logot.png"
                                alt="Forconcrete logo"
                                width={70}
                                height={70}
                                className="w-16 h-16 object-contain rounded-xl"
                            />

                            <div className="flex flex-col">
                                <p className="font-bold text-lime-400 text-sm mb-1">
                                    Current
                                </p>

                                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                    FORCONCRETE LTD — Web Development & Branding
                                </h3>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-400">
                            Worked on branding, digital presence, website structure, and
                            content direction for a construction-focused business concept.
                            Focused on building a strong visual identity and modern web
                            presentation.
                        </p>
                    </div>

                    {/* TANKECO */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 flex flex-col justify-between hover:border-lime-400/40 transition duration-300">

                        <div className="mb-4 flex items-start gap-4">
                            <Image
                                src="/experience/logo.png"
                                alt="Tankeco logo"
                                width={70}
                                height={70}
                                className="w-16 h-16 object-contain rounded-xl"
                            />

                            <div className="flex flex-col">
                                <p className="font-bold text-lime-400 text-sm mb-1">
                                    2022
                                </p>

                                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                    TANKECO — Web Development Project
                                </h3>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-400">
                            Participated in website development using HTML, CSS, JavaScript,
                            PHP, and MySQL. Contributed to UI design, structure, and team
                            coordination.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}