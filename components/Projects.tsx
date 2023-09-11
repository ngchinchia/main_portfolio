import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen flex flex-col text-center max-w-7xl px-10 justify-start py-20 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        Projects
      </h3>

      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
              src="https://placebear.com/g/200/200"
              alt=""
              className="w-24 h-24"
            ></img>
            <div>
              <h4>Case Study {i+1} of {projects.length}: Clone</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
