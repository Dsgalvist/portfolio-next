import Image from "next/image";

const certs = [
    {
        title: "Master Python Program",
        subtitle: "Daxus Latam · 2026",
        image: "/certifications/Daxus.png",
    },
    {
        title: "Master Artificial Intelligence",
        subtitle: "Daxus Latam · 2026",
        image: "/certifications/Daxus.png",
    },
    {
        title: "AZ-900 Azure Fundamentals",
        subtitle: "Microsoft Azure / SAIT CPSY 300",
        image: "/certifications/azure.png",
    },
    {
        title: "AZ-204 Developing Solutions for Azure",
        subtitle: "Microsoft Azure / SAIT CPSY 300",
        image: "/certifications/azure.png",
    },
    {
        title: "Python in Practice Certificate",
        subtitle: "Daxus Latam · Issued Apr 2026",
        image: "/certifications/Daxus.png",
    },
    {
        title: "CCNA: Introduction to Networks",
        subtitle: "Cisco Networking Academy · Issued May 2025",
        image: "/certifications/cisco.png",
    },
    {
        title: "CSTS 2020",
        subtitle: "Alberta Construction Safety Association · Issued Aug 2025",
        image: "/certifications/construction.png",
    },
    {
        title: "WHMIS 2015",
        subtitle: "Alberta Construction Safety Association · Issued Aug 2025",
        image: "/certifications/construction.png",
    },
    {
        title: "Academic English Super Intensive Course",
        subtitle: "Bayswater · Issued Jul 2024",
        image: "/certifications/bayswater.png",
    },
    {
        title: "General English 20",
        subtitle: "OHC English · Issued Nov 2023",
        image: "/certifications/ohc.png",
    },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="bg-[#0b0f19] px-6 py-10 text-white"
        >
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Certifications
                    </p>

                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Licenses & Certifications
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-3">

                    {certs.map((cert, index) => (
                        <div
                            key={cert.title}
                            className={`flex flex-col items-center justify-between rounded-3xl border bg-[#10192c] p-6 text-center transition duration-300 hover:-translate-y-1 ${
                                index <= 3
                                    ? "border-lime-400/40 shadow-[0_0_30px_rgba(163,230,53,0.08)]"
                                    : "border-white/10 hover:border-lime-400/40"
                            }`}
                        >

                            {/* LOGO */}
                            <div className="mb-5 flex h-28 w-full items-center justify-center">

                                <div className="relative h-20 w-40">

                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* TEXT */}
                            <div>

                                <h3 className="mb-3 text-lg font-bold leading-snug">
                                    {cert.title}
                                </h3>

                                <p className="text-sm leading-6 text-slate-400">
                                    {cert.subtitle}
                                </p>

                                {index <= 3 && (
                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-lime-400">
                                        In Progress
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}