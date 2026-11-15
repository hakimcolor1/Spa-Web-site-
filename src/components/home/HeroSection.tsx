'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=85',
    eyebrow: 'Luxury Skincare Studio · London',
    title: ['Your Skin', 'Deserves a', 'Moment of', 'Stillness.'],
    titleStyles: ['', 'italic text-[#E8DCCB]', '', 'text-[#B69A65]'],
    description:
      "Lumière is a premier luxury skincare studio offering bespoke facial treatments crafted for your skin's unique needs, in an atmosphere of pure tranquillity.",
  },
  {
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=85',
    eyebrow: 'Advanced Facial Therapy',
    title: ['Reveal Your', "Skin's Natural", 'Radiance', 'Again.'],
    titleStyles: ['', '', 'italic text-[#E8DCCB]', 'text-[#B69A65]'],
    description:
      "From deep hydration to anti-aging precision, every Lumière treatment is designed to restore your skin's health and natural luminosity.",
  },
  {
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1800&q=85',
    eyebrow: 'Bespoke Wellness Experience',
    title: ['Where Science', 'Meets the', 'Art of', 'Skincare.'],
    titleStyles: ['', 'italic text-[#E8DCCB]', '', 'text-[#B69A65]'],
    description:
      'Our specialists combine clinical-grade formulations with time-honoured wellness practices for results you can see and feel.',
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goNext = () => setCurrent((c) => (c + 1) % slides.length);
  const goPrev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#243C32]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider background images */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt="Lumière Spa"
              className="w-full h-full object-cover object-center"
              style={{ opacity: 0.45 }}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#243C32]/90 via-[#243C32]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#243C32]/80 via-transparent to-transparent" />

      {/* Decorative circles */}
      <div
        className="absolute top-24 right-16 w-64 h-64 rounded-full border border-[#B69A65]/20 hidden lg:block animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div className="absolute top-32 right-24 w-44 h-44 rounded-full border border-[#A9B7A4]/15 hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-[#B69A65]/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === current
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute pointer-events-none'
              }`}
            >
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#B69A65] mb-6">
                {slide.eyebrow}
              </p>
              <h1 className="font-heading font-light leading-[1.05] text-[#F8F5EF] mb-8">
                {slide.title.map((line, li) => (
                  <span
                    key={li}
                    className={`block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ${slide.titleStyles[li]}`}
                    style={{
                      transitionDelay: `${li * 100}ms`,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-base sm:text-lg font-body font-light text-[#A9B7A4] leading-relaxed mb-10 max-w-lg">
                {slide.description}
              </p>
            </div>
          ))}

          {/* CTA buttons - persistent across slides */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#B69A65] text-white px-8 py-4 text-sm font-body font-medium tracking-wide hover:bg-[#a08855] transition-all duration-300 group"
            >
              Book Your Treatment
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
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
              { value: '10+', label: 'Years of excellence' },
              { value: '4,000+', label: 'Clients served' },
              { value: '4.9★', label: 'Average rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl text-[#F8F5EF] font-light">
                  {stat.value}
                </p>
                <p className="text-xs font-body text-[#A9B7A4] tracking-wide mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 right-8 lg:right-12 flex items-center gap-4 z-20">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-[#B69A65]'
                  : 'w-4 bg-[#A9B7A4]/40 hover:bg-[#A9B7A4]'
              }`}
            />
          ))}
        </div>
        {/* Arrows */}
        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="w-9 h-9 border border-[#A9B7A4]/30 flex items-center justify-center text-[#A9B7A4] hover:border-[#B69A65] hover:text-[#B69A65] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="w-9 h-9 border border-[#A9B7A4]/30 flex items-center justify-center text-[#A9B7A4] hover:border-[#B69A65] hover:text-[#B69A65] transition-colors"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 lg:left-10 z-20 hidden lg:flex flex-col items-center gap-3">
        <span className="font-heading text-3xl text-[#B69A65] font-light">
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="w-px h-16 bg-[#A9B7A4]/30" />
        <span className="font-heading text-sm text-[#A9B7A4] font-light">
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A9B7A4]">
        <span className="text-[10px] font-body tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
