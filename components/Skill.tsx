import React from "react";
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
          <div className="bg-[#64CCC5] hidden xl:block  lg:text-sm md:text-base sm:text-xs object-cover absolute inset-0  text-center uppercase md:tracking-[1px] border-gray-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-20 items-center justify-center md:pt-7 sm:pt-2">
            {title}
          </div>
        )}
        <Image
          src={src}
          alt=""
          className="rounded-full border border-gray-500 object-cover xl:w-24 xl:h-24 md:w-12 md:h-12 sm:w-6 sm:h-6 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
