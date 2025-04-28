import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import Toolkit from "./components/Toolkit";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import RealTalk from "./components/RealTalk";
import Clock from "./components/Clock";
import Perks from "./components/Perks";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

const App = () => {
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

export default App;
