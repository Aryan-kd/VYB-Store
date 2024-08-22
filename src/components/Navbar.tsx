import { Logo } from "@/images";
import Link from "next/link";

const navLinks = [
  { title: "Cart", path: "/", icon: "" },
  { title: "About", path: "/about", icon: "" },
  {
    title: "Contact",
    path: "/contact",
    icon: "",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[20]">
      <div className="w-full h-full bg-transparent py-5 px-16">
        <div className="flex justify-around items-center w-full h-full mx-auto rounded-3xl py-1 px-2 bg-glass">
          <Logo />
          <p>Search Box</p>
          <div className="flex justify-between items-start">
            {navLinks.map((elink, index) => (
              <Link
                key={index}
                href={elink.path}
                className="flex justify-around items-center mx-3"
              >
                {elink.icon}
                <p className="m-1">{elink.title}</p>
              </Link>
            ))}
          </div>
          <Link href={"/sign-in"}>Login</Link>
        </div>
      </div>
    </header>
  );
}
