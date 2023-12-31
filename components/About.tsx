'use client'
import React from "react";
import { motion } from "framer-motion";
import ninja from "@/assets/ninja.png";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col whitespace-break-spaces text-center max-w-7xl px-10 justify-start py-20 mx-auto items-center  "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-2xl sm:text-2xl">
        About
      </h3>
     
     
       <motion.img
        src={
          ninja.src
        }
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="rounded-full mt-10 w-[150px] h-[150px]"
      />
      {/* lg:w-50 lg:h-50 md:w-30 md:h-30 sm:w-15 sm:h-15 */}
       
      <div className="space-y-10 px-0 md:px-10 items-center p-5 mt-10">
        <h4 className=" xl:text-3xl sm:text-xl  font-semibold whitespace-nowrap">
          Here is a{" "}
          <span className="underline decoration-[#64CCC5]/50"> little</span>{" "}
          background
        </h4>
     
        <ul className="list-disc space-y-4 w-fit px-4 text-left break-words lg:text-lg md:text-base sm:text-xs">
          <li>Graduated from University of Wollongong, degree in <span className="underline decoration-[#64CCC5] decoration-2">Computer Science Cyber Security</span></li>
          <li>Strong passion in  <span className="underline decoration-[#64CCC5] decoration-2">building reusable components</span> and <span className="underline decoration-[#64CCC5] decoration-2">designing captivating user interfaces</span></li>
          <li>Create dynamic and efficient web solutions</li>
          <li>Provide mobile-first development practices </li>
          <li>Experienced in building full-stack applications with <span className="underline decoration-[#64CCC5] decoration-2">React and TypeScript</span> for the frontend, complemented by expertise in <span className="underline decoration-[#64CCC5] decoration-2">Node.js</span> for backend development. </li>
          <li>Proficient in utilizing Postman to rigorously test backend APIs, <span className="underline decoration-[#64CCC5] decoration-2">ensuring seamless integration</span> and robust functionality between frontend and backend components </li>
        </ul>
      
      </div> 
   
    </motion.div>
  );
}
