"use client"
import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileHeader from "./components/Header/MobileHeader";
import CharityVolunteers from "./components/Home/CharityVolunteers";
import Hero from "./components/Home/Hero";
import SeedProject from "./components/Home/SeedProject";
import TechnicalClimbing from "./components/Home/TechnicalClimbing";
import "./globals.css";


export default function Home() {

  return (
    <main>
      <Header/>
      <MobileHeader />
      <Hero />
      <CharityVolunteers />
      <TechnicalClimbing />
      <SeedProject id="seedProject" />
      <Footer/>
    </main>
  );
}
