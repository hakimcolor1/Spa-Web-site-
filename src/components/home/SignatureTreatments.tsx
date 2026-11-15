'use client';

import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { treatments } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function SignatureTreatments() {
  const featured = treatments.filter((t) => t.featured).slice(0, 4);

  return (
    <section className="bg-[#E8DCCB]/40 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Signature Treatments</SectionLabel>
              <h2 className="font-heading font-light text-[#243C32] leading-tight">
                <span className="block text-4xl lg:text-5xl">
                  Treatments crafted
                </span>
                <span className="block text-4xl lg:text-5xl italic text-[#B69A65]">
                  for your skin.
                </span>
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#243C32] hover:text-[#B69A65] transition-colors group shrink-0"
            >
              View all treatments
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((treatment, i) => (
            <RevealOnScroll key={treatment.id} delay={i * 120} y={40}>
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group bg-[#F8F5EF] overflow-hidden hover:shadow-xl transition-all duration-300 block h-full"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243C32]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <Badge variant="sage" className="mb-3">
                    {treatment.category}
                  </Badge>
                  <h3 className="font-heading text-xl text-[#243C32] font-light mb-2 group-hover:text-[#B69A65] transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-sm font-body text-[#262622]/60 leading-relaxed mb-4 line-clamp-2">
                    {treatment.shortDescription}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8DCCB]">
                    <div className="flex items-center gap-1.5 text-xs font-body text-[#A9B7A4]">
                      <Clock size={12} />
                      <span>{treatment.duration} min</span>
                    </div>
                    <span className="text-sm font-body font-medium text-[#243C32]">
                      from £{treatment.price}
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
