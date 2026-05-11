export default function Languages() {
    return (
        <section id="languages" className="bg-[#0b0f19] px-6 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        Languages
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Languages
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 text-center">
                        <h3 className="text-xl font-bold">Spanish</h3>
                        <p className="text-slate-400 mt-2">Native or bilingual proficiency</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 text-center">
                        <h3 className="text-xl font-bold">English</h3>
                        <p className="text-slate-400 mt-2">Native or bilingual proficiency</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#10192c] p-6 text-center">
                        <h3 className="text-xl font-bold">French</h3>
                        <p className="text-slate-400 mt-2">Beginner</p>
                    </div>

                </div>
            </div>
        </section>
    );
}