'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { StarRating } from '@/components/ui/StarRating';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-[#243C32] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: featured testimonial */}
          <RevealOnScroll y={40}>
            <div>
              <SectionLabel light>Client Reviews</SectionLabel>
              <h2 className="font-heading font-light text-[#F8F5EF] text-4xl lg:text-5xl leading-tight mb-12">
                <span className="block">What our clients</span>
                <span className="block italic text-[#B69A65]">
                  say about us.
                </span>
              </h2>

              {/* Large quote */}
              <div className="relative">
                <span className="font-heading text-[120px] leading-none text-[#B69A65]/20 absolute -top-8 -left-4 select-none">
                  "
                </span>
                <div className="relative z-10">
                  <StarRating
                    rating={testimonials[current].rating}
                    size={16}
                    className="mb-5"
                  />
                  <p className="font-heading text-xl text-[#F8F5EF] font-light leading-relaxed mb-6 italic">
                    {testimonials[current].review}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#B69A65] flex items-center justify-center font-heading text-white font-medium">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#F8F5EF]">
                        {testimonials[current].name}
                      </p>
                      <p className="text-xs font-body text-[#A9B7A4]">
                        {testimonials[current].treatment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-[#A9B7A4]/30 flex items-center justify-center text-[#A9B7A4] hover:border-[#B69A65] hover:text-[#B69A65] transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs font-body text-[#A9B7A4]">
                  {current + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-[#A9B7A4]/30 flex items-center justify-center text-[#A9B7A4] hover:border-[#B69A65] hover:text-[#B69A65] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: grid of mini reviews */}
          <RevealOnScroll y={40} delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {testimonials.slice(0, 4).map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setCurrent(i)}
                  className={`text-left p-5 border transition-all duration-200 ${
                    current === i
                      ? 'border-[#B69A65] bg-[#B69A65]/10'
                      : 'border-[#A9B7A4]/20 hover:border-[#A9B7A4]/50'
                  }`}
                >
                  <StarRating rating={t.rating} size={12} className="mb-3" />
                  <p className="text-xs font-body text-[#A9B7A4] leading-relaxed line-clamp-3 mb-3">
                    "{t.review}"
                  </p>
                  <p className="text-xs font-body font-semibold text-[#E8DCCB]">
                    {t.name}
                  </p>
                  <p className="text-[10px] font-body text-[#A9B7A4]/70">
                    {t.treatment}
                  </p>
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
