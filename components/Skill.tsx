import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  src?: any;
  title?: string;
};

export default function Skill({ directionLeft, src, title }: Props) {
  return (
    <div className="group flex cursor-pointer relative">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <>
          {title && (
            <div className="bg-gray-500 md:w-24 md:h-24 text-center uppercase tracking-[1px] absolute border-gray-950 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-20 items-center justify-center pt-7">
              {title}
            </div>
          )}
          <Image
            src={src}
            alt=""
            className="rounded-full border border-gray-500 object-cover md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
        </>
      </motion.div>
    </div>
  );
}
