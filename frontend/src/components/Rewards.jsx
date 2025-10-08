import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Coffee, Gift, Cake, Zap } from "lucide-react";
import { rewardsData } from "../mock";

const iconMap = {
  star: Coffee,
  gift: Gift,
  cake: Cake,
  zap: Zap
};

const Rewards = () => {
  return (
    <section id="rewards" className="py-20 bg-[hsl(var(--bear-dark))] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--bear-dark))] via-[hsl(var(--bear-teal-dark))]/50 to-[hsl(var(--bear-dark))]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-white via-[hsl(var(--bear-teal-light))] to-white bg-clip-text text-transparent">
            {rewardsData.title}
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {rewardsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {rewardsData.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[hsl(var(--bear-teal-light))]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--bear-teal))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[hsl(var(--bear-teal))] to-[hsl(var(--bear-green))] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-['Playfair_Display'] text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--bear-teal))] to-[hsl(var(--bear-green))] hover:from-[hsl(var(--bear-teal-dark))] hover:to-[hsl(var(--bear-teal))] text-white text-xl px-12 py-8 font-bold shadow-2xl hover:shadow-[hsl(var(--bear-teal))]/50 transition-all duration-500 hover:scale-110 rounded-2xl"
          >
            Присоединиться бесплатно!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rewards;