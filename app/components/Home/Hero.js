"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import "./hero.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      bgImage: "/assets/Carousel-1.jpg",
      heading: "國內培育，國外訓練",
      subheading: "種子計畫",
    },
    {
      bgImage: "/assets/Carousel-2.jpg",
      heading: "因山結盟，攜手公益",
      subheading: "山盟志工公益",
    },
    {
      bgImage: "/assets/Carousel-3.jpg",
      heading: "挑戰自我，攀向自由",
      subheading: "技術攀登資訊",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="h-[700px] md:h-[812px] relative">
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[700px] md:h-[812px]"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            className="h-full bg-cover flex items-center justify-center px-4"
            key={index}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              display: "flex",
              position: "relative",
            }}
          >
            <div
              className={`text-white max-w-[1212px] w-full mx-auto flex items-center md:items-start justify-between md:justify-start flex-col md:h-auto h-full pb-24 md:pb-0 pt-48 md:pt-0             `}
            >
              <div
                className={`flex flex-col gap-5 ${
                  index === activeSlide ? "animate-slideIn" : ""
                }`}
              >
                <h2
                  data-aos="fade-up"
                  className="text-[32px] md:text-[64px] font-bold font-notoSerif-bold tracking-[0.025em]
                   
                  "
                  style={{ textShadow: "0px 0px 15px #082D5C" }}
                >
                  {slide.heading}
                </h2>
                <h4
                  className="hidden md:block text-xl md:text-[36px] font-pingfang-heavy tracking-[0.020sem]"
                  style={{ textShadow: "0px 0px 10px #082D5C" }}
                >
                  {slide.subheading}
                </h4>
              </div>
              <div
                className="flex flex-col items-center gap-4 mt-10"
                data-aos="fade-up"
              >
                <h4
                  className="block md:hidden text-xl md:text-[36px] font-pingfang-heavy tracking-[0.020sem]"
                  style={{ textShadow: "0px 0px 20px #082D5C" }}
                >
                  {slide.subheading}
                </h4>
                <Link
                  to="seedProject"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="bg-primary cursor-pointer font-pingfang-heavy hover:bg-white border-2 border-primary px-4 md:px-9 py-1 md:py-[10px] rounded-[50px] flex gap-2 items-center text-white hover:text-primary transition-colors duration-300 w-fit text-sm md:text-2xl font-semibold tracking-[0.007em]"
                >
                  了解更多
                  <MdOutlineKeyboardArrowRight className="text-2xl rotate-90 md:rotate-0" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Bulletts  */}
      <div className="absolute top-[506px] md:top-[360px] z-40 right-4 md:right-12">
        <div className="w-[25px] flex flex-col items-center justify-center gap-2">
          <div className="swiper-pagination"></div>
        </div>
      </div>

      {/* Bottom corner Rounded Images  */}
      <img
        src="/assets/home-hero-corner.png"
        alt=""
        className="hidden md:block absolute -bottom-3 w-full z-50 h-[140px]"
      />
      <img
        src="/assets/home-hero-mobile-corner.png"
        alt=""
        className="block md:hidden absolute -bottom-1 w-full z-50 h-[40px]"
      />
    </section>
  );
};

export default Hero;
