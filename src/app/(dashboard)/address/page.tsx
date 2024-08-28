"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[95%] min-h-[80vh] border-2 rounded-lg p-4 flex flex-col items-start justify-start gap-3">
        <h1 className="text-3xl text-primary-text font-bold">Address</h1>

        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="address-line1" className="text-lg font-bold">
            Address Line 1
          </label>
          <input
            id="address-line1"
            type="text"
            className="px-2 py-2 h-[40px] w-full border border-primary-text rounded-lg"
            placeholder="Enter Address"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="address-line2" className="text-lg font-bold">
            Address Line 2
          </label>
          <input
            id="address-line2"
            type="text"
            className="px-2 py-2 h-[40px] w-full border border-primary-text rounded-lg"
            placeholder="Enter Address"
          />
        </div>

        <div className="w-full flex flex-wrap justify-between items-start gap-3">
          <div className="md:w-[48%] w-full">
            <label htmlFor="zip-code" className="text-lg font-bold">
              Zip Code
            </label>
            <input
              id="zip-code"
              type="text"
              className="px-2 py-2 h-[40px] w-full border border-primary-text rounded-lg"
              placeholder="Enter Zip Code"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label htmlFor="user-city" className="text-lg font-bold">
              City
            </label>
            <input
              id="user-city"
              type="text"
              className="px-2 py-2 h-[40px] w-full border border-primary-text rounded-lg"
              placeholder="Enter City"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label htmlFor="user-state" className="text-lg font-bold">
              State
            </label>
            <input
              id="user-state"
              type="text"
              className="px-2 py-2 h-[40px] w-full border border-primary-text rounded-lg"
              placeholder="Enter State"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label htmlFor="user-country" className="text-lg font-bold">
              Country
            </label>
            <input
              id="user-country"
              type="text"
              className="px-2 py-2 h-[40px] w-full border border-primary-text rounded-lg"
              placeholder="Enter Zip Code"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[20vw] mr-auto h-[45px] bg-dark-green text-lg text-secondary font-bold rounded-xl">
          <Link href={"/address"}>Save</Link>
        </div>
      </div>
    </section>
  );
};

export default page;
