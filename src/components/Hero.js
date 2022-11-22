import React from "react";
import cinema from "../assets/cinema.jpg";
import popcorn from "../assets/popcorn.jpg";
import cover from "../assets/cover.jpg";
import { BsDisplay } from "react-icons/bs";
import { BiSkipNext } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="text-white p-2 bg-black">
      <div className="relative w-full h-[37rem] flex lg:w-[80vw] xl:w-[70vw] mx-auto  ">
        <img
          src={cinema}
          alt=""
          className="absolute object-cover w-full h-full"
        />
        <div alt="" className="grad absolute object-cover w-full h-full "></div>
        {/* Trailer */}
        <div className="hidden sm:flex relative z-20     items-end h-full  pl-8">
          <div className="hover:text-gray-300 group">
            <div className="flex w-[9rem] h-[13rem] mb-2.5 rounded-[1rem]">
              <img
                src={cover}
                alt=""
                className="object-cover text-center w-full h-full rounded-[1rem] "
              />
            </div>
            <div className="text-white flex items-center">
              <p className="text-[22px] font-bold group-hover:text-gray-300">
                New Movies
              </p>

              <BiSkipNext className="text-[30px]  group-hover:text-gray-300 pt-1" />
            </div>
          </div>
          {/* Title */}
          <div className=" flex relative z-20 mb-[2.8rem]   items-center ml-4  ">
            <BsDisplay className="text-[60px]" />
            <div className="pl-3">
              <p className="font-bold text-[28px]">Joe Doe Mission Possible </p>
              <p className="font-bold text-gray-400">
                Watch it in cinemas on 12 december
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
