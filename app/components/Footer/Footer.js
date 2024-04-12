import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="block md:hidden relative h-[700px] w-full -mb-72">
        <img
          src="/assets/mobile-footer-bg.jpg"
          alt=""
          className="h-full w-full"
        />

        <div>
          <img
            src="/assets/footer-top-blurred.png"
            alt=""
            className=" absolute top-0 w-full h-[67px]"
          />
        </div>
      </div>
      <div className="relative md:bg-[url('/assets/bg-footer.jpg')] bg-[#ffffff] bg-opacity-90 md:bg-transparent md:bg-opacity-0 bg-no-repeat bg-cover h-auto md:h-[594px] w-full flex items-end">
        <div>
          <img
            src="/assets/footer-top-blurred.png"
            alt=""
            className=" absolute top-0 w-full h-[67px]"
          />
        </div>

        <div className="relative pb-[64px] pt-[30px] md:pt-[14px] md:bg-white  md:bg-opacity-90 w-full">
          <div className=" absolute -top-[40px] md:-top-[148px] w-full h-[42px] md:h-[148px]">
            <img
              src="/assets/footer-border.png"
              alt=""
              className="hidden md:block w-full h-full"
            />
            <img
              src="/assets/mobile-footer-border.png"
              alt=""
              className="block md:hidden w-full h-full"
            />
          </div>

          <div className="max-w-[1212px] mx-auto w-full flex flex-col md:flex-row justify-between gap-10 px-8 md:px-4">
            <div className="flex flex-col gap-2 items-center">
              <img src="/assets/footer-logo.svg" alt="footer-logo" />
              <div className="hidden md:flex flex-col items-center text-center">
                <span className="text-[#65686C] text-sm font-pingfang-regular tracking-[0.006em]">
                  © 2023 山盟公益協會
                </span>
                <span className="text-[#65686C] text-sm font-pingfang-regular tracking-[0.006em]">
                  All rights reserved.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
              {/* List 01  */}
              <ul className="flex flex-col gap-2">
                <li className="text-primary font-pingfang-heavy text-lg tracking-[0.007em]">
                  技術攀登
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    綜觀技術攀登
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    台灣室內岩場
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    台灣天然岩場
                  </Link>
                </li>
              </ul>

              {/* List 02  */}
              <ul className="flex flex-col gap-2">
                <li className="text-primary font-pingfang-heavy text-lg tracking-[0.007em]">
                  公益志工
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    志工管理制度辦法
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    志工服務項目
                  </Link>
                </li>
              </ul>

              {/* List 03  */}
              <ul className="flex flex-col gap-2">
                <li className="text-primary font-pingfang-heavy text-lg tracking-[0.007em]">
                  種子計畫{" "}
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    種子計畫內容介紹
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    種子訓練課程介紹
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    海外移地訓練介紹
                  </Link>
                </li>
              </ul>

              {/* List 04  */}
              <ul className="flex flex-col gap-2">
                <li className="text-primary font-pingfang-heavy text-lg tracking-[0.007em]">
                  聯絡我們
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    支持我們
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    協會現狀
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em]"
                  >
                    登入會員
                  </Link>
                </li>
              </ul>

              {/* List 05  */}
              <ul className="flex flex-col gap-2">
                <li className="text-primary font-pingfang-heavy text-lg tracking-[0.007em]">
                  追蹤我們
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em] flex items-center gap-1"
                  >
                    <img src="/assets/line.svg" alt="line" />
                    Line
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em] flex items-center gap-1"
                  >
                    <img src="/assets/facebook.svg" alt="facebook" />
                    Facebook
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-black_800 text-[15px] font-pingfang-regular tracking-[0.004em] flex items-center gap-1"
                  >
                    <img src="/assets/Instagram.svg" alt="Instagram" />
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex md:hidden flex-col gap-2 items-center">
              <span className="text-[#65686C] text-sm font-pingfang-regular tracking-[0.006em]">
                © 2023 山盟公益協會
              </span>
              <span className="text-[#65686C] text-sm font-pingfang-regular tracking-[0.006em]">
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
