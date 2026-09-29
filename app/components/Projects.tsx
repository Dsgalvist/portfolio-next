"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Reveal from "./Reveal";

type Language = "es" | "en";

const projects = [
  {
    title: "GestureVision",
    kind: { es: "Visión por computadora", en: "Computer vision" },
    idea: {
      es: "¿Y si pudieras controlar una experiencia digital sin tocar la pantalla?",
      en: "What if you could control a digital experience without touching the screen?",
    },
    description: {
      es: "La cámara reconoce movimientos de la mano y los convierte en controles para navegar, superar desafíos de precisión e interactuar con elementos 3D.",
      en: "A webcam reads hand movements and turns them into controls for navigation, precision challenges and 3D interactions.",
    },
    image: "/projects/GestureVision.png",
    stack: ["Next.js", "TypeScript", "MediaPipe", "Three.js"],
    demo: "https://gesture-vision-nine.vercel.app/",
    source: "https://github.com/Dsgalvist/GestureVision",
    video: null,
  },
  {
    title: "SpeakFix",
    kind: { es: "IA y mantenimiento", en: "AI & maintenance" },
    idea: {
      es: "Reportar una falla debería ser tan fácil como contar lo que pasó.",
      en: "Reporting a problem should be as easy as saying what happened.",
    },
    description: {
      es: "Un dispositivo recibe el reporte hablado, lo convierte en un ticket digital y permite que el equipo de mantenimiento lo revise y gestione.",
      en: "A device captures a spoken issue, turns it into a digital ticket and lets the maintenance team review and manage it.",
    },
    image: "/projects/speakfix1.png",
    stack: ["Python", "Azure", "AI", "React"],
    demo: "https://aryansaini-71.github.io/speakfix/",
    source: "https://github.com/Dsgalvist/vmis-manager-dashboard",
    video: null,
  },
  {
    title: "Language Learning App",
    kind: { es: "Prototipo UX/UI", en: "UX/UI prototype" },
    idea: {
      es: "Aprender un idioma puede sentirse más claro, social y motivador.",
      en: "Learning a language can feel clearer, more social and more motivating.",
    },
    description: {
      es: "Diseñé en Figma una experiencia móvil con lecciones, metas, logros y funciones sociales. Es un prototipo de diseño, no una aplicación publicada.",
      en: "I designed a mobile experience in Figma with lessons, goals, achievements and social features. This is a design prototype, not a published app.",
    },
    image: "/projects/figma1.png",
    stack: ["Figma", "UX Research", "UI Design"],
    demo: null,
    source: null,
    video: "/projects/figma.mp4",
  },
  {
    title: "2D Platformer",
    kind: { es: "Juego interactivo", en: "Interactive game" },
    idea: {
      es: "También construyo experiencias para jugar, explorar y descubrir.",
      en: "I also build experiences to play, explore and discover.",
    },
    description: {
      es: "Un juego de plataformas hecho en Godot con niveles, movimiento, colisiones y objetos coleccionables. Puedes jugarlo aquí mismo.",
      en: "A platformer built in Godot with levels, movement, collisions and collectibles. You can play it right here.",
    },
    stack: ["Godot", "Game Development", "2D"],
    image: null,
    demo: null,
    source: null,
    video: null,
  },
] as const;

