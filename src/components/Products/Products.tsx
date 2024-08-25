"use client";
import React from "react";
import ProdDropDown from "./ProdDropDown";
import ProdCarousel from "./ProdCarousel";

const Products = () => {
  return (
    <div className="min-h-[50vh] bg-green-600">
      <div className="w-full h-full flex flex-col justify-start items-start p-5 gap-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Products</h1>
          <div className="flex justify-center items-center gap-2">
            <ProdDropDown />
            <button className="w-[120px] text-white p-2 rounded-3xl bg-green-900">
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
