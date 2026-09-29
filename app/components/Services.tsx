"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Language = "es" | "en";

const services = [
  { es: "Sitios web y catálogos", en: "Websites & catalogs", esDetail: "Haz que las personas conozcan tu negocio, encuentren lo que ofreces y sepan cómo contactarte.", enDetail: "Give people a clear way to discover your business, explore what you offer and get in touch.", esResult: "Descubrir → explorar → contactar", enResult: "Discover → explore → contact", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"] },
  { es: "Aplicaciones web y móviles", en: "Web & mobile apps", esDetail: "Crea una aplicación web o móvil que se adapte a la forma en que trabajan tus clientes y tu negocio.", enDetail: "Build a web or mobile app around the way your customers and your business actually work.", esResult: "Una experiencia hecha para ti", enResult: "An experience built around you", skills: ["React", "React Native", "Expo", "Node.js", "Express", "PostgreSQL", "MySQL"] },
  { es: "Agentes de IA y automatización", en: "AI agents & automation", esDetail: "Responde preguntas frecuentes, organiza solicitudes y simplifica tareas repetitivas.", enDetail: "Answer common questions, organize requests and make repetitive tasks easier to manage.", esResult: "Más tiempo para lo importante", enResult: "More time for what matters", skills: ["Python", "Microsoft Foundry", "Azure AI", "AI Agents", "Flask"] },
  { es: "Cloud e integraciones", en: "Cloud & integrations", esDetail: "Conecta las herramientas y servicios de tu producto para que funcionen juntos mientras tu negocio crece.", enDetail: "Connect the tools and services your product needs, so everything works together as your business grows.", esResult: "Todo conectado", enResult: "Everything connected", skills: ["Azure", "Azure Functions", "Azure Blob Storage", "Firebase", "Supabase", "REST APIs", "Docker"] },
] as const;

function Visual({ index }: { index: number }) {
  return <svg viewBox="0 0 400 260" className="h-full w-full" fill="none" aria-hidden="true">
    <defs><linearGradient id="service-glass" x1="30" y1="30" x2="350" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#244451"/><stop offset="1" stopColor="#0e2031"/></linearGradient><linearGradient id="service-light" x1="80" y1="40" x2="320" y2="230" gradientUnits="userSpaceOnUse"><stop stopColor="#c7f36c"/><stop offset="1" stopColor="#70cbd0"/></linearGradient></defs>
    <circle cx="200" cy="130" r="120" fill="#bdf36a" opacity=".07"/>
    {index === 0 && <>
      <rect x="28" y="25" width="344" height="210" rx="15" fill="url(#service-glass)" stroke="#9dd3cf" strokeWidth="2"/><path d="M28 59h344" stroke="#9dd3cf" opacity=".5"/><circle cx="47" cy="43" r="4" fill="#c7f36c"/><circle cx="61" cy="43" r="4" fill="#70cbd0"/><circle cx="75" cy="43" r="4" fill="#70cbd0"/>
      <rect x="45" y="77" width="310" height="78" rx="9" fill="#204351" stroke="#c7f36c" strokeOpacity=".5"/><path d="M62 100h108M62 118h169" stroke="#e5f6e9" strokeWidth="7" strokeLinecap="round"/><rect x="62" y="133" width="86" height="12" rx="6" fill="url(#service-light)"/>
      <rect x="45" y="171" width="94" height="47" rx="8" fill="#34636a"/><rect x="153" y="171" width="94" height="47" rx="8" fill="#34636a"/><rect x="261" y="171" width="94" height="47" rx="8" fill="#34636a"/><path d="M56 204h72m36 0h72m36 0h72" stroke="#acd9d1" strokeWidth="4" strokeLinecap="round"/><circle cx="329" cy="119" r="23" fill="url(#service-light)"/><path d="m321 119 6 6 12-13" stroke="#12333d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </>}
    {index === 1 && <>
      <rect x="28" y="52" width="250" height="166" rx="12" fill="url(#service-glass)" stroke="#9dd3cf" strokeWidth="2"/><path d="M28 86h250M92 86v132" stroke="#9dd3cf" opacity=".5"/><path d="M47 107h27m-27 17h27m-27 17h27" stroke="#c7f36c" strokeWidth="5" strokeLinecap="round"/><rect x="109" y="102" width="150" height="49" rx="7" fill="#34636a"/><path d="M122 116h65m-65 19h116" stroke="#e5f6e9" strokeWidth="5" strokeLinecap="round"/><rect x="109" y="166" width="64" height="36" rx="7" fill="#528d80"/><rect x="187" y="166" width="72" height="36" rx="7" fill="#528d80"/>
      <rect x="269" y="25" width="102" height="214" rx="18" fill="#102936" stroke="#c7f36c" strokeWidth="2"/><rect x="282" y="47" width="76" height="169" rx="8" fill="#214552"/><path d="M294 65h51m-51 17h32" stroke="#e5f6e9" strokeWidth="5" strokeLinecap="round"/><rect x="294" y="106" width="52" height="50" rx="8" fill="url(#service-light)"/><rect x="294" y="176" width="52" height="12" rx="6" fill="#a8d5c9"/><circle cx="320" cy="227" r="3" fill="#c7f36c"/>
    </>}
    {index === 2 && <>
      <path d="M110 72 201 135 302 72M110 199l91-64 101 64" stroke="#78bec3" strokeWidth="2" strokeDasharray="6 6"/><circle cx="201" cy="135" r="52" fill="#204451" stroke="#c7f36c" strokeWidth="2"/><path d="M175 119h53m-53 17h42m-42 17h33" stroke="#d7f3e1" strokeWidth="6" strokeLinecap="round"/><path d="m245 178 7 15 7-15 15-7-15-6-7-15-7 15-15 6Z" fill="url(#service-light)"/>
      <rect x="30" y="38" width="126" height="65" rx="15" fill="url(#service-glass)" stroke="#85cad0" strokeWidth="2"/><path d="M47 61h82m-82 17h59" stroke="#d7f3e1" strokeWidth="5" strokeLinecap="round"/><rect x="253" y="38" width="119" height="65" rx="15" fill="url(#service-glass)" stroke="#85cad0" strokeWidth="2"/><path d="M270 61h80m-80 17h58" stroke="#d7f3e1" strokeWidth="5" strokeLinecap="round"/>
      <rect x="30" y="171" width="126" height="62" rx="15" fill="url(#service-glass)" stroke="#85cad0" strokeWidth="2"/><path d="M47 193h80m-80 17h59" stroke="#d7f3e1" strokeWidth="5" strokeLinecap="round"/><rect x="253" y="171" width="119" height="62" rx="15" fill="url(#service-glass)" stroke="#c7f36c" strokeWidth="2"/><path d="m279 201 13 12 26-27" stroke="#c7f36c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </>}
    {index === 3 && <>
      <path d="M95 133h210M200 40v190M120 62l164 147M284 62 120 209" stroke="#8ac8c7" strokeWidth="2" strokeDasharray="6 6"/><circle cx="200" cy="133" r="61" fill="#183d4a" stroke="#c7f36c" strokeWidth="2"/><path d="M169 151h64c12 0 19-8 19-17 0-10-7-16-17-17-4-14-15-22-29-22-16 0-27 10-30 23-13 0-21 8-21 17s6 16 14 16Z" fill="url(#service-light)"/>
      <circle cx="95" cy="133" r="23" fill="#285462" stroke="#9dd3cf" strokeWidth="2"/><circle cx="305" cy="133" r="23" fill="#285462" stroke="#9dd3cf" strokeWidth="2"/><circle cx="200" cy="40" r="23" fill="#285462" stroke="#9dd3cf" strokeWidth="2"/><circle cx="200" cy="230" r="23" fill="#285462" stroke="#9dd3cf" strokeWidth="2"/><path d="M85 133h20m190 0h20M190 40h20m-20 190h20" stroke="#c7f36c" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="120" cy="62" r="6" fill="#c7f36c"/><circle cx="284" cy="62" r="6" fill="#c7f36c"/><circle cx="120" cy="209" r="6" fill="#c7f36c"/><circle cx="284" cy="209" r="6" fill="#c7f36c"/>
    </>}
  </svg>;
}

export default function Services({ lang }: { lang: Language }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const reduced = useReducedMotion();
  const px = useMotionValue(50);
  const py = useMotionValue(45);
  const x = useSpring(px, { stiffness: 450, damping: 31 });
  const y = useSpring(py, { stiffness: 450, damping: 31 });
  const light = useMotionTemplate`radial-gradient(640px circle at ${x}% ${y}%, rgba(162,230,82,.17), transparent 72%)`;
  const es = lang === "es";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.intersectionRatio >= 0.35),
      { threshold: 0.35 }
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

    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % services.length),
      4000
    );

    return () => window.clearTimeout(timer);
  }, [active, paused, reduced, isVisible, tabVisible]);

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - bounds.left) / bounds.width) * 100);
    py.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return <section id="services" ref={sectionRef} onPointerMove={move} className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#090e18] px-5 py-10 text-white sm:px-8 lg:py-14">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_23%_43%,#1a3041_0%,#0c1827_44%,#090e18_80%)]" />
    <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: light }} />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(139,178,207,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(139,178,207,.12) 1px,transparent 1px)", backgroundSize: "76px 76px", maskImage: "linear-gradient(90deg,black,transparent 75%)" }} />
    <div className="relative mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch lg:gap-12">
      <div>
        <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a9c8cd] sm:text-xs"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_#bef264]" />{es ? "LO QUE PUEDO CREAR PARA TU NEGOCIO" : "WHAT I CAN BUILD FOR YOUR BUSINESS"}</p>
        <h2 className="mt-4 max-w-5xl text-[clamp(2.5rem,4.4vw,4.1rem)] font-black leading-[1.02] tracking-[-.065em] lg:text-[clamp(2.7rem,3.35vw,3.55rem)]">{es ? <>Soluciones digitales <em className="font-serif font-normal text-lime-300">para tu negocio.</em></> : <>Digital solutions <em className="font-serif font-normal text-lime-300">for your business.</em></>}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#c5d6dc] sm:text-lg">{es ? "Elige lo que necesitas. Yo te ayudo a diseñarlo y construirlo para las personas que usarán tu producto." : "Choose what you need. I'll help you design and build it for the people who will use your product."}</p>
        <div className="mt-7 lg:mt-8" onPointerEnter={(event) => { if (event.pointerType === "mouse") setPaused(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setPaused(false); }}>
          <div className="grid grid-cols-2 gap-2 lg:block lg:border-t lg:border-white/20">
            {services.map((service, index) => <button key={service.en} type="button" onClick={() => setActive(index)} onFocus={() => setActive(index)} onMouseEnter={() => setActive(index)} aria-pressed={active === index} className={`group relative flex min-h-[104px] w-full flex-col gap-2 rounded-xl border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 lg:grid lg:min-h-0 lg:grid-cols-[2rem_1fr_auto] lg:items-start lg:gap-4 lg:rounded-none lg:border-0 lg:border-b lg:px-1 lg:py-5 ${active === index ? "border-lime-300/60 bg-lime-300/10 lg:border-lime-300/50 lg:bg-lime-300/5" : "border-white/15 bg-white/5 hover:border-white/40 hover:bg-white/10 lg:border-white/15 lg:bg-transparent"}`}>
              <span className="font-mono text-xs text-lime-300 lg:pt-1">0{index + 1}</span><span className="min-w-0 pr-3 lg:pr-0"><span className="block text-sm font-bold leading-5 tracking-tight text-white sm:text-base lg:text-xl">{es ? service.es : service.en}</span>{active === index && <span className="mt-2 hidden max-w-md text-sm leading-6 text-[#c5d6dc] lg:block">{es ? service.esDetail : service.enDetail}</span>}</span><span aria-hidden="true" className={`absolute right-3 top-2 text-xl leading-none transition-transform lg:static ${active === index ? "rotate-45 text-lime-300" : "text-white/50 group-hover:text-lime-300"}`}>+</span>
            </button>)}
          </div>
          <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#c5d6dc] lg:hidden">{es ? services[active].esDetail : services[active].enDetail}</p>
        </div>
      </div>
      <div className="relative isolate overflow-hidden rounded-[1.6rem] border border-[#a7c9db]/25 bg-[#101e2c]/85 p-4 shadow-[0_28px_75px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.08)] sm:p-6 lg:flex lg:h-full lg:flex-col">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(133,197,142,.19),transparent_58%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(151,218,208,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(151,218,208,.13) 1px,transparent 1px)", backgroundSize: "30px 30px", maskImage: "linear-gradient(to bottom,transparent,black 45%,transparent)" }} />
        <div className="flex items-center justify-between border-b border-white/15 pb-3 font-mono text-[10px] uppercase tracking-[.12em] text-[#bad2dc]"><span>DG / STUDIO</span><span className="text-lime-300">0{active + 1} / 04</span></div>
        <div className="relative h-[205px] sm:h-[255px] lg:min-h-[360px] lg:flex-1"><AnimatePresence mode="wait" initial={false}><motion.div key={active} className="absolute inset-0" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -10 }} transition={{ duration: .23 }}><Visual index={active} /></motion.div></AnimatePresence></div>
        <div className="border-t border-white/15 pt-3"><p className="font-mono text-[10px] uppercase tracking-[.09em] text-[#b8d4d4]">{es ? services[active].esResult : services[active].enResult}</p><div className="mt-3 flex flex-wrap gap-1.5" aria-label={es ? "Tecnologías relacionadas" : "Related technologies"}>{services[active].skills.map((skill) => <span key={skill} className="rounded-full border border-cyan-200/20 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[#d5e7e5]">{skill}</span>)}</div></div>
        {!reduced && !paused && isVisible && tabVisible && <motion.div key={active} aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] bg-lime-300" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4, ease: "linear" }} />}
      </div>
    </div>
  </section>;
}