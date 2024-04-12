"use client";

import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineRight } from "react-icons/ai";

export const SwiperBtns = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // This function updates the button states based on the swiper's current position
    const updateButtonStates = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    updateButtonStates(); // Initial check

    // Listen to swiper events to update button states
    swiper.on("slideChange", updateButtonStates);
    swiper.on("reachBeginning", updateButtonStates);
    swiper.on("reachEnd", updateButtonStates);

    // Cleanup event listeners on component unmount
    return () => {
      swiper.off("slideChange", updateButtonStates);
      swiper.off("reachBeginning", updateButtonStates);
      swiper.off("reachEnd", updateButtonStates);
    };
  }, [swiper]);

  return (
    <div className="swiper-nav-btns flex gap-4 xxl:hidden mt-6">
      <button
        onClick={() => swiper.slidePrev()}
        className={`w-9 h-9 border-2 rounded-full flex justify-center items-center ${
          isBeginning
            ? "border-primary border-opacity-50 hover:bg-primary hover:border-primary hover:border-opacity-50 hover:bg-opacity-50 text-primary hover:text-white hover:text-opacity-50"
            : "border-primary border-opacity-100 text-opacity-100 hover:text-white hover:bg-primary"
        }`}
      >
        <AiOutlineRight className={`font-bold rotate-180`} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={`w-9 h-9 border-2 rounded-full flex justify-center items-center ${
          isEnd
            ? "border-primary border-opacity-50 hover:bg-primary hover:border-primary hover:border-opacity-50 hover:bg-opacity-50 text-opacity-50 text-primary hover:text-white hover:text-opacity-50"
            : "border-primary border-opacity-100 text-opacity-100 hover:text-white hover:bg-primary"
        }`}
      >
        <AiOutlineRight className={`font-bold`} />
      </button>
    </div>
  );
};
