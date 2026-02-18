"use client";

import { MapPin, Phone, ExternalLink } from "lucide-react";

export default function Visit() {
  return (
    <section id="contact" className="py-24 bg-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Block */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2"
          >
            <span className="text-amber font-mono text-sm tracking-[0.3em] uppercase block mb-4">— FIND US —</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black mb-10 leading-tight">Drop In.</h2>
            
            <div className="space-y-10">
              <div data-aos="fade-up" data-aos-delay="100" className="flex items-start gap-4">
                <MapPin className="text-amber w-8 h-8 shrink-0 mt-1" />
                <div>
                   <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase block mb-2">[ NORTH BEACH · SF ]</span>
                   <p className="text-2xl font-headline font-bold mb-2">1560 Powell St</p>
                   <p className="text-muted text-lg">at Green St, San Francisco, CA 94133</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4">
                <Phone className="text-amber w-8 h-8 shrink-0 mt-1" />
                <div>
                   <p className="text-2xl font-headline font-bold mb-2">(415) 397-0577</p>
                   <p className="text-muted text-lg font-sans">Give us a ring for game day info.</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="bg-background p-8 rounded-lg border-l-4 border-amber font-sans">
                <p className="text-foreground leading-relaxed italic mb-4">
                  "Sidewalk seating available — watch the city go by on Powell St. Walking distance from Fisherman's Wharf, Chinatown, and Columbus Ave."
                </p>
                <p className="text-muted text-sm uppercase tracking-widest font-bold">Street parking and BART/Muni nearby.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1560+Powell+St,+San+Francisco,+CA+94133"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="bg-amber text-background px-8 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-amber-bright transition-all active:scale-95 text-center flex items-center justify-center gap-2 group hover:translate-y-[-2px]"
                >
                  Get Directions <ExternalLink size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="tel:+14153970577"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="border-2 border-brick text-foreground hover:bg-brick px-8 py-4 rounded-md font-bold text-lg uppercase tracking-widest transition-all active:scale-95 text-center hover:translate-y-[-2px]"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

          {/* Map Block */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-full lg:w-1/2 min-h-[450px]"
          >
            <div className="w-full h-full rounded-lg overflow-hidden border-2 border-amber/10 shadow-2xl relative grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6102573216!2d-122.41165682343883!3d37.79904257197828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f000000001%3A0xc6c4f5f5f5f5f5f5!2sNorthStar%20Cafe!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
