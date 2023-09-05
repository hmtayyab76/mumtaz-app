"use client";
import x from "../../../public/assets/icons/xmark-solid.svg";
import bar from "../../../public/assets/icons/bars-solid.svg";

import { React, useState, useEffect } from "react";
import logo from "../../../public/assets/icons/Group 22.png";
import Link from "next/link";
import Image from "next/image";
import up from "../../../public/assets/icons/caret-up-solid.svg";
const NavLinks = ({ setLinkOpen }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setLinkOpen(false);
  };

  return (
    <div className={`text-white text-[17px] font-bold `}>
      <ul
        className={`flex justify-around items-center max-lg:absolute font-medium right-0 max-lg:flex-col max-lg:h-screen max-lg:top-[75px] max-lg:py-5 max-lg:pl-10 max-lg:bg-[#a472fb] max-lg:w-screen max-lg:justify-start max-lg:items-start ${
          hasScrolled ? "text-black  " : "text-white"
        }`}
      >
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 0 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link href="/#whyMumtaz">
            <span onClick={() => handleLinkClick(0)}>Why Mumtaz</span>
          </Link>
        </li>
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 1 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link href="/#how-works">
            <span onClick={() => handleLinkClick(1)}>How it works</span>
          </Link>
        </li>
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 2 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link href="/customer-app">
            <span onClick={() => handleLinkClick(2)}>Customer App</span>
          </Link>
        </li>
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 3 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link href="/worker-app">
            <span onClick={() => handleLinkClick(3)}>Worker App</span>
          </Link>
        </li>
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 4 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link href="/faqs">
            <span onClick={() => handleLinkClick(4)}>FAQs</span>
          </Link>
        </li>
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 5 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link href="/contact-us">
            <span onClick={() => handleLinkClick(5)}>Contact Us</span>
          </Link>
        </li>
        <li
          className={`m-3 hover:text-[#fbc011] ${
            activeLink === 6 ? "text-[#fbc011]" : ""
          }`}
        >
          <Link
            href="/download"
            className="bg-[#626AFF] text-white hover:bg-white border-[#626AFF]  border-[3px]    hover:text-[#626AFF] rounded-full py-2 px-5"
          >
            <span onClick={() => handleLinkClick(6)}>Download</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

function HeaderLinks() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [linkisOpen, setLinkOpen] = useState(false);

  const handleOpenNav = () => {
    setLinkOpen(!linkisOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 z-50" id="top">
      {hasScrolled ? (
        <Link
          href={"#top"}
          className=" fixed bottom-10 right-10 p-2 cursor-pointer  bg-cyan-700 w-[40px] h-[40px] flex justify-end rounded-full "
        >
          <Image src={up} alt="UP"></Image>
        </Link>
      ) : (
        ""
      )}

      <div
        className={`w-full min-h-[77px] px-[6%] py-0 flex items-center flex-wrap justify-between  relative z-10 ${
          hasScrolled ? "bg-white shadow-lg" : "bg-g"
        }`}
      >
        <Link href="/">
          <Image className="w-[150px] h-[50px]" src={logo} alt="Logo" />
        </Link>
        <div className="max-lg:hidden">
          <NavLinks setLinkOpen={setLinkOpen} />
        </div>
        <div
          className={`max-lg:flex hidden absolute right-10 font-bold `}
          onClick={handleOpenNav}
        >
          {linkisOpen ? (
            <Image
              src={x}
              alt="X-mark"
              className="bg-white p-1 rounded-lg w-[30px] h-[30px] cursor-pointer"
            ></Image>
          ) : (
            <Image
              src={bar}
              alt="X-mark"
              className=" bg-white p-1 rounded-lg w-[30px] h-[30px] cursor-pointer"
            ></Image>
          )}
        </div>

        <div className=" max-lg:flex hidden">
          {linkisOpen ? <NavLinks setLinkOpen={setLinkOpen} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default HeaderLinks;
