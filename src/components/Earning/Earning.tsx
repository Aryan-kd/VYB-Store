"use client";
import React from "react";
import EarningBoard from "./EarningBoard";

const Earning = () => {
  return (
    <section className="w-full min-h-[40vh] bg-gray-400">
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <h1 className="text-3xl font-extrabold text-center">
          ESTIMATE EARNING POTENTIAL
        </h1>
        <EarningBoard />
        <button className="px-4 py-3 text-center bg-green-900 rounded-xl text-white">
          Calculate
        </button>
      </div>
    </section>
  );
};

export default Earning;