export default function Projects({ lang }: { lang: Language }) {
  const es = lang === "es";
  const [active, setActive] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const x = useSpring(px, { stiffness: 450, damping: 31 });
  const y = useSpring(py, { stiffness: 450, damping: 31 });

  const light = useMotionTemplate`radial-gradient(650px circle at ${x}% ${y}%, rgba(145,221,108,.14), transparent 72%)`;
  const project = projects[active];

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
    if (!isVisible || reduced || showGame || showVideo) return;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [active, isVisible, reduced, showGame, showVideo]);

  function select(index: number) {
    if (index === active) return;
    setShowVideo(false);
    setShowGame(false);
    setActive(index);
  }

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - bounds.left) / bounds.width) * 100);
    py.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      onPointerMove={move}
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#090e18] px-5 py-12 text-white sm:px-8 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_48%,#183343_0%,#0c1827_49%,#090e18_84%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: light }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,178,207,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(139,178,207,.12) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#b6d2cd] sm:text-xs">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_#bef264]"
              />
              {es
                ? "PROYECTOS / IDEAS EN ACCIÓN"
                : "PROJECTS / IDEAS IN ACTION"}
            </p>

            <h2 className="mt-3 text-[clamp(2.7rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-.065em]">
              {es ? (
                <>
                  Más formas de{" "}
                  <em className="font-serif font-normal text-lime-300">
                    crear.
                  </em>
                </>
              ) : (
                <>
                  More ways to{" "}
                  <em className="font-serif font-normal text-lime-300">
                    create.
                  </em>
                </>
              )}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#c5d6dc] sm:text-base">
              {es
                ? "Experiencias que puedes explorar: visión por computadora, voz, diseño de producto y un juego."
                : "Experiences to explore: computer vision, voice, product design and a game."}
            </p>
          </div>
        </Reveal>

        <div className="mt-8">
          <nav
            aria-label={es ? "Elegir proyecto" : "Choose a project"}
            className="grid grid-cols-2 gap-2 pb-3 sm:gap-3 lg:grid-cols-4"
          >
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => select(index)}
                aria-current={active === index ? "true" : undefined}
                className={`group relative flex min-h-[76px] min-w-0 w-full flex-col justify-center rounded-xl border px-3 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 sm:px-4 lg:min-h-[88px] lg:px-5 ${
                  active === index
                    ? "border-lime-300/60 bg-lime-300/10"
                    : "border-white/15 bg-white/5 hover:border-white/35 hover:bg-white/10"
                }`}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.11em] text-lime-300">
                  0{index + 1} / {es ? item.kind.es : item.kind.en}
                </span>
                <span className="mt-1 text-sm font-bold leading-5 text-white sm:text-base lg:text-lg">
                  {item.title}
                </span>
                {active === index && (
                  <motion.span
                    layoutId="project-indicator"
                    aria-hidden="true"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-lime-300"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="relative mt-3 min-w-0 overflow-hidden rounded-[1.6rem] border border-cyan-100/20 bg-[#102330] shadow-[0_30px_85px_rgba(0,0,0,.32)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.12em] text-[#bbd6d7] sm:px-6">
              <span>DG / PROJECT LAB</span>
              <span className="text-lime-300">
                0{active + 1} / 04
              </span>
            </div>

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.article
                key={active}
                initial={
                  reduced ? false : { opacity: 0, scale: 0.96, y: 12 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  reduced
                    ? undefined
                    : { opacity: 0, scale: 1.03, y: -8 }
                }
                transition={{ duration: reduced ? 0 : 0.32 }}
              >
                <div className="lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,1fr)]">
                  <div
                    className={`relative flex items-center justify-center overflow-hidden bg-[#0b1825] ${
                      active === 3 && showGame
                        ? "h-[420px] sm:h-[510px] lg:h-[540px]"
                        : "h-[225px] sm:h-[340px] lg:h-[430px]"
                    }`}
                  >
                    {active === 3 ? (
                      showGame ? (
                        <iframe
                          src="/game/index.html"
                          title={
                            es
                              ? "Juego de plataformas 2D"
                              : "2D platformer game"
                          }
                          className="h-full w-full border-0"
                          allow="fullscreen"
                        />
                      ) : (
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_60%,#224e57,#0b1825_67%)]">
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-9 bg-[#264f47] shadow-[0_-3px_0_#c7f36c]"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute bottom-10 left-[19%] h-4 w-[27%] rounded-t bg-[#41786b] shadow-[0_-3px_0_#c7f36c]"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute bottom-25 right-[15%] h-4 w-[24%] rounded-t bg-[#41786b] shadow-[0_-3px_0_#c7f36c]"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute bottom-14 left-[30%] h-8 w-6 rounded-t-full bg-lime-300 shadow-[0_0_25px_rgba(190,242,100,.6)]"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute bottom-34 right-[26%] text-2xl text-amber-300"
                          >
                            ✦
                          </span>
                          <button
                            type="button"
                            onClick={() => setShowGame(true)}
                            className="relative z-10 rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-[#07131b] shadow-[0_10px_32px_rgba(0,0,0,.4)] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                          >
                            {es
                              ? "Jugar aquí · 37 MB ↗"
                              : "Play here · 37 MB ↗"}
                          </button>
                        </div>
                      )
                    ) : active === 2 && showVideo ? (
                      <video
                        src="/projects/figma.mp4"
                        controls
                        autoPlay
                        preload="none"
                        playsInline
                        className="h-full w-full bg-black object-contain"
                        aria-label={
                          es
                            ? "Demostración del prototipo de idiomas"
                            : "Language app prototype demonstration"
                        }
                      />
                    ) : (
                      <Image
                        src={project.image ?? "/projects/GestureVision.png"}
                        alt={
                          es
                            ? `Vista de ${project.title}`
                            : `${project.title} preview`
                        }
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className={`object-contain ${
                          active === 2 ? "bg-[#eeeef5]" : "bg-[#081523]"
                        }`}
                      />
                    )}

                    {active === 2 && showVideo && (
                      <button
                        type="button"
                        onClick={() => setShowVideo(false)}
                        className="absolute right-3 top-3 rounded-full border border-white/30 bg-[#07131b] px-3 py-2 text-xs font-semibold text-white focus-visible:outline-2 focus-visible:outline-lime-300"
                      >
                        {es ? "Cerrar video" : "Close video"}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col justify-center border-t border-white/10 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-lime-300">
                      {es ? project.kind.es : project.kind.en}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold leading-6 text-[#e8f4e8]">
                      {es ? project.idea.es : project.idea.en}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#c6d6d9]">
                      {es
                        ? project.description.es
                        : project.description.en}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {project.demo && project.source ? (
                        <>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-[#07131b] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                          >
                            {active === 0
                              ? es
                                ? "Probar experiencia ↗"
                                : "Try experience ↗"
                              : es
                                ? "Conocer proyecto ↗"
                                : "Explore project ↗"}
                          </a>
                          <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[#d5e8e2] underline decoration-white/30 underline-offset-4 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300"
                          >
                            GitHub ↗
                          </a>
                        </>
                      ) : active === 2 ? (
                        <button
                          type="button"
                          onClick={() =>
                            setShowVideo((value) => !value)
                          }
                          className="rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-[#07131b] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                        >
                          {showVideo
                            ? es
                              ? "Cerrar demo"
                              : "Close demo"
                            : es
                              ? "Ver demo ↗"
                              : "Watch demo ↗"}
                        </button>
                      ) : showGame ? (
                        <button
                          type="button"
                          onClick={() => setShowGame(false)}
                          className="rounded-full border border-lime-300/60 px-4 py-2 text-sm font-semibold text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300"
                        >
                          {es ? "Cerrar juego" : "Close game"}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setShowGame(true)}
                          className="rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-[#07131b] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                        >
                          {es
                            ? "Jugar ahora · 37 MB"
                            : "Play now · 37 MB"}
                        </button>
                      )}
                    </div>

                    <div
                      className="mt-4 flex flex-wrap gap-1.5"
                      aria-label={
                        es
                          ? "Herramientas utilizadas"
                          : "Tools used"
                      }
                    >
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-200/20 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[#d5e7e5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {isVisible && !reduced && !showGame && !showVideo && (
              <motion.div
                key={active}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] bg-lime-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}