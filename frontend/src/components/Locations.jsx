import React from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { locations } from "../mock";

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-[hsl(var(--bear-cream))] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[hsl(var(--bear-teal))] mb-6 font-['Playfair_Display']">
            Найдите нас
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed">
            Посетите любую из наших локаций за идеальной чашкой кофе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[hsl(var(--bear-teal))]">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--bear-teal))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--bear-teal))] to-[hsl(var(--bear-green))] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[hsl(var(--bear-teal))] mb-2 font-['Playfair_Display']">
                      {location.name}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-3 rounded-xl bg-[hsl(var(--bear-cream))] group-hover:bg-white transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-[hsl(var(--bear-teal))] mt-1 flex-shrink-0" />
                      <p className="text-[hsl(var(--bear-dark))] font-medium">
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-xl bg-[hsl(var(--bear-cream))] group-hover:bg-white transition-colors duration-300">
                      <Clock className="w-6 h-6 text-[hsl(var(--bear-teal))] mt-1 flex-shrink-0" />
                      <p className="text-[hsl(var(--bear-dark))] font-medium">
                        {location.hours}
                      </p>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-xl bg-[hsl(var(--bear-cream))] group-hover:bg-white transition-colors duration-300">
                      <Phone className="w-6 h-6 text-[hsl(var(--bear-teal))] mt-1 flex-shrink-0" />
                      <p className="text-[hsl(var(--bear-dark))] font-medium">
                        {location.phone}
                      </p>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-[hsl(var(--bear-teal))] to-[hsl(var(--bear-green))] text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
                    Построить маршрут
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;