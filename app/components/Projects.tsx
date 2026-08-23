"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "SuperMarkit",
        stack: "React / TypeScript / Firebase / PostgreSQL / Azure",
        description:
            "SuperMarkit is a centralized roofing management platform that replaces paper-based processes, reduces manual data entry, and connects key business workflows to improve operational efficiency and support data-driven decisions.",
        primaryLabel: "Live Demo",
        secondaryLabel: "GitHub",
        image: "/projects/Supermarkit.png",
        primaryHref: "http://52.162.183.99/signin",
        secondaryHref: "https://github.com/anshpreetsingh007/Bytecraft-Capestone",
    },

    {
        title: "AI Support & Triage System",
        stack: "Microsoft Foundry / AI Agents / Azure AI / Generative AI",
        description:
            "An AI-powered support workflow that automatically classifies incoming requests, routes them through specialized agents, and generates contextual responses to streamline support operations.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        imageLabel: "CRUD App",
        primaryHref: "#",
        secondaryHref: "#",
    },

    {
        title: "SpeakFix (VMIS)",
        stack: "Raspberry Pi / Python / Azure / Microsoft Foundry / OpenSCAD",
        description:
            "SpeakFix is a voice-powered maintenance system that transforms spoken issues into structured digital tickets, reducing manual reporting and helping facilities teams review and act on maintenance requests faster.",
        primaryLabel: "Details",
        secondaryLabel: "GitHub",
        image: "/projects/speakfix1.png",
        primaryHref: "https://aryansaini-71.github.io/speakfix/",
        secondaryHref: "https://github.com/Dsgalvist/vmis-manager-dashboard",
    },

    {
        title: "Nutritional Insights",
        stack: "Azure Functions / Blob Storage / Cosmos DB / Python / Node.js / Chart.js",
        description:
            "Nutritional Insights is a cloud-based analytics platform that transforms nutritional data into interactive visualizations, helping users explore dietary patterns and compare key nutritional metrics through a responsive dashboard.",
        primaryLabel: "Live Demo",
        secondaryLabel: "GitHub",
        image: "/projects/nutritional.png",
        primaryHref: "https://blue-bush-041249b0f.7.azurestaticapps.net/login.html",
        secondaryHref: "https://github.com/anshpreetsingh007/project-1",
    },


    {
        title: "Android Malware Detection",
        stack: "Python / SecML / SVM / DrebinRed / Adversarial ML",
        description:
             "A machine learning cybersecurity project that detects Android malware using a Linear SVM and evaluates its resilience against adversarial evasion attacks.",
        primaryLabel: "View Notebook",
        secondaryLabel: "View Results",
        image: "/projects/android.png",
        primaryHref: "https://colab.research.google.com/drive/1mOvzgZoBfw3mBKdrJmAk359V4WKscM_3?usp=sharing#scrollTo=NV3Ug9Y0VQpE",
        details: `Model Performance
        • Accuracy: 98.84%
        • Detection Rate @ 1% FPR: 91.06%
        • F1 Score: 88.07%
        
        Adversarial Testing
        
        A gradient-based evasion attack successfully changed a correctly detected malware sample from malicious to benign after modifying only 10 features.
        
        Robustness Evaluatio
        • 0 modifications → 100% detection
        • 4 modifications → 40% detection
        • 8 modifications → 10% detection
        • 12+ modifications → 0% detection
        
        Key Finding
        
        The model performs strongly on normal test data, but its detection capability drops significantly under adversarial manipulation.`,
    },

    {
        title: "UX/UI Design — Language Learning App",
        stack: "Figma / UI Design / UX",
        description:
            "Designed a language learning application focused on intuitive navigation, user engagement, and clean visual structure through research-driven UX decisions.",
        primaryLabel: "Watch Demo",
        secondaryLabel: "Details",
        image: "/projects/figma1.png",
        video: "/projects/figma.mp4",
        details: `This project focuses on designing a language learning application that addresses common issues such as paywalls, lack of engagement, and repetitive content.
        Through research including surveys and interviews, key user needs were identified across students, travelers, and professionals.
        The application was designed in Figma with a focus on intuitive navigation, interactive features, and modern UI structure. Features such as messaging, leaderboards, and notifications were added to improve usability and engagement.`,
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
                            className="overflow-hidden rounded-3xl border border-white/10 bg-[#10192c] transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
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
                                            className="rounded-full bg-lime-400 px-5 py-3 font-bold text-black transition hover:scale-105"
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