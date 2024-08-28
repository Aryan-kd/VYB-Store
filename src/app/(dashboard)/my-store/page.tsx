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

        <div className="flex flex-col justify-center items-center w-full">
          <label
            htmlFor="store-url"
            className="text-xl font-bold w-full text-start"
          >
            Claim Your Store URL
          </label>
          <input
            id="store-url"
            type="text"
            className="px-3 py-2 w-full h-[40px] border border-primary-text rounded-lg"
            placeholder="Username for Store"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <label
            htmlFor="genre-drop"
            className="text-xl font-bold w-full text-start"
          >
            Select Genre
          </label>
          <input
            id="genre-drop"
            type="text"
            className="px-3 py-2 w-full h-[40px] border border-primary-text rounded-lg"
            placeholder="Enter Your Genre"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <label
            htmlFor="bank-data"
            className="text-xl font-bold w-full text-start"
          >
            Add Your Bank Details
          </label>
          <input
            id="bank-data"
            type="text"
            className="px-3 py-2 w-full h-[40px] border border-primary-text rounded-lg"
            placeholder="xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <label
            htmlFor="pan-data"
            className="text-xl font-bold w-full text-start"
          >
            Add PAN Card Number
          </label>
          <input
            id="pan-data"
            type="text"
            className="px-3 py-2 w-full h-[40px] border border-primary-text rounded-lg"
            placeholder="xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-between items-center">
            <label
              htmlFor="gst-invoice"
              className="text-xl font-bold w-full text-start"
            >
              GST Invoicing
            </label>
            <div className="w-[23px] h-[23px] border border-primary-text mr-1 rounded-md"></div>
          </div>
          <input
            id="gst-invoice"
            type="text"
            className="px-3 py-2 w-full h-[40px] border border-primary-text rounded-lg"
            placeholder="xxxxxxxxxxxxxxxxxxxx"
          />
        </div>
        <div className="w-[15vw] h-[45px] flex items-center justify-center bg-dark-green text-secondary text-lg font-bold rounded-xl mr-auto">
          <Link href={"/my-store"}>Save</Link>
        </div>
      </div>
    </section>
  );
};

export default page;
