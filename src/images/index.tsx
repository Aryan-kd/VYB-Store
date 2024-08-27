"use client";

import Image from "next/image";
import logo from "../../public/LOGO.gif";
import hero1 from "../../public/hero1.png";
import hero2 from "../../public/hero2.png";
import hero3 from "../../public/hero3.png";
import hero4 from "../../public/hero4.png";
import heroGif from "../../public/1stGIF.gif";
import work1 from "../../public/work1.gif";
import work2 from "../../public/work2.gif";
import work3 from "../../public/work3.gif";
import work4 from "../../public/work4.gif";
import menu_burger from "../../public/menu-burger.svg";
import close_btn from "../../public/close.svg";
import search_btn from "../../public/search.svg";
import dropicon from "../../public/dropdown_icon.svg";
import dropupicon from "../../public/dropup_icon.svg";
import leftarrow from "../../public/leftarrow.svg";
import rightarrow from "../../public/rightarrow.svg";
import productgif from "../../public/2ndGIF.gif";
import authimage from "../../public/authimage.png";

const Logo = () => {
  return (
    <Image
      priority={true}
      unoptimized={true}
      src={logo}
      alt="logo"
      style={{
        width: "auto",
        height: "auto",
      }}
    />
  );
};

const HeroMainImage = () => {
  return <Image priority={true} unoptimized={true} src={heroGif} alt="gif" />;
};

const HeroImage1 = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image
        priority={true}
        src={hero1}
        alt="hero1"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </div>
  );
};
const HeroImage2 = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image
        priority={true}
        src={hero2}
        alt="hero2"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </div>
  );
};
const HeroImage3 = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        priority={true}
        src={hero3}
        alt="hero3"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </div>
  );
};
const HeroImage4 = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        priority={true}
        src={hero4}
        alt="hero4"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={menu_burger}
        alt="menu"
        style={{
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

const Close = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={close_btn}
        alt="close"
        style={{
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

const SearchBtn = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={search_btn}
        alt="serch_icon"
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    </div>
  );
};

const DropIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={dropicon} alt="dropicon" />
    </div>
  );
};

const DropUpIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={dropupicon} alt="dropupicon" />
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={leftarrow}
        alt="leftarrow"
        style={{
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

const RightArrow = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={rightarrow}
        alt="rightarrow"
        style={{
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

const ProductGIF = () => {
  return <Image src={productgif} alt="productgif" />;
};

const WorkImage1 = () => {
  return (
    <Image
      src={work1}
      alt="workimage1"
      style={{
        width: "250.31px",
        height: "534px",
      }}
    />
  );
};

const WorkImage2 = () => {
  return (
    <Image
      src={work2}
      alt="workimage1"
      style={{
        width: "250.31px",
        height: "534px",
      }}
    />
  );
};

const WorkImage3 = () => {
  return (
    <Image
      src={work3}
      alt="workimage1"
      style={{
        width: "250.31px",
        height: "534px",
      }}
    />
  );
};

const WorkImage4 = () => {
  return (
    <Image
      src={work4}
      alt="workimage1"
      style={{
        width: "250.31px",
        height: "534px",
      }}
    />
  );
};

const AuthImage = () => {
  return (
    <Image
      src={authimage}
      alt="image"
      style={{
        width: "auto",
        height: "auto",
      }}
    />
  );
};

export {
  Logo,
  HeroMainImage,
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
  Menu,
  Close,
  SearchBtn,
  DropIcon,
  DropUpIcon,
  LeftArrow,
  RightArrow,
  ProductGIF,
  WorkImage1,
  WorkImage2,
  WorkImage3,
  WorkImage4,
  AuthImage,
};
