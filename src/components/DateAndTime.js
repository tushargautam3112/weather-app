import React from "react";
import { formatToLocalTime } from "../services/weatherService";

const DateAndTime = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex my-3">
        <p className="text-white text-[2.4rem] md:text-[3rem] font-medium">{`${name}, ${country}`}</p>
      </div>
      <div className="flex md:mt-11 md:text-right">
        <p className="text-white md:text-xl font-light ">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

    </div>
  );
}

export default DateAndTime;
