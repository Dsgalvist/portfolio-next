import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-4xl">
                <Reveal>
                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                            Contact
                        </p>

                        <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
                            Interested in building modern digital experiences.
                        </h2>

                        <p className="mx-auto mb-8 max-w-2xl text-slate-400">
                            I’m open to internships, junior developer roles, and collaborative
                            projects. Feel free to reach out through email, GitHub, or
                            LinkedIn.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:your@email.com"
                                className="rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition duration-300 hover:scale-105"
                            >
                                Send Email
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/15 px-6 py-3 font-semibold transition duration-300 hover:border-lime-400 hover:text-lime-400"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/15 px-6 py-3 font-semibold transition duration-300 hover:border-lime-400 hover:text-lime-400"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}