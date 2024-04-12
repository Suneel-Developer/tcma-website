import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SeedProject = () => {
  return (
    <section className="lg:px-3 relative -mb-40 md:-mb-14 z-50" id="seedProject">
      <div className="max-w-[1185px] mx-auto">
        <div className="flex justify-center px-4 lg:px-0 gap-5 lg:gap-0 lg:justify-end flex-col items-center w-full lg:items-end lg:pr-32 mb-10">
          <div className="flex flex-col lg:justify-center items-center lg:mb-5">
            <h1 className="font-notoSerif-bold text-primary text-[32px] z-50 md:text-[52px] tracking-[0.012em]">
              種子計畫
            </h1>
            <div className="h-[20px] bg-[#EEE2D6] md:h-[30px] -mt-4 md:-mt-7 ml-3 md:ml-7 w-[120px] md:w-[198px]"></div>
          </div>

          <p className="text-orange_brown text-base md:text-[28px] tracking-[0.007em] font-pingfang-regular">
            國內培育，國外訓練
          </p>

          <p className="block lg:hidden text-center text-primary text-sm md:text-2xl font-pingfang-medium tracking-[0.024em]">
            透過培訓和資源支持，栽培年輕的攀登愛好者，在國內外發展才華和熱情，讓更多的人有機會接觸並學習技術攀登。
          </p>
          <Link
            href="#"
            className="lg:hidden bg-orange_brown hover:bg-white mt-2 border-2 border-orange_brown px-5 md:px-6 py-2 md:py-3 flex gap-2 items-center text-white hover:text-orange_brown transition-colors duration-300 w-fit text-sm md:text-2xl tracking-[0.006em] font-pingfang-heavy"
          >
            加入種子培育計畫
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </Link>
        </div>

        {/* Box  */}
        <div className="bg-[#FFFFFC] border-2 border-gray_green rounded-xl py-10 px-[69px] hidden lg:flex justify-start flex-col items-end">
          <div className="max-w-[477px] w-full flex flex-col items-center">
            <p className="text-primary text-2xl leading-[38.4px] font-pingfang-medium tracking-[0.024em]">
              透過培訓和資源支持，栽培年輕的攀登愛好者，在國內外發展才華和熱情，讓更多的人有機會接觸並學習技術攀登。
            </p>
            <Link
              href="#"
              className="bg-orange_brown hover:bg-white border-2 border-orange_brown px-6 py-3 flex mt-10 gap-2 items-center text-white hover:text-orange_brown transition-colors duration-300 w-fit text-sm md:text-2xl  tracking-[0.006em] font-pingfang-heavy"
            >
              加入種子培育計畫
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* IMage   */}
      <img
        src="/assets/seed-project.png"
        alt=""
        className="lg:absolute w-full lg:w-[500px] xlg:w-[600px] lgx:w-[750px] top-0 left-0 bottom-0 my-auto z-50"
      />
    </section>
  );
};

export default SeedProject;
