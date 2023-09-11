import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import npm from "@/assets/npm.png";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?height=473&width=711&fit=bounds"
        alt="img"
      />

      <div className="px-0 md:px-10 text-center">
        <h4 className="md:text-4xl font-light sm:text-xl ">CEO OF PAPAFAM</h4>
        <p className="font-bold md:text-2xl mt-1 sm:text-lg">PAPAFAM</p>
        <div className="flex space-x-2 my-2 justify-center">
          <Image className="h-10 w-10 rounded-full" src={npm} alt="package" />
          <Image className="h-10 w-10 rounded-full" src={npm} alt="package" />
          <Image className="h-10 w-10 rounded-full" src={npm} alt="package" />
        </div>
        <p className="uppercase py-5 text-gray-300 md:text-lg sm:text-sm">
          Started working... -Ended....
        </p>
        <ul className="list-disc space-y-4  md:text-lg sm:text-xs">
          <li>SummarySummarySummarySummary SummarySummarySummarySummary</li>
          <li>SummarySummarySummarySummary SummarySummarySummarySummary</li>
          <li>SummarySummarySummarySummary SummarySummarySummarySummary</li>
          <li>SummarySummarySummarySummary SummarySummarySummarySummary</li>
        </ul>
      </div>
    </article>
  );
}
