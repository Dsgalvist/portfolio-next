import Image from "next/image";

const projects = [
    {
        title: "Shopping List Web App",
        stack: ["React / Next.js / Tailwind"],
        description:
            "Built a full-featured shopping list application with integrated meal recommendations, leveraging React state management and dynamic data rendering to enhance usability and user engagement.",
        primaryLabel: "Live Demo",
        secondaryLabel: "GitHub",
        image: "/projects/shopping.png",
        primaryHref: "https://cprg306-assignments-murex-eta.vercel.app/week-8",
        secondaryHref: "https://github.com/Dsgalvist/cprg306-assignments",
    },
    {
        title: "ToDo Task Manager",
        stack: "React / JavaScript / CSS",
        description:
            "A task management app focused on user interaction, component-based structure and front-end functionality.",
        primaryLabel: "Live Demo",
        secondaryLabel: "GitHub",
        imageLabel: "ToDo App",
        primaryHref: "#",
        secondaryHref: "#",
    },
    {
        title: "Authentication Flow App",
        stack: "React / Expo / Authentication Flow",
        description:
            "A sign-in and sign-up interface with form handling, validation, and authentication flow design.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "Authentication App",
        primaryHref: "#",
        secondaryHref: "#",
    },
    {
        title: "Calculator Mobile App",
        stack: "React Native",
        description:
            "A mobile calculator application developed with React Native, emphasizing app architecture, component reuse, and mobile UI structure.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "Calculator App",
        primaryHref: "#",
        secondaryHref: "#",
    },
    {
        title: "Database CRUD Application",
        stack: "C# / Access Database / WinForms",
        description:
            "A desktop CRUD application connected to a database, with insert, update, delete, and data display features.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "Database CRUD",
        primaryHref: "#",
        secondaryHref: "#",
    },
    {
        title: "ByteCraft Inventory System Concept",
        stack: "React Native / Systems Analysis / UI Design",
        description:
            "A team project focused on designing an inventory and employee system with app planning, diagrams, and collaborative software design.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "ByteCraft",
        primaryHref: "#",
        secondaryHref: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-[#0b0f19] px-6 py-24 text-white"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Projects
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-[#10192c] transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
                        >
                            <div className="h-52 overflow-hidden">
                                {"image" in project && project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1200}
                                        height={800}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(163,230,53,0.14),rgba(255,255,255,0.02))] text-center text-2xl font-extrabold tracking-tight text-white">
                                        {"imageLabel" in project ? project.imageLabel : project.title}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <p className="mb-2 text-sm font-semibold text-lime-400">
                                    {project.stack}
                                </p>

                                <h3 className="mb-3 text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mb-6 text-[15px] leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.primaryHref}
                                        className="rounded-full bg-lime-400 px-5 py-3 font-bold text-black transition hover:scale-105"
                                    >
                                        {project.primaryLabel}
                                    </a>

                                    <a
                                        href={project.secondaryHref}
                                        className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
                                    >
                                        {project.secondaryLabel}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}