import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "./data/SkillsData";

import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center max-w-7xl px-10 justify-start py-20 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 md:text-lg sm:text-sm p-3">
        Technogologies I have used/worked on
      </h3>

      <div className="grid grid-cols-4 gap-5 ">
        {skillsData.map((skill, index) => (
          <Skill key={index} src={skill.src} title={skill.title} />
        ))}
      </div>
    </motion.div>
  );
}
