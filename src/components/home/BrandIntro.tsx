import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BrandIntro() {
  return (
    <section className="bg-[#F8F5EF] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85"
                alt="Lumière skincare treatment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Offset second image */}
            <div className="absolute -bottom-8 -right-8 w-2/5 aspect-square overflow-hidden border-4 border-[#F8F5EF] hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=85"
                alt="Skincare products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Year badge */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#243C32] flex flex-col items-center justify-center hidden lg:flex">
              <span className="font-heading text-3xl text-[#B69A65] font-light leading-none">10</span>
              <span className="text-[9px] font-body tracking-widest uppercase text-[#A9B7A4] mt-0.5">years</span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-10">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-heading font-light text-[#243C32] leading-tight mb-6">
              <span className="block text-4xl lg:text-5xl">Skincare rooted</span>
              <span className="block text-4xl lg:text-5xl italic text-[#B69A65]">in science,</span>
              <span className="block text-4xl lg:text-5xl">elevated by ritual.</span>
            </h2>
            <p className="text-base font-body text-[#262622]/70 leading-relaxed mb-5">
              Lumière was founded on a simple belief: that great skin is not a luxury — it is the result of consistent, expert care delivered in an environment designed for genuine relaxation.
            </p>
            <p className="text-base font-body text-[#262622]/70 leading-relaxed mb-8">
              For over a decade, our specialists have combined the finest skincare science with time-honoured wellness practices, creating treatments that deliver visible results and lasting wellbeing.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: "Personalised", desc: "Every treatment adapts to your skin's specific needs" },
                { title: "Evidence-based", desc: "Clinical-grade ingredients and proven protocols" },
                { title: "Holistic", desc: "Skin health connected to overall wellbeing" },
                { title: "Ethical", desc: "Cruelty-free, sustainable formulations" },
              ].map((v) => (
                <div key={v.title}>
                  <p className="text-sm font-body font-semibold text-[#243C32] mb-1">{v.title}</p>
                  <p className="text-xs font-body text-[#262622]/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#243C32] hover:text-[#B69A65] transition-colors duration-200 group border-b border-[#243C32]/30 pb-0.5 hover:border-[#B69A65]"
            >
              Discover Our Story
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
