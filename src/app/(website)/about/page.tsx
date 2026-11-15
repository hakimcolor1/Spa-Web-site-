import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { specialists } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story behind Lumière Spa — our philosophy, our specialists, and our commitment to luxury skincare.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden bg-[#243C32]">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=85"
          alt="Lumière spa interior"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32] via-[#243C32]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <SectionLabel light>About Lumière</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-7xl leading-none">
            Our Story
          </h1>
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-[#F8F5EF] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-heading font-light text-[#243C32] text-4xl lg:text-5xl leading-tight mb-8">
                Founded on a belief that great skin is everyone's right.
              </h2>
              <p className="text-base font-body text-[#262622]/70 leading-relaxed mb-5">
                Lumière was born from a simple, deeply held conviction:
                professional skincare should be accessible, evidence-based, and
                genuinely transformative. Our founders, Aria Chen and Sophie
                Laurent, opened Lumière's first studio in Mayfair in 2016 with a
                small team and an enormous ambition.
              </p>
              <p className="text-base font-body text-[#262622]/70 leading-relaxed mb-5">
                Over a decade, that ambition has evolved into one of London's
                most respected skincare studios. We have served over four
                thousand clients, performed countless thousands of treatments,
                and built a reputation based entirely on results and genuine
                care.
              </p>
              <p className="text-base font-body text-[#262622]/70 leading-relaxed">
                What has not changed is our approach: take the time to
                understand each client's skin, design a treatment plan around
                their real needs, and deliver it with the precision and warmth
                that great skincare demands.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=85"
                  alt="Treatment in progress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-10 aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=85"
                  alt="Skincare products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#E8DCCB]/40 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                label: 'Our Mission',
                title: 'Elevate skin health through expertise.',
                text: 'To provide every client with a bespoke, evidence-based skincare experience that delivers visible, lasting results — in an environment of genuine luxury and care.',
              },
              {
                label: 'Our Vision',
                title: 'Redefine what a spa can be.',
                text: 'We envision a world where professional skincare is not a periodic indulgence, but an integrated part of a healthy, beautiful life. Lumière is building that future, one treatment at a time.',
              },
              {
                label: 'Our Values',
                title: 'Expertise, integrity, beauty.',
                text: 'We never compromise on ingredient quality, treatment efficacy, or client care. Our values guide every decision, from the brands we choose to the specialists we hire.',
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 120} y={40}>
                <div className="bg-white p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <SectionLabel>{item.label}</SectionLabel>
                  <h3 className="font-heading text-2xl text-[#243C32] font-light mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm font-body text-[#262622]/65 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="bg-[#F8F5EF] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <RevealOnScroll>
            <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <SectionLabel>The Team</SectionLabel>
                <h2 className="font-heading font-light text-[#243C32] text-4xl lg:text-5xl leading-tight">
                  Meet our{' '}
                  <span className="italic text-[#B69A65]">specialists.</span>
                </h2>
              </div>
              <Link
                href="/specialists"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#243C32] hover:text-[#B69A65] transition-colors group shrink-0"
              >
                View all specialists{' '}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((s, i) => (
              <RevealOnScroll key={s.id} delay={i * 120} y={50}>
                <Link
                  href={`/specialists/${s.slug}`}
                  className="group block bg-white border border-[#E8DCCB] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#243C32]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {/* Hover overlay */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-body text-[#B69A65] bg-[#243C32]/80 px-3 py-1.5 backdrop-blur-sm">
                        View Profile →
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-heading text-xl text-[#243C32] font-light group-hover:text-[#B69A65] transition-colors mb-0.5">
                      {s.name}
                    </h3>
                    <p className="text-xs font-body text-[#B69A65] tracking-wide font-medium mb-3">
                      {s.designation}
                    </p>
                    <div className="flex items-center gap-3 mb-3 text-xs font-body text-[#A9B7A4]">
                      <span>{s.experience}+ years</span>
                      <span className="w-1 h-1 rounded-full bg-[#E8DCCB]" />
                      <span>{s.expertise[0]}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {s.expertise.slice(0, 2).map((e) => (
                        <span
                          key={e}
                          className="text-[10px] font-body font-medium bg-[#E8DCCB]/60 text-[#243C32] px-2 py-0.5 tracking-wide"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-light text-[#F8F5EF] text-4xl mb-5">
            Ready to begin your{' '}
            <span className="italic text-[#B69A65]">skin journey?</span>
          </h2>
          <p className="text-sm font-body text-[#A9B7A4] mb-8 leading-relaxed">
            Book a complimentary skin consultation with one of our specialists
            and discover the treatment plan that is right for you.
          </p>
          <Button href="/book" variant="gold" size="lg">
            Book Your Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
