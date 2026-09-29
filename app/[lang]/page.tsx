import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import PortfolioChat from "../components/PortfolioChat";
import ScrollToTop from "../components/ScrollToTop";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();

  return (
    <>
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <ScrollToTop />
      <PortfolioChat lang={lang} />
    </>
  );
}
