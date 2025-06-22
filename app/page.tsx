// app/page.tsx
"use client";

import Canvas3D from "@/components/Canvas3D";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Canvas3D />
      <main className="relative z-10 space-y-24">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
