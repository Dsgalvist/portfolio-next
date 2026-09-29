"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Language = "en" | "es";

const sessionKey = "diego-portfolio-intro-v3";
const ease = [0.76, 0, 0.24, 1] as const;

export default function IntroLoader({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Language;
}) {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();
  const es = lang === "es";

  useEffect(() => {
    if (!show) return;

    let seen = false;
    try {
      seen = sessionStorage.getItem(sessionKey) === "1";
    } catch {
      // El almacenamiento puede no estar disponible.
    }

    if (seen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [show]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(sessionKey) === "1") {
        const frame = requestAnimationFrame(() => setShow(false));
        return () => cancelAnimationFrame(frame);
      }
    } catch {
      // Se muestra la introducción.
    }

    const timer = window.setTimeout(
      () => finish(),
      reduced ? 350 : 2400
    );

    return () => window.clearTimeout(timer);

    // La introducción se ejecuta una vez por visita.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    try {
      sessionStorage.setItem(sessionKey, "1");
    } catch {
      // La página sigue funcionando sin almacenamiento.
    }

    setShow(false);
  }

  return (
    <>
      {children}

      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            key="intro"
            role="dialog"
            aria-modal="true"
            aria-label={
              es
                ? "Introducción al portafolio de Diego Galvis"
                : "Diego Galvis portfolio introduction"
            }
            initial={false}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduced ? 0.15 : 0.01,
              delay: reduced ? 0 : 0.9,
            }}
            className="fixed inset-0 z-[500] isolate overflow-hidden text-white"
          >
            {/* Panel izquierdo */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[50.1%] bg-[#090e18]"
              exit={reduced ? { opacity: 0 } : { x: "-101%" }}
              transition={{ duration: reduced ? 0.15 : 0.9, ease }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,#1b3b48_0%,#101f2c_43%,#090e18_90%)]" />
              <div className="absolute inset-y-0 right-0 w-px bg-lime-300/55 shadow-[0_0_22px_#bef264]" />
            </motion.div>

            {/* Panel derecho */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[50.1%] bg-[#090e18]"
              exit={reduced ? { opacity: 0 } : { x: "101%" }}
              transition={{ duration: reduced ? 0.15 : 0.9, ease }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,#1b3b48_0%,#101f2c_43%,#090e18_90%)]" />
            </motion.div>

            {/* Contenido central */}
            <motion.div
              className="relative flex h-full min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
              exit={
                reduced
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      scale: 1.13,
                      filter: "blur(12px)",
                    }
              }
              transition={{
                duration: reduced ? 0.1 : 0.38,
                ease: "easeIn",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(165,210,218,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(165,210,218,.12) 1px,transparent 1px)",
                  backgroundSize: "72px 72px",
                  maskImage:
                    "radial-gradient(circle at center,black,transparent 72%)",
                }}
              />

              <motion.p
                initial={reduced ? false : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-8 left-6 font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#b8d9d5] sm:top-12 sm:left-12"
              >
                Diego Galvis{" "}
                <span className="text-lime-300">/</span>{" "}
                Digital Studio
              </motion.p>

              {/* Núcleo animado */}
              <div className="relative flex h-44 w-44 items-center justify-center sm:h-56 sm:w-56">
                <motion.div
                  aria-hidden="true"
                  initial={
                    reduced ? false : { scale: 0.55, opacity: 0 }
                  }
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 rounded-full border border-lime-300/35 bg-[radial-gradient(circle,rgba(185,242,100,.13),transparent_65%)] shadow-[0_0_95px_rgba(143,223,130,.2),inset_0_0_65px_rgba(74,186,176,.08)]"
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full border border-transparent border-t-lime-300 border-r-cyan-200/70 sm:-inset-4"
                  animate={
                    reduced ? undefined : { rotate: 360 }
                  }
                  transition={{
                    duration: 2.4,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute inset-5 rounded-full border border-dashed border-cyan-200/35"
                  animate={
                    reduced ? undefined : { rotate: -360 }
                  }
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />

                <motion.span
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, scale: 0.7 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.55,
                  }}
                  className="relative text-6xl font-black tracking-[-.11em] text-white sm:text-7xl"
                >
                  DG<span className="text-lime-300">.</span>
                </motion.span>

                {/* Rayo horizontal */}
                <motion.div
                  aria-hidden="true"
                  initial={
                    reduced ? false : { scaleX: 0 }
                  }
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.75,
                    ease,
                  }}
                  className="absolute -inset-x-8 top-1/2 h-px origin-left bg-lime-200/80 shadow-[0_0_18px_3px_rgba(190,242,100,.6)] sm:-inset-x-12"
                />
              </div>

              <div className="relative mt-9 overflow-hidden sm:mt-11">
                <motion.h2
                  initial={
                    reduced ? false : { y: "110%" }
                  }
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.52,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[clamp(1.55rem,4.5vw,3.5rem)] font-bold leading-tight tracking-[-.05em]"
                >
                  {es
                    ? "De la idea a la experiencia."
                    : "From idea to experience."}
                </motion.h2>
              </div>

              <motion.p
                initial={
                  reduced ? false : { opacity: 0 }
                }
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.15,
                  duration: 0.5,
                }}
                className="relative mt-3 max-w-md text-sm text-[#c3d8d9] sm:text-base"
              >
                {es
                  ? "Diseño, desarrollo y tecnología que conectan."
                  : "Design, development, and technology that connect."}
              </motion.p>

              {/* Progreso */}
              <div className="absolute bottom-12 left-1/2 w-[min(270px,65vw)] -translate-x-1/2 sm:bottom-14">
                <div className="h-[2px] overflow-hidden bg-white/20">
                  <motion.div
                    className="h-full w-full origin-left bg-lime-300 shadow-[0_0_14px_#bef264]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: reduced ? 0.3 : 2.4,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[.2em] text-[#a8c8c9]">
                  {es
                    ? "Preparando tu experiencia"
                    : "Preparing your experience"}
                </p>
              </div>

              <button
                type="button"
                onClick={finish}
                className="absolute bottom-8 right-6 rounded-full border border-white/25 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[.15em] text-white transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:bottom-10 sm:right-12"
              >
                {es ? "Saltar ↗" : "Skip ↗"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}