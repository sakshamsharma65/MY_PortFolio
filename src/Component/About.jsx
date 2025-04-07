import { FaArrowRight } from "react-icons/fa";
import React from "react";

const About = () => {
  const items = [
    {
      title: "Frontend Developer",
      description:
        "I craft fast and responsive UI with React, Tailwind CSS, and modern tools.",
    },
    {
      title: "Clean Code Enthusiast",
      description:
        "I write modular, reusable, and clean code with best practices.",
    },
    {
      title: "Team Player",
      description:
        "I collaborate well with designers and backend teams to ship great products.",
    },
  ];

  return (
    <div id="about" className="text-white bg-black bg-opacity-30 shadow-xl mx-2 md:mx-20 rounded-lg p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side – Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="h-60 md:h-80 rounded-full "
          src="image.png"
          alt="Saksham Sharma"
        />
      </div>

      {/* Right Side – Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        {items.map((item, index) => (
          <div className="flex gap-4 mb-6" key={index}>
            <FaArrowRight size={24} className="mt-1 text-green-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
