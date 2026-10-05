"use client";

import Image from "next/image";
import { type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Reveal from "./Reveal";

type Language = "es" | "en";

const phone = "+18253437802";
const email = "diegogalvis682@gmail.com";
const linkedin = "https://www.linkedin.com/in/diego-galvis-63014b2bb";
const github = "https://github.com/Dsgalvist";

export default function Contact({ lang }: { lang: Language }) {
  const es = lang === "es";
  const reduced = useReducedMotion();
  const px = useMotionValue(62);
  const py = useMotionValue(35);
  const x = useSpring(px, { stiffness: 450, damping: 31 });
  const y = useSpring(py, { stiffness: 450, damping: 31 });
  const light = useMotionTemplate`radial-gradient(650px circle at ${x}% ${y}%, rgba(82,187,150,.22), transparent 72%)`;

  const whatsappMessage = es
    ? "Hola Diego, encontré tu portafolio. Tengo una idea para mi negocio y me gustaría contártela. ¿Podemos hablar?"
    : "Hi Diego, I found your portfolio. I have an idea for my business and I'd like to tell you about it. Can we talk?";
  const whatsappUrl = `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(whatsappMessage)}`;
  const subject = es ? "Hablemos de mi proyecto" : "Let's talk about my project";
  const body = es
    ? "Hola Diego,\n\nEncontré tu portafolio y quisiera hablar contigo sobre mi negocio.\n\nMi idea es: \n\nGracias."
    : "Hi Diego,\n\nI found your portfolio and would like to talk about my business.\n\nMy idea is: \n\nThank you.";
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const channels = [
    {
      number: "01",
      name: "WhatsApp",
      detail: es ? "Cuéntame tu idea por mensaje" : "Tell me about your idea",
      href: whatsappUrl,
      external: true,
      featured: true,
    },
    {
      number: "02",
      name: es ? "Correo" : "Email",
      detail: email,
      href: emailUrl,
      external: false,
      featured: false,
    },
    {
      number: "03",
      name: es ? "Llamada" : "Call",
      detail: "+1 (825) 343-7802",
      href: `tel:${phone}`,
      external: false,
      featured: false,
    },
    {
      number: "04",
      name: "LinkedIn",
      detail: es ? "Conectemos profesionalmente" : "Let's connect professionally",
      href: linkedin,
      external: true,
      featured: false,
    },
    {
      number: "05",
      name: "GitHub",
      detail: es ? "Explora mi código" : "Explore my code",
      href: github,
      external: true,
      featured: false,
    },
  ];

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - bounds.left) / bounds.width) * 100);
    py.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section
      id="contact"
      onPointerMove={move}
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-[#284552]/15 bg-[#edf4ea] px-5 pb-7 pt-10 text-[#102631] sm:px-8 lg:pb-9 lg:pt-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_25%_47%,#d7e9dc_0%,#eef4ea_60%,#f5f2e8_100%)]" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: light }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(40,91,98,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(40,91,98,.12) 1px,transparent 1px)", backgroundSize: "76px 76px" }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#285962] sm:text-xs">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#176f59] shadow-[0_0_16px_rgba(23,111,89,.35)]" />
                {es ? "CONTACTO / HABLEMOS" : "CONTACT / LET'S TALK"}
              </p>
              <h2 className="mt-4 max-w-[630px] text-[clamp(2.6rem,4.2vw,4.5rem)] font-black leading-[.99] tracking-[-.065em]">
                {es ? <>El siguiente paso <em className="font-serif font-normal text-[#176f59]">empieza aquí.</em></> : <>The next step <em className="font-serif font-normal text-[#176f59]">starts here.</em></>}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#39555a]">
                {es
  ? "Hablemos de tu idea, emprendimiento o negocio y de lo que te gustaría crear o mejorar. Juntos podemos definir cómo conectar mejor con tus clientes y hacer que tu negocio sea más eficiente y productivo."
  : "Let's talk about your idea, venture, or business and what you'd like to create or improve. Together, we can explore how to connect better with your customers and make your business more efficient and productive."}
              </p>

              <div className="relative mt-6 max-w-[400px] overflow-hidden rounded-[1.3rem] border border-[#8fb8ad]/35 bg-[#091724] p-2 shadow-[0_25px_65px_rgba(9,31,40,.22)]">
                <div className="mb-2 flex items-center justify-between px-2 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[#b8d4d4]">
                  <span>DG / CREATIVE DEVELOPER</span><span className="text-lime-300">●</span>
                </div>
                <Image
                  src="/brand/animacion.gif"
                  alt={es ? "Animación de código del portafolio de Diego Galvis" : "Diego Galvis portfolio code animation"}
                  width={500}
                  height={281}
                  loading="lazy"
                  unoptimized
                  className="aspect-[500/281] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-[#264c52]/30">
              {channels.map((channel) => (
                <a
                  key={channel.number}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className={`group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-[#264c52]/25 px-2 py-3.5 transition-colors hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176f59] sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:px-4 sm:py-4 ${channel.featured ? "bg-[#d7efdc]/65" : ""}`}
                  aria-label={channel.external ? `${channel.name} (${es ? "nueva pestaña" : "new tab"})` : undefined}
                >
                  <span className="self-start pt-1 font-mono text-xs font-bold text-[#176f59]">{channel.number}</span>
                  <span className="min-w-0">
                    <span className="block text-lg font-black tracking-[-.04em] text-[#102631] sm:text-xl">{channel.name}</span>
                    <span className="mt-1 block break-words text-xs text-[#39555a] sm:text-sm">{channel.detail}</span>
                  </span>
                  <span aria-hidden="true" className="text-2xl text-[#176f59] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-[#264c52]/25 pt-4 text-xs text-[#39555a] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>{es ? "Desde Calgary · Trabajo remoto con clientes en cualquier lugar" : "Based in Calgary · Working remotely with clients worldwide"}</p>
          <p id="languages" className="scroll-mt-24 font-mono uppercase tracking-[.08em]">
            {es ? "Idiomas: Español · Inglés · Francés básico" : "Languages: Spanish · English · Basic French"}
          </p>
        </div>
      </div>
    </section>
  );
}
