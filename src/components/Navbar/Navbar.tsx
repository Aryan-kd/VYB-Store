"use client";
import React from "react";
import { Logo, Menu, Close } from "@/images";
import NavbarLinks from "./NavbarLinks";
import NavbarLinkCollapse from "./NavbarLinkCollapse";
import NavSearchBar from "./NavSearchBar";
import Link from "next/link";

const Navbar = () => {
  const [collapseNav, setCollapseNav] = React.useState(false);
  return (
    <header className="bg-none p-5 w-full sticky top-0 z-50">
      <nav className="w-11/12 rounded-full mx-auto px-5 py-2 bg-glass">
        <div
          className={`relative w-full mx-auto flex justify-between items-center font-semibold`}
        >
          <div className="w-[60px]">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <NavSearchBar />
          <NavbarLinks />
          <div className="md:hidden block">
            <button
              onClick={() => setCollapseNav(!collapseNav)}
              className="w-full"
            >
              {collapseNav ? <Close /> : <Menu />}
            </button>
          </div>
          {collapseNav && <NavbarLinkCollapse />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
