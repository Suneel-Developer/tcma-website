import React from "react";

const BoulderingSolo = () => {
  return (
    <div className="pb-20 md:pb-40 px-4 md:px-0">
      <div className="flex md:hidden flex-col gap-10 mb-8 max-w-[592px] self-end px-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
            抱石（bouldering）
          </h1>
          <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
            通常是在 4、5
            公尺以下之岩石攀爬，僅靠地墊而不用繩索來保護安全。抱石原本是攀岩者為了攀爬長路線而用來訓練攀登技巧與體能，但現已發展成單獨的攀岩項目了。
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
            獨攀（solo）
          </h1>
          <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
            是多數攀岩者敬而遠之攀岩型態。無繩獨攀（free
            solo）可說是自由攀登精神發揮的極致，除了攀登能力外尚須有強大的心理素質才能面對失手即致命的恐懼。至於以繩索系統自我確保的獨攀（rope
            solo）則可以自由攀登方式或使用人工攀。
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6 max-w-[600px] mx-auto md:mx-0 md:max-w-[1400px] w-full">
        <div className="w-full md:w-[62%] flex flex-col gap-6 justify-end md:justify-between ">
          <div className="hidden md:flex flex-col gap-10 max-w-[592px] self-end px-3">
            <div className="flex flex-col gap-3">
              <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
                抱石（bouldering）
              </h1>
              <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
                通常是在 4、5
                公尺以下之岩石攀爬，僅靠地墊而不用繩索來保護安全。抱石原本是攀岩者為了攀爬長路線而用來訓練攀登技巧與體能，但現已發展成單獨的攀岩項目了。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
                獨攀（solo）
              </h1>
              <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
                是多數攀岩者敬而遠之攀岩型態。無繩獨攀（free
                solo）可說是自由攀登精神發揮的極致，除了攀登能力外尚須有強大的心理素質才能面對失手即致命的恐懼。至於以繩索系統自我確保的獨攀（rope
                solo）則可以自由攀登方式或使用人工攀。
              </p>
            </div>
          </div>

          <div>
            <img
              src="/assets/image7.png"
              alt="image7"
              className="w-full  h-[206px] md:h-[456px] md:self-end"
            />
          </div>
        </div>

        <div className="w-full mx-auto md:mx-0 md:w-[38%] flex flex-col gap-4">
          <div className="h-[550px] xxs:h-[630px] md:h-[844px] min-h-fit">
            <img
              src="/assets/image8.png"
              alt="image8"
              className="w-full h-full bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoulderingSolo;
