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
                  className="flip-card-front absolute w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 right-4 bg-[hsl(var(--bear-teal))] text-white">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-[hsl(var(--bear-teal))] font-['Playfair_Display'] flex-1">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-[hsl(var(--bear-green))] flex-shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[hsl(var(--muted-foreground))] mb-6">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm text-[hsl(var(--bear-teal))] font-medium mt-8">
                      <Coffee className="w-5 h-5" />
                      <span>Click to see details</span>
                    </div>
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