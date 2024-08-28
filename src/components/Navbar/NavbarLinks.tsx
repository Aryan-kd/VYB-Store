"use client";
import React from "react";
import Link from "next/link";
import NavDropDown from "./NavDropDown";
import { useSession } from "next-auth/react";

const NavbarLinks = () => {
  const { data: session } = useSession();

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
          {!session && (
            <li>
              <Link href={"/sign-in"}>Login</Link>
            </li>
          )}
        </ul>

        {session && <NavDropDown />}
      </div>
    </div>
  );
};

export default NavbarLinks;
