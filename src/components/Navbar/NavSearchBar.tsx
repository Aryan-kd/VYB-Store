"use client";
import React from "react";
import { SearchBtn } from "@/images";

const NavSearchBar = () => {
  const [category, setCategory] = React.useState(true);

  return (
    <div className="md:w-[40%] w-[50%] flex justify-center items-center gap-1 rounded-xl bg-transparent">
      <div className="">
        <SearchBtn />
      </div>
      <input
        type="text"
        className="w-[60%] outline-none h-[6vh] bg-transparent"
        placeholder="Search......"
      />

      <div className="flex justify-center items-center gap-2 right-3">
        <button
          onClick={() => setCategory(true)}
          className={`text-sm underline ${category ? " text-tertiary" : ""}`}
        >
          Creator
        </button>
        <button
          onClick={() => setCategory(false)}
          className={`text-sm lg:block hidden underline ${
            category ? "" : " text-tertiary"
          }`}
        >
          Product
        </button>
      </div>
    </div>
  );
};

export default NavSearchBar;
