import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PhilosophySection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1800&q=85"
          alt="Lumière philosophy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#243C32]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#B69A65] mb-6">
          Our Philosophy
        </p>
        <h2 className="font-heading font-light text-[#F8F5EF] text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
          "Skin health is not a destination.
          <br />
          <span className="italic text-[#B69A65]">It is a practice."</span>
        </h2>
        <p className="text-base font-body text-[#A9B7A4] leading-relaxed mb-10 max-w-2xl mx-auto">
          At Lumière, we believe beautiful skin is the cumulative result of consistent, expert care paired with a genuine understanding of your skin's ever-changing needs. We are not in the business of quick fixes — we are committed to your skin's long-term health.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 border border-[#F8F5EF]/30 text-[#F8F5EF] px-8 py-4 text-sm font-body font-medium tracking-wide hover:bg-[#F8F5EF]/10 transition-all duration-300 group"
        >
          Read Our Story
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
