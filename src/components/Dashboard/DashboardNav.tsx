"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();
  let dashboardLink = [
    { href: "/profile", title: "Profile" },
    { href: "/my-store", title: "My Store" },
    { href: "/earning", title: "Earning" },
    { href: "/address", title: "Address" },
  ];
  return (
    <div className="w-full flex md:flex-col flex-row justify-center items-center gap-3 md:border-none border-2 border-primary-text py-2 rounded-xl">
      {dashboardLink.map((link, index) => (
        <div
          key={index}
          className={`md:w-[60%] w-[23%] h-[40px] text-lg rounded-xl ${
            pathname === link.href
              ? "bg-dark-green text-transparent"
              : "bg-transparent text-dark-green"
          }  flex flex-col justify-center items-center font-bold border border-dark-green`}
        >
          <Link className="w-full text-center" href={link.href}>
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardNav;
