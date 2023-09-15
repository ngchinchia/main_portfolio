'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"]
      }}
      transition={{
        duration: 2.5
      }}

      className="relative flex justify-center items-center pt-40"
    >
      <div className="absolute border border-[#64CCC5] rounded-full lg:h-[200px] lg:w-[200px] sm:h-[100px] sm:w-[100px] mt-52 opacity-10 animate-ping " />
      <div className="absolute border border-[#64CCC5] rounded-full lg:h-[300px] lg:w-[300px] sm:h-[150px] sm:w-[150px] mt-52 opacity-10 animate-ping" />
      <div className="absolute border border-[#64CCC5] rounded-full lg:h-[500px] lg:w-[500px] sm:h-[250px] sm:w-[250px] mt-52 opacity-10 animate-ping" />
      <div className="absolute border border-[#64CCC5] rounded-full lg:h-[500px] lg:w-[500px] sm:h-[325px] sm:w-[325px] mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#64CCC5] rounded-full lg:h-[650px] lg:w-[650px] sm:h-[400px] sm:w-[400px] mt-52 animate-pulse opacity-20" />
    </motion.div>
  );
}
