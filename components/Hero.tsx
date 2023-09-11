import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Ng Chin Chia",
      "Guy-who-loves-Black-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profile}
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        alt="Picture of the author"
      />
      <div className="z-30">
        <h2 className="sm:text-sm md:text-base lg:text-xl uppercase text-gray-500 pb-2 tracking-[15px] md:tracking-[10px] sm:tracking-[8px]">
          FullStack Developer
        </h2>
        <h1 className=" sm:text-lg md:text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text} </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 whitespace-nowrap">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
