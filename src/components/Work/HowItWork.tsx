"use client";
import React from "react";
import WorkBanner from "./WorkBanner";
import WorkList from "./WorkList";

const HowItWork = () => {
  return (
    <section className="min-h-[50vh] w-full py-5">
      <div className="h-full w-full flex md:flex-row flex-col justify-center items-start gap-5 md:gap-0">
        <div className="h-fit md:w-[40vw] w-[80vw] mx-auto flex justify-items-start justify-center items-center self-start sticky">
          <WorkBanner />
        </div>
        <div className="h-full md:w-[50vw] w-[90vw] flex justify-center items-center">
          <WorkList />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
