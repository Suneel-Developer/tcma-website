import React from "react";

const OfficialEvent = () => {
  return (
    <div className="pb-20 md:pb-40 px-4">
      <div className="flex flex-col gap-3 mx-auto max-w-[1006px] w-full">
        <h1 className="text-[#08224B] text-xl md:text-2xl tracking-[0.006em] font-notoSerif-semiBold">
          抱石（bouldering）
        </h1>
        <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] font-pingfang-regular">
          隨著室內攀岩場的普及，攀岩也朝向競技運動發展，在國際運動攀登總會（IFSC)的積極推動下納入
          2020 年東京奧運正式項目後，運動人口更有大幅的成長。
          攀登競賽包括先鋒（lead）、抱石（boulder）、速度（speed）三個項目。先鋒賽的路線長達
          10
          幾米，選手在繩索確保下攀爬並須將繩索依序掛入路線上預置之快扣鉤環，成績以限時內之攀登高度決定。抱石賽選手必須在限時內嘗試
          4 至 5
          條抱石路線，以完攀（top）路線數目、達到路線中得分點（zone）數目、以及嘗試次數來決定名次。速度賽採
          15
          米之標準賽道，選手採頂繩攀登（top-roping）方式並以完攀之時間一決高下。
        </p>
      </div>
    </div>
  );
};

export default OfficialEvent;
