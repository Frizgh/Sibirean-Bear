import React, { useState } from "react";
import { Menu as MenuIcon, X, Coffee } from "lucide-react";
import { Button } from "./ui/button";

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Rewards", href: "#rewards" },
    { name: "Locations", href: "#locations" },
    { name: "About", href: "#about" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <Coffee
              className={`w-8 h-8 transition-colors duration-300 ${
                scrolled ? "text-[hsl(var(--bear-teal))]" : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-bold font-['Playfair_Display'] transition-colors duration-300 ${
                scrolled ? "text-[hsl(var(--bear-teal))]" : "text-white"
              }`}
            >
              Siberian Bear
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[hsl(var(--bear-teal-light))] ${
                  scrolled ? "text-[hsl(var(--bear-dark))]" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-[hsl(var(--bear-teal))] hover:bg-[hsl(var(--bear-teal-dark))] text-white"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  scrolled ? "text-[hsl(var(--bear-dark))]" : "text-white"
                }`}
              />
            ) : (
              <MenuIcon
                className={`w-6 h-6 ${
                  scrolled ? "text-[hsl(var(--bear-dark))]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg mt-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-[hsl(var(--bear-dark))] hover:bg-[hsl(var(--bear-cream))] transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-[hsl(var(--bear-teal))] hover:bg-[hsl(var(--bear-teal-dark))] text-white">
                Order Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;