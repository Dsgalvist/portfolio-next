"use client";

import Image from "next/image";
import { useEffect, useState, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring } from "framer-motion";

type Language = "en" | "es";

type NavLink = { id: string; en: string; es: string };

const navLinks: NavLink[] = [
  { id: "about", en: "About", es: "Sobre mí" },
  { id: "services", en: "Services", es: "Servicios" },
  { id: "experience", en: "Experience", es: "Experiencia" },
  { id: "projects", en: "Projects", es: "Proyectos" },
  { id: "contact", en: "Contact me", es: "Contáctame" },
];

export default function Navbar({ lang }: { lang?: Language }) {
  const [open, setOpen] = useState(false);
  const [detected, setDetected] = useState<Language>("en");
  const [active, setActive] = useState<string | null>(null);
  const language = lang ?? detected;
  const whatsappMessage = language === "es"
    ? "Hola Diego, encontré tu portafolio. Tengo una idea para mi negocio y me gustaría contártela. ¿Podemos hablar?"
    : "Hi Diego, I found your portfolio. I have an idea for my business and I'd like to tell you about it. Can we talk?";
  const whatsappUrl = `https://wa.me/18253437802?text=${encodeURIComponent(whatsappMessage)}`;
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 380, damping: 32 });
  const smoothY = useSpring(pointerY, { stiffness: 380, damping: 32 });
  const light = useMotionTemplate`radial-gradient(350px circle at ${smoothX}% ${smoothY}%,rgba(94,234,212,.18),transparent 75%)`;
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 32 });

  function move(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width * 100);
    pointerY.set((event.clientY - bounds.top) / bounds.height * 100);
  }

  useEffect(() => {
    if (lang) return;
    const route = window.location.pathname.split("/")[1];
    const next = route === "es" || route === "en"
      ? route
      : navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    const frame = requestAnimationFrame(() => setDetected(next));
    return () => cancelAnimationFrame(frame);
  }, [lang]);

  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: "-22% 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function changeLanguage(next: Language) {
    if (language === next) return;
    setOpen(false);
    window.location.assign(`/${next}${window.location.hash}`);
  }

  return (
    <header onPointerMove={move} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070f1c]/90 text-white shadow-[0_12px_36px_rgba(0,0,0,.14)] backdrop-blur-xl xl:top-4 xl:border-0 xl:bg-transparent xl:px-5 xl:shadow-none xl:backdrop-blur-none">
      <div className="relative mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-8 xl:h-[80px] xl:gap-3 xl:rounded-[20px] xl:border xl:border-cyan-200/25 xl:bg-[#061420]/90 xl:px-5 xl:shadow-[0_22px_65px_rgba(0,0,0,.52),0_0_50px_rgba(34,211,238,.08)] xl:backdrop-blur-2xl">
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-[20px] xl:block" style={{ background: light }} />
        <div aria-hidden="true" className="pointer-events-none absolute left-3 top-0 hidden h-[3px] w-16 bg-lime-300 shadow-[0_0_18px_#bef264] xl:block" />
        <div aria-hidden="true" className="pointer-events-none absolute right-3 bottom-0 hidden h-[3px] w-16 bg-cyan-300 shadow-[0_0_18px_#67e8f9] xl:block" />
        <a href="#home" onClick={() => setOpen(false)} aria-label="Diego Galvis - Home"
          className="group relative flex shrink-0 items-center xl:gap-4">
          <Image src="/brand/logo-letras.png" alt="Diego Galvis" width={120} height={48} priority
            className="h-9 w-auto max-w-[96px] brightness-0 invert transition duration-300 group-hover:scale-105 sm:h-11 sm:max-w-none" />
          <span aria-hidden="true" className="hidden h-7 w-px bg-cyan-200/25 xl:block" />
          <span className="hidden font-mono text-[9px] font-bold uppercase leading-[1.65] tracking-[.19em] text-cyan-100/70 xl:block">Digital<br /><span className="text-lime-300">studio_</span></span>
          <span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-0 bg-lime-300 transition-all duration-300 group-hover:w-full" />
        </a>

        <nav aria-label={language === "es" ? "Navegación principal" : "Main navigation"}
          className="relative hidden items-center gap-0.5 xl:flex">
          {navLinks.map(({ id, en, es }, index) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}
              className={`group relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-3 text-[13px] font-semibold transition-colors duration-200 hover:bg-white/5 hover:text-white 2xl:gap-2.5 2xl:px-3 2xl:text-sm ${active === id ? "text-white" : "text-slate-300"}`}>
              <span aria-hidden="true" className={`font-mono text-[10px] tracking-[.12em] ${active === id ? "text-lime-300" : "text-cyan-200/50"}`}>0{index + 1}</span>
              {language === "es" ? es : en}
              {active === id && <motion.span layoutId="nav-active" aria-hidden="true" className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-lime-300 shadow-[0_0_16px_#bef264]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
            </a>
          ))}
        </nav>

        <div className="relative flex shrink-0 items-center gap-2 sm:gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            aria-label={language === "es" ? "Escríbeme por WhatsApp (nueva pestaña)" : "Message me on WhatsApp (new tab)"}
            className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-lime-300 px-2.5 text-xs font-bold text-[#07131b] shadow-[0_0_30px_rgba(190,242,100,.19)] transition hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_0_34px_rgba(190,242,100,.36)] focus-visible:outline-2 focus-visible:outline-lime-300 sm:px-3 xl:px-4">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M12.04 2a9.95 9.95 0 0 0-8.6 14.96L2 22l5.18-1.36A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.32a8.13 8.13 0 1 1 6.88 3.82Zm4.47-6.07c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.79.98-.14.17-.29.19-.54.06a6.64 6.64 0 0 1-1.99-1.23 7.44 7.44 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51l.38-.45c.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44l-.76-1.84c-.2-.48-.4-.41-.55-.42h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.09.9 2.42 1.02 2.59c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.44.52.61.2 1.17.17 1.61.1.49-.08 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.22-.17-.47-.29Z" /></svg>
            <span className="hidden sm:inline">WhatsApp</span>
            <span aria-hidden="true" className="hidden transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 xl:inline">↗</span>
          </a>
          <div role="group" aria-label={language === "es" ? "Idioma" : "Language"}
            className="flex items-center rounded-full border border-white/15 bg-white/5 p-1">
            {(["en", "es"] as const).map((code) => (
              <button key={code} type="button" aria-pressed={language === code}
                aria-label={code === "en" ? "English" : "Español"} onClick={() => changeLanguage(code)}
                className={`rounded-full px-2 py-1.5 text-[11px] font-bold tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-lime-300 sm:px-3 ${language === code ? "bg-lime-300 text-[#07131b]" : "text-slate-300 hover:text-white"}`}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button type="button" onClick={() => setOpen((value) => !value)}
            aria-controls="mobile-navigation" aria-expanded={open}
            aria-label={language === "es" ? (open ? "Cerrar menú" : "Abrir menú") : (open ? "Close menu" : "Open menu")}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-xl leading-none text-white transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300 xl:hidden">
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/35 to-transparent xl:hidden" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[2px] w-[calc(100%-3rem)] max-w-[1370px] -translate-x-1/2 origin-left rounded-full bg-linear-to-r from-cyan-300 via-lime-300 to-cyan-300 xl:block" style={{ scaleX: progress }} />

      {open && (
        <nav id="mobile-navigation" aria-label={language === "es" ? "Navegación móvil" : "Mobile navigation"}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-b border-cyan-300/20 bg-[#07101e]/98 px-5 py-4 shadow-[0_30px_60px_rgba(0,0,0,.5)] backdrop-blur-xl xl:hidden">
          <div className="mx-auto grid max-w-2xl gap-1">
            {navLinks.map(({ id, en, es }, index) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                className={`flex items-center gap-4 rounded-xl px-3 py-2.5 text-base font-medium transition hover:bg-white/5 hover:text-lime-300 ${active === id ? "text-lime-300" : "text-slate-200"}`}>
                <span aria-hidden="true" className="w-6 font-mono text-[10px] text-cyan-200/55">{String(index + 1).padStart(2, "0")}</span>
                {language === "es" ? es : en}
                <span aria-hidden="true" className="ml-auto text-cyan-200/50">↗</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
