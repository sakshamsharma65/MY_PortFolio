import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
   <span className="text-2xl font-extrabold tracking-wide">SΔK$HΔM $HΔRMΔ</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg_black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent  md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#about">
          <li className="text-md transition-all p-1 md:p-1 hover:bg-gray-600 rounded-4xl duration-300 hover:scale-130 hover:opacity-40">
            About
          </li>
        </a>
        <a href="#experience">
          <li className="text-md transition-all  p-1 md:p-1 hover:bg-gray-600 rounded-4xl duration-300 hover:opacity-40 hover:scale-130">
            Experience
          </li>
        </a>
        <a href="#project">
          <li className="text-md transition-all  p-1 md:p-1 hover:bg-gray-600 rounded-4xl duration-300 hover:scale-130 hover:opacity-40">
            Projects
          </li>
        </a>
        <a href="#contact">
          <li className="text-md transition-all  p-1 md:p-1 hover:bg-gray-600 rounded-4xl duration-300 hover:scale-130 hover:opacity-40">
            Contact
          </li>
        </a>
      </ul>

      {/* Toggle menu button */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
