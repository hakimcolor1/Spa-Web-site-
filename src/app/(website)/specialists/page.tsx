import type { Metadata } from "next";
import Link from "next/link";
import { specialists } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Specialists",
  description: "Meet the expert skincare specialists at Lumière Spa — trained professionals dedicated to your skin's health.",
};

export default function SpecialistsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden bg-[#243C32]">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85"
          alt="Our team"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32] via-[#243C32]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <SectionLabel light>The Team</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Our Specialists
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-base font-body text-[#262622]/65 max-w-2xl mb-14 leading-relaxed">
            Every Lumière specialist brings exceptional training, genuine passion, and a commitment to continuous learning. We select our team not only for their technical expertise but for their ability to make each client feel truly seen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((s) => (
              <Link key={s.id} href={`/specialists/${s.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-5">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-heading text-xl text-[#243C32] font-light group-hover:text-[#B69A65] transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs font-body text-[#B69A65] tracking-wide mt-0.5 mb-3">{s.designation}</p>
                <p className="text-sm font-body text-[#262622]/60 mb-3">{s.experience} years experience</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.expertise.slice(0, 2).map((e) => (
                    <Badge key={e} variant="sage">{e}</Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-light text-[#F8F5EF] text-4xl mb-5">
            Book with your <span className="italic text-[#B69A65]">preferred specialist.</span>
          </h2>
          <p className="text-sm font-body text-[#A9B7A4] mb-8 leading-relaxed">
            Select your treatment, choose your specialist, and book your appointment — all in a few minutes.
          </p>
          <Button href="/book" variant="gold" size="lg">Book an Appointment</Button>
        </div>
      </section>
    </>
  );
}
