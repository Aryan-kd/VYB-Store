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
    <div className="w-full flex md:justify-start justify-center items-center">
      <input
        type="range"
        min={rangemin}
        max={rangemax}
        className="w-3/4"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};

export default EarningSlider;
