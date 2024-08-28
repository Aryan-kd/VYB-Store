"use client";
import React from "react";
import { DropIcon, DropUpIcon, ProfileIcon } from "@/images";
import Link from "next/link";

const NavDropDown = () => {
  const [dropnav, setDropnav] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const dropItems = [
    { title: "Profile", href: "/profile" },
    { title: "Login", href: "/sign-in" },
  ];
  return (
    <div className="relative flex flex-col items-center w-[150px] h-auto ">
      <button
        onClick={() => setDropnav(!dropnav)}
        className="py-2 px-4 flex justify-center items-center rounded-lg border bg-tertiary-text gap-3"
      >
        {isLoggedIn ? (
          <div className="w-[15px] h-[15px] overflow-hidden rounded-full">
            <ProfileIcon />
          </div>
        ) : (
          "Sign Up"
        )}
        {dropnav ? <DropUpIcon /> : <DropIcon />}
      </button>
      {dropnav && (
        <div className="absolute top-[110%] flex flex-col items-start rounded-lg p-2 w-full bg-tertiary-text">
          {dropItems.map((drop, index) => (
            <Link href={drop.href} key={index} className="mx-auto">
              {drop.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
