import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative h-screen"
    >
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:absolute">
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
        className=" md:mb-0  w-36 h-36  rounded-full object-cover  xl:w-[500px] xl:h-[500px] "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold whitespace-nowrap">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
          nibh a quam vestibulum imperdiet. Curabitur in fermentum sapien.
          Nullam scelerisque semper erat at pharetra. Nulla ac lorem purus.
          Praesent dignissim, sem in lobortis sagittis, velit lectus placerat
          purus, congue feugiat dui tortor a mi. Proin ullamcorper tellus in
          tortor cursus feugiat. Ut mollis congue mollis. Curabitur laoreet
          feugiat elit varius euismod. Vivamus sit amet quam ac risus finibus
          rhoncus vitae quis dui. Donec quis bibendum sem. Cras ut lacus metus.
          Duis porttitor urna ipsum, vel fermentum nulla mollis ut. Praesent
          quis semper leo, a fermentum quam. Aenean vulputate rhoncus felis at
          rutrum. Nunc varius lobortis lacus nec elementum. Maecenas eu ultrices
          orci. Integer at nunc elit. Quisque nisl metus, consequat a maximus
          eu, ullamcorper id quam. Ut in tempus neque. Maecenas consequat dui
          nec ante consequat imperdiet. Donec vitae justo sed orci suscipit
          sagittis. Nullam eget tempor odio. Vestibulum sodales quam sed viverra
          finibus. Nullam vestibulum nisi augue, vel tincidunt ante faucibus a.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
          interdum sapien. Morbi quis velit et massa scelerisque tempor. In hac
          habitasse platea dictumst.
        </p>
      </div>
    </motion.div>
  );
}
