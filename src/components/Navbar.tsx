"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Drinks", href: "#drinks" },
  { name: "Game Days", href: "#game-days" },
  { name: "Visit", href: "#visit" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial entrance animation
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "bg-background border-b border-amber shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative overflow-hidden">
            <span className="text-xl md:text-2xl font-headline font-black tracking-tighter flex items-center">
              NORTH<Star className="w-5 h-5 text-amber fill-amber mx-0.5" />STAR CAFE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs lg:text-sm font-medium uppercase tracking-widest transition-colors duration-300 group ${
                  activeSection === link.href.replace('#', '') ? "text-amber" : "text-foreground hover:text-amber"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1560+Powell+St,+San+Francisco,+CA+94133"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber text-background px-6 py-2.5 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-amber-bright transition-all active:scale-95 hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(212,160,23,0.3)]"
            >
              Get Directions
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber w-10 h-10 relative focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5">
                <span className={`absolute left-0 w-full h-0.5 bg-amber transition-all duration-300 ${isOpen ? "top-2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-2 w-full h-0.5 bg-amber transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 w-full h-0.5 bg-amber transition-all duration-300 ${isOpen ? "top-2 -rotate-45" : "top-4"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l border-amber/20 z-[60] shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-amber w-10 h-10 relative"
            >
               <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-amber rotate-45" />
               <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-amber -rotate-45" />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-headline uppercase tracking-widest transition-colors ${
                  activeSection === link.href.replace('#', '') ? "text-amber" : "hover:text-amber"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1560+Powell+St,+San+Francisco,+CA+94133"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber text-background px-6 py-4 rounded-md font-bold text-center text-lg uppercase tracking-widest hover:bg-amber-bright active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </nav>
  );
}
