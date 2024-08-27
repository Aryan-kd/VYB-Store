"use client";

import React from "react";
import { HeroMainImage, HeroMainMobile } from "@/images";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="w-full h-fit">
      <div className="container">
        <div className="md:flex hidden justify-center items-center w-full">
          <HeroMainImage />
        </div>
        <div className="md:hidden flex justify-center items-center w-full">
          <HeroMainMobile />
        </div>
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
