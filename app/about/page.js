"use client";

import React, { useState, useEffect, useRef } from "react";
import BoulderingSolo from "../components/About/BoulderingSolo";
import Hero from "../components/About/Hero";
import IceClimbing from "../components/About/IceClimbing";
import Introduction from "../components/About/Introduction";
import OfficialEvent from "../components/About/OfficialEvent";
import Pitches from "../components/About/Pitches";
import RelatedLinks from "../components/About/RelatedLinks";
import SportClimbing from "../components/About/SportClimbing";
import TechnicalClimbing from "../components/About/TechnicalClimbing";
import WallClimbing from "../components/About/WallClimbing";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader";
import { Link } from "react-scroll";

const About = () => {
  const [fixed, setFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const introductionRef = useRef(null);
  const relatedLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const introBottom =
        introductionRef.current?.getBoundingClientRect().bottom +
        window.scrollY;
      const relatedTop =
        relatedLinksRef.current?.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;

      if (scrollY >= introBottom && scrollY < relatedTop) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (id) => {
    setActiveLink(id);
  };

  return (
    <section>
      <Header />
      <MobileHeader />
      <Hero />
      <div ref={introductionRef} id="introduction">
        <Introduction />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center px-4 md:px-7">
          <h1 className="text-primary text-[32px] z-50 md:text-[52px] leading-[45.98px] md:leading-[74.71px] tracking-[0.012em] font-notoSerif-bold">
            技術攀登面面觀
          </h1>
          <img
            src="/assets/text-border.svg"
            alt="text-border"
            className="h-[20px] md:h-[30px] -mt-4 md:-mt-6 -mr-1 md:-mr-3 w-[241px] md:w-[372px]"
          />
        </div>

        <div className="flex gap-10 mt-10 overflow-y-auto jus px-4 md:px-7 relative">
          <div className="hidden xxl:flex w-[193px]">
            <ul
              className={`flex-col gap-2 pr-5 max-w-[193px] w-full lg:flex ${
                fixed ? "fixed top-40" : ""
              } z-50`}
            >
              {[
                { name: "引言", id: "introduction" },
                { name: "技術攀登面面觀", id: "technicalClimbing" },
                { name: "運動攀登", id: "sportClimbing" },
                { name: "單繩距、多繩距", id: "pitches" },
                { name: "大岩壁攀登", id: "wallClimbing" },
                { name: "抱石、獨攀", id: "boulderingSolo" },
                { name: "奧運正式比賽項目", id: "officialEvent" },
                { name: "冰攀", id: "iceClimbing" },
              ].map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`flex items-center gap-2 cursor-pointer ${
                      activeLink === link.id ? "text-orange_brown" : "text-gray"
                    }`}
                    onSetActive={() => handleSetActive(link.id)}
                  >
                    <div className={`w-2 h-2 rounded-full ${activeLink === link.id ? 'bg-primary' : 'bg-gray'}`}
                    
                    ></div>
                    <span className="text-base tracking-[0.006em] font-pingfang-medium">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 justify-center">
            <div id="technicalClimbing">
              <TechnicalClimbing />
            </div>

            <div id="sportClimbing">
              <SportClimbing />
            </div>
          </div>
        </div>

        <div id="pitches">
          <Pitches />
        </div>

        <div id="wallClimbing">
          <WallClimbing />
        </div>

        <div id="boulderingSolo">
          <BoulderingSolo />
        </div>

        <div id="officialEvent">
          <OfficialEvent />
        </div>

        <div id="iceClimbing" ref={relatedLinksRef}>
          <IceClimbing />
        </div>
      </div>

      <div>
        <RelatedLinks />
      </div>
      <Footer />
    </section>
  );
};

export default About;
