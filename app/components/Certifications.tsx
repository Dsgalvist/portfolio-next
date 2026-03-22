import Image from "next/image";

const certs = [
    {
        title: "Cisco Networking Academy",
        subtitle: "Introduction to Networks",
        image: "/certifications/cisco.png",
    },
    {
        title: "Bayswater",
        subtitle: "Academic English",
        image: "/certifications/bayswater.png",
    },
    {
        title: "OHC",
        subtitle: "General English",
        image: "/certifications/ohc.png",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Certifications
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Certifications
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-3 items-stretch">
                    {certs.map((cert) => (
                        <div
                            key={cert.title}
                            className="rounded-3xl border border-white/10 bg-[#10192c] p-6 flex flex-col justify-between items-center text-center hover:border-lime-400/40 transition duration-300"
                        >

                            {/* LOGO CONTAINER (CLAVE) */}
                            <div className="w-full h-28 flex items-center justify-center mb-4">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={100}
                                    height={100}
                                    className="max-h-20 w-auto object-contain"
                                />
                            </div>

                            {/* TEXT */}
                            <h3 className="text-xl font-bold">{cert.title}</h3>
                            <p className="mt-2 text-slate-400">{cert.subtitle}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}