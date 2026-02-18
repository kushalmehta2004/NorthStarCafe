"use client";

import { useEffect, useRef, useState } from "react";

export default function Hours() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
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
      id="visit" 
      ref={sectionRef}
      className="py-24 bg-background border-y border-amber/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div data-aos="fade-up">
            <span className="text-amber font-mono text-sm tracking-[0.3em] uppercase block mb-4">— VISIT US —</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black leading-tight">
              Open Late. <br className="sm:hidden" /> Happy Hour 'Til 7.
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 lg:gap-24">
          {/* Hours Block */}
          <div
            data-aos="fade-up"
            className="flex-1 text-center md:text-right"
          >
            <div className="inline-block bg-[#222] border border-amber/30 p-10 rounded-lg shadow-xl relative overflow-hidden group">
              <div 
                className={`absolute top-0 left-0 w-full h-1 bg-amber transition-transform duration-700 origin-left ${isIntersecting ? 'scale-x-100' : 'scale-x-0'}`} 
              />
              <h3 className="text-2xl font-headline font-bold text-amber uppercase tracking-widest mb-8 border-b border-amber/20 pb-4">
                Doors Open
              </h3>
              <div className="space-y-6 font-mono text-lg text-foreground/90">
                <div data-aos="fade-up" data-aos-delay="100">
                  <span className="block text-muted text-sm uppercase mb-1">Mon – Fri</span>
                  <span className="text-2xl font-black">1:00 PM – 2:00 AM</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <span className="block text-muted text-sm uppercase mb-1">Sat – Sun</span>
                  <span className="text-2xl font-black">12:00 PM – 2:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px relative overflow-hidden">
             <div 
              className={`absolute inset-0 bg-amber/30 transition-transform duration-[600ms] ease-out origin-top ${isIntersecting ? 'scale-y-100' : 'scale-y-0'}`}
             />
          </div>

          {/* Happy Hour Block */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex-1 flex flex-col justify-center text-center md:text-left"
          >
            <div className="max-w-md">
              <h3 className="text-3xl font-headline font-black mb-6 uppercase italic text-amber-bright">
                Longest Happy Hour in SF
              </h3>
              <p className="text-xl text-foreground font-sans leading-relaxed mb-6">
                Happy Hour runs until 7 PM every single day — one of the most generous pours and longest windows in the city.
              </p>
              <div className="flex flex-col gap-2 font-sans font-bold text-lg text-muted uppercase tracking-wider">
                {[
                  "Cheap drinks",
                  "Big screens",
                  "Good people"
                ].map((item, i) => (
                  <span 
                    key={i} 
                    data-aos="fade-up" 
                    data-aos-delay={400 + (i * 100)}
                    className="flex items-center gap-3 justify-center md:justify-start"
                  >
                    <span className="w-1.5 h-1.5 bg-amber rounded-full" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
