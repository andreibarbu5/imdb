import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { GoSettings } from "react-icons/go";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#121212]">
      <div className=" flex justify-between items-center text-white py-3 pl-6 pr-8 whitespace-nowrap lg:w-[80vw] xl:w-[70vw] mx-auto">
        {/* Left */}
        <div className="flex items-center shrink-0">
          <img src={logo} className="w-28 mr-5   " alt="" />{" "}
          <div className="hover:bg-gray-500/60  p-2 rounded-[0.5rem] group duration-100 ease-out">
            <FiMenu className="  text-[22px]  group-hover:scale-110  duration-100 ease-out" />
          </div>
        </div>
        {/* Middle */}
        <div className="hidden sm:flex w-full mx-12 relative items-center ">
          <input type="text" className="w-full rounded-full py-1" />
          <div className="absolute flex items-center  bg-[#f5c518]/80 h-full pl-2 pr-1.5 rounded-l-full">
            <BiSearchAlt className="  text-gray-600  " />
          </div>
          <div className="absolute flex items-center  bg-[#f5c518]/80 h-full pl-2 pr-1.5 rounded-r-full right-0">
            <GoSettings className="  text-gray-600  " />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center gap-4">
          <BiSearchAlt className="sm:hidden w-8 h-8  " />
          <p>Log in</p>
          <div className="flex items-center gap-1">
            <IoLanguage className="text-gray-300" />
            <p>FR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
