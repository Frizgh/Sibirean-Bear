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
    <section id="rewards" className="py-20 bg-[hsl(var(--bear-teal))] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 font-['Playfair_Display']">
            {rewardsData.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {rewardsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewardsData.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--bear-green))]/30 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-[hsl(var(--bear-teal))] text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Присоединиться бесплатно!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rewards;