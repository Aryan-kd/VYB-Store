"use client";
import { WorkImage1, WorkImage2, WorkImage3, WorkImage4 } from "@/images";
import React from "react";

const WorkList = () => {
  let listItems = [
    {
      title: "Sign Up and create your own store hassle-free",
      desc: "Join us via google signin and verify your influencer status by entering you social media id and unlock your store @ zero cost",
      image: <WorkImage1 />,
    },
    {
      title: "Build & customize your store front.",
      desc: "Simply fill in the details to build your digital store. Once done start selling your products to your audience.",
      image: <WorkImage2 />,
    },
    {
      title:
        "Call audience to your store. Easily integrate links into content.",
      desc: "After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together !.",
      image: <WorkImage3 />,
    },
    {
      title: `"Monetize your influencer status: Earn money adding real value to your true followers!"`,
      desc: "Let VYB the money now !! its here and withdraw it periodically.",
      image: <WorkImage4 />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-start gap-2 w-[80%]">
      {listItems.map((list, index) => (
        <div
          key={index}
          className="h-fit w-full flex items-start justify-center gap-5 py-2"
        >
          <p className="py-2 px-4 text-white bg-green-900 flex justify-center items-center rounded-lg">
            {index + 1}
          </p>
          <div className="flex flex-col justify-start items-start p-5 bg-gray-200 rounded-lg gap-5">
            <h1 className="text-xl text-start font-semibold">{list.title}</h1>
            <p className="text-md text-start">{list.desc}</p>
            <div className="flex justify-center items-center w-fit h-auto object-contain border-2 border-black overflow-hidden rounded-xl mx-auto">
              {list.image}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
