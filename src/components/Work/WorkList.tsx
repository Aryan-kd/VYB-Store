"use client";
import React from "react";

const WorkList = () => {
  let listItems = [
    { title: "A" },
    { title: "B" },
    { title: "C" },
    { title: "D" },
    { title: "E" },
    { title: "F" },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[80%]">
      {listItems.map((list, index) => (
        <div
          key={index}
          className="h-[40vh] w-full flex items-center justify-center border-2 border-black"
        >
          Part 2 - {list.title}
        </div>
      ))}
    </div>
  );
};

export default WorkList;
