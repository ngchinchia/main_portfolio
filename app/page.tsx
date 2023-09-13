"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocial } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className=" bg-[#242424] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#64CCC5]/90">
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
          <section id="projects" className="snap-center">
            <Projects />
          </section>
          <section id="contact" className="snap-center">
            <Contact />
          </section>

          <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                {/* <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?height=473&width=711&fit=bounds"
              alt=""
            /> */}
              </div>
            </footer>
          </Link>
        </div>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocial()

 return {
  props: {
    pageInfo,
    experiences,
    skills,
    projects,
    socials
  }
 }
};
