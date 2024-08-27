"use client";
import Link from "next/link";
import React from "react";

const WorkBanner = () => {
  return (
    <div className="h-fit w-full flex flex-col justify-start items-start gap-6 border-2 border-transparent p-5 rounded-xl bg-green-900">
      <h1 className="text-xl font-bold text-start">Start Vybing with us!</h1>
      <p className="text-sm font-bold text-start">
        {`"We help influencers make money by monetizing their travel plans, merchandise, and digital goods and many more."`}
      </p>

      <button className="py-2 px-4 text-lg font-semibold border-2 border-transparent rounded-3xl bg-green-600">
        <Link href={"/sign-in"}>Join Us</Link>
      </button>
    </div>
  );
};

export default WorkBanner;
