"use client";

import Image from "next/image";
import { type FocusEvent, type PointerEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Reveal from "./Reveal";

type Language = "es" | "en";

const work = [
  {
    name: "DIALAC",
    place: "Colombia",
    dates: { es: "Sep 2026", en: "Sep 2026" },
    duration: { es: "1 mes", en: "1 month" },
    type: { es: "Cliente · remoto", en: "Client · remote" },
    problem: {
      es: "DIALAC necesitaba reunir su catálogo, servicios y solicitudes en un sitio claro para evitar pedidos incompletos.",
      en: "DIALAC needed one clear site for its catalog, services and requests to reduce incomplete orders.",
    },
    approach: {
      es: "Diseñé una experiencia fácil de usar en celular y computador con filtros, carrito, guía de compra y formulario validado.",
      en: "I designed an easy-to-use mobile and desktop experience with filters, a cart, a shopping guide and a validated form.",
    },
    solution: {
      es: "Construí un flujo para elegir productos, domicilio o recogida y fecha deseada, generar un PDF y enviar la solicitud a DIALAC. Integré WhatsApp y cobertura para Bogotá y Sabana Norte.",
      en: "I built a flow to choose products, delivery or pickup and a preferred date, generate a PDF and send the request to DIALAC. I integrated WhatsApp and coverage for Bogotá and Sabana Norte.",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI"],
    url: "https://dialac-web.vercel.app/",
  },
  {
    name: "MEKK S.A.S.",
    place: "Colombia",
    dates: { es: "Ago – sep 2026", en: "Aug – Sep 2026" },
    duration: { es: "1 mes", en: "1 month" },
    type: { es: "Cliente · remoto · trabajo en equipo", en: "Client · remote · team project" },
    problem: { es: "Con más de 70 productos eléctricos, sus visitantes necesitaban encontrar artículos sin perderse en el catálogo y contactar fácilmente a un asesor.", en: "With over 70 electrical products, visitors needed a simple way to find items in the catalog and reach an advisor." },
    approach: { es: "Rediseñamos el sitio entre dos desarrolladores. Construí búsqueda, filtros, orden, paginación y fichas de producto en una experiencia fácil de usar en celular y computador.", en: "A second developer and I redesigned the site. I built search, filters, sorting, pagination and product pages in an easy-to-use mobile and desktop experience." },
    solution: { es: "Conecté las consultas por WhatsApp con una lógica que distribuye los mensajes entre asesores. Así, el visitante puede pasar del producto a la conversación.", en: "I connected WhatsApp inquiries to logic that distributes messages among advisors, letting visitors move from a product to a conversation." },
    tech: ["React", "TypeScript", "Tailwind CSS", "Redis"],
    url: "https://mekk-sas.vercel.app/",
  },
  {
    name: "ForConcrete",
    place: "Calgary, Canadá",
    dates: { es: "Nov 2025 – ene 2026", en: "Nov 2025 – Jan 2026" },
    duration: { es: "3 meses", en: "3 months" },
    type: { es: "Desarrollo web · remoto", en: "Web development · remote" },
    problem: { es: "ForConcrete necesitaba presentar su negocio en internet con claridad y facilitar que las personas encontraran su información.", en: "ForConcrete needed a clear online presence that made its business information easy to find." },
    approach: { es: "Organicé el contenido y diseñé una navegación sencilla, adaptable a celular y computador.", en: "I organized the content and designed straightforward navigation for mobile and desktop." },
    solution: { es: "Desarrollé un sitio web adaptable y fácil de usar que presenta la empresa y permite recorrer su información sin complicaciones.", en: "I built a responsive, easy-to-use website that presents the business and lets visitors explore its information without friction." },
    tech: ["HTML", "CSS", "JavaScript"],
    url: null,
  },
] as const;

function WorkVisual({ index, compact = false }: { index: number; compact?: boolean }) {
  return (
    <div className={`relative isolate flex items-center justify-center overflow-hidden rounded-2xl bg-[#0c1b2a] ${compact ? "h-24 sm:h-36 lg:h-44" : "h-44 sm:h-52 lg:h-56"}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(133,197,142,.26),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(151,218,208,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(151,218,208,.14) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[.15em] text-[#c1d7d5]">DG / 0{index + 1}</span>
      <div className={`flex w-[68%] items-center justify-center rounded-xl p-3 shadow-[12px_12px_0_rgba(99,186,164,.13)] ${index === 1 ? "border border-orange-300/30 bg-[#141d26]" : "border border-white/30 bg-[#e5ebe9]"}`}>
        <Image
          src={index === 0 ? "/experience/logocompleto.png" : index === 1 ? "/experience/mekk-sas.png" : "/experience/logot.png"}
          alt={index === 0 ? "DIALAC" : index === 1 ? "MEKK S.A.S." : "ForConcrete Ltd"}
          width={1024}
          height={768}
          sizes="(max-width: 768px) 160px, 350px"
          className={`w-full object-contain ${compact ? "h-16 sm:h-24 lg:h-28" : "h-28 sm:h-36"}`}
        />
      </div>
    </div>
  );
}

export default function Experience({ lang }: { lang: Language }) {
  const sectionRef = useRef<HTMLElement>(null);
  const es = lang === "es";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const reduced = useReducedMotion();
  const px = useMotionValue(50);
  const py = useMotionValue(45);
  const x = useSpring(px, { stiffness: 450, damping: 31 });
  const y = useSpring(py, { stiffness: 450, damping: 31 });
  const light = useMotionTemplate`radial-gradient(630px circle at ${x}% ${y}%, rgba(64,178,151,.2), transparent 72%)`;
  const previous = (active + work.length - 1) % work.length;
  const next = (active + 1) % work.length;
  const selected = work[active];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (reduced || paused || !isVisible || !tabVisible) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % work.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [active, paused, reduced, isVisible, tabVisible]);

  function resumeAfterBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
  }

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - bounds.left) / bounds.width) * 100);
    py.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function preview(index: number, side: "previous" | "next") {
    return (
      <button type="button" onClick={() => setActive(index)} aria-label={`${es ? "Mostrar" : "Show"} ${work[index].name}`} className="group flex h-full w-full flex-col rounded-[1.4rem] border border-[#b0e7d3]/25 bg-[linear-gradient(135deg,#183841,#102531)] p-2 text-left shadow-[0_16px_40px_rgba(9,31,40,.18)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-lime-300/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176f59] sm:p-3 lg:opacity-85 lg:hover:opacity-100">
        <WorkVisual index={index} compact />
        <div className="flex w-full items-center justify-between gap-2 px-1 pb-1 pt-3 lg:px-2">
          <div className="min-w-0">
            <span className="block font-mono text-[9px] font-bold uppercase tracking-[.12em] text-lime-300">{side === "previous" ? (es ? "Anterior" : "Previous") : es ? "Siguiente" : "Next"}</span>
            <span className="mt-1 block truncate text-sm font-black text-[#f0f8f1] sm:text-lg">{work[index].name}</span>
          </div>
          <span aria-hidden="true" className="text-xl text-lime-300 transition-transform group-hover:scale-125">{side === "previous" ? "←" : "→"}</span>
        </div>
      </button>
    );
  }

  return (
    <section id="experience" ref={sectionRef} onPointerMove={move} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)} onFocusCapture={() => setPaused(true)} onBlurCapture={resumeAfterBlur} className="relative isolate scroll-mt-24 overflow-hidden border-y border-[#284552]/15 bg-[#eef4ea] px-5 py-12 text-[#102631] sm:px-8 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_77%_40%,#d4e9df_0%,#eef4ea_58%,#f6f2e6_100%)]" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: light }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(40,91,98,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(40,91,98,.12) 1px,transparent 1px)", backgroundSize: "76px 76px" }} />
      <div className="relative mx-auto max-w-7xl">
        <Reveal><div className="max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#285962] sm:text-xs"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#176f59]" />{es ? "EXPERIENCIA / TRABAJO CON CLIENTES" : "EXPERIENCE / CLIENT WORK"}</p>
          <h2 className="mt-3 text-[clamp(2.5rem,4.6vw,4.5rem)] font-black leading-[1.02] tracking-[-.065em]">{es ? <>Negocios reales. <em className="font-serif font-normal text-[#176f59]">Trabajo real.</em></> : <>Real businesses. <em className="font-serif font-normal text-[#176f59]">Real work.</em></>}</h2>
          <p className="mt-3 text-sm leading-6 text-[#39555a] sm:text-base">{es ? "Tres negocios y tres necesidades diferentes. Elige uno para ver qué construí." : "Three businesses, three different needs. Select one to see what I built."}</p>
        </div></Reveal>

        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)_minmax(0,1fr)] lg:items-center lg:gap-5">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div key={previous} initial={reduced ? false : { opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={reduced ? undefined : { opacity: 0, scale: .87 }} transition={{ duration: reduced ? 0 : .45 }} className="h-full">
                {preview(previous, "previous")}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="order-1 col-span-2 lg:order-2 lg:col-span-1">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#b0e7d3]/35 bg-[linear-gradient(150deg,#173c43,#0e2330_75%)] p-2 text-[#f0f8f1] shadow-[0_24px_75px_rgba(9,31,40,.22)] sm:p-3">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.article key={active} initial={reduced ? false : { opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={reduced ? undefined : { opacity: 0, scale: .83 }} transition={{ duration: reduced ? 0 : .52, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="relative">
                    <WorkVisual index={active} />
                    {selected.url && <a href={selected.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 rounded-full border border-lime-300/50 bg-[#d5f48d] px-4 py-2 text-xs font-bold text-[#102631] shadow-lg transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d5f48d]" aria-label={`${es ? "Abrir sitio de" : "Open website for"} ${selected.name} (${es ? "nueva pestaña" : "new tab"})`}>{es ? "Visitar sitio ↗" : "Visit website ↗"}</a>}
                  </div>
                  <div className="px-3 pb-3 pt-4 sm:px-5 sm:pb-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[.08em] text-lime-300 sm:text-xs">0{active + 1} / 03 · {selected.dates[lang]} · {selected.duration[lang]}</p>
                    <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="text-3xl font-black tracking-[-.05em] sm:text-4xl">{selected.name}</h3>
                      <span className="text-xs font-semibold text-[#b7ecd3]">{selected.type[lang]} · {selected.place}</span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm leading-6 text-[#e8f4ef]">
                      <p><strong className="mr-1 font-semibold text-lime-300">{es ? "Problema:" : "Problem:"}</strong>{selected.problem[lang]}</p>
                      <p><strong className="mr-1 font-semibold text-lime-300">{es ? "Enfoque:" : "Approach:"}</strong>{selected.approach[lang]}</p>
                      <p><strong className="mr-1 font-semibold text-lime-300">{es ? "Solución:" : "Solution:"}</strong>{selected.solution[lang]}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5" aria-label={es ? "Tecnologías utilizadas" : "Technologies used"}>{selected.tech.map((tech) => <span key={tech} className="rounded-full border border-[#b7ecd3]/25 bg-white/10 px-2.5 py-1 text-[11px] text-[#e8f4ef]">{tech}</span>)}</div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
          <div className="order-3">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div key={next} initial={reduced ? false : { opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={reduced ? undefined : { opacity: 0, scale: .87 }} transition={{ duration: reduced ? 0 : .45 }} className="h-full">
                {preview(next, "next")}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}