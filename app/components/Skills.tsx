export default function Skills() {
    return (
        <section id="skills" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Skills
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Tech Stack
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* FRONTEND */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-4 text-xl font-bold">Front-End</h3>
                        <div className="flex flex-wrap gap-3">
                            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(skill => (
                                <span key={skill} className="rounded-full border border-lime-400/40 px-4 py-2 text-sm hover:bg-lime-400/10 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MOBILE */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-4 text-xl font-bold">Mobile</h3>
                        <div className="flex flex-wrap gap-3">
                            {["React Native", "Expo"].map(skill => (
                                <span key={skill} className="rounded-full border border-lime-400/40 px-4 py-2 text-sm hover:bg-lime-400/10 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* PROGRAMMING */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-4 text-xl font-bold">Programming</h3>
                        <div className="flex flex-wrap gap-3">
                            {["C#", "Python", "Java", "SQL"].map(skill => (
                                <span key={skill} className="rounded-full border border-lime-400/40 px-4 py-2 text-sm hover:bg-lime-400/10 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-4 text-xl font-bold">Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Git",
                                "GitHub",
                                "VS Code",
                                "Visual Studio",
                                "Eclipse",
                                "Vercel",
                                "VMware Workstation Pro",
                                "Software Ideas Modeler"
                            ].map(skill => (
                                <span key={skill} className="rounded-full border border-lime-400/40 px-4 py-2 text-sm hover:bg-lime-400/10 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* DATABASE */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-4 text-xl font-bold">Database</h3>
                        <div className="flex flex-wrap gap-3">
                            {["MySQL", "Access", "Oracle APEX", "PostgreSQL", "Firebase", "pgAdmin 4"].map(skill => (
                                <span key={skill} className="rounded-full border border-lime-400/40 px-4 py-2 text-sm hover:bg-lime-400/10 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CREATIVE */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-4 text-xl font-bold">Creative & Other</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Godot", "Rhino 8", "Figma", "Cisco Networking", "3D Modeling", "Game Development"].map(skill => (
                                <span key={skill} className="rounded-full border border-lime-400/40 px-4 py-2 text-sm hover:bg-lime-400/10 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}