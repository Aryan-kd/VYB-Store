"use client";
import React from "react";
import { LeftArrow, RightArrow, ProductGIF } from "@/images";

const ProdCarousel = () => {
  return (
    <div className="flex justify-between items-center h-full w-full">
      <button className="w-fit rounded-full bg-green-950 flex justify-center items-center p-2">
        <LeftArrow />
      </button>
      <div className="flex justify-center items-center object-contain object-center w-[70vw] h-auto rounded-lg overflow-hidden">
        <ProductGIF />
      </div>
      <button className="w-fit rounded-full bg-green-950 flex justify-center items-center p-2">
        <RightArrow />
      </button>
    </div>
  );
};

export default ProdCarousel;
