"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Logo = "/assets/logo.svg";
const HoverLogo = "/assets/active-logo.svg";

const DropdownMenu = ({ title, links, isNavbarHovering }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className="cursor-pointer h-full w-full"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex items-center justify-center text-white h-full gap-2 group cursor-pointer ${
          isOpen ? "border-b-2 border-orange_brown text-black" : "border-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`font-medium text-xl tracking-[0.018em] font-pingfang-medium group-hover:text-orange_brown ${
            isOpen
              ? "text-orange_brown"
              : isNavbarHovering
              ? "text-primary"
              : ""
          }`}
        >
          {title}
        </span>
        <IoIosArrowDown
          className={`text-lg transform h-full group-hover:text-orange_brown ${
            isOpen
              ? "rotate-180 text-orange_brown"
              : isNavbarHovering
              ? "text-primary"
              : ""
          }`}
        />
      </div>

      <div>
        {isOpen && (
          <ul className="absolute top-[92px] w-full h-[320px] left-0 right-0 bg-[#F8F9F4] border-t border-[#CDCEC7] px-4 py-9 flex justify-end">
            <div className="flex flex-row justify-end gap-5 max-w-[1212px] mx-auto w-full">
              <div className="flex flex-col gap-3 w-[170px]">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={`text-primary tracking-[0.005em] font-pingfang-heavy ${
                      isNavbarHovering ? "text-black" : "hover:text-orange-500"
                    } ${index === activeIndex ? "text-red-500" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {link}
                  </li>
                ))}
              </div>

              <div className="flex gap-5">
                <div className="bg-[url('/assets/card-2.png')] bg-cover px-4 text-center bg-right bg-no-repeat w-[240px] h-[240px] flex justify-center items-center gap-2 flex-col">
                  <h2
                    className="text-[22px] md:text-[28px] tracking-[0.007em] font-pingfang-medium text-white"
                    style={{ textShadow: "0px 0px 30px ##535251" }}
                  >
                    台灣室內岩場
                  </h2>
                  <div
                    className="w-[32px] h-[2px] bg-white"
                    style={{ boxShadow: "0px 0px 30px ##535251" }}
                  ></div>
                  <p
                    className="text-xs md:text-base  tracking-[0.007em] font-pingfang-medium text-white"
                    style={{ textShadow: "0px 0px 30px ##535251" }}
                  >
                    名稱、地址、電話、營業時間等資訊
                  </p>
                </div>

                <div className="bg-[url('/assets/card-3.png')] bg-cover px-4 text-center bg-right bg-no-repeat w-[240px] h-[240px] flex justify-center items-center gap-2 flex-col">
                  <h2
                    className="text-[22px] md:text-[28px] tracking-[0.007em] font-pingfang-medium text-white"
                    style={{ textShadow: "0px 0px 30px ##535251" }}
                  >
                    台灣天然岩場
                  </h2>
                  <div
                    className="w-[32px] h-[2px] bg-white"
                    style={{ boxShadow: "0px 0px 30px ##535251" }}
                  ></div>
                  <p
                    className="text-xs md:text-base tracking-[0.007em] font-pingfang-medium text-white"
                    style={{ textShadow: "0px 0px 30px ##535251" }}
                  >
                    岩場地點及地圖介紹
                  </p>
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const menuItems = [
    {
      title: "公益志工",
      links: ["技術攀登 ", "綜觀技術攀登", "台灣室內岩場", "台灣天然岩場"],
    },
    {
      title: "技術攀登",
      links: ["技術攀登 ", "綜觀技術攀登", "台灣室內岩場", "台灣天然岩場"],
    },
    {
      title: "種子計畫",
      links: ["技術攀登 ", "綜觀技術攀登", "台灣室內岩場", "台灣天然岩場"],
    },
  ];

  return (
    <div className="hidden md:block absolute z-50 w-full">
      <section
        className={`px-4 h-[92px] top-0 flex relative w-full items-center gap-2 transition-colors duration-300  ${
          isHovering ? "bg-white" : ""
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-center justify-between max-w-[1212px] h-full mx-auto w-full">
          <div>
            <Link href="/">
              <img
                src={isHovering ? HoverLogo : Logo}
                alt="logo"
                className="transition-all duration-300"
              />
            </Link>
          </div>
          <div className="flex items-center gap-8 h-full">
            {menuItems.map((item, index) => (
              <DropdownMenu
                key={index}
                title={item.title}
                links={item.links}
                isNavbarHovering={isHovering}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
