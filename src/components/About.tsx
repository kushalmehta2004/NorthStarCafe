"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <span 
              data-aos="fade-in"
              className="text-amber font-mono text-sm tracking-[0.3em] uppercase block mb-4"
            >
              — ABOUT —
            </span>
            <div className="flex items-center gap-2 mb-6 text-amber">
               {[...Array(3)].map((_, i) => (
                 <span 
                   key={i} 
                   data-aos="zoom-in" 
                   data-aos-delay={i * 150}
                   className="text-xs tracking-widest inline-block animate-[spin_1s_ease-out_forwards]"
                   style={{ animationDelay: `${i * 150}ms`, transformOrigin: 'center' }}
                 >
                   ★
                 </span>
               ))}
            </div>
            <h2 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-headline font-black mb-8 leading-tight"
            >
              More Than Just a Bar
            </h2>
            
            <div className="space-y-6 text-muted leading-relaxed font-sans text-lg">
              <p data-aos="fade-up" data-aos-delay="200">
                A neighborhood institution in the heart of North Beach, NorthStar Cafe has been a fixture at the corner of Powell & Green for decades. This isn't your polished-to-death corporate bar; this is an authentic North Beach legend.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Step inside and you'll find friendly bartenders, a vintage jukebox, and that unmistakable gritty-cool energy. Whether you're here for the free popcorn, the cheap drinks, or just to watch the city go by from our sidewalk seating, you're among friends.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                We're a sports haven at our core. The SF Bills Backers own the front, while Birdgang SF Eagles fans claim the back room. But no matter who you root for, everyone is welcome here.
              </p>
              <p data-aos="fade-up" data-aos-delay="500">
                Lively on game days, relaxed on weeknights, and the perfect stop for a North Beach pub crawl. No frills. Just vibes.
              </p>
            </div>
          </div>

          {/* Image */}
          <div 
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative group overflow-hidden rounded-md shadow-2xl border border-amber/10 aspect-[4/3]">
              <Image 
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop"
                alt="NorthStar Cafe Interior"
                fill
                className="object-cover grayscale-[20%] sepia-[30%] contrast-[110%] group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-overlay pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
