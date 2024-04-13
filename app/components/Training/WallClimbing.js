import React from "react";

const WallClimbing = () => {
  return (
    <section className="bg-[url('/assets/parallax-effect.jpg')] relative w-full flex justify-end px-4 pl-16 bg-fixed xxs:pl-28 items-start bg-no-repeat bg-center md:bg-left mb-20 md:mb-40 bg-cover h-[306px] md:h-[659px]">
      <div className="flex flex-col gap-3 max-w-[491px] px-3 relative z-50 mt-10 md:mt-40 mr-3 md:mr-40">
        <h1 className="text-white text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
          大岩壁攀登（big wall climbing）
        </h1>
        <p className="text-white text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
          許多攀岩者嚮往的大岩壁攀登則是需要攀爬一天以上的多繩距攀登。由於隔夜攀登攜帶更多沉重的裝備、糧食和飲水，拖吊系統是不可或缺的技術，一些極難攀登的岩面也或需借力繩梯等器材以進行人工攀登（aid
          climbing）。
        </p>
      </div>

      <img
        src="/assets/parallax-effect-cover.png"
        alt="parallax-effect-cover"
        className="w-full h-full absolute left-0 top-0 bottom-0 right-0"
      />
    </section>
  );
};

export default WallClimbing;
