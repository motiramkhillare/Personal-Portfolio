"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Features from "@/components/sections/Features";
import Experience from "@/components/sections/Experience";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

// Dynamically import heavy visual components (no SSR needed)
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), {
  ssr: false,
});
const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground"),
  { ssr: false }
);
const CursorEffect = dynamic(() => import("@/components/ui/CursorEffect"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <CursorEffect />
      <ScrollProgress />
      <div className="grid-bg" />

      <Navbar />

      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Features />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
