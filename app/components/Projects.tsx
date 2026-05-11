"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "Currently Building",
        stack: "Coming Soon",
        description:
            "A new full-stack project currently in development focused on scalable architecture, modern UI/UX, and real-world functionality.",
        primaryLabel: "Coming Soon",
        secondaryLabel: "In Progress",
        imageLabel: "Future Project",
        primaryHref: "#",
        secondaryHref: "#",
    },

    {
        title: "LaptopHub",
        stack: "Next.js / TypeScript / Firebase",
        description:
            "A full-stack marketplace platform for buying and selling laptops with authentication, advanced filtering, favorites, image uploads, and responsive UI design.",
        primaryLabel: "Live Demo",
        secondaryLabel: "GitHub",
        image: "/projects/laptophub.png",
        primaryHref: "https://laptophub-opal.vercel.app/",
        secondaryHref: "https://github.com/Dsgalvist/laptophub",
    },

    {
        title: "ByteCraft — Inventory System Concept",
        stack: "Systems Analysis / UI Design / Team Project",
        description:
            "A collaborative software analysis and design project focused on inventory tracking, employee management, and business workflow planning for a construction-focused company.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "ByteCraft",
        primaryHref: "#",
        secondaryHref: "#",
    },

    {
        title: "UX/UI Design — Language Learning App",
        stack: "Figma / UI Design / UX",
        description:
            "Designed a language learning application focused on intuitive navigation, user engagement, and clean visual structure through research-driven UX decisions.",
        primaryLabel: "Watch Demo",
        secondaryLabel: "Details",
        image: "/projects/figma.png",
        video: "/projects/figma.mp4",
        details: `This project focuses on designing a language learning application that addresses common issues such as paywalls, lack of engagement, and repetitive content.

Through research including surveys and interviews, key user needs were identified across students, travelers, and professionals.

The application was designed in Figma with a focus on intuitive navigation, interactive features, and modern UI structure. Features such as messaging, leaderboards, and notifications were added to improve usability and engagement.`,
    },

    {
        title: "Database CRUD Application",
        stack: "C# / SQL / WinForms",
        description:
            "A desktop CRUD application connected to a database with insert, update, delete, and data visualization functionality using C# and Windows Forms.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "CRUD App",
        primaryHref: "#",
        secondaryHref: "#",
    },

    {
        title: "Shopping List Web App",
        stack: "React / Next.js / Tailwind",
        description:
            "A shopping list application with dynamic item management and integrated meal recommendations using React state management and API integration.",
        primaryLabel: "Live Demo",
        secondaryLabel: "GitHub",
        image: "/projects/shopping.png",
        primaryHref: "https://cprg306-assignments-murex-eta.vercel.app/week-8",
        secondaryHref: "https://github.com/Dsgalvist/cprg306-assignments",
    },
];

export default function Projects() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [selectedDetails, setSelectedDetails] = useState<string | null>(null);

    return (
        <section
            id="projects"
            className="bg-[#0b0f19] px-6 py-10 text-white"
        >
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Projects
                    </p>

                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Featured Projects
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2">

                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`overflow-hidden rounded-3xl border bg-[#10192c] transition duration-300 hover:-translate-y-1 ${
                                index === 0
                                    ? "border-lime-400/30 shadow-[0_0_40px_rgba(163,230,53,0.06)]"
                                    : "border-white/10 hover:border-lime-400/40"
                            }`}
                        >

                            {/* IMAGE */}
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
                                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(163,230,53,0.12),rgba(255,255,255,0.02))] text-center">

                                        <div>
                                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                                                Coming Soon
                                            </p>

                                            <h3 className="text-3xl font-extrabold text-white">
                                                Future Project
                                            </h3>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CONTENT */}
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

                                    {"video" in project && project.video ? (
                                        <button
                                            onClick={() => setSelectedVideo(project.video)}
                                            className="rounded-full bg-lime-400 px-5 py-3 font-bold text-black transition hover:scale-105"
                                        >
                                            {project.primaryLabel}
                                        </button>
                                    ) : (
                                        <a
                                            href={project.primaryHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`rounded-full px-5 py-3 font-bold transition ${
                                                index === 0
                                                    ? "cursor-default border border-lime-400/20 bg-lime-400/10 text-lime-400"
                                                    : "bg-lime-400 text-black hover:scale-105"
                                            }`}
                                        >
                                            {project.primaryLabel}
                                        </a>
                                    )}

                                    {"details" in project && project.details ? (
                                        <button
                                            onClick={() => setSelectedDetails(project.details)}
                                            className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
                                        >
                                            {project.secondaryLabel}
                                        </button>
                                    ) : (
                                        <a
                                            href={project.secondaryHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
                                        >
                                            {project.secondaryLabel}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* VIDEO MODAL */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6">

                    <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#10192c] p-4 shadow-2xl">

                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white transition hover:border-lime-400 hover:text-lime-400"
                        >
                            Close
                        </button>

                        <video
                            src={selectedVideo}
                            controls
                            autoPlay
                            className="max-h-[80vh] w-full rounded-2xl"
                        />
                    </div>
                </div>
            )}

            {/* DETAILS MODAL */}
            {selectedDetails && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6">

                    <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#10192c] p-6 shadow-2xl">

                        <button
                            onClick={() => setSelectedDetails(null)}
                            className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white transition hover:border-lime-400 hover:text-lime-400"
                        >
                            Close
                        </button>

                        <h3 className="mb-4 text-2xl font-bold text-lime-400">
                            Project Details
                        </h3>

                        <p className="whitespace-pre-line leading-7 text-slate-300">
                            {selectedDetails}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}