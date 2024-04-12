import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperBtns } from "../SwiperBtns";

const TechnicalClimbing = () => {
  return (
    <section className="px-4 py-20 md:py-40 relative">
      <div className="max-w-[952px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <div className="flex flex-col justify-center items-center px-4 md:px-7">
            <h1 className="font-notoSerif-bold text-primary text-[32px] font-bold z-50 md:text-[52px] tracking-[0.012em]">
              技術攀登
            </h1>
            <div className="h-[20px] bg-[#EEE2D6] md:h-[30px] -mt-4 md:-mt-7 ml-3 md:ml-7 w-[120px] md:w-[198px]"></div>
          </div>

          <p className="text-2xl text-orange_brown tracking-[0.007em] font-pingfang-regular">
            挑戰自我，攀向自由
          </p>
          <p className="text-sm md:text-[28px] md:leading-[40px] tracking-[0.025em] max-w-[843px] mx-auto w-full text-center font-pingfang-medium">
            整合攀岩、攀冰、以及高山冰雪岩綜合地形攀登。
            培養專業技術與安全知識，探索攀岩世界的樂趣，挑戰自我，攀向自由。
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          modules={[Navigation, Pagination, A11y]}
        >
          {/* Slide 01  */}
          <SwiperSlide className="card card-one min-w-[240px] md:min-w-[300px] max-w-[240px] md:max-w-[300px] w-full min-h-[240px] md:min-h-[300px] bg-cover bg-center bg-no-repeat">
            <div class="card-overlay absolute top-0 left-0 right-0 bottom-0"></div>
            <div className="card-content w-full h-[240px] md:h-[300px] flex justify-center items-center flex-col relative">
              <h2
                className="text-[22px] md:text-[28px] tracking-[0.012em] text-white font-pingfang-medium"
                style={{ textShadow: "0px 0px 30px ##535251" }}
              >
                綜觀技術攀登
              </h2>
              <div className="hover-content flex justify-center items-center flex-col gap-3 absolute bottom-auto top-[145px] md:top-[180px] max-w-[176px] text-center w-full">
                <div
                  className="w-[32px] h-[2px] bg-white"
                  style={{ boxShadow: "0px 0px 30px ##535251" }}
                ></div>
                <p
                  className="text-xs md:text-base font-pingfang-medium text-white tracking-[0.006em]"
                  style={{ textShadow: "0px 0px 30px ##535251" }}
                >
                  岩場地點及地圖介紹
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 02  */}
          <SwiperSlide className="card card-two min-w-[240px] md:min-w-[300px] max-w-[240px] md:max-w-[300px] w-full min-h-[240px] md:min-h-[300px] bg-cover bg-center bg-no-repeat">
            <div class="card-overlay absolute top-0 left-0 right-0 bottom-0"></div>
            <div className="card-content w-full h-[240px] md:h-[300px] flex justify-center items-center flex-col relative">
              <h2
                className="text-[22px] md:text-[28px] tracking-[0.012em] text-white font-pingfang-medium"
                style={{ textShadow: "0px 0px 30px ##535251" }}
              >
                台灣室內岩場
              </h2>
              <div className="hover-content flex justify-center items-center flex-col gap-3 absolute bottom-auto top-[145px] md:top-[180px] max-w-[176px] text-center w-full">
                <div
                  className="w-[32px] h-[2px] bg-white"
                  style={{ boxShadow: "0px 0px 30px ##535251" }}
                ></div>
                <p
                  className="text-xs md:text-base text-white tracking-[0.006em] font-pingfang-medium"
                  style={{ textShadow: "0px 0px 30px ##535251" }}
                >
                  名稱、地址、電話、營業時間等資訊
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 03  */}
          <SwiperSlide className="card card-three min-w-[240px] md:min-w-[300px] max-w-[240px] md:max-w-[300px] w-full min-h-[240px] md:min-h-[300px] bg-cover bg-center bg-no-repeat">
            <div class="card-overlay absolute top-0 left-0 right-0 bottom-0"></div>
            <div className="card-content w-full h-[240px] md:h-[300px] flex justify-center items-center flex-col relative">
              <h2
                className="text-[22px] md:text-[28px] tracking-[0.012em] text-white font-pingfang-medium"
                style={{ textShadow: "0px 0px 30px ##535251" }}
              >
                台灣天然岩場
              </h2>
              <div className="hover-content flex justify-center items-center flex-col gap-3 absolute bottom-auto top-[145px] md:top-[180px] max-w-[176px] text-center w-full">
                <div
                  className="w-[32px] h-[2px] bg-white"
                  style={{ boxShadow: "0px 0px 30px ##535251" }}
                ></div>
                <p
                  className="text-xs md:text-base font-pingfang-medium text-white tracking-[0.006em]"
                  style={{ textShadow: "0px 0px 30px ##535251" }}
                >
                  岩場地點及地圖介紹
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperBtns />
        </Swiper>

        <img
          src="/assets/technical-climbing-vector.png"
          alt="technical-climbing-vector"
          className="absolute top-0 bottom-0 my-auto left-0"
        />
      </div>
    </section>
  );
};

export default TechnicalClimbing;
