"use client";

import { Beer, Martini, GlassWater, Popcorn, Music, Flame } from "lucide-react";

const drinkItems = [
  {
    icon: <Beer className="w-8 h-8 text-amber" />,
    title: "Draft Beer",
    description: "Rotating taps. Labatt Blue always on. The only bar in SF that carries it.",
  },
  {
    icon: <Martini className="w-8 h-8 text-amber" />,
    title: "Full Bar",
    description: "Cocktails done right. Strong pours. No lecture about your order.",
  },
  {
    icon: <Flame className="w-8 h-8 text-amber" />,
    title: "Whiskey & Spirits",
    description: "Classics and then some. From rail to top shelf.",
  },
  {
    icon: <GlassWater className="w-8 h-8 text-amber" />,
    title: "Guinness Stout",
    description: "On tap. Always cold. Always proper. Poured with patience.",
  },
  {
    icon: <Popcorn className="w-8 h-8 text-amber" />,
    title: "Free Popcorn",
    description: "Not a drink. But it's free. And it slaps. Salty and fresh.",
  },
  {
    icon: <Music className="w-8 h-8 text-amber" />,
    title: "TouchTunes Jukebox",
    description: "Your playlist. Your bar. Your rules. Play the hits.",
  },
];

export default function Drinks() {
  return (
    <section id="drinks" className="py-24 bg-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <span className="text-amber font-mono text-sm tracking-[0.3em] uppercase block mb-4">— WHAT WE POUR —</span>
          <h2 className="text-4xl md:text-6xl font-headline font-black mb-16 leading-tight">Cold. Strong. Reasonably Priced.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinkItems.map((item, index) => (
            <div
              key={item.title}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="bg-[#2C2C2C] p-10 rounded-lg text-left border border-transparent hover:border-amber/40 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_0_18px_rgba(212,160,23,0.25)]"
            >
              <div className="mb-6 inline-block transition-transform duration-300 group-hover:scale-115 group-hover:animate-wiggle origin-left">
                {item.icon}
              </div>
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
