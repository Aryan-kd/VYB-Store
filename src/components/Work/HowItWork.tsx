"use client";
import React from "react";
import WorkBanner from "./WorkBanner";
import WorkList from "./WorkList";

const HowItWork = () => {
  return (
    <section className="min-h-[50vh] w-full py-5">
      <div className="h-full w-full flex flex-wrap justify-center items-start">
        <div className="h-fit w-[50vw] flex-1 flex justify-items-start justify-center items-center self-start sticky">
          <WorkBanner />
        </div>
        <div className="h-full w-[50vw] flex-1 flex justify-center items-center">
          <WorkList />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
