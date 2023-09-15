'use client'
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type SocialLink = {
  url: string;
};

type Props = {
  projImage?: string;
  imageClass?: string;
  projName?: string;
  projDesc?: string;
  socialLink?: SocialLink[];
  tech?: string;
};

export default function Project({
  projImage,
  projName,
  socialLink,
  tech,
  projDesc,
  imageClass,
}: Props) {
  const [iconSize, setIconSize] = useState({ width: "50px", height: "50px" });

  const updateIconSize = () => {
    const newSize =
      window.innerWidth <= 768
        ? { width: "30px", height: "30px" }
        : { width: "50px", height: "50px" };
    setIconSize(newSize);
  };

  useEffect(() => {
    // Initial update
    updateIconSize();
    // Event listener to update on window resize
    window.addEventListener("resize", updateIconSize);
    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return (
    <div className="w-screen flex-shrink-0 snap-center flex xl:flex-col sm:flex-col space-y-5 items-center justify-center px-9 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={projImage}
        alt=""
        className={imageClass}
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="xl:text-4xl md:text-xl sm:text-sm font-semibold text-center whitespace-nowrap">
          <span className="underline decoration-[#64CCC5]/50"> {projName}</span>
        </h4>
        <div className="flex items-center justify-center space-x-5">
          {socialLink &&
            socialLink.map((link, index) => (
              <SocialIcon
                key={index}
                url={link.url}
                fgColor="#64CCC5"
                bgColor="gray"
                className="socialIcon"
                style={iconSize}
              />
            ))}
        </div>
        <h4 className="uppercase tracking-[5px] text-gray-500 md:text-xl sm:text-xs">
          {tech}
        </h4>

        <p className=" max-w-fit whitespace-break-spaces break-words flex-wrap text-center xl:text-lg lg:text-lg md:text-lg sm:text-[10px] pb-10 overflow-hidden">
          {projDesc}
        </p>
      </div>
    </div>
  );
}
