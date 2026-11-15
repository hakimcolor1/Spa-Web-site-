"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#243C32]">
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=85"
          alt="Lumière Spa hero"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#243C32]/90 via-[#243C32]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#243C32]/80 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-24 right-16 w-64 h-64 rounded-full border border-[#B69A65]/20 hidden lg:block" />
      <div className="absolute top-32 right-24 w-44 h-44 rounded-full border border-[#A9B7A4]/15 hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-[#B69A65]/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <div className="max-w-2xl">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#B69A65] mb-6">
            Luxury Skincare Studio · London
          </p>

          <h1 className="font-heading font-light leading-[1.05] text-[#F8F5EF] mb-8">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">Your Skin</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl italic text-[#E8DCCB]">Deserves a</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">Moment of</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#B69A65]">Stillness.</span>
          </h1>

          <p className="text-base sm:text-lg font-body font-light text-[#A9B7A4] leading-relaxed mb-10 max-w-lg">
            Lumière is a premier luxury skincare studio offering bespoke facial treatments crafted for your skin's unique needs, in an atmosphere of pure tranquillity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#B69A65] text-white px-8 py-4 text-sm font-body font-medium tracking-wide hover:bg-[#a08855] transition-all duration-300 group"
            >
              Book Your Treatment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center gap-2 border border-[#F8F5EF]/30 text-[#F8F5EF] px-8 py-4 text-sm font-body font-medium tracking-wide hover:bg-[#F8F5EF]/10 transition-all duration-300"
            >
              Explore Treatments
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-14 pt-10 border-t border-[#A9B7A4]/20">
            {[
              { value: "10+", label: "Years of excellence" },
              { value: "4,000+", label: "Clients served" },
              { value: "4.9★", label: "Average rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl text-[#F8F5EF] font-light">{stat.value}</p>
                <p className="text-xs font-body text-[#A9B7A4] tracking-wide mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A9B7A4]">
        <span className="text-[10px] font-body tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
