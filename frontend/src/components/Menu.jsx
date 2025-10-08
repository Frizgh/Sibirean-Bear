import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { menuItems } from "../mock";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Hot Drinks", "Cold Drinks"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-[hsl(var(--bear-cream))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[hsl(var(--bear-brown))] mb-4 font-['Playfair_Display']">
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
                  ? "bg-[hsl(var(--bear-brown))] text-white shadow-lg scale-105"
                  : "bg-white text-[hsl(var(--bear-dark))] hover:bg-[hsl(var(--bear-brown))] hover:text-white"
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
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 right-4 bg-[hsl(var(--bear-green))] text-white">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-[hsl(var(--bear-brown))] font-['Playfair_Display']">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[hsl(var(--bear-gold))]">
                    {item.price}
                  </span>
                </div>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;