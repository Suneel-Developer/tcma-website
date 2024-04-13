import React from "react";

const IceClimbing = () => {
  return (
    <div className="pb-20 md:pb-40 px-4">
      <div className="flex flex-col gap-6 mx-auto max-w-[1006px] w-full">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-[70%] md:w-[388px] mx-auto md:mx-0">
            <img src="/assets/image9.png" alt="冰攀" className="w-full" />
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
              冰攀
            </h1>
            <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
              是雙手使用攀登冰斧（ice
              tool）配合雙腳穿著的冰爪（crampon）攀登冰壁。冰壁可分為由水凝結而成的水冰（water
              ice）與降雪經過冷熱、壓力、時間等作用形成的山岳冰（alpine
              ice）。如果攀登路線上也包括了無冰的岩壁即成為所謂的混合攀登（mixed
              climbing），若是在純粹的岩壁上以冰攀工具攀爬則稱之為乾攀（dry
              tooling）。
              山岳攀登通常以登上峰頂為目標，攀登者面對高山的冰河、岩壁、冰坡等地形必須發揮全方位的技術攀登能力，包括冰河行進與裂隙救援、攀岩、攀冰、雪崩研判等。當登山者將目標提升到八千米的喜瑪拉雅巨峰時，面對低溫、低氧、長路線的挑戰，通常會採用遠征式（expedition
              style）或稱圍城式（seige
              style）的攀登，從基地營以上大量架設固定繩，攀登者與協作來回運補物資並建設高地營作為最後攻頂的準備。攀登界的精英則將過去在阿爾卑斯山的攀登風格應用在七、八千米的高峰，揚棄了大型遠征隊使用的固定繩、協作、氧氣瓶與來回運補，採用小隊伍、輕量化、快速化的阿爾卑斯式（alpine
              style）攀登。而近年來許多高海拔登山客只需拉著攀登公司架設好的固定繩一步步邁向峰頂，此種高度商業化的方式已難稱之為技術攀登了。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[244px] md:h-[326px] w-full">
            <img
              src="/assets/image10.png"
              alt="image10"
              className="w-full h-full"
            />
          </div>

          <div className="h-[244px] md:h-[326px] w-full">
            <img
              src="/assets/image11.png"
              alt="image11"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceClimbing;
