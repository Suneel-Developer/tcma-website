import React from "react";

const Pitches = () => {
  return (
    <div className="pb-20 md:pb-40">
        <div className="flex md:hidden flex-col gap-3 mb-7 px-3 md:px-0">
          <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
            單繩距（single-pitch）、多繩距（multi-pitch）攀登
          </h1>
          <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
            一般在 30
            米（半條繩長）以下的岩壁可採單繩距攀登，攀登者爬到頂端後由確保者用繩索降下地面或自行用繩索垂降。在多繩距攀登時，領攀者爬上一段繩距後會架設確保站（belay
            station），跟攀者隨之上攀並回收路線上的保護器材以供下一段繩距領攀者使用。
          </p>
        </div>
      <div className="flex flex-row md:max-w-[1283px] w-full">

        <div className="w-[25%] md:w-[62%] flex flex-col justify-end md:justify-between ">
          <div className="hidden md:flex flex-col gap-3 max-w-[491px] self-end px-3">
            <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
              單繩距（single-pitch）、多繩距（multi-pitch）攀登
            </h1>
            <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
              一般在 30
              米（半條繩長）以下的岩壁可採單繩距攀登，攀登者爬到頂端後由確保者用繩索降下地面或自行用繩索垂降。在多繩距攀登時，領攀者爬上一段繩距後會架設確保站（belay
              station），跟攀者隨之上攀並回收路線上的保護器材以供下一段繩距領攀者使用。
            </p>
          </div>
          <div>
            <img
              src="/assets/image5.png"
              alt="image1"
              className="w-full bg-left md:bg-center h-[106px] md:h-[245px] self-end"
            />
          </div>
        </div>

        <div className="w-[75%] mx-auto md:mx-0 md:w-[38%] flex flex-col gap-4">
          <div className="h-[393px] md:h-[657px]">
            <img
              src="/assets/image6.jpg"
              alt="image4"
              className="w-full h-full bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitches;
