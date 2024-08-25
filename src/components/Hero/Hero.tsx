"use client";

import React from "react";
import { HeroMainImage } from "@/images";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <HeroMainImage />
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
