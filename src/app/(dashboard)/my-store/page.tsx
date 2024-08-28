"use client";
import React from "react";
import { CoverPicture, YoutubeIcon, InstagramIcon } from "@/images";
import Link from "next/link";

const page = () => {
  let linkItems = [
    { title: "Instagram", image: <InstagramIcon /> },
    { title: "Youtube", image: <YoutubeIcon /> },
  ];
  return (
    <section className="w-full min-h-[90vh]">
      <div className="w-[95%] mx-auto h-full flex flex-col justify-start items-center border-2 rounded-lg gap-3 p-4">
        <h1 className="text-3xl font-bold w-full text-start">Creator Store</h1>
        <div className="w-full hidden md:flex flex-col justify-start items-start gap-1">
          <div className="w-[50%] overflow-hidden rounded-lg shadow-2xl">
            <CoverPicture />
          </div>
          <Link href={"/my-store"} className="text-sm text-dark-green">
            Change Cover Picture
          </Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h1 className="text-xl font-bold w-full text-start">
            Link Social Media Account
          </h1>
          {linkItems.map((links, index) => (
            <div
              className="w-[280px] p-2 flex justify-start items-center gap-2 bg-transparent border shadow-xl rounded-lg"
              key={index}
            >
              <div className="w-[25px] h-[25px]">{links.image}</div>
              <Link
                className="text-sm font-light py-1 px-2 rounded-xl border"
                href={"/my-store"}
              >
                Followers Count
              </Link>
              <Link
                className="text-sm font-light py-1 px-2 rounded-xl border"
                href={"/my-store"}
              >
                {`${links.title} I'D`}
              </Link>
            </div>
          ))}
        </div>

        <div>Hello</div>
      </div>
    </section>
  );
};

export default page;
