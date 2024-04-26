"use client";

import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main"); // 'main' or the key of a submenu

  const mainLinks = [
    { name: "公益行動", submenu: "techClimbing" },
    { name: "技術攀登", submenu: "volunteering" },
    { name: "種子計畫", submenu: "seedProgram" },
  ];

  // Example secondary links (you can customize as needed)
  const submenus = {
    techClimbing: ["登山安全", "山林環保"],
    volunteering: ["綜觀技術攀登", "台灣室內岩場", "台灣天然岩場"],
    seedProgram: ["種子計畫內容介紹", "種子訓練課程介紹", "海外移地訓練介紹"],
  };

  return (
    <section className="block md:hidden absolute z-50 w-full">
      <div
        className={`navbar z-50 h-[60px] px-4 relative flex items-center ${
          isOpen ? "bg-white" : " bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="">
            <img
              src={
                isOpen
                  ? "/assets/mobile-blue-logo.svg"
                  : "/assets/mobile-logo.svg"
              }
              alt="logo"
              className="h-full w-full bg-cover"
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoCloseSharp
                className={`text-2xl ${isOpen ? "text-primary" : "text-white"}`}
              />
            ) : (
              <FaBars
                className={`text-2xl ${isOpen ? "text-primary" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="dropdownMenu absolute top-[60px] left-0 bottom-0 h-screen w-full bg-[#F8F9F4] border-t border-t-[#CDCEC7] p-4 z-[1001]">
            {activeMenu === "main" ? (
              <ul className="flex flex-col gap-4 p-4">
                {mainLinks.map((link) => (
                  <li
                    key={link.submenu}
                    onClick={() => setActiveMenu(link.submenu)}
                    className="text-xl text-primary tracking-[0.018em] font-pingfang-heavy w-full flex justify-between items-center"
                  >
                    {link.name}
                    <FaAngleRight className="text-lg" />
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <div className="p-4 flex flex-col gap-4">
                  <button
                    onClick={() => setActiveMenu("main")}
                    className="flex items-center gap-2 w-fit text-xl tracking-[0.018em] font-pingfang-heavy text-primary"
                  >
                    <FaAngleRight className="text-lg rotate-180" />
                    {
                      mainLinks.find((link) => link.submenu === activeMenu)
                        ?.name
                    }
                  </button>
                  <ul className="flex flex-col gap-3">
                    {submenus[activeMenu].map((link, index) => (
                      <li
                        key={index}
                        className="text-base tracking-[0.007em] text-black_800 font-pingfang-medium"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DropdownMenu;
