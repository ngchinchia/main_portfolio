'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center max-w-7xl px-10 justify-start py-20 mx-auto items-center  "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        About
      </h3>
     
     
       <motion.img
        src={
          "https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?height=473&width=711&fit=bounds"
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
        className="lg:w-50 lg:h-50 md:w-30 md:h-30 object-cover mt-10"
      />
       
      <div className="border space-y-10 px-0 md:px-10 items-center p-5 mt-10">
        <h4 className="xl:text-4xl lg:text-3xl font-semibold whitespace-nowrap">
          Here is a{" "}
          <span className="underline decoration-[#64CCC5]/50"> little</span>{" "}
          background
        </h4>
        <p className="w-fit px-4 text-left lg:text-2xl md:text-base sm:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
          nibh a quam vestibulum imperdiet. Curabitur in fermentum sapien.
          Nullam scelerisque semper erat at pharetra. Nulla ac lorem purus.
          Praesent dignissim, sem in lobortis sagittis, velit lectus placerat
          purus, congue feugiat dui tortor a mi. Proin ullamcorper tellus in
          
      
        </p>
      </div> 
   
    </motion.div>
  );
}
