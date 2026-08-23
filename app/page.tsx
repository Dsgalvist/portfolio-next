import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Certificatios from "./components/Certifications";
import Game from "./components/Game";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Game />
      <Certificatios />
      <Languages />
      <Contact />
      <ScrollToTop />
    </>
  );
}