export default function Skills() {
    return (
        <section id="skills" className="bg-[#0b0f19] px-6 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Skills
                    </p>

                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Technical Skills
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* FRONTEND */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-5 text-xl font-bold">
                            Frontend
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "Next.js",
                                "Tailwind CSS",
                                "TypeScript"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-5 text-xl font-bold">
                            Backend & Cloud
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Firebase",
                                "Supabase",
                                "Flask",
                                "REST APIs",
                                "Firestore"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MOBILE */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-5 text-xl font-bold">
                            Mobile
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "React Native",
                                "Expo",
                                "AsyncStorage"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* PROGRAMMING */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-5 text-xl font-bold">
                            Programming
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Python",
                                "C#",
                                "Java",
                                "SQL"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* DATABASES */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-5 text-xl font-bold">
                            Databases
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "PostgreSQL",
                                "MySQL",
                                "Oracle APEX",
                                "Microsoft Access",
                                "pgAdmin 4"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6">
                        <h3 className="mb-5 text-xl font-bold">
                            Tools
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Git",
                                "GitHub",
                                "VS Code",
                                "Visual Studio",
                                "Eclipse",
                                "Vercel",
                                "Figma",
                                "VMware Workstation Pro",
                                "Software Ideas Modeler"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ADDITIONAL */}
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 md:col-span-2">
                        <h3 className="mb-5 text-xl font-bold">
                            Additional Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Rhino 8",
                                "Cisco Networking",
                                "Godot",
                                "Game Development",
                                "3D Modeling"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm transition hover:bg-lime-400/10"
                                >
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