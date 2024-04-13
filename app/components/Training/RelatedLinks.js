import Link from "next/link";
import React from "react";

const RelatedLinks = () => {
  return (
    <div className="relative mt-[40rem] md:mt-64 z-50">
      <section className="px-4  mx-auto left-0 right-0  absolute -bottom-20 md-bottom-10 top-auto">
        <div className="relative bg-[#FFFFFC] border-2 border-gray_green rounded-xl py-5 md:py-10 px-4 md:px-[69px] max-w-[1185px] mx-auto w-full">
          <div className="absolute left-0 right-0 mx-auto -top-5 text-center w-[144px] h-[43px] bg-white tracking-[0.025em] font-notoSerif-bold text-2xl  text-green_orange">
            相關連結
          </div>

          <div className="flex gap-10 flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-5 max-w-[870px] w-full">
              <div className="flex flex-col">
                <h1 className="text-primary text-xl tracking-[0.025em] font-notoSerif-semiBold z-50">
                  攀岩
                </h1>
                <div className="h-[12px] -mt-3 bg-[#EEE2D6] w-[42px]"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-10">
                <div className="max-w-[533px] w-full">
                  <div className="flex items-center gap-2 mb-2 pl-3">
                    <div className="w-[6px] h-[6px] rounded-full bg-black_700"></div>
                    <h2 className="text-base tracking-[0.007em] font-pingfang-regular text-black_700">
                      攀岩的類別
                    </h2>
                  </div>

                  <Link
                    href="https://www.sportsv.net/articles/73041"
                    target="_blank"
                    className="text-orange_brown underline block text-base tracking-[0.007em] font-pingfang-regular mb-1 hover:text-black_700 transition-colors duration-300"
                  >
                    現代攀岩種類簡介-讓想體驗攀岩的你，對攀岩有簡單的認識
                  </Link>

                  <Link
                    href="https://www.womenshealthmag.com/tw/fitness/work-outs/g35691940/climbing/"
                    target="_blank"
                    className="text-orange_brown underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300 mb-7"
                  >
                    你體驗過「攀岩」了嗎？其實「攀岩」有分三大類型，抱石只是其中之一
                  </Link>

                  <div className="flex items-center gap-2 mb-2 pl-3">
                    <div className="w-[6px] h-[6px] rounded-full bg-black_700"></div>
                    <h2 className="text-base tracking-[0.007em] font-pingfang-regular text-black_700">
                      攀岩動作技巧
                    </h2>
                  </div>

                  <Link
                    href="https://www.rei.com/learn/expert-advice/climbing-techniques.html"
                    target="_blank"
                    className="text-orange_brown underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300"
                  >
                    攀岩動作技巧 Climbing Techniques and Moves
                  </Link>
                </div>

                <div className="max-w-[275px] w-full">
                  <div className="flex items-center gap-2 mb-2 pl-3">
                    <div className="w-[6px] h-[6px] rounded-full bg-black_700"></div>
                    <h2 className="text-base tracking-[0.007em] font-pingfang-regular text-black_700">
                      攀岩裝備
                    </h2>
                  </div>

                  <Link
                    href="https://www.adventuretaiwan.com/how-to-wear-climbing-harness/"
                    target="_blank"
                    className="text-orange_brown mb-1 underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300"
                  >
                    攀岩新手必學-攀岩吊帶的穿著與挑選
                  </Link>

                  <Link
                    href="https://www.adventuretaiwan.com/top-roping-atc-grigri/"
                    target="_blank"
                    className="text-orange_brown mb-1 underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300"
                  >
                    攀岩新手必學 -認識確保器
                  </Link>

                  <Link
                    href="https://www.adventuretaiwan.com/climbing-gears-safety-standards/"
                    target="_blank"
                    className="text-orange_brown underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300 mb-7"
                  >
                    攀岩新手必學 – 裝備的安全認證
                  </Link>

                  <div className="flex items-center gap-2 mb-2 pl-3">
                    <div className="w-[6px] h-[6px] rounded-full bg-black_700"></div>
                    <h2 className="text-base tracking-[0.007em] font-pingfang-regular text-black_700">
                      攀岩繩結
                    </h2>
                  </div>

                  <Link
                    href="https://www.rei.com/learn/expert-advice/climbing-techniques.html"
                    target="_blank"
                    className="text-orange_brown underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300"
                  >
                    攀岩新手必學-簡單打出 雙八字結
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col mb-5">
                <h1 className="text-primary text-xl tracking-[0.025em] font-notoSerif-semiBold z-50">
                  台灣攀岩場
                </h1>
                <div className="h-[12px] -mt-3 bg-[#EEE2D6] w-[103px]"></div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 pl-3">
                  <div className="w-[6px] h-[6px] rounded-full bg-black_700"></div>
                  <h2 className="text-base tracking-[0.007em] font-pingfang-regular text-black_700">
                    戶外
                  </h2>
                </div>

                <Link
                  href="https://longdong.climbio.org/#/"
                  target="_blank"
                  className="text-orange_brown underline block text-base tracking-[0.007em] font-pingfang-regular hover:text-black_700 transition-colors duration-300"
                >
                  龍洞攀岩資料庫
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedLinks;
