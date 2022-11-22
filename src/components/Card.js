import React from "react";

import { AiFillStar } from "react-icons/ai";

const Card = ({ title, img }) => {
  return (
    <div>
      <div className="flex flex-col w-52 h-80 mx-auto lg:w-44  xxl:w-48 bg-[#121212] mb-4">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-72   rounded-t-[0.5rem]"
        />
        <div className=" bg-[#121212] rounded-b-[0.5rem] flex items-center justify-between w-full pr-2">
          <p className="text-white font-semibold px-2 py-2 text-[18px]">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-white pr-1">8.5</p>
            <AiFillStar className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
