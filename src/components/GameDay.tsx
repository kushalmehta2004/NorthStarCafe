"use client";

import { useEffect, useRef, useState } from "react";

export default function GameDay() {
  const [typewriterActive, setTypewriterActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setTypewriterActive(true), 800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="game-days" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Animating Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "linear-gradient(90deg, #00338D, #1A1A1A, #00338D)",
          backgroundSize: "200% 100%",
          animation: "gradientSweep 12s linear infinite",
        }}
      />
      
      <style jsx>{`
        @keyframes gradientSweep {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div data-aos="fade-up">
          <span className="text-amber font-mono text-sm tracking-[0.3em] uppercase block mb-4">— GAME DAYS —</span>
          <h2 className="text-4xl md:text-6xl font-headline font-black mb-16 leading-tight">
            SF's Home for Bills Nation — <br /> and Birdgang.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Bills Card */}
          <div
            data-aos="fade-left"
            className="bg-bills/20 border-2 border-bills p-12 rounded-lg text-left relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-24 h-24 fill-white" viewBox="0 0 24 24">
                 <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
               </svg>
            </div>
            <h3 className="text-3xl font-headline font-black mb-4 uppercase tracking-tighter">SF Bills Backers</h3>
            <p className="text-foreground/90 font-sans text-lg mb-8 leading-relaxed">
              The front is ours. Bills nation fills this bar every Sunday. From shout songs to Labatt Blue, we bring Western NY to North Beach.
            </p>
            <div className="h-6 overflow-hidden">
                <span className={`text-amber font-mono text-sm tracking-widest font-bold uppercase typewriter ${typewriterActive ? 'active' : ''}`}>
                [ SUNDAYS · NFL SEASON ]
                </span>
            </div>
          </div>

          {/* Eagles Card */}
          <div
            data-aos="fade-right"
            className="bg-brick/20 border-2 border-brick p-12 rounded-lg text-left relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-24 h-24 fill-white" viewBox="0 0 24 24">
                 <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z" />
               </svg>
            </div>
            <h3 className="text-3xl font-headline font-black mb-4 uppercase tracking-tighter">Birdgang SF Eagles</h3>
            <p className="text-foreground/90 font-sans text-lg mb-8 leading-relaxed">
              The back room belongs to Birdgang. Isolated sound. Pure Philly energy. If you're looking for the Eagles game in SF, ask for Jimbo.
            </p>
            <div className="h-6 overflow-hidden">
                <span className={`text-amber font-mono text-sm tracking-widest font-bold uppercase typewriter ${typewriterActive ? 'active' : ''}`}>
                [ SUNDAYS · NFL SEASON ]
                </span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="space-y-8">
          <p className="text-muted font-sans italic text-lg">
            LSU Saturdays · NBA · NHL · And whatever else is worth watching.
          </p>
          <a
            href="https://www.instagram.com/thenorthstarsf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-amber text-amber px-8 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-amber hover:text-background transition-all active:scale-95"
          >
            Check Our Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
