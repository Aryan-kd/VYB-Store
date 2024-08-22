import Image from "next/image";
import logo from "./LOGO.gif";
import hero1 from "./hero1.png";
import hero2 from "./hero2.png";
import hero3 from "./hero3.png";
import hero4 from "./hero4.png";

const Logo = () => {
  return (
    <div className="h-full w-auto">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export { Logo };
