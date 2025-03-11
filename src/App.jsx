import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
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

const App = () => {
  useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
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
    </ReactLenis>
  );
};

export default App;
