"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className=" bg-[#242424] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
}
