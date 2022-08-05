import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function Main({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  }
}) {
  return (
    <div className="py-5">
      <div className="flex flex-col-reverse md:flex-row text-white py-3 bg-black bg-opacity-25 rounded-lg md:justify-between md:w-[80vw]">
        <div className="flex flex-col space-y-2 mx-3 md:mx-4">
          <div className="flex text-sm items-center justify-between bg-black bg-opacity-50 p-4 rounded-lg md:p-2 md:w-[25vw]">
            <div className="flex">
              <UilTemperature size={18} className="mr-1" />
              Feels like:
            </div>
            <div className="flex font-medium ml-1">{`${feels_like.toFixed()}°c`}</div>
          </div>
          <div className="flex text-sm items-center justify-between  bg-black p-4 bg-opacity-50 rounded-lg md:p-2 md:w-[25vw]">
            <div className="flex">
              <UilTear size={18} className="mr-1" />
              Humidity:
            </div>
            <div className="font-medium ml-1">{`${humidity.toFixed()}%`}</div>
          </div>
          <div className="flex text-sm items-center justify-between  bg-black p-4 bg-opacity-50 rounded-lg md:p-2 md:w-[25vw]">
            <div className="flex">
              <UilWind size={18} className="mr-1" />
              Wind:
            </div>
            <div className="font-medium ml-1">{`${speed.toFixed()} km/h`}</div>
          </div>
        </div>
        <div className="flex">
          {/* <p>{details}</p> */}
          <div className=""><img src={iconUrlFromCode(icon)} alt="" className="w-32 my-2 md:my-0" /></div>
          <div className="text-gray-300 text-[5rem] font-semibold mr-8">{`${temp.toFixed(1)}°c`}</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center my-2 space-x-2 text-white text-sm py-3 bg-black bg-opacity-25 rounded-lg">
        
        <div className="flex m-0">
        
          <p className="flex bg-black bg-opacity-50 p-2 rounded-lg m-1 w-[42vw] md:w-[180px] text-center">
          <UilSun />
            <div className="ml-1">
            Rise:{" "}
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </div>
          </p>
          

          
          <p className="flex bg-opacity-50 p-2 rounded-lg bg-black m-1 w-[42vw] md:w-[180px] text-center">
          <UilSunset />
            <div className="ml-1">
            Set:{" "}
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </div>
          </p>
          
        </div>

        <div className="flex -translate-x-1">

        <p className="flex bg-opacity-50 p-2 rounded-lg bg-black m-1 w-[42vw] md:w-[180px] text-center">
        <UilSun />
          
          <div className="ml-1">High:{" "}{`${temp_max.toFixed()}°`}</div>
        </p>


        
        <p className="flex bg-opacity-50 p-2 rounded-lg bg-black m-1 w-[42vw] md:w-[180px] text-center">
        <UilSun />
          <div className="ml-1">Low:{" "}{`${temp_min.toFixed()}°`}</div>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
