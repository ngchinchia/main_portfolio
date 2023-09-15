import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import npm from "@/assets/npm.png";


type Props = {
  src?: string 
  className?: string | undefined
  companyTitle?: string
  slogan?: string
  timing?: string
  pt1?: string
  pt2?: string
  pt3?: string
  pt4?: string
  toolsLogo?: string | any
  toolsLogo2?: string | any
  toolsLogo3?: string | any
  
};

export default function ExperienceCard({src, className, companyTitle, timing, slogan, pt1, pt2, pt3, pt4, toolsLogo, toolsLogo2, toolsLogo3}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-start space-y-7 flex-shrink-0 w-full h-[1000px] snap-start bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto">
      <div className="px-0 md:px-10 text-left">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={className}
        src={src}
        alt="img"
      />

     
        <h4 className="md:text-4xl font-light sm:text-xl ">{companyTitle}</h4>
        <p className="font-bold md:text-2xl mt-1 sm:text-lg">{slogan}</p>
        <div className="flex space-x-2 my-2 justify-start">
          {toolsLogo ? <Image className="h-10 w-10 rounded-full" src={toolsLogo} alt="package" /> : ""}
          {toolsLogo2 ? <Image className="h-10 w-10 rounded-full" src={toolsLogo2} alt="" /> : ""}
          {toolsLogo3 ? <Image className="h-10 w-10 rounded-full" src={toolsLogo3} alt="" /> : ""}
        </div>
        <p className="uppercase py-5 text-gray-300 md:text-lg sm:text-sm">
        {timing}
        </p>
        <ul className="list-disc space-y-4  md:text-lg sm:text-xs">
          <li>{pt1}</li>
          <li>{pt2}</li>
          <li>{pt3}</li>
          <li>{pt4}</li>
        </ul>
      </div>
    </article>
  );
}
