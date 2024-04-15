import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CharityVolunteers = () => {
  return (
    <div className='relative bg-[url("/assets/charity-mobile-bg.png")] md:bg-[url("/assets/charity-bg.jpg")] flex md:items-center bg-no-repeat w-full bg-cover h-[700px] mt-20 md:mt-40 bg-fixed'>
      {/* Top Rounded Border  */}
      <img
        src="/assets/charity-t-border.png"
        alt="Rounded Border"
        className="hidden md:block absolute top-0 w-full h-[148px]"
      />
      <img
        src="/assets/charity-t-border-mobile.png"
        alt="Rounded Border"
        className="block md:hidden absolute top-0 w-full h-[42px]"
      />

      {/* Center Text Box  */}
      <div className="px-4 w-full pt-32 md:pt-0">
        <div className="max-w-[1150px] mx-auto w-full">
          <div className="flex flex-col pl-6">
            <h1 className="font-notoSerif-bold  text-primary text-[32px] z-50 md:text-[52px] tracking-[0.012em]">
              公益志工
            </h1>
            <div
              src="/assets/text-border.svg"
              alt="text-border"
              className="h-[20px] md:h-[30px] bg-[#EEE2D6] -mt-4 md:-mt-7 ml-4 w-[125px] md:w-[198px]"
            ></div>
          </div>
          <p className="text-orange_brown text-base md:text-[28px] font-pingfang-regular tracking-[0.007em] my-2 md:my-4 pl-6">
            因山結盟，攜手公益
          </p>
          <p className="text-primary text-sm md:text-2xl tracking-[0.024em] md:leading-[38px] font-pingfang-medium max-w-[700px] w-full">
            一起加入志工團隊，一起關懷山林環境、參與山林保育志工活動。為所愛的環境和土地貢獻一份心力，共同守護我們美麗的島嶼。
          </p>

          <Link
            href="/charity-volunteers"
            className="bg-orange_brown hover:bg-white border-2 border-orange_brown px-5 md:px-6 py-2 md:py-3 flex mt-10 gap-2 items-center text-white hover:text-orange_brown transition-colors duration-300 w-fit text-sm md:text-2xl font-pingfang-heavy tracking-[0.006em]"
          >
            了解公益志工回饋計畫內容
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Bottom Rounded Border  */}
      <img
        src="/assets/charity-b-border.png"
        alt="Rounded Border"
        className="hidden md:block absolute bottom-0 w-full h-[148px]"
      />

      <img
        src="/assets/charity-b-border-mobile.png"
        alt="Rounded Border"
        className="block md:hidden absolute bottom-0 w-full h-[42px]"
      />
    </div>
  );
};

export default CharityVolunteers;
