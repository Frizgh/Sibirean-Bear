import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Coffee } from "lucide-react";
import { menuItems } from "../mock";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});
  const categories = ["All", "Hot Drinks", "Cold Drinks"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="menu" className="py-20 bg-[hsl(var(--bear-cream))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[hsl(var(--bear-teal))] mb-4 font-['Playfair_Display']">
            Our Menu
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Handcrafted beverages made with the finest beans from around the world
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[hsl(var(--bear-teal))] text-white shadow-lg scale-105"
                  : "bg-white text-[hsl(var(--bear-dark))] hover:bg-[hsl(var(--bear-teal))] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="flip-card h-[500px]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                perspective: "1000px"
              }}
              onClick={() => toggleFlip(item.id)}
            >
              <div
                className={`flip-card-inner relative w-full h-full transition-transform duration-700 cursor-pointer ${
                  flippedCards[item.id] ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Front Side */}
                <div
                  className="flip-card-front absolute w-full h-full rounded-2xl shadow-xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="relative h-full overflow-hidden group/front">
                    {/* Full Height Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/front:scale-110"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--bear-teal))]/30 via-transparent to-[hsl(var(--bear-green))]/20"></div>
                    
                    {/* Category Badge */}
                    <Badge className="absolute top-6 right-6 bg-[hsl(var(--bear-teal))]/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-semibold shadow-lg">
                      {item.category}
                    </Badge>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      {/* Top Section - Coffee Icon with glow */}
                      <div className="flex justify-start">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                          <Coffee className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      {/* Bottom Section - Title, Description, Price */}
                      <div className="space-y-3">
                        <div className="flex items-end justify-between gap-4">
                          <h3 className="text-4xl font-bold text-white font-['Playfair_Display'] leading-tight drop-shadow-2xl">
                            {item.name}
                          </h3>
                          <div className="flex flex-col items-end">
                            <span className="text-3xl font-bold text-[hsl(var(--bear-green))] drop-shadow-lg">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-white/90 text-base leading-relaxed drop-shadow-lg">
                          {item.description}
                        </p>
                        
                        {/* Click indicator with animation */}
                        <div className="flex items-center gap-2 text-white/80 text-sm font-medium pt-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                            <Coffee className="w-4 h-4" />
                          </div>
                          <span className="drop-shadow">Tap for details</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[hsl(var(--bear-teal))]/40 to-transparent"></div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back absolute w-full h-full bg-gradient-to-br from-[hsl(var(--bear-teal))] to-[hsl(var(--bear-teal-dark))] rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="h-full flex flex-col p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold font-['Playfair_Display']">
                        {item.name}
                      </h3>
                      <Coffee className="w-8 h-8 text-white/80" />
                    </div>

                    <div className="relative overflow-hidden rounded-xl mb-4 h-40 group/img">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-125"
                      />
                    </div>

                    <div className="flex-1 space-y-3 text-sm">
                      <p className="text-white/95 leading-relaxed">
                        {item.details}
                      </p>
                      
                      <div className="pt-3 border-t border-white/20 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white/80">Ingredients:</span>
                          <span className="text-white font-medium text-right">{item.ingredients}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/80">Calories:</span>
                          <span className="text-white font-medium">{item.calories}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-white/80">Price:</span>
                          <span className="text-2xl font-bold text-[hsl(var(--bear-gold))]">{item.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-white/90 font-medium mt-4 pt-4 border-t border-white/20">
                      <Coffee className="w-5 h-5" />
                      <span>Click to return</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;