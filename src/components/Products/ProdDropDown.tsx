"use client";
import { DropIcon, DropUpIcon } from "@/images";
import Link from "next/link";
import React from "react";

const ProdDropDown = () => {
  const [dropprod, setDropprod] = React.useState(false);
  const dropItems = [
    { title: "Product 1", href: "/" },
    { title: "Product 1", href: "/" },
  ];

  return (
    <div className="relative w-[120px] p-2 rounded-lg bg-white flex justify-center items-center">
      <button
        onClick={() => setDropprod(!dropprod)}
        className="flex justify-center items-center gap-1"
      >
        Itinerary
        {dropprod ? <DropUpIcon /> : <DropIcon />}
      </button>
      {dropprod && (
        <div className="absolute w-full top-[110%] bg-white flex flex-col justify-center items-center rounded-lg gap-2 py-2">
          {dropItems.map((prod, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center"
            >
              <Link href={prod.href}>{prod.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProdDropDown;
