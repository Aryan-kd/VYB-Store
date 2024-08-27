"use client";

import React from "react";
import {
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
  HeroMainImage,
} from "@/images";

const HeroImage = () => {
  const heroDetails = [
    {
      image: <HeroImage1 />,
      title: "Travel Itinerary",
    },
    {
      image: <HeroImage2 />,
      title: "Custom Merchandise",
    },
    {
      image: <HeroImage3 />,
      title: "Digital Content",
    },
    {
      image: <HeroImage4 />,
      title: "Fashion Brands",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-wrap my-4 md:w-[80%] w-[95%] mx-auto gap-6 py-5 px-1 shadow-2xl rounded-xl">
      {heroDetails.map((details, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center flex-auto w-[200px] md:w-[180px] h-[200px] shadow-xl rounded-xl py-4 px-3"
        >
          {details.image}
          <h1 className="text-center font-bold text-xl">{details.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default HeroImage;
