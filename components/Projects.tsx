import React, { useEffect } from "react";

type Props = {};

export default function Projects({}: Props) {
  useEffect(() => {
    const setInitialScrollPosition = () => {
      const scrollContainer = document.getElementById("scrollContainer");
      if (scrollContainer) {
        scrollContainer.scrollLeft = 400;
      }
    };
    document.readyState === "complete"
      ? setInitialScrollPosition()
      : window.addEventListener("load", setInitialScrollPosition);
    return () => {
      window.removeEventListener("load", setInitialScrollPosition);
    };
  }, []);

  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen flex flex-col text-center max-w-7xl px-10 justify-center py-20 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        Projects
      </h3>

      <div
        className="w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64CCC5]/90 md:overflow-y-hidden sm:overflow-y-scroll snap-x snap-mandatory "
        id="scrollContainer"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-9 md:p-44 h-screen"
          >
            {/* <img
              src="https://placebear.com/g/200/200"
              alt=""
              className="md:w-24 md:h-24 sm:w-12 sm:h-12"
            ></img> */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl sm:text-lg font-semibold text-center ">
                <span className="underline decoration-[#64CCC5]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                Clone
              </h4>
              <p className="text-center md:text-lg sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                tempus nisi, viverra sodales mi. Ut tempor rhoncus enim vitae
                pulvinar. Sed in tellus ante. Donec imperdiet condimentum
                ligula, ut volutpat augue lacinia quis. Etiam aliquam tortor vel
                neque volutpat, a ornare metus commodo. Phasellus cursus libero
                nulla, lacinia tincidunt dui malesuada in. Fusce dapibus non dui
             
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
