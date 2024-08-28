"use client";
import React, { Dispatch, SetStateAction } from "react";
import "./EarningSlider.css";

interface Props {
  rangemin: number;
  rangemax: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const EarningSlider = ({ rangemin, rangemax, value, setValue }: Props) => {
  return (
    <div className="relative w-[90%] flex md:justify-start justify-center items-center mr-auto">
      <input
        type="range"
        min={rangemin}
        max={rangemax}
        className="w-3/4 cursor-pointer z-20 "
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <div className="z-10 border-2 w-3/4 absolute"></div>
    </div>
  );
};

export default EarningSlider;
