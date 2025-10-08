import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { heroData } from "../mock";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroData.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 font-['Playfair_Display'] animate-fade-in">
          {heroData.title}
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-[hsl(var(--bear-teal-light))] mb-4 font-['Playfair_Display'] italic">
          {heroData.subtitle}
        </p>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {heroData.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[hsl(var(--bear-teal))] hover:bg-[hsl(var(--bear-teal-dark))] text-white text-lg px-8 py-6 group shadow-2xl"
            onClick={() =>
              document.getElementById("menu").scrollIntoView({ behavior: "smooth" })
            }
          >
            {heroData.ctaText}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--bear-teal))] text-lg px-8 py-6 shadow-xl"
          >
            Найти кофейню
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;