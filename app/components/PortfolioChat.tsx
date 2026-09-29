"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };
type Language = "es" | "en";

const copy = {
  es: {
    launch: "Pregúntame", closeShort: "Cerrar", title: "Diego AI", subtitle: "Tu guía por este portafolio",
    eyebrow: "ESTUDIO DIGITAL / ASISTENTE", intro: "¿Qué podemos crear para tu negocio?",
    description: "Explora mis servicios y proyectos reales. Pregúntame lo que necesites para empezar.",
    suggestions: "EMPIEZA POR AQUÍ", questions: ["¿Qué puedes crear para mi negocio?", "¿Qué hiciste para MEKK y DIALAC?", "¿Qué experiencia tienes en cloud e IA?", "¿Cómo puedo contactarte?"],
    placeholder: "Escribe tu pregunta...", sending: "Diego AI está escribiendo", send: "Enviar mensaje",
    close: "Cerrar asistente", error: "No pude responder ahora. Puedes escribirle a Diego a diegogalvis682@gmail.com.",
    limit: "Se alcanzó el límite temporal de consultas. Puedes escribirle a Diego a diegogalvis682@gmail.com.",
    footer: "Respuestas basadas en el portafolio de Diego", user: "Tú", assistant: "DIEGO AI",
    boot: "INICIANDO DIEGO AI", bootDetail: "Conectando ideas y proyectos",
  },
  en: {
    launch: "Ask me", closeShort: "Close", title: "Diego AI", subtitle: "Your guide to this portfolio",
    eyebrow: "DIGITAL STUDIO / ASSISTANT", intro: "What can we create for your business?",
    description: "Explore my services and real projects. Ask anything you need to get started.",
    suggestions: "START HERE", questions: ["What can you build for my business?", "What did you build for MEKK and DIALAC?", "What cloud and AI experience do you have?", "How can I contact you?"],
    placeholder: "Type your question...", sending: "Diego AI is typing", send: "Send message",
    close: "Close assistant", error: "I couldn't respond right now. You can email Diego at diegogalvis682@gmail.com.",
    limit: "You've reached the temporary chat limit. You can email Diego at diegogalvis682@gmail.com.",
    footer: "Answers grounded in Diego's portfolio", user: "You", assistant: "DIEGO AI",
    boot: "STARTING DIEGO AI", bootDetail: "Connecting ideas and projects",
  },
};

