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
    <div className=" group cursor-pointer relative">
      <div>
    
          {title && (
            <div className="bg-[#64CCC5] md:text-base sm:text-xs object-cover absolute inset-0 md:w-24 md:h-24 text-center uppercase md:tracking-[1px] border-gray-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-20 items-center justify-center md:pt-7 sm:pt-2">
              {title}
            </div>
          )}
          <Image
            src={src}
            alt=""
            className="rounded-full border border-gray-500 object-cover md:w-24 md:h-24 sm:w-12 sm:h-12 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
       
      </div>
    </div>
  );
}
