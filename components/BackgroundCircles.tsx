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
      <div className="absolute border border-yellow-400 rounded-full lg:h-[200px] lg:w-[200px] md:h-[100px] md:w-[100px] mt-52 opacity-10 animate-ping " />
      <div className="absolute border border-yellow-400 rounded-full lg:h-[300px] lg:w-[300px] md:h-[150px] md:w-[150px] mt-52 opacity-10 animate-ping" />
      <div className="absolute border border-yellow-400 rounded-full lg:h-[500px] lg:w-[500px] md:h-[250px] md:w-[250px] mt-52 opacity-10 animate-ping" />
      <div className="absolute border border-[#F7AB0A] rounded-full lg:h-[650px] lg:w-[650px] md:h-[325px] md:w-[325px] mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#F7AB0A] rounded-full lg:h-[800px] lg:w-[800px] md:h-[400px] md:w-[400px] mt-52 animate-pulse opacity-20" />
    </motion.div>
  );
}
