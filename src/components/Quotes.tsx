"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "I'd rather drive 5 hours from home to watch a Bills game here than fly to Buffalo. This place is second to none.",
  },
  {
    text: "The most fun I've had in a bar in 35 years. Staff and customers alike were without exception welcoming and wonderful.",
  },
  {
    text: "A beautiful spot away from the tourist track. You can feel the real pulse of the city here.",
  },
  {
    text: "Best Bills bar experience I've ever had — and I've been to them all across the US.",
  },
];

export default function Quotes() {
  return (
    <section className="py-24 bg-background border-y border-amber/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-amber font-mono text-sm tracking-[0.3em] uppercase block mb-4">— WHAT PEOPLE SAY —</span>
        </div>

        <div className="relative group" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            grabCursor={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-pagination-bullet !bg-muted/40 !w-2.5 !h-2.5 !transition-all !duration-300",
              bulletActiveClass: "!bg-amber !w-8 !rounded-full !opacity-100",
            }}
            navigation={{
              prevEl: ".prev-quote",
              nextEl: ".next-quote",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20 !px-4 quotes-swiper"
          >
            <style jsx global>{`
              .quotes-swiper .swiper-wrapper {
                display: flex !important;
              }
              .quotes-swiper .swiper-slide {
                height: auto !important;
                display: flex !important;
              }
            `}</style>
            {testimonials.map((quote, index) => (
              <SwiperSlide key={index} className="flex">
                <div
                  className="w-full relative p-10 border border-amber/10 rounded-lg bg-amber/5 transition-all duration-500 hover:bg-amber/10 flex flex-col"
                >
                  <div className="flex-grow">
                    <Quote className="w-10 h-10 text-amber/20 mb-6" />
                    <p className="text-xl md:text-2xl font-headline italic font-bold text-foreground/90 leading-tight">
                      "{quote.text}"
                    </p>
                  </div>
                  <div className="mt-8 flex gap-1 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber text-sm">★</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="prev-quote absolute left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 text-amber hover:text-amber-bright transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={40} />
          </button>
          <button className="next-quote absolute right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 text-amber hover:text-amber-bright transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={40} />
          </button>

          {/* Pagination */}
          <div className="custom-pagination flex justify-center items-center gap-3 mt-4 h-4" />
        </div>
      </div>
    </section>
  );
}
