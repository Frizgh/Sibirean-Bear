import React from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { locations } from "../mock";

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[hsl(var(--bear-teal))] mb-4 font-['Playfair_Display']">
            Find Us
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Visit any of our locations for the perfect cup of coffee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.id}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--bear-teal))] group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[hsl(var(--bear-teal))]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--bear-teal))] transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-[hsl(var(--bear-teal))] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--bear-brown))] mb-4 font-['Playfair_Display']">
                    {location.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[hsl(var(--bear-green))] mt-1 flex-shrink-0" />
                    <p className="text-[hsl(var(--muted-foreground))]">
                      {location.address}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[hsl(var(--bear-green))] mt-1 flex-shrink-0" />
                    <p className="text-[hsl(var(--muted-foreground))]">
                      {location.hours}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[hsl(var(--bear-green))] mt-1 flex-shrink-0" />
                    <p className="text-[hsl(var(--muted-foreground))]">
                      {location.phone}
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-[hsl(var(--bear-cream))] text-[hsl(var(--bear-brown))] font-semibold rounded-lg hover:bg-[hsl(var(--bear-brown))] hover:text-white transition-all duration-300">
                  Get Directions
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;