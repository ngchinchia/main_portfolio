"use client";
import React, { useEffect } from "react";
import Project from "./Project";

import brewbubble2 from "@/assets/brewbubble2.png";
import taskmanagement from "@/assets/taskmanagement.png";
import enrolsys from "@/assets/enrolmentsys.png";

import nodejs from "@/assets/nodejsbox.png";
import reactnative from "@/assets/react-native.png";
import mongodb from "@/assets/boxmongo.png";
import javascript from "@/assets/javascript.png";
import postman from "@/assets/postman.png";
import Image from "next/image";

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
        className="w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64CCC5]/90 md:overflow-y-scroll xl:overflow-y-hidden sm:overflow-y-scroll snap-x snap-mandatory "
        id="scrollContainer"
      >
       
        <Project
          projImage={taskmanagement.src}
          projName="SimplyTasks"
          imageClass="xl:w-[600px] xl:h-[300px]  sm:w-42 sm:h-32"
          socialLink={[
            {
              url: "https://main--verdant-khapse-68282c.netlify.app/",
            },
            {
              url: "https://github.com/ngchinchia/taskmanager-frontend",
            },
            {
              url: "https://github.com/ngchinchia/taskmanager-backend",
            },
          ]}
          tech="Technologies : React, Typescript, mySQL, MUI, TanStackQuery"
          projDesc="SimplyTask is a full-stack task management web application designed for individuals. It utilizes the TANstack (TypeScript, Apollo, Node.js) for the backend and React with TypeScript for the frontend, along with a MySQL database. Key features include asynchronous task creation and management, detailed task tracking, priority management, and data visualization. 
          The project's goal is to provide an efficient and user-friendly task management solution for personal use."
        />
        <Project
          projImage={brewbubble2.src}
          imageClass="xl:w-[600px] xl:h-[300px] sm:w-42 sm:h-32"
          projName="Brew Bubble Mobile App"
          socialLink={[
            {
              url: "https://www.youtube.com/watch?v=-4ooQDviA_o&ab_channel=MaeganLee",
            },
            {
              url: "https://docs.google.com/presentation/d/1g1Qc7K-KXy5C9iPBBAFIr41frdzCjfB55w5SCmwbToo/edit?usp=sharing",
            },
            {
              url: "https://github.com/ngchinchia/brewbubble-backend",
            },
            {
              url: "https://play.google.com/store/apps/details?id=com.BrewBubble&hl=en-SG",
            },
            {
              url: "https://www.figma.com/file/gWSwmcOsxS950VLEQYwNAQ/FYP-Beer-App?type=design&node-id=0%3A1&mode=design&t=bfvzTEK8cMAo1XqO-1",
            },
          ]}
          tech="Technologies : React, Node js, Mongodb, Express, Postman, Figma"
          projDesc="Brew Bubble is a full stack mobile application that addresses several significant challenges within the beer enthusiast community, including the limited access to comprehensive beer information, the lack of personalized tracking and reflection tools, and the cumbersome beer management processes for brewers. It also fosters social interaction by offering a platform for beer enthusiasts to connect and share their passion. By incorporating advanced search and discovery features, users can effortlessly locate specific beers, venues, or breweries, thereby enhancing their overall beer-app experience. Key features include smart keg tracking of real time beer data and GPS tracking of nearby beer venues for particular beer. This project underscores a commitment to creative problem-solving and the continual improvement of user experiences."
        />
         <Project
          projImage={enrolsys.src}
          imageClass="xl:w-[300px] xl:h-[300px] sm:w-42 sm:h-32"
          projName="OSE Management"
          socialLink={[
            {
              url: "https://github.com/ngchinchia/SubjectEnrolmentSystem",
            },
          ]}
          tech="Technologies : PHP, Html, Css, mySql, Apache "
          projDesc="OSE Management is a full stack management project that streamlines subject enrollment processes, enhancing efficiency and usability for administrators, students, and educators alike. Its foundation in object-oriented programming and utilization of MYSQL and Apache underscores a commitment to delivering a feature-rich and user-friendly educational management solution. Key features include user authentication, robust search functionality and CRUD operations."
         
        />
      </div>
    </div>
  );
}
