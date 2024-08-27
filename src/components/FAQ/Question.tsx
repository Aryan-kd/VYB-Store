"use client";
import React from "react";
import { DropIcon, DropUpIcon } from "@/images";

interface Props {
  question: string;
  answer: string;
}

const Question = (props: Props) => {
  const [toggle, setToggle] = React.useState(false);
  const { question, answer } = props;

  return (
    <div className="md:w-[700px] w-full px-5 border-2 rounded-xl">
      <button
        className="p-3 w-full flex justify-between items-center"
        onClick={() => setToggle(!toggle)}
      >
        <p className="text-start text-md font-medium">{question}</p>
        <span>{toggle ? <DropUpIcon /> : <DropIcon />}</span>
      </button>
      {toggle && (
        <div className="w-[95%] border-t-2 border-black p-3">{answer}</div>
      )}
    </div>
  );
};

export default Question;
