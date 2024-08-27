"use client";
import React, { useEffect, useRef, useState } from "react";
import WorkBanner from "./WorkBanner";
import WorkList from "./WorkList";

const HowItWork = () => {
  const [sticky, setSticky] = useState(false);
  // Sticky Function
  let sidebar: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSticky(entry.isIntersecting);
    });
    observer.observe(sidebar.current);
  }, []);

  return (
    <section className="min-h-[50vh] w-full py-5">
      <div className="relative h-full w-full flex md:flex-row flex-col justify-start items-start gap-5 md:gap-0">
        <div className=" md:w-[40vw] w-[80vw] mx-auto flex flex-col justify-start items-start sidebar">
          <div
            className={`md:mb-36 sidebar-container w-[80vw] md:w-[40vw] transition-all ${
              sticky ? "md:fixed md:top-[20vh]" : ""
            }`}
          >
            <WorkBanner />
          </div>
          <div
            ref={sidebar}
            className="absolute bottom-[65vh] md:flex hidden md:h-[300vh] w-[30vw]"
          ></div>
        </div>
        <div className="md:w-[50vw] w-[90vw] flex justify-center items-center">
          <WorkList />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
