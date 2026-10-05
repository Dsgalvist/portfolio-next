import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import IntroLoader from "../components/IntroLoader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() { return [{ lang: "en" }, { lang: "es" }]; }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const es = lang === "es";
  return {
    title: es ? "Diego Galvis | Portfolio" : "Diego Galvis | Portfolio",
    description: es
      ? "Transformo ideas de negocio en experiencias digitales. Desarrollo full stack, servicios cloud y agentes de IA."
      : "I turn business ideas into digital experiences with full stack development, cloud services and AI agents.",
    icons: {
  icon: "/brand/favicon.png?v=3",
  shortcut: "/brand/favicon.png?v=3",
  apple: "/brand/favicon.png?v=3",
},
    alternates: { canonical: `/${lang}`, languages: { en: "/en", es: "/es" } },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();
  return <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full"><IntroLoader lang={lang}>{children}</IntroLoader></body></html>;
}
