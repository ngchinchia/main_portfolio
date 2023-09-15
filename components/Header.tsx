"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex sticky top-0 p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        <SocialIcon
          url={"https://www.linkedin.com/in/ng-chin-chia-90699124b/"}
          fgColor="currentColor"
          bgColor="transparent"
          className="messageIcon"
        />
        <SocialIcon
          url={"https://github.com/ngchinchia"}
          fgColor="currentColor"
          bgColor="transparent"
          className="messageIcon"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="messageIcon"
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
          url="#contact"
        />

        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400  hover:text-[#64CCC5]/90 cursor-pointer">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
