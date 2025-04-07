import React from "react";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { SiKotlin } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="purple" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <MdOutlineCss color="green" size={50} className="hover:scale-100" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoJavascript size={50} color="white" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="white" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 nt-4 rounded-lg p-4 items-center">
            <SiKotlin  color="blue" size={50} />
            <span className="text-white ">
              {" "}
              <h2 className="leading-tight">
                {" "}
                Anything-infotech -Kotlin Frontend Developer
              </h2>
              <p className="text-sm leading-tight font-thin ">
                sep-2024 -dec-2024
              </p>
              <ul className="text-sm p-2">
                <li>Worked as an frontend developer</li>
                <li>Worked in kotlin designed different layouts and ui for the project</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 nt-4 rounded-lg p-4 mt-4 items-center">
            <FaReact  color="yellow" size={50} />
            <span className="text-white ">
              {" "}
              <h2 className="leading-tight">W3-villa- Web Developer</h2>
              <p className="text-sm leading-tight font-thin ">
                feb-2025- may-2025
              </p>
              <ul className="text-sm p-2">
                <li>Worked as an frontend developer In React ,Html,css,Js </li>
                <li>
                 Worked on many landing pages like holi page,real estate project,protfolio .
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
