import Image from "next/image";

export default function Education() {
    return (
        <section id="education" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Education
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-5xl">Education</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 items-stretch">
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 h-full flex flex-col justify-between hover:border-lime-400/40 transition duration-300">
                        <div className="mb-4 flex items-start gap-4">
                            <Image
                                src="/education/sait.png"
                                alt="SAIT logo"
                                width={70}
                                height={70}
                                className="w-16 h-16 object-contain rounded-xl"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                    SAIT — Software Development Diploma
                                </h3>
                                <p className="text-slate-400 mt-1">Calgary, Canada</p>
                            </div>
                        </div>

                        <p className="text-slate-400">Jan 2025 – Aug 2026</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 h-full flex flex-col justify-between hover:border-lime-400/40 transition duration-300">
                        <div className="mb-4 flex items-start gap-4">
                            <Image
                                src="/education/lausana.png"
                                alt="Lausana logo"
                                width={70}
                                height={70}
                                className="w-16 h-16 object-contain rounded-xl"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                    Colegio Lausana — Programming & Digital Design
                                </h3>
                                <p className="text-slate-400 mt-1">Bogotá, Colombia</p>
                            </div>
                        </div>

                        <p className="text-slate-400">Jan 2021 – Nov 2022</p>
                    </div>
                </div>
            </div>
        </section>
    );
}