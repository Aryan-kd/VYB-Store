"use client";
import React from "react";
import { DropIcon, DropUpIcon, ProfileIcon } from "@/images";
import Link from "next/link";
import { signOut } from "next-auth/react";

const NavDropDown = () => {
  const [dropnav, setDropnav] = React.useState(false);

  return (
    <div className="relative flex flex-col items-center w-[150px] h-auto ">
      <button
        onClick={() => setDropnav(!dropnav)}
        className="py-2 px-4 w-full flex justify-around items-center rounded-lg bg-tertiary-text gap-3"
      >
        <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
          <ProfileIcon />
        </div>
        {dropnav ? <DropUpIcon /> : <DropIcon />}
      </button>
      {dropnav && (
        <div className="absolute top-[110%] flex flex-col items-start rounded-lg p-2 w-full bg-tertiary-text">
          <Link href={"/profile"} className="mx-auto">
            Profile
          </Link>
          <button onClick={() => signOut()} className="mx-auto">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
