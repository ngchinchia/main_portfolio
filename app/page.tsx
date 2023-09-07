"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";

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
      <section className="snap-center">
        <WorkExperience/>
      </section>
    </div>
  );
}
