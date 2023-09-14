"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import stIcon from "@/assets/stelectronics.png";
import jira from "@/assets/jira.png";
import figmaIcon from "@/assets/figma.png";
import phpIcon from "@/assets/php.png";
import amazonIcon from "@/assets/amazon.png";
import infor from "@/assets/infor.png";
import zebra from "@/assets/zebra.png";
import rsaf from "@/assets/rsaf.png";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-left max-w-7xl px-10 justify-start py-20 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#64CCC5]/90">
        <ExperienceCard
          src={amazonIcon.src}
          className="w-32 h-32  xl:w-[500px] xl:h-[200px] object-center"
          companyTitle="Amazon Fulfillment Center"
          timing="October 2020 - May 2021"
          slogan="Work Hard. Have Fun. Make History."
          toolsLogo={infor}
          toolsLogo2={zebra}
          pt1="Assembled merchandise, received shipments and oversee movement and storage of products."
          pt2="Prepared and staged orders for shipping, ensuring proper labeling and documentation."
          pt3="Utilized Infor software to optimize inventory management and tracking processes."
          pt4="Proficient in operating Zebra RFID scanners and equipment for inventory tracking and asset management."
        />
        <ExperienceCard
          src={rsaf.src}
          className="w-32 h-32  xl:w-[300px] xl:h-[300px] object-center"
          companyTitle="Republic Singapore Air Force"
          timing="August 2018 - August 2020"
          slogan="Airforce, above all."
          pt1="Maintained critical power and lighting systems for all buildings in the depot via conducting checks."
          pt2="Showcased problem-solving skills by suggesting improvements in the tracking of maintenance schedules and defect reports."
          pt3="Secured high serviceability of critical mechanical and electrical equipments such as air compressors 
         and overhead gantries, ensuring the depot healthy operational readiness."
          pt4="Demonstrated detail-oriented skills which achieved zero findings for area in charge 
         during a Air Force Inspectorate Audit held in 2019."
        />
        <ExperienceCard
          src={stIcon.src}
          className="w-32 h-32  xl:w-[500px] xl:h-[300px] object-center"
          companyTitle="ST Electronics"
          timing="March 2017 - August 2017"
          slogan="Technology & innovation to solve real-world problems"
          toolsLogo={jira}
          toolsLogo2={figmaIcon}
          toolsLogo3={phpIcon}
          pt1="Conducted rigorous testing procedures to troubleshoot errors and ensure the seamless operation of software applications."
          pt2="Utilized project management tools like JIRA to meticulously identify, track, and resolve issues."
          pt3="Facilitated database registrations with regulatory authorities such as LTA. My involvement extended to supporting various forms of testing, ensuring compliance and operational excellence."
          pt4="Delivered and employed an iterative design approach for user interface of turnstile and swimming pool access system."
        />
      </div>
    </motion.div>
  );
}
