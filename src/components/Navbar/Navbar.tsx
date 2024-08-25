"use client";
import React from "react";
import { Logo, Menu, Close } from "@/images";
import NavbarLinks from "./NavbarLinks";
import NavbarLinkCollapse from "./NavbarLinkCollapse";
import NavSearchBar from "./NavSearchBar";

const Navbar = () => {
  const [collapseNav, setCollapseNav] = React.useState(false);
  return (
    <header className="bg-transparent p-5 w-full sticky top-0 z-50">
      <nav className="w-11/12 rounded-full shadow mx-auto px-5 border-2">
        <div
          className={`relative w-full shadow mx-auto flex justify-between items-center bg-transparent font-semibold`}
        >
          <div className="">
            <Logo />
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
