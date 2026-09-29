"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > 500);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba / Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-[5.75rem] right-5 z-50 grid h-14 w-14 place-items-center rounded-[19px] border border-cyan-200/35 bg-[#102631] p-1 text-lime-300 shadow-[0_10px_32px_rgba(0,0,0,.3),0_0_22px_rgba(190,242,100,.1)] backdrop-blur-xl transition-[opacity,transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_16px_40px_rgba(0,0,0,.38),0_0_25px_rgba(190,242,100,.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 motion-reduce:transform-none ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <span aria-hidden="true" className="absolute inset-[3px] rounded-[16px]" style={{ background: `conic-gradient(#bef264 ${progress * 360}deg, rgba(103,232,249,.22) 0deg)` }} />
      <span aria-hidden="true" className="relative flex h-full w-full flex-col items-center justify-center rounded-[14px] bg-[#102631] transition-colors group-hover:bg-[#16333d]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="h-[19px] w-[19px] transition-transform group-hover:-translate-y-0.5"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
        <span className="mt-0.5 font-mono text-[8px] font-bold tracking-[.14em] text-cyan-100/80">TOP</span>
      </span>
    </button>
  );
}
