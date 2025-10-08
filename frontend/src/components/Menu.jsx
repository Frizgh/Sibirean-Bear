import React, { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { menuItems } from "../mock";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);
  const categories = ["All", "Hot Drinks", "Cold Drinks"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
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
            <Card
              key={item.id}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer border-2 ${
                expandedCard === item.id
                  ? "border-[hsl(var(--bear-teal))] shadow-2xl"
                  : "border-transparent"
              }`}
              onClick={() => toggleCard(item.id)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    expandedCard === item.id ? "scale-110" : "group-hover:scale-105"
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                  expandedCard === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
                <Badge className="absolute top-4 right-4 bg-[hsl(var(--bear-teal))] text-white">
                  {item.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-[hsl(var(--bear-teal))] font-['Playfair_Display'] flex-1">
                    {item.name}
                  </h3>
                  {expandedCard === item.id ? (
                    <ChevronUp className="w-6 h-6 text-[hsl(var(--bear-teal))] flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--bear-teal))] flex-shrink-0 ml-2 transition-colors duration-300" />
                  )}
                </div>
                <p className="text-[hsl(var(--muted-foreground))] mb-4">
                  {item.description}
                </p>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedCard === item.id ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-[hsl(var(--border))] space-y-3">
                    <p className="text-sm text-[hsl(var(--bear-dark))]">
                      {item.details}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[hsl(var(--muted-foreground))]">Ingredients:</span>
                      <span className="text-[hsl(var(--bear-dark))] font-medium">{item.ingredients}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[hsl(var(--muted-foreground))]">Calories:</span>
                      <span className="text-[hsl(var(--bear-dark))] font-medium">{item.calories}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Banner - Full Width */}
              <div className="price-shimmer text-center py-4 px-6 rounded-b-lg">
                <span className="text-2xl font-bold text-white drop-shadow-lg">
                  {item.price}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;