"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import brewbubble2 from "@/assets/brewbubble2.png";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Projects({}: Props) {
  useEffect(() => {
    const setInitialScrollPosition = () => {
      const scrollContainer = document.getElementById("scrollContainer");
      if (scrollContainer) {
        scrollContainer.scrollLeft = 400;
      }
    };
    document.readyState === "complete"
      ? setInitialScrollPosition()
      : window.addEventListener("load", setInitialScrollPosition);
    return () => {
      window.removeEventListener("load", setInitialScrollPosition);
    };
  }, []);

  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen flex flex-col text-center max-w-7xl px-10 justify-center py-20 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        Projects
      </h3>

      <div
        className="w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64CCC5]/90 md:overflow-y-scroll xl:overflow-y-hidden sm:overflow-y-scroll snap-x snap-mandatory "
        id="scrollContainer"
      >
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-9 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={brewbubble2.src}
            alt=""
            className="xl:w-[800px] xl:h-[400px] sm:w-42 sm:h-32"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="xl:text-4xl md:text-xl sm:text-sm font-semibold text-center whitespace-nowrap">
              <span className="underline decoration-[#64CCC5]/50">
                {" "}
                Project {1} of : 5{" "}
              </span>
              Brew Bubble Mobile App
            </h4>
            <div className="flex items-center justify-center space-x-2">
            <SocialIcon
              url={
                "https://www.youtube.com/watch?v=-4ooQDviA_o&ab_channel=MaeganLee"
              }
              fgColor="#64CCC5"
              bgColor="gray"
            />
            <SocialIcon
              url={
                "https://docs.google.com/presentation/d/1g1Qc7K-KXy5C9iPBBAFIr41frdzCjfB55w5SCmwbToo/edit?usp=sharing"
              }
              fgColor="#64CCC5"
              bgColor="gray"
            />
            </div>
            <p className=" max-w-fit whitespace-break-spaces flex-wrap text-center xl:text-lg lg:text-sm md:text-sm sm:text-[10px] pb-10 overflow-hidden">
            The app tackles issues such as limited access to comprehensive beer information, the difficulty of personalized tracking 
            and reflection for users, 
            and the cumbersome beer management processes for brewers. Furthermore, it bridges the social interaction gap by providing a platform for beer enthusiasts to connect and share their passion. With enhanced search and discovery features, users can easily find specific beers, venues, or breweries, improving their overall beer-app experience. 
            This project showcases creative problem-solving 
            and a commitment to enhancing user experiences in the beer enthusiast community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
