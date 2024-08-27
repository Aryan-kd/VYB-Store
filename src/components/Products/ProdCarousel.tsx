"use client";
import React from "react";
import { LeftArrow, RightArrow, ProductImage1, ProductImage2 } from "@/images";

const ProdCarousel = () => {
  return (
    <div className="flex justify-around items-center h-full w-full">
      <button className="w-fit rounded-full bg-dark-green flex justify-center items-center p-2">
        <LeftArrow />
      </button>
      <div className="flex md:justify-between justify-center items-center w-[80vw] h-auto">
        <div className="w-[50%] flex flex-col items-center justify-center gap-10">
          <div>
            <h1 className="md:text-2xl text-lg font-extrabold">
              Delhi Itinerary
            </h1>
            <p className="md:text-md md:font-semibold text-sm">
              <span>
                {`Delhi, India’s capital territory, is a massive metropolitan area`}
              </span>
              <span className="md:inline hidden">
                {`in
          the country’s north. In Old Delhi, a neighborhood dating to the 1600s,
          stands the imposing Mughal-era Red Fort, a symbol of India, and the
          sprawling Jama Masjid mosque, whose courtyard accommodates 25,000
          people.`}
              </span>
              <span className="md:hidden inline">{`...`}</span>
            </p>
          </div>
          <div className="flex justify-start items-start gap-5 w-full">
            <button className="md:w-[86px] w-[46px] md:h-[35px] h-[18px] rounded-2xl bg-tertiary-text md:text-[18px] text-[9px] font-semibold text-dark-green border border-dark-green">
              Rs. 349
            </button>
            <button className="md:w-[86px] w-[46px] md:h-[35px] h-[18px] rounded-2xl text-tertiary-text md:text-[18px] text-[9px] font-semibold bg-dark-green">
              More
            </button>
          </div>
        </div>
        <div className="lg:w-[400px] lg:h-[361px] md:w-[300px] md:h-[280px] sm:w-[250px] sm:h-[210px] w-[110px] h-[92px] relative">
          <div className="absolute w-[60%] top-0 right-0  overflow-hidden rounded-sm shadow-2xl">
            <ProductImage1 />
          </div>
          <div className="absolute w-[70%] bottom-0 overflow-hidden rounded-sm  shadow-2xl">
            <ProductImage2 />
          </div>
        </div>
      </div>
      <button className="w-fit rounded-full bg-dark-green flex justify-center items-center p-2">
        <RightArrow />
      </button>
    </div>
  );
};

export default ProdCarousel;
