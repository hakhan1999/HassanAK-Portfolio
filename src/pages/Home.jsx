import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Toolkit from "../components/Toolkit";
import Numbers from "../components/Numbers";
import RealTalk from "../components/RealTalk";
import Clock from "../components/Clock";
import Perks from "../components/Perks";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { useHackerText } from "../hooks/useHackerText";

const Home = () => {
  useHackerText();

  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Hero />
      <Info />
      <Services />
      <Toolkit />
      <Portfolio />
      <Perks />
      <Numbers />
      <RealTalk />
      <Clock />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
