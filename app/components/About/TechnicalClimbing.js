import React from "react";

const TechnicalClimbing = () => {
  return (
    <div className="max-w-[480px] mx-auto md:mx-0  md:max-w-[1068px] w-full pb-20 md:pb-40">
      <p className="text-[#351B02] text-sm md:text-xl tracking-[0.012em] leading-[22.5px] font-pingfang-regular md:leading-[32px]">
        技術攀登（technical climbing）包括攀岩（rock climbing）、攀冰（ice
        climbing）、以及面對冰雪岩綜合地形的山岳攀登（alpine
        climbing）。為了克服岩壁、冰雪的困難地形，攀登者須掌握攀爬的動作技巧，使用專業的裝備器材，並以繩索系統避免墜落的風險。不借助器材等外力上昇而僅仰賴自身肢體攀爬的自由攀登（free
        climbing）是攀登者崇尚的最高境界。
        早期歐洲的登山者為了克服阿爾卑斯山陡峭的岩壁而在近郊的岩場練習，發展出攀岩的專業技術與器材，也逐漸走出登山而成為獨立的領域。拜人工或室內攀岩場全面普及之賜，攀岩現今已成為熱門的新興運動，也是邁入其他技術攀登領域的基本功。
        攀岩者通常穿著吊帶（harness）並利用攀登繩、鉤環（carabiner）等器材以及在岩壁上置放的保護點來保障安全。
      </p>

      <div className="flex gap-5 mt-5 flex-col md:flex-row">
        <div className="w-full md:w-[65%]">
          <img src="/assets/image1.png" alt="image1" className="w-full bg-cover bg-center h-[400px] xxs:h-[486px] md:h-[797px]" />
        </div>

        <div className="w-full md:w-[35%] flex flex-col gap-4">
          <div className="h-[400px] xxs:h-[486px] md:h-[516px]">
            <img src="/assets/image2.png" alt="image2" className="w-full h-full bg-cover bg-center" />
          </div>

          <p className="text-[#351B02] text-sm md:text-xl font-pingfang-regular leading-[22.5px] md:leading-[32px]">
            初期的攀岩者將岩釘（piton）打入岩壁的裂縫作為保護點。為了避免岩釘對岩壁的破壞，塞入裂隙中的岩楔（nut,
            chock)逐漸取而代之。1970 年代彈簧岩楔（Spring Loaded Camming Device,
            SLCD）的發明為傳統攀登（traditional
            climbing）的安全帶來突破性的保障。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalClimbing;
