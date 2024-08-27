"use client";
import React from "react";
import Link from "next/link";
import NavDropDown from "./NavDropDown";

const NavbarLinkCollapse = () => {
  const navLinks = [
    { title: "Cart", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
  ];

  return (
    <div
      className={`absolute top-[130%] left-0 mx-auto min-w-[100%] w-auto rounded md:hidden bg-[#d6d6d6cc] py-5`}
    >
      <div className="flex flex-col justify-between items-center w-auto gap-4">
        <ul className="flex flex-col items-center justify-center gap-4 w-full">
          {navLinks.map((links, index) => (
            <li
              key={index}
              className="w-[150px] py-2 px-4 flex justify-center items-center border-2 border-white"
            >
              <Link href={links.href}>{links.title}</Link>
            </li>
          ))}
        </ul>
        <NavDropDown />
      </div>
    </div>
  );
};

export default NavbarLinkCollapse;
