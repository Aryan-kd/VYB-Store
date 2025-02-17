"use client";
import React from "react";
import ProdDropDown from "./ProdDropDown";
import ProdCarousel from "./ProdCarousel";

const Products = () => {
  return (
    <div className="min-h-[50vh] bg-secondary mt-5">
      <div className="w-full h-full flex flex-col justify-start items-start py-5 md:px-10 px-2 gap-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Products</h1>
          <div className="flex justify-center items-center gap-2">
            <ProdDropDown />
            <button className="w-[120px] text-white p-2 rounded-xl bg-dark-green text-secondary">
              Demo Store
            </button>
          </div>
        </div>
        <ProdCarousel />
      </div>
    </div>
  );
};

export default Products;
