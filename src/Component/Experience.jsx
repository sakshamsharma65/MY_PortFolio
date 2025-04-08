import React from "react";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { SiKotlin } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="white" size={40} />
          </span>
          <span className="p-2 bg-zinc-950 flex items-center  rounded-2xl">
            <FaPython  color="white"  size={40} />
          </span>
          <span className="p-2 bg-zinc-950 flex items-center rounded-2xl ">
            <MdOutlineCss  color="white" size={40} className="hover:scale-100" />
          </span>
          <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoJavascript   color="white" size={40}  />
          </span>
          <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="white" size={40} />
          </span>
          <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="white" size={40} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 nt-4 rounded-lg p-4 items-center transform transition hover:scale-105" style={{ boxShadow: '0 10px 25px rgba(0, 140, 255, 0.4)' }} >
        <img className=" w-25  md:w-25 h-20 md:h-15" src="https://anythinginfotech.in/img/imgpsh_fullsize_anim.png" alt="" />
            <span className="text-white ">
              {" "}
              <h2 className="leading-tight">
                {" "}
                Anything-infotech -Kotlin Frontend Developer
              </h2>
              <p className="text-sm leading-tight font-thin  ">
                Sep-2024 - Dec-2024
              </p>
              <ul className="text-sm ">
                <li>Worked as an frontend developer</li>
                <li>Worked in kotlin designed different layouts and ui for the project</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 transform transition hover:scale-105 bg-opacity-45 nt-4 rounded-lg p-4 mt-4 items-center" style={{ boxShadow: '0 10px 25px rgba(0, 140, 255, 0.4)' }} >
           <img className=" w-25  md:w-25 h-20 md:h-15" src="https://www.w3villa.com/production/assets/logo-1-0cf06f8aef88f5778904cc40290b18da01c6cf5bff74594cb3b2fc4d0a353acf.webp" alt="" />
            <span className="text-white ">
              {" "}
              <h2 className="leading-tight">W3-villa- Web Developer</h2>
              <p className="text-sm leading-tight font-thin ">
                Feb-2025 - May-2025
              </p>
              <ul className="text-sm ">
                <li>Worked as an frontend developer In React ,Html,css,Js </li>
                <li>Worked on many landing pages like holi page,real estate project,protfolio .
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
