"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Logo = "/assets/logo.svg";
const HoverLogo = "/assets/active-logo.svg";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const menuItems = [
    {
      title: "公益志工",
      links: ["登山安全 ", "山林環保"],
      content: [
        {
          image: "/assets/card1.png",
          text: "01号盒子",
          subtext: "潜台词01"
        },
        {
          image: "/assets/card2.png",
          text: "02号盒子",
          subtext: "潜台词02"
        },
      ],
    },
    {
      title: "技術攀登",
      links: ["綜觀技術攀登 ", "台灣室內岩場", "台灣天然岩場"],
      content: [
        {
          image: "/assets/card3.png",
          text: "03号盒子",
          subtext: "潜台词03"
        },
        {
          image: "/assets/card1.png",
          text: "04号盒子",
          subtext: "潜台词04"
        },
      ],
    },
    {
      title: "種子計畫",
      links: ["種子計畫內容介紹 ", "綜觀技術攀登", "台灣室內岩場"],
      content: [
        {
          image: "/assets/card3.png",
          text: "05号盒子",
          subtext: "潜台词05"
        },
        {
          image: "/assets/card1.png",
          text: "06号盒子",
          subtext: "潜台词06"
        },
      ],
    },
  ];

  return (
    <div className="hidden md:block absolute z-50 w-full">
      <section
        className={`px-4 h-[92px] top-0 flex relative w-full items-center gap-2 transition-colors duration-300  ${isHovering ? "bg-white" : ""
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
                content={item.content} // Pass content to the DropdownMenu component
                isNavbarHovering={isHovering}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const DropdownMenu = ({ title, links, content, isNavbarHovering }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className="cursor-pointer h-full w-full"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex items-center justify-center text-white h-full gap-2 group cursor-pointer ${isOpen ? "border-b-2 border-orange_brown text-black" : "border-0"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`font-medium text-xl tracking-[0.018em] font-pingfang-medium group-hover:text-orange_brown ${isOpen
            ? "text-orange_brown"
            : isNavbarHovering
              ? "text-primary"
              : ""
            }`}
        >
          {title}
        </span>
        <IoIosArrowDown
          className={`text-lg transform h-full group-hover:text-orange_brown ${isOpen
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
            <div className="flex flex-row justify-end gap-3 max-w-[1212px] mx-auto w-full">
              <li className="text-primary tracking-[0.005em] font-pingfang-heavy flex flex-col gap-3 w-[170px]">
                {links.map((link, index) => (
                  <a key={index} href={`/${link}`}>
                    {link}
                  </a>
                ))}
              </li>

              {/* Second list item for image box */}
              <li className="flex flex-col gap-1 items-center justify-center w-[240px] h-[240px] relative">
                <img src={content[0].image} alt="Image" className="w-full h-full absolute top-0 bottom-0 left-0 right-0" />
                <div className="z-40 flex justify-center items-center gap-2 flex-col">
                  <h2 className="ext-[22px] md:text-[28px] tracking-[0.007em] font-pingfang-medium text-white" style={{ textShadow: "0px 0px 30px ##535251" }}>{content[0].text}</h2>
                  <div
                    className="w-[32px] h-[2px] bg-white"
                    style={{ boxShadow: "0px 0px 30px ##535251" }}
                  ></div>
                  <span className="text-xs md:text-base tracking-[0.007em] font-pingfang-medium text-white">{content[0].subtext}</span>
                </div>

              </li>

              {/* Third list item for text box with image */}
              <li className="flex flex-col gap-1 items-center justify-center w-[240px] h-[240px] relative">
                <img src={content[1].image} alt="Image" className="w-full h-full absolute top-0 bottom-0 left-0 right-0" />
                <div className="z-40 flex justify-center items-center gap-2 flex-col">

                  <h2 className="ext-[22px] md:text-[28px] tracking-[0.007em] font-pingfang-medium text-white" style={{ textShadow: "0px 0px 30px ##535251" }}>{content[1].text}</h2>
                  <div
                    className="w-[32px] h-[2px] bg-white"
                    style={{ boxShadow: "0px 0px 30px ##535251" }}
                  ></div>
                  <span className="text-xs md:text-base tracking-[0.007em] font-pingfang-medium text-white">{content[1].subtext}</span>
                </div>
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
