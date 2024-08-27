"use client";
import Link from "next/link";
import React from "react";

const WorkBanner = () => {
  return (
    <div className="h-fit w-full flex flex-col justify-start items-start gap-6 p-5 rounded-xl bg-dark-green">
      <h1 className="text-xl font-bold text-start text-secondary">
        Start Vybing with us!
      </h1>
      <p className="text-sm font-bold text-start text-secondary">
        {`"We help influencers make money by monetizing their travel plans, merchandise, and digital goods and many more."`}
      </p>

      <button className="py-2 px-4 text-lg font-bold rounded-3xl bg-tertiary text-primary-text">
        <Link href={"/sign-in"}>Join Us</Link>
      </button>
    </div>
  );
};

export default WorkBanner;
