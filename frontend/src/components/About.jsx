import React from "react";
import { aboutData } from "../mock";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[hsl(var(--bear-cream))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[hsl(var(--bear-teal))] mb-6 font-['Playfair_Display']">
            {aboutData.title}
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-['Playfair_Display'] group-hover:text-[hsl(var(--bear-gold))] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;