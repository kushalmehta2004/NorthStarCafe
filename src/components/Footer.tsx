"use client";

import Link from "next/link";
import { Star, Instagram, Facebook, Map, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-24 pb-12 border-t border-amber/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-8" data-aos="fade-up" data-aos-delay="0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-headline font-black tracking-tighter flex items-center">
                NORTH<Star className="w-6 h-6 text-amber fill-amber mx-0.5" />STAR CAFE
              </span>
            </Link>
            <p className="text-muted font-sans text-lg leading-relaxed max-w-sm">
              Your bar in North Beach since forever. Neighborhood legend. Unapologetically local. No frills. Just vibes.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-10">— QUICK LINKS —</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                { name: "About", href: "#about" },
                { name: "Drinks", href: "#drinks" },
                { name: "Game Days", href: "#game-days" },
                { name: "Hours", href: "#visit" },
                { name: "Find Us", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/80 hover:text-amber font-sans text-lg transition-colors relative group inline-block">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-10">— CONNECT —</h4>
            <div className="space-y-4 mb-8">
              <p className="text-foreground font-sans text-lg font-bold">(415) 397-0577</p>
              <p className="text-muted font-sans">1560 Powell St, SF, CA 94133</p>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={24} />, href: "https://www.instagram.com/thenorthstarsf", label: "Instagram" },
                { icon: <Facebook size={24} />, href: "https://www.facebook.com/TheNorthstarSF/", label: "Facebook" },
                { icon: <Search size={24} />, href: "https://www.yelp.com/biz/northstar-cafe-san-francisco", label: "Yelp" },
                { icon: <Map size={24} />, href: "https://www.google.com/maps/dir/?api=1&destination=1560+Powell+St,+San+Francisco,+CA+94133", label: "Google Maps" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-amber text-background flex items-center justify-center rounded hover:bg-amber-bright transition-all active:scale-95 hover:scale-120 hover:-rotate-6"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-amber/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted/60 font-sans text-sm text-center md:text-left">
            © {new Date().getFullYear()} NorthStar Cafe · 1560 Powell St · San Francisco, CA · Built with love for the neighborhood.
          </p>
          <div className="flex items-center gap-2 text-amber/40">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
