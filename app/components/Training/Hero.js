import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/a-hero-mobile.jpg')] md:bg-[url('/assets/a-hero.jpg')] bg-no-repeat bg-center bg-cover w-full h-[712px] md:h-[812px] relative mb-10">
        <div className="px-4 pt-64">
        <div className="relative max-w-[1212px] mx-auto w-full">
          <h1
            className="text-white text-[32px] md:text-[64px] leading-[45.98px] md:leading-[91.97px] tracking-[0.012em] font-notoSerif-bold mb-5 text-center md:text-left"
            style={{ textShadow: "0px 0px 20px #082D5C" }}
          >
            挑戰自我，攀向巔峰
          </h1>
          <h3
            className="text-white text-xl md:text-[36px] md:leading-[50.4px] tracking-[0.018em] font-pingfang-heavy text-center md:text-left"
            style={{ textShadow: "0px 0px 20px #082D5C" }}
          >
            技術攀登
          </h3>
      </div>
        </div>

      <div>
        <img
          src="/assets/a-hero-border.png"
          alt="home-hero-corner.png"
          className="hidden md:block absolute bottom-0 w-full h-[100px]"
        />
        <img
          src="/assets/a-hero-border-mobile.png"
          alt="home-hero-corner.png"
          className="block md:hidden absolute bottom-0 w-full h-[48px]"
        />
      </div>
    </div>
  );
};

export default Hero;
