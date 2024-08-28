"use client";
import Link from "next/link";
import React from "react";
import { ProfilePicture } from "@/images";
import DashboardNav from "./DashboardNav";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] h-full flex flex-col justify-center items-center border-2 rounded-lg py-4 gap-3">
        <div className="w-[144px] h-[144px] rounded-full border-2 border-primary-text overflow-hidden">
          <ProfilePicture />
        </div>
        <Link href={"/profile"} className="text-sm text-dark-green font-bold">
          Change Profile Image
        </Link>

        <h1 className="text-3xl font-bold text-center">Sameer Sharma</h1>
        <div className="w-full">
          <DashboardNav />
        </div>
        <button
          onClick={() => signOut()}
          className="w-[60%] h-[40px] text-lg rounded-xl bg-dark-green text-transparent flex justify-center items-center font-bold border border-dark-green"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