function Spark({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M12 2.5 14.5 9.5 21.5 12l-7 2.5-2.5 7-2.5-7L2.5 12l7-2.5L12 2.5Z" /><path d="m19.5 3 .55 1.45L21.5 5l-1.45.55L19.5 7l-.55-1.45L17.5 5l1.45-.55L19.5 3Z" /></svg>;
}

export default function PortfolioChat({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [starting, setStarting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const hasStarted = useRef(false);
  const reduced = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open || starting) return;
    const frame = requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [open, starting]);

  useEffect(() => {
    if (!open || !starting) return;
    const timer = window.setTimeout(() => {
      setStarting(false);
      hasStarted.current = true;
    }, reduced ? 600 : 1400);
    return () => window.clearTimeout(timer);
  }, [open, starting, reduced]);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
    return () => cancelAnimationFrame(frame);
  }, [open, messages, loading]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus({ preventScroll: true });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function sendMessage(question: string) {
    const content = question.trim();
    if (!content || loading || starting) return;
    const updated: Message[] = [...messages, { role: "user", content }];
    setMessages(updated);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updated }) });
      if (!response.ok) throw new Error(response.status === 429 ? "rate_limit" : "request_failed");
      const data: { message?: unknown } = await response.json();
      if (typeof data.message !== "string") throw new Error("invalid_response");
      setMessages((current) => [...current, { role: "assistant", content: data.message as string }]);
    } catch (error) {
      setMessages((current) => [...current, { role: "assistant", content: error instanceof Error && error.message === "rate_limit" ? t.limit : t.error }]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function toggle() {
    if (open) {
      setOpen(false);
      return;
    }
    if (!hasStarted.current) setStarting(true);
    setOpen(true);
  }

  return <>
    <AnimatePresence>
    {open && <motion.section id="portfolio-assistant" role="dialog" aria-modal="false" aria-label={t.title}
      initial={reduced ? false : { opacity: 0, y: 16, scale: .96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? undefined : { opacity: 0, y: 12, scale: .97 }}
      transition={{ duration: reduced ? 0 : .25, ease: "easeOut" }}
      className="fixed inset-x-3 bottom-[5.25rem] z-[200] flex h-[min(510px,calc(100dvh-6.75rem))] flex-col overflow-hidden rounded-[22px] border border-cyan-200/25 bg-[#091521] text-white shadow-[0_30px_90px_rgba(0,0,0,.6),0_0_45px_rgba(39,196,184,.12)] sm:inset-x-auto sm:right-5 sm:w-[360px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(105,204,193,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(105,204,193,.09) 1px,transparent 1px)", backgroundSize: "32px 32px", maskImage: "linear-gradient(to bottom,black,transparent 60%)" }} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-lime-300 via-cyan-300 to-transparent" />
      <header className="relative flex shrink-0 items-center gap-3 border-b border-white/10 bg-[#102331]/90 px-4 py-3">
        <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lime-300/40 bg-lime-300/10 text-lime-300 shadow-[inset_0_0_18px_rgba(190,242,100,.1)]"><Spark className="h-5 w-5" /><span aria-hidden="true" className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#102331] bg-cyan-300" /></div>
        <div className="min-w-0 flex-1"><p className="font-mono text-[9px] font-bold uppercase tracking-[.17em] text-cyan-200/75">{t.eyebrow}</p><h2 className="mt-0.5 text-base font-black leading-tight tracking-[-.04em]">{t.title} <span className="font-normal text-slate-400">/ {t.subtitle}</span></h2></div>
        <button type="button" onClick={() => { setOpen(false); launcherRef.current?.focus({ preventScroll: true }); }} aria-label={t.close} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/15 text-xl text-slate-200 transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300">×</button>
      </header>
      <div ref={scrollRef} className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4" aria-live="polite" aria-relevant="additions text">
        <AnimatePresence mode="wait" initial={false}>
        {starting ? <motion.div key="boot" initial={reduced ? false : { opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} exit={reduced ? undefined : { opacity: 0, scale: 1.06 }} transition={{ duration: reduced ? 0 : .22 }} className="flex min-h-full flex-col items-center justify-center text-center" role="status">
          <div className="relative grid h-[140px] w-[140px] place-items-center">
            <div aria-hidden="true" className="absolute inset-0 rounded-full border border-cyan-300/20 motion-safe:animate-[spin_12s_linear_infinite]"><span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" /></div>
            <div aria-hidden="true" className="absolute inset-4 rounded-full border border-dashed border-lime-300/55 motion-safe:animate-[spin_4s_linear_infinite_reverse]" />
            <div aria-hidden="true" className="absolute inset-8 rounded-[22px] border border-lime-300/45 bg-[#152f39] shadow-[0_0_45px_rgba(190,242,100,.22)]" />
            <Spark className="relative h-10 w-10 text-lime-300 motion-safe:animate-pulse" />
            <span aria-hidden="true" className="absolute -bottom-1 rounded-md border border-cyan-200/40 bg-[#0c202c] px-2 py-0.5 font-mono text-[9px] tracking-[.2em] text-cyan-200">DG / AI</span>
          </div>
          <p className="mt-8 font-mono text-[11px] font-bold tracking-[.22em] text-lime-300">{t.boot}</p>
          <p className="mt-2 text-sm text-[#bed3d7]">{t.bootDetail}</p>
          <div className="mt-6 h-[3px] w-44 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full w-full origin-left bg-linear-to-r from-cyan-300 to-lime-300" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? .6 : 1.4, ease: "easeInOut" }} /></div>
        </motion.div> : messages.length === 0 ? <motion.div key="welcome" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .24 }} className="flex min-h-full flex-col justify-center">
          <div className="relative mb-3 grid h-[70px] w-[70px] place-items-center self-center rounded-[20px] border border-cyan-200/20 bg-[#102735] shadow-[0_0_35px_rgba(110,210,196,.12)]"><span aria-hidden="true" className="absolute inset-1.5 rounded-[16px] border border-dashed border-lime-300/35" /><Spark className="h-8 w-8 text-lime-300" /><span aria-hidden="true" className="absolute -bottom-1 -right-1 rounded-md bg-lime-300 px-1 py-0.5 font-mono text-[8px] font-black text-[#091521]">AI</span></div>
          <p className="text-center font-mono text-[10px] uppercase tracking-[.2em] text-lime-300">{t.eyebrow}</p>
          <h3 className="mx-auto mt-2 max-w-[280px] text-center text-2xl font-black leading-[1.1] tracking-[-.055em]">{t.intro}</h3>
          <p className="mx-auto mt-2 max-w-[290px] text-center text-xs leading-5 text-[#b8cbd1]">{t.description}</p>
          <div className="mt-4 border-t border-white/15 pt-3"><p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[.17em] text-cyan-200/75">{t.suggestions}</p><div className="grid gap-1.5">{t.questions.map((question, index) => <button key={question} type="button" onClick={() => void sendMessage(question)} className="group flex min-h-10 items-center gap-3 rounded-xl border border-white/10 bg-white/[.035] px-3 py-1.5 text-left text-xs leading-5 text-[#e1ebeb] transition hover:border-lime-300/50 hover:bg-lime-300/[.08] focus-visible:outline-2 focus-visible:outline-lime-300"><span aria-hidden="true" className="font-mono text-[10px] text-lime-300">0{index + 1}</span><span className="flex-1">{question}</span><span aria-hidden="true" className="text-lime-300 transition-transform group-hover:translate-x-1">↗</span></button>)}</div></div>
        </motion.div> : <motion.div key="conversation" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .22 }} className="space-y-5">{messages.map((message, index) => <motion.div key={index} initial={reduced ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .24 }} className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`}><p className="mb-1.5 px-1 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#a9cbd0]">{message.role === "user" ? t.user : t.assistant}</p><div className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "rounded-tr-sm bg-lime-300 text-[#102631]" : "rounded-tl-sm border border-cyan-200/20 bg-[#142b37] text-[#dbe9e8]"}`}>{message.role === "user" ? <p className="whitespace-pre-wrap wrap-break-word">{message.content}</p> : <ReactMarkdown components={{ a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-lime-300 underline underline-offset-4 hover:text-lime-200">{children}</a>, strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>, ul: ({ children }) => <ul className="ml-4 list-disc space-y-1">{children}</ul>, ol: ({ children }) => <ol className="ml-4 list-decimal space-y-1">{children}</ol>, p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p> }}>{message.content}</ReactMarkdown>}</div></motion.div>)}
        <AnimatePresence>{loading && <motion.div key="thinking" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduced ? 0 : .2 }} className="flex items-start gap-2.5" role="status"><div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-lime-300/40 bg-lime-300/10 text-lime-300"><span aria-hidden="true" className="absolute inset-0 rounded-xl border-t border-lime-300 motion-safe:animate-spin" /><Spark className="h-4 w-4 motion-safe:animate-pulse" /></div><div className="min-w-0 rounded-2xl rounded-tl-sm border border-cyan-200/25 bg-[#142b37] px-4 py-2.5"><p className="text-xs text-[#dbe9e8]">{t.sending}<span className="ml-1 inline-flex gap-1" aria-hidden="true"><i className="h-1 w-1 animate-bounce rounded-full bg-lime-300" /><i className="h-1 w-1 animate-bounce rounded-full bg-lime-300 [animation-delay:120ms]" /><i className="h-1 w-1 animate-bounce rounded-full bg-lime-300 [animation-delay:240ms]" /></span></p><div aria-hidden="true" className="mt-2 h-px w-28 overflow-hidden bg-cyan-200/20"><span className="block h-full w-1/3 bg-linear-to-r from-cyan-300 to-lime-300 motion-safe:animate-[pulse_1s_ease-in-out_infinite]" /></div></div></motion.div>}</AnimatePresence></motion.div>}
        </AnimatePresence>
      </div>
      {!starting && <form onSubmit={submit} className="relative shrink-0 border-t border-cyan-200/15 bg-[#10212e] px-3 pb-2 pt-2"><div className="flex items-center gap-2 rounded-xl border border-white/20 bg-[#0a1824] p-1 transition-colors focus-within:border-lime-300/70"><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} maxLength={700} disabled={loading} aria-label={t.placeholder} placeholder={t.placeholder} className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-[#9fb6bf] disabled:opacity-60" /><button type="submit" disabled={loading || !input.trim()} aria-label={t.send} className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lime-300 text-[#102631] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 disabled:cursor-not-allowed disabled:opacity-40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg></button></div><p className="mt-1 text-center font-mono text-[9px] text-[#adc7cc]">{t.footer}</p></form>}
    </motion.section>}
    </AnimatePresence>
    <button ref={launcherRef} type="button" onClick={toggle} aria-controls="portfolio-assistant" aria-expanded={open} aria-label={open ? t.close : t.launch} className="group fixed bottom-5 right-5 z-[200] flex h-14 items-center gap-2 rounded-[19px] border border-cyan-200/40 bg-[#102631] py-1.5 pl-1.5 pr-3.5 text-white shadow-[0_10px_35px_rgba(0,0,0,.35),0_0_25px_rgba(190,242,100,.18)] transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_16px_45px_rgba(0,0,0,.42),0_0_30px_rgba(190,242,100,.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 sm:right-5 motion-reduce:transform-none"><span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-[14px] bg-lime-300 text-[#102631] shadow-[0_0_16px_rgba(190,242,100,.25)]"><span aria-hidden="true" className="absolute inset-1 rounded-[10px] border border-[#102631]/25" />{open ? <span aria-hidden="true" className="relative text-2xl leading-none">×</span> : <Spark className="relative h-5 w-5" />}</span><span className="whitespace-nowrap text-xs font-bold tracking-wide">{open ? t.closeShort : t.launch}</span></button>
  </>;
}
