export default function Rhino() {
    return (
        <section id="rhino" className="bg-[#0b0f19] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                        3D Visualization
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-5xl">
                        Rhino 8 Animation
                    </h2>
                    <p className="mt-4 max-w-3xl text-slate-400">
                        A visual exploration created in Rhino 8, combining model views,
                        technical linework, and presentation-focused motion.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10192c]">
                    <video
                        src="/rhino/rhino-demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="h-[650px] w-full object-cover"
                        poster="/rhino/rhino-poster.png"
                    />
                </div>
            </div>
        </section>
    );
}