"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full h-[90vh] flex justify-center items-center">
      <div className="md:w-[90%] w-[95%] h-full flex  flex-col justify-start items-center border-2 border-primary-text rounded-lg p-3 gap-3">
        <h1 className="w-full text-start text-3xl font-bold">Profile</h1>
        <div className="w-full h-fit flex flex-col justify-center items-center gap-2">
          <div className="md:w-[90%] w-full mr-auto">
            <label
              htmlFor="user-name"
              className="w-full text-start text-xl font-bold"
            >
              User Name
            </label>
            <input
              type="text"
              id="user-name"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="John Doe"
            />
          </div>
          <div className="md:w-[90%] w-full mr-auto">
            <label
              htmlFor="user-email"
              className="w-full text-start text-xl font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="user-email"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="md:w-[90%] w-full mr-auto">
            <label
              htmlFor="user-password"
              className="w-full text-start text-xl font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="user-password"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="password"
            />
            <div className="text-sm font-bold text-dark-green ml-auto w-fit">
              <Link href={"/profile"} className="w-full">
                Reset your password
              </Link>
            </div>
          </div>
          <div className="md:w-[90%] w-full mr-auto">
            <label
              htmlFor="user-phone"
              className="w-full text-start text-xl font-bold"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="user-phone"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="98xxxxxxxx"
            />
          </div>
        </div>
        <div className="w-[15vw] h-[45px] flex justify-center items-center text-lg font-bold rounded-xl text-transparent bg-dark-green mr-auto">
          <Link className="w-full text-center" href={"/profile"}>
            Save
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
