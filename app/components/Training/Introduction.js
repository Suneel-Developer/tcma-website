import React from "react";

const Introduction = () => {
  return (
    <section className="px-4 py-20">
      <div className="relative max-w-[1212px] mx-auto w-full">
        <p className="text-black_700 text-sm md:text-xl tracking-[0.012em] font-pingfang-regular leading-[22.5px] md:leading-[32px]">
          技術攀登需要綜合各種不同的攀登形式，基本攀岩技巧、雪地攀登、冰壁攀登、多繩距傳統攀登等，是對一個登山者能力的綜合考驗。
          在台灣因除了攀岩外，一般人大概很少有機會接觸到雪地攀登、冰壁攀登，相對於這方面的技術及經驗是接軌國際登山領域是非常重要的一個環扣，需要大力提升並廣泛推廣，方能跟上國際登山界的腳步，同時增加登山安全性。
        </p>

        <div className="flex flex-col md:flex-row gap-3 sm:gap-5 mt-9">
          <div className="flex gap-3 sm:gap-5 w-full md:w-[50%]">
            <div className="w-[50%]">
              <img src="/assets/image-1.png" alt="image-1" className="w-full h-[259px] md:h-[427px]" />
            </div>
            <div className="w-[50%]">
              <img src="/assets/image-2.png" alt="image-2" className="w-full h-[259px] md:h-[427px]" />
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/assets/image-3.png" alt="image-3" className="w-full h-[259px] md:h-[427px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
