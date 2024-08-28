"use client";
import React, { useState } from "react";
import { EarningGraph, DropIcon, DropUpIcon } from "@/images";

const Page = () => {
  const [selected, setSelected] = useState(1);
  const [drop, setDrop] = useState(false);

  let itemList = [
    { title: "Daily", key: 1 },
    { title: "Monthly", key: 2 },
    { title: "Till Date", key: 3 },
  ];
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[95%] min-h-[80vh] border-2 border-primary-text rounded-lg flex flex-col items-start justify-start p-4 gap-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-5">
            {itemList.map((item, index) => (
              <button
                onClick={() => setSelected(item.key)}
                key={index}
                className={`py-2 px-3 border-dark-green border rounded-xl font-bold ${
                  selected === item.key
                    ? "bg-dark-green text-transparent"
                    : "text-primary-text"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDrop(!drop)}
            className="py-2 px-5 border-dark-green border rounded-xl font-bold text-primary-text flex justify-center items-center gap-1.5"
          >
            All {drop ? <DropUpIcon /> : <DropIcon />}
          </button>
        </div>

        <div className="w-[50%] mr-auto flex items-center justify-center">
          <EarningGraph />
        </div>

        <h1 className="my-3 text-xl font-bold text-primary-text">
          Withdraw History
        </h1>

        <div className="flex justify-between items-center w-full my-2">
          <p className="font-bold text-sm">Available Balance ₹ 10000</p>
          <button className="py-2 px-3 bg-secondary-text text-secondary rounded-xl">
            Withdraw
          </button>
        </div>
        <p className="text-sm font-bold ">
          Last Withdraw <span className="mx-3">₹ 50000</span>
          <span className="text-secondary-text">On 21 JUN 2024</span>
        </p>
        <p className="text-sm font-bold ">
          Next Date you can withdraw <span className="mx-3">1 Jul 2024</span>
        </p>
        <p className="text-sm font-bold ">
          Payment Cycle <span className="mx-3">1 Jul 2024</span>
        </p>
      </div>
    </section>
  );
};

export default Page;
