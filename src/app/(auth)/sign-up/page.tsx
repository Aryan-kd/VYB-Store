"use client";
import RegisterForm from "@/components/Auth/RegisterForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-[90vw] md:w-[50vw] h-full border-2 shadow-2xl rounded-xl p-2 flex flex-col justify-start items-center gap-1">
        <h1 className="text-2xl font-extrabold">Sign Up</h1>
        <div>
          <button className="py-2 px-4 border-2 rounded-3xl font-bold">
            Google Register
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="border border-gray-300 w-[40%]"></span>
          <p className="mx-2 w-fit text-center text-gray-300 font-semibold">
            OR
          </p>
          <span className="border border-gray-300 w-[40%]"></span>
        </div>
        <RegisterForm />
        <div className="w-full flex justify-center items-center">
          <span className="border border-gray-300 w-[30%]"></span>
          <p className="mx-2 w-fit text-center text-gray-300 font-semibold">
            Already have an Account
          </p>
          <span className="border border-gray-300 w-[30%]"></span>
        </div>
        <div className="my-2">
          <p className="text-lg">
            Already have an account?
            <span className="font-semibold underline ml-2">
              <Link href={"/sign-in"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
