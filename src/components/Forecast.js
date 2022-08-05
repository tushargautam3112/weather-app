import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  // console.log(items);
  return (
    <div className=" bg-black bg-opacity-25 rounded-lg p-3 my-5">
      <div className="flex items-center justify-start">
        <p className="text-white font-medium uppercase mx-1">{title}</p>
      </div>
      <hr className="my-2 border-[#333333] h-2 opacity-50" />

      <div className="flex flex-row items-center justify-between text-white overflow-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-48 bg-black bg-opacity-20 rounded-lg py-2 mx-1"
          >
            <div className=" text-center w-[76px] md:w-[80px] rounded-lg"><p className="font-light text-sm">{item.title}</p></div>
            
            <div className="w-[70px] md:w-[117px]">
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-48 my-1"
              alt=""
            />
            </div>
            <div className=" text-center w-[76px] md:w-[80px] rounded-lg">
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
