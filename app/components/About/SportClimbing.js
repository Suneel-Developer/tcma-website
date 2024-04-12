import React from "react";

const SportClimbing = () => {
  return (
    <div className="pb-20 md:pb-40">
      <div className="flex gap-5 flex-col md:flex-row max-w-[480px] mx-auto md:mx-0  md:max-w-[1130px] w-full">
        <div className="w-full md:w-[62%]">
          <div className="flex flex-col gap-3 mb-7">
            <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
              運動攀登（sport climbing）
            </h1>
            <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
              為了規避傳統攀岩的墜落風險而能專注於攀登能力的提昇，部份攀岩者在岩壁上鑽孔打入固定式螺栓（bolt)，此種攀登方式稱之為運動攀登（sport
              climbing）。
            </p>
          </div>
          <div>
            <img
              src="/assets/image3.png"
              alt="image1"
              className="w-full bg-center h-[224px] md:h-[427px]"
            />
          </div>
        </div>

        <div className="w-[75%] mx-auto md:mx-0 md:w-[38%] flex flex-col gap-4">
          <div className="h-[336px] md:h-[583px]">
            <img
              src="/assets/image4.jpg"
              alt="image4"
              className="w-full h-full bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportClimbing;
