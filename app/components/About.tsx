"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type Language = "en" | "es";

const content = {
  en: {
    eyebrow: "ABOUT / THE PERSON BEHIND THE WORK",
    heading: (
      <>
        Let’s make it{" "}
        <em className="font-serif font-normal text-[#176f59]">
          mean something.
        </em>
      </>
    ),
    intro:
      "I'm Diego Galvis, a software developer. I work closely with you to understand what your company needs and how best to connect with the people and businesses you want to reach. From there, I turn your idea into a clear, easy-to-use digital experience designed to support your company's goals.",
    detail:
      "I studied Programming and Digital Design at Colegio Lausana and Software Development at the Southern Alberta Institute of Technology in Calgary, Canada. I build websites and mobile and web apps that help your business connect with customers. I also develop AI agents and work with cloud technology.",
    credentialsLabel: "CERTIFICATIONS & LEARNING",
    completedLabel: "Completed",
    inProgressLabel: "In progress",
    cta: "Let's talk about your idea",
    work: "See my work",
    sceneLabel: "HOW WE BRING IT TO LIFE",
    scenes: [
      {
        word: "I listen.",
        detail:
          "We start with your business, your customers, and what you want to achieve.",
      },
      {
        word: "We shape it.",
        detail:
          "I turn the conversation into a clear direction for the product.",
      },
      {
        word: "I build it.",
        detail:
          "We refine the experience together until it's ready to use.",
      },
    ],
    footer: "FROM THE FIRST CONVERSATION TO THE FIRST CLICK",
  },
  es: {
    eyebrow: "SOBRE MÍ / DETRÁS DEL TRABAJO",
    heading: (
      <>
        Hagamos que tu idea{" "}
        <em className="font-serif font-normal text-[#176f59]">
          signifique algo.
        </em>
      </>
    ),
    intro:
      "Soy Diego Galvis, desarrollador de software. Trabajo de la mano contigo para entender qué necesita tu empresa y cómo conectar de la manera más apropiada con las personas y empresas a las que quieres llegar. Desde ahí convierto tu idea en una experiencia digital clara, fácil de usar y pensada para impulsar los objetivos de tu empresa.",
    detail:
      "Me formé como programador y diseñador digital en el Colegio Lausana y en Desarrollo de Software en el Southern Alberta Institute of Technology, en Calgary, Canadá. Creo sitios web y aplicaciones web y móviles que ayudan a tu negocio a conectar con sus clientes. También desarrollo agentes de IA y trabajo con tecnología cloud.",
    credentialsLabel: "CERTIFICACIONES Y FORMACIÓN",
    completedLabel: "Completados",
    inProgressLabel: "En curso",
    cta: "Hablemos de tu idea",
    work: "Conoce mi trabajo",
    sceneLabel: "ASÍ LO HACEMOS REALIDAD",
    scenes: [
      {
        word: "Te escucho.",
        detail:
          "Empezamos por tu negocio, tus clientes y lo que quieres lograr.",
      },
      {
        word: "Le damos forma.",
        detail:
          "Convierto la conversación en una dirección clara para el producto.",
      },
      {
        word: "Lo construyo.",
        detail:
          "Ajustamos juntos la experiencia hasta que esté lista para usarse.",
      },
    ],
    footer: "DE LA PRIMERA CONVERSACIÓN AL PRIMER CLIC",
  },
};

const certifications = [
  {
    title: "Master Python Program",
    image: "/certifications/Daxus.png",
    subtitle: {
      en: "Daxus Latam · 2026",
      es: "Daxus Latam · 2026",
    },
    inProgress: true,
  },
  {
    title: "Master Artificial Intelligence",
    image: "/certifications/Daxus.png",
    subtitle: {
      en: "Daxus Latam · 2026",
      es: "Daxus Latam · 2026",
    },
    inProgress: true,
  },
  {
    title: "AZ-900 Azure Fundamentals",
    image: "/certifications/azure.png",
    subtitle: {
      en: "Microsoft Azure / SAIT CPSY 300",
      es: "Microsoft Azure / SAIT CPSY 300",
    },
    inProgress: true,
  },
  {
    title: "AZ-204 Developing Solutions for Azure",
    image: "/certifications/azure.png",
    subtitle: {
      en: "Microsoft Azure / SAIT CPSY 300",
      es: "Microsoft Azure / SAIT CPSY 300",
    },
    inProgress: true,
  },
  {
    title: "Python in Practice Certificate",
    image: "/certifications/Daxus.png",
    subtitle: {
      en: "Daxus Latam · Issued Apr 2026",
      es: "Daxus Latam · Emitido abr 2026",
    },
    inProgress: false,
  },
  {
    title: "CCNA: Introduction to Networks",
    image: "/certifications/cisco.png",
    subtitle: {
      en: "Cisco Networking Academy · Issued May 2025",
      es: "Cisco Networking Academy · Emitido may 2025",
    },
    inProgress: false,
  },
] as const;

