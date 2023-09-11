import React from "react";
import { motion } from "framer-motion";
import nodemonIcon from "../assets/nodemon.png";
import figmaIcon from "../assets/figma.png";
import typescriptIcon from "../assets/typescript.png";
import javascriptIcon from "../assets/javascript.png";
import javaIcon from "../assets/java.png";
import mongodbIcon from "../assets/mongodb.png";
import html5Icon from "../assets/html5.png";
import nodejsboxIcon from  "../assets/nodejsbox.png";
import pythonIcon from "../assets/python.png";
import phpIcon from "../assets/php.png";
import tailwindIcon from "../assets/tailwind.png";
import githubIcon from "../assets/github-light.png";
import cplusplusIcon from  "../assets/cplusplus.png"
import packageIcon from  "../assets/npm.png"
import nextjsIcon from "../assets/nextjs.png"
import mysqlIcon from "../assets/mysql.png"
import antdesignIcon from "../assets/antdesign.png"
import muiIcon from "../assets/mui.png"
import ubuntuIcon from "../assets/ubuntu.png"
import androidIcon from "../assets/androidstudio.png"
import cssIcon from "../assets/css5.png"
import metasploitIcon from "../assets/metasploit.png"
import linuxIcon from "../assets/linux.png"
import kaliIcon from "../assets/kali-linux.png"
import reduxIcon from "../assets/redux.png"
import reactnativeIcon from "../assets/react-native.png"
import apacheIcon from "../assets/apache.png"
import postmanIcon from "../assets/postman.png"

import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center max-w-7xl px-10 justify-start py-20 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 md:text-lg sm:text-sm p-3">
        Technogologies I have used/worked on
      </h3>

      <div className="grid grid-cols-4 gap-5 ">
        <Skill src={nodemonIcon}  title="node mon"/>
        <Skill src={figmaIcon} title="figma"/>
        <Skill src={typescriptIcon} title="type script"/>
        <Skill src={javascriptIcon} title="java script"/>
        <Skill src={javaIcon} title="java"/>
        <Skill src={mongodbIcon} title="mongo db"/>
        <Skill src={html5Icon} title="html5"/>
        <Skill src={postmanIcon} title="postman api"/>
        <Skill src={nodejsboxIcon} title="nodejs"/>
        <Skill src={pythonIcon} title="python"/>
        <Skill src={phpIcon} title="php"/>
        <Skill src={githubIcon} title="github"/>
        <Skill src={tailwindIcon} title="tailwind"/>
        <Skill src={cplusplusIcon} title="c++"/>
        <Skill src={packageIcon} title="npm"/>
        <Skill src={nextjsIcon} title="next js"/>
        <Skill src={mysqlIcon} title="mysql"/>
        <Skill src={antdesignIcon} title="ant"/>
        <Skill src={muiIcon} title="mui"/>
        <Skill src={ubuntuIcon} title="ubuntu"/>
        <Skill src={androidIcon} title="android studio"/>
        <Skill src={cssIcon} title="css5"/>
        <Skill src={metasploitIcon} title="metas ploit"/>
        <Skill src={linuxIcon} title="linux"/>
        <Skill src={kaliIcon} title="kali linux"/>
        <Skill src={reduxIcon} title="redux toolkit"/>
        <Skill src={reactnativeIcon} title="react native"/>
        <Skill src={apacheIcon} title="apache" />
      
       
      </div>
    </motion.div>
  );
}
