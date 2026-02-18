"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headline = "SF's Favorite Dive. No Debate.";
  const words = headline.split(" ");

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{ 
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop"
          alt="NorthStar Cafe Atmosphere"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Lights coming up reveal */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-[1200ms] ease-out z-10" 
          style={{ opacity: isLoaded ? 0.55 : 0.7 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-headline font-black text-foreground mb-6 leading-tight flex flex-wrap justify-center gap-x-4">
          {words.map((word, i) => (
            <span 
              key={i}
              className={`inline-block transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
        
        <p 
          className={`text-lg md:text-2xl font-sans text-muted mb-10 max-w-2xl mx-auto transition-all duration-800 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${words.length * 80 + 300}ms` }}
        >
          Neighborhood bar. Sports haven. Cold beer. <br className="hidden md:inline" /> Free popcorn. North Beach, SF.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#game-days"
            className={`bg-amber text-background px-8 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-amber-bright transition-all active:scale-95 text-center transform ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${words.length * 80 + 600}ms`, transitionDuration: '500ms' }}
          >
            See What's On
          </a>
          <a
            href="#visit"
            className={`border-2 border-amber text-amber px-8 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-amber hover:text-background transition-all active:scale-95 text-center transform ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${words.length * 80 + 750}ms`, transitionDuration: '500ms' }}
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 ${
          scrollY > 100 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <a href="#about" aria-label="Scroll down" className="block animate-bounce text-amber">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
}
