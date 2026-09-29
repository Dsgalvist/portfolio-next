"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence, motion, useMotionTemplate, useMotionValue,
  useReducedMotion, useSpring,
} from "framer-motion";

type Language = "en" | "es";
type FaceBox = { left: number; top: number; width: number; height: number };

export default function Hero({ lang = "en" }: { lang?: Language }) {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  const language: Language = segment === "es" || segment === "en" ? segment : lang;
  const es = language === "es";
  const reduced = useReducedMotion();
  const portraitRef = useRef<HTMLImageElement>(null);
  const [faceBox, setFaceBox] = useState<FaceBox | null>(null);
  const [scanning, setScanning] = useState(false);

  const px = useMotionValue(62);
  const py = useMotionValue(38);
  const x = useSpring(px, { stiffness: 450, damping: 31 });
  const y = useSpring(py, { stiffness: 450, damping: 31 });
  const light = useMotionTemplate`radial-gradient(640px circle at ${x}% ${y}%, rgba(162,230,82,.17), transparent 72%)`;
  useEffect(() => {
    const image = portraitRef.current;
    if (!image) return;

    function measureFace() {
      if (!image || !image.parentElement) return;
      // El archivo original mide 1536 × 2048; Next/Image puede servir una copia redimensionada.
      const imageBounds = image.getBoundingClientRect();
      const frameBounds = image.parentElement.getBoundingClientRect();
      const scale = Math.max(imageBounds.width / 1536, imageBounds.height / 2048);
      const visibleLeft = (imageBounds.width - 1536 * scale) / 2;
      const visibleTop = (imageBounds.height - 2048 * scale) * .3;

      setFaceBox({
        left: imageBounds.left - frameBounds.left + visibleLeft + 620 * scale,
        top: imageBounds.top - frameBounds.top + visibleTop + 535 * scale,
        width: 470 * scale,
        height: 510 * scale,
      });
    }

    const observer = new ResizeObserver(measureFace);
    observer.observe(image);
    image.addEventListener("load", measureFace);
    measureFace();
    return () => {
      observer.disconnect();
      image.removeEventListener("load", measureFace);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    let timer: ReturnType<typeof setTimeout>;

    function scan() {
      setScanning(true);
      timer = setTimeout(() => {
        setScanning(false);
        timer = setTimeout(scan, 4800);
      }, 1800);
    }

    timer = setTimeout(scan, 3600);
    return () => clearTimeout(timer);
  }, [reduced]);

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - bounds.left) / bounds.width) * 100);
    py.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section id="home" onPointerMove={move} className="relative isolate flex min-h-[100svh] items-start overflow-hidden bg-[#090e18] px-5 pb-0 pt-24 text-white sm:px-8 sm:pb-12 sm:pt-28 lg:items-center lg:pb-20 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_23%_43%,#1a3041_0%,#0c1827_44%,#090e18_80%)]" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: light }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(139,178,207,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(139,178,207,.12) 1px,transparent 1px)", backgroundSize: "76px 76px", maskImage: "linear-gradient(90deg,black,transparent 75%)" }} />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 sm:gap-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="relative z-10 pb-1 lg:pb-0">
          <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.13em] text-[#b6d2cd] sm:text-xs sm:tracking-[.18em]">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_16px_#bef264]" />
            {es ? "Desarrollador de software" : "Software developer"} · Full Stack · Cloud & AI
          </p>

          <h1 className="mt-5 text-[clamp(3.3rem,6.2vw,6.5rem)] font-black leading-[.92] tracking-[-.075em]">
            Diego <span className="text-lime-300">Galvis.</span>
          </h1>

          <blockquote className="mt-5 max-w-[640px] border-l-2 border-lime-300/80 pl-4 font-serif text-[clamp(1.55rem,2.6vw,2.55rem)] font-normal italic leading-[1.18] tracking-[-.025em] text-[#eaf3ed] sm:mt-7 sm:pl-5">
  “{es
    ? "Una página que se entiende es una página que vende."
    : "A website people understand is a website that sells."}”
</blockquote>

          <p className="mt-4 max-w-[575px] text-sm leading-6 text-[#d0dce3] sm:mt-6 sm:text-lg sm:leading-8">
            {es
              ? "Diseño y desarrollo sitios web y aplicaciones que hacen que tu negocio se vea mejor, sea fácil de usar y conecte con más personas."
              : "I design and build websites and applications that make your business look its best, feel easy to use, and connect with more people."}
          </p>

          <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            <a href="#contact" className="group col-span-2 inline-flex min-h-12 items-center justify-between gap-4 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-[#101d27] shadow-[0_8px_30px_rgba(190,242,100,.18)] transition hover:-translate-y-1 hover:bg-lime-200 hover:shadow-[0_13px_40px_rgba(190,242,100,.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:min-h-0 sm:rounded-full sm:px-6 sm:py-3.5 sm:text-base">
              {es ? "Hablemos de tu idea" : "Let's talk about your idea"}<span aria-hidden="true" className="text-lg leading-none transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a href="#projects" className="group inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-cyan-100/25 bg-[#132735]/70 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-lime-300/70 hover:bg-[#1b3844] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:rounded-full sm:px-5 sm:py-3 sm:text-base">
              {es ? "Ver proyectos" : "View projects"} <span aria-hidden="true" className="text-lime-300 transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-[#d4e4e7] transition hover:-translate-y-1 hover:border-lime-300/70 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:rounded-full sm:px-5 sm:py-3 sm:text-base">{es ? "CV" : "Résumé"}<span aria-hidden="true" className="text-lime-300">↗</span></a>
          </div>

          <p className="mt-6 hidden font-mono text-[11px] uppercase tracking-[.11em] text-[#a9c8cd] lg:block">React · TypeScript · Python · Azure · PostgreSQL · Microsoft Foundry</p>
        </motion.div>

        <motion.div initial={reduced ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .12 }} className="relative -mx-5 h-[clamp(310px,45svh,420px)] w-[calc(100%+2.5rem)] sm:mx-auto sm:h-[clamp(350px,48svh,460px)] sm:w-full sm:max-w-[500px] lg:h-[520px]">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-5 rounded-[2.4rem] bg-[radial-gradient(ellipse_at_50%_52%,rgba(190,242,100,.25),rgba(89,199,200,.09)_48%,transparent_75%)] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -inset-3 rounded-[2.4rem] border border-lime-300/20 lg:-inset-4" />
          <div className="relative h-full overflow-hidden rounded-t-[1.8rem] border border-[#a7c9db]/25 bg-[#101e2c]/85 p-[6px] shadow-[0_28px_75px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.08)] sm:rounded-[1.8rem] sm:p-2">
            <Image ref={portraitRef} src="/brand/diego-profile.jpeg" alt="Diego Galvis" width={700} height={850} sizes="(max-width: 1024px) 420px, 500px" priority className="h-full w-full rounded-t-[1.35rem] object-cover object-[center_30%] sm:rounded-[1.35rem]" />

            <AnimatePresence>
              {scanning && faceBox && !reduced && (
                <motion.div key="scan" aria-hidden="true" className="pointer-events-none absolute z-20" style={faceBox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
                  <span className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-cyan-200 shadow-[-3px_-3px_14px_rgba(103,232,249,.7)]" />
                  <span className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-cyan-200 shadow-[3px_-3px_14px_rgba(103,232,249,.7)]" />
                  <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-cyan-200 shadow-[-3px_3px_14px_rgba(103,232,249,.7)]" />
                  <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-cyan-200 shadow-[3px_3px_14px_rgba(103,232,249,.7)]" />
                  <motion.span className="absolute inset-x-0 top-0 h-px bg-cyan-100 shadow-[0_0_13px_3px_#67e8f9,0_0_30px_10px_rgba(103,232,249,.3)]" initial={{ top: "0%", opacity: 0 }} animate={{ top: "100%", opacity: [0, 1, 1, 0] }} transition={{ duration: 1.7, ease: "linear" }} />
                  <span className="absolute -right-1 -top-5 font-mono text-[8px] tracking-[.14em] text-cyan-100 sm:text-[9px]">SCANNING</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div aria-hidden="true" className="pointer-events-none absolute inset-x-[6px] bottom-[6px] z-20 h-16 bg-linear-to-t from-[#101e2c]/85 to-transparent sm:inset-x-2 sm:bottom-2 sm:h-24 sm:rounded-b-[1.35rem]" />
            <span className="absolute bottom-4 left-5 z-30 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-lime-200 sm:bottom-6 sm:left-7 sm:text-xs">Diego Galvis <span className="text-white/70">↗</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
