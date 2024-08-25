"use client";
import React from "react";
import Link from "next/link";
import NavDropDown from "./NavDropDown";

const NavbarLinks = () => {
  const navLinks = [
    { title: "Cart", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
  ];

  return (
    <div className="w-auto hidden md:flex items-center justify-around">
      <div className="flex justify-between items-center w-auto gap-4">
        <ul className="flex items-center justify-center gap-10">
          {navLinks.map((links, index) => (
            <li key={index}>
              <Link href={links.href}>{links.title}</Link>
            </li>
          ))}
        </ul>
        <NavDropDown />
      </div>
    </div>
  );
};

export default NavbarLinks;
