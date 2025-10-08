import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Locations from "../components/Locations";
import Rewards from "../components/Rewards";
import About from "../components/About";
import Footer from "../components/Footer";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <Menu />
      <Rewards />
      <Locations />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;