function StageArt({
  stage,
  reduced,
}: {
  stage: number;
  reduced: boolean;
}) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 280 240"
      className="mx-auto h-[156px] w-[195px] shrink-0 overflow-visible sm:h-[205px] sm:w-[255px]"
      animate={
        reduced
          ? undefined
          : { y: [0, -7, 0], rotate: [0, 2, 0] }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <defs>
        <linearGradient
          id="aboutStageFace"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#c7f36c" />
          <stop offset="1" stopColor="#60cfca" />
        </linearGradient>

        <linearGradient
          id="aboutStageGlass"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#284c5a" />
          <stop offset="1" stopColor="#0d1c30" />
        </linearGradient>

        <radialGradient id="aboutStageHalo">
          <stop stopColor="#bdf36a" stopOpacity=".38" />
          <stop
            offset="1"
            stopColor="#69dddb"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <circle
        cx="145"
        cy="119"
        r="118"
        fill="url(#aboutStageHalo)"
      />

      {stage === 0 && (
        <g>
          <path
            d="M55 69Q55 44 80 44H198Q224 44 224 70V151Q224 177 198 177H117L83 205V177H80Q55 177 55 150Z"
            fill="#112e3c"
            stroke="#9ee4d2"
            strokeWidth="2"
            opacity=".65"
            transform="translate(12 -8)"
          />
          <path
            d="M45 62Q45 37 70 37H190Q215 37 215 63V142Q215 168 190 168H107L72 196V168H70Q45 168 45 141Z"
            fill="url(#aboutStageGlass)"
            stroke="#c7f36c"
            strokeWidth="2.5"
          />
          <path
            d="M57 72H202M57 84H202"
            stroke="#a8e3d9"
            strokeOpacity=".25"
          />
          <circle cx="94" cy="116" r="12" fill="url(#aboutStageFace)" />
          <circle cx="132" cy="116" r="12" fill="url(#aboutStageFace)" />
          <circle cx="170" cy="116" r="12" fill="url(#aboutStageFace)" />
          <path
            d="M25 97Q6 117 25 139M234 88Q259 115 235 145M16 78Q-14 118 14 158M249 72Q285 115 252 159"
            fill="none"
            stroke="#7ad8db"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".7"
          />
          <path
            d="M212 34l10-14m-5 11 15-1M45 190l-12 10"
            stroke="#d4f889"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      )}

      {stage === 1 && (
        <g>
          <g transform="rotate(-8 135 115)">
            <rect
              x="53"
              y="24"
              width="179"
              height="190"
              rx="16"
              fill="#0e2639"
              stroke="#86c7ce"
              strokeWidth="2"
            />
            <rect
              x="65"
              y="35"
              width="154"
              height="167"
              rx="9"
              fill="url(#aboutStageGlass)"
              stroke="#b8e8cf"
              strokeOpacity=".55"
            />
            <path
              d="M65 79H219M65 122H219M65 165H219M105 35V202M144 35V202M182 35V202"
              stroke="#a2e4d7"
              strokeOpacity=".18"
            />
            <rect
              x="82"
              y="57"
              width="120"
              height="77"
              rx="6"
              fill="none"
              stroke="#c7f36c"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
            <path
              d="M93 77h51M93 90h77M93 105h36"
              stroke="#bdecc3"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".8"
            />
            <rect
              x="151"
              y="145"
              width="47"
              height="35"
              rx="6"
              fill="url(#aboutStageFace)"
              opacity=".85"
            />
            <path
              d="M82 152h50M82 164h39M82 176h47"
              stroke="#a0dadc"
              strokeWidth="4"
              strokeLinecap="round"
              opacity=".7"
            />
          </g>

          <g transform="rotate(35 211 75)">
            <rect
              x="201"
              y="24"
              width="17"
              height="97"
              rx="5"
              fill="#c7f36c"
              stroke="#efffc8"
              strokeWidth="2"
            />
            <path
              d="M201 105h17l-8.5 20Z"
              fill="#78c8d0"
              stroke="#efffc8"
              strokeWidth="2"
            />
            <path
              d="M201 42h17"
              stroke="#0c2130"
              strokeWidth="2"
            />
          </g>

          <path
            d="M31 58h30M46 43v30M218 183h29m-14-14v29"
            stroke="#a3ddd5"
            strokeOpacity=".8"
            strokeWidth="2"
          />
        </g>
      )}

      {stage === 2 && (
        <g>
          <rect
            x="45"
            y="47"
            width="199"
            height="149"
            rx="13"
            fill="#0b1e2e"
            stroke="#6dc5cb"
            strokeWidth="2"
            transform="rotate(7 145 121)"
            opacity=".75"
          />
          <rect
            x="35"
            y="37"
            width="199"
            height="149"
            rx="13"
            fill="url(#aboutStageGlass)"
            stroke="#c7f36c"
            strokeWidth="2.5"
          />
          <path
            d="M36 69H233"
            stroke="#aee0da"
            strokeOpacity=".55"
          />
          <circle cx="51" cy="54" r="3" fill="#c7f36c" />
          <circle cx="62" cy="54" r="3" fill="#7bd2d4" />
          <circle cx="73" cy="54" r="3" fill="#7bd2d4" />
          <path
            d="M51 86h69M51 98h78M51 110h58"
            stroke="#e9f8e9"
            strokeWidth="5"
            strokeLinecap="round"
            opacity=".9"
          />
          <rect
            x="51"
            y="132"
            width="67"
            height="24"
            rx="12"
            fill="url(#aboutStageFace)"
          />
          <rect
            x="144"
            y="84"
            width="72"
            height="73"
            rx="13"
            fill="url(#aboutStageFace)"
            opacity=".85"
          />
          <path
            d="m160 123 15 14 26-31"
            fill="none"
            stroke="#113344"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M115 186v15m-34 2h68"
            stroke="#a0d4d9"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="224"
            cy="35"
            r="19"
            fill="#c7f36c"
            stroke="#dffbad"
            strokeWidth="2"
          />
          <path
            d="m217 36 5 5 10-12"
            fill="none"
            stroke="#0e2532"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
    </motion.svg>
  );
}

export default function About({
  lang = "en",
}: {
  lang?: Language;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [active, setActive] = useState(0);
  const [certActive, setCertActive] = useState(0);

  const pathname = usePathname();
  const route = pathname?.split("/")[1];
  const language: Language =
    route === "es" || route === "en" ? route : lang;
  const copy = content[language];
  const cert = certifications[certActive];

  const reduced = useReducedMotion();
  const px = useMotionValue(46);
  const py = useMotionValue(45);
  const x = useSpring(px, {
    stiffness: 450,
    damping: 31,
  });
  const y = useSpring(py, {
    stiffness: 450,
    damping: 31,
  });

  const light = useMotionTemplate`radial-gradient(640px circle at ${x}% ${y}%, rgba(44,184,155,.25), transparent 72%)`;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      setTabVisible(document.visibilityState === "visible");
    };

    document.addEventListener(
      "visibilitychange",
      updateVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        updateVisibility
      );
    };
  }, []);

  // Pasos: cada 4 segundos, solo dentro de About.
  useEffect(() => {
    if (reduced || !isVisible || !tabVisible) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % 3);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [reduced, isVisible, tabVisible]);

  // Certificados: tiempo independiente para poder leerlos.
  useEffect(() => {
    if (reduced || !isVisible || !tabVisible) return;

    const timer = window.setTimeout(() => {
      setCertActive(
        (current) => (current + 1) % certifications.length
      );
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [certActive, reduced, isVisible, tabVisible]);

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    px.set(
      ((event.clientX - bounds.left) / bounds.width) * 100
    );
    py.set(
      ((event.clientY - bounds.top) / bounds.height) * 100
    );
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      onPointerMove={move}
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-[#284552]/15 bg-[#e7f4ed] px-5 py-12 text-[#102631] sm:px-8 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_46%,#b9e6df_0%,#d8f2e5_34%,#edf7e9_69%,#e0f0f4_100%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: light }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-140px] -z-10 h-[320px] w-[500px] rounded-full bg-lime-300/25 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(40,91,98,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(40,91,98,.12) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage:
            "linear-gradient(90deg,black,transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        {/* Texto: derecha en desktop */}
        <div className="order-1 lg:order-2">
          <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#285962] sm:text-xs">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#176f59] shadow-[0_0_16px_rgba(23,111,89,.35)]"
            />
            {copy.eyebrow}
          </p>

          <h2 className="mt-5 max-w-[670px] text-[clamp(2.55rem,4.5vw,4.9rem)] font-black leading-[1.01] tracking-[-.065em]">
            {copy.heading}
          </h2>

          <p className="mt-6 max-w-[570px] text-[17px] leading-7 text-[#102631] sm:text-lg sm:leading-8">
            {copy.intro}
          </p>

          <p className="mt-3 max-w-[570px] text-sm leading-7 text-[#39555a] sm:text-base">
            {copy.detail}
          </p>

          <div className="mt-6 grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center gap-2 sm:flex sm:flex-wrap sm:gap-5">
            <a
              href="#contact"
              className="group inline-flex min-w-0 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-lime-300 px-2 py-3 text-[10px] font-bold text-[#102631] shadow-[0_8px_30px_rgba(67,148,86,.2)] transition hover:-translate-y-1 hover:bg-lime-200 hover:shadow-[0_13px_40px_rgba(67,148,86,.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176f59] sm:gap-4 sm:px-5 sm:py-3.5 sm:text-base"
            >
              {copy.cta}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>

            <a
              href="#experience"
              className="justify-self-start whitespace-nowrap border-b border-[#102631]/50 pb-1 text-[11px] font-semibold text-[#102631] transition hover:border-[#176f59] hover:text-[#176f59] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176f59] sm:text-sm"
            >
              {copy.work} ↗
            </a>
          </div>
        </div>

        {/* Cartas: izquierda en desktop */}
        <div className="relative order-2 min-w-0 lg:order-1">
          {/* Carta del proceso */}
          <div className="relative isolate flex min-h-[425px] flex-col overflow-hidden rounded-[1.8rem] border border-[#a7c9db]/25 bg-[#101e2c]/85 p-5 shadow-[0_28px_75px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.08)] sm:min-h-[410px] sm:p-7 lg:min-h-[380px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(133,197,142,.19),transparent_58%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-35"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(151,218,208,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(151,218,208,.13) 1px,transparent 1px)",
                backgroundSize: "30px 30px",
                maskImage:
                  "linear-gradient(to bottom,transparent,black 45%,transparent)",
              }}
            />

            <div className="relative flex items-center justify-between gap-4 border-b border-white/15 pb-3 font-mono text-[10px] tracking-[.13em] text-[#bad2dc]">
              <span>DG / STUDIO</span>
              <span className="text-lime-300">
                0{active + 1} / 03
              </span>
            </div>

            <div className="relative flex flex-1 flex-col justify-center py-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${language}-${active}`}
                  className="flex flex-col items-center gap-2 lg:flex-row-reverse lg:gap-1"
                  initial={
                    reduced ? false : { opacity: 0, y: 11 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduced
                      ? undefined
                      : { opacity: 0, y: -9 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <StageArt
                    stage={active}
                    reduced={
                      Boolean(reduced) ||
                      !isVisible ||
                      !tabVisible
                    }
                  />

                  <div className="min-w-0 flex-1 text-center lg:text-left">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#b5d2cc]">
                      {copy.sceneLabel}
                    </p>

                    <p className="mt-3 text-[clamp(2rem,3.5vw,3.6rem)] font-black leading-[1.04] tracking-[-.055em] text-white">
                      {copy.scenes[active].word}
                    </p>

                    <p className="mx-auto mt-3 max-w-[280px] text-sm leading-6 text-[#d0dce3] lg:mx-0">
                      {copy.scenes[active].detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative border-t border-white/15 pt-3 font-mono text-[9px] font-semibold tracking-[.1em] text-[#aac2cb] sm:text-[10px]">
              {copy.footer}
            </div>

            {!reduced && isVisible && tabVisible && (
              <motion.div
                key={active}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] origin-left bg-lime-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4,
                  ease: "linear",
                }}
              />
            )}
          </div>

          {/* Carta rotativa de certificaciones */}
          <div className="relative mt-3 overflow-hidden rounded-[1.5rem] border border-[#a7c9db]/25 bg-[#101e2c]/95 p-4 text-white shadow-[0_18px_45px_rgba(0,0,0,.18)] sm:p-5">
            <div className="flex items-center justify-between gap-3 font-mono text-[10px] font-bold uppercase tracking-[.13em] text-[#bad2dc]">
              <span>{copy.credentialsLabel}</span>
              <span className="shrink-0 text-lime-300">
                0{certActive + 1} / 06
              </span>
            </div>

            <div className="relative mt-3 min-h-[116px] overflow-hidden border-t border-white/15 pt-4 sm:min-h-[110px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${language}-${certActive}`}
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: 10, scale: 0.98 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    reduced
                      ? undefined
                      : { opacity: 0, y: -10, scale: 0.98 }
                  }
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative flex h-[72px] w-[88px] shrink-0 items-center justify-center rounded-xl bg-white p-2 sm:h-[80px] sm:w-[110px]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="110px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-bold leading-snug sm:text-lg">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#c7d8dc]">
                      {cert.subtitle[language]}
                    </p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[.13em] text-lime-300">
                      {cert.inProgress
                        ? copy.inProgressLabel
                        : copy.completedLabel}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="mt-2 flex gap-1.5"
              aria-label={copy.credentialsLabel}
            >
              {certifications.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`${item.title}: ${
                    language === "es"
                      ? "ver certificado"
                      : "view certificate"
                  }`}
                  aria-current={
                    certActive === index ? "true" : undefined
                  }
                  onClick={() => setCertActive(index)}
                  className={`h-1.5 flex-1 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 ${
                    certActive === index
                      ? "bg-lime-300"
                      : "bg-white/20 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {!reduced && isVisible && tabVisible && (
              <motion.div
                key={certActive}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] origin-left bg-lime-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4,
                  ease: "linear",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}