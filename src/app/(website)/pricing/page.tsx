import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { treatments, packages } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description: "Transparent pricing for all Lumière treatments and curated packages designed for complete skin transformation.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>Pricing</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Transparent pricing. <span className="italic text-[#B69A65]">Exceptional value.</span>
          </h1>
          <p className="text-base font-body text-[#A9B7A4] mt-5 max-w-xl leading-relaxed">
            Every price reflects the quality of our formulations, the expertise of our specialists, and the experience we deliver. No hidden fees, no surprise charges.
          </p>
        </div>
      </section>

      {/* Individual treatments */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Individual Treatments</SectionLabel>
          <h2 className="font-heading font-light text-[#243C32] text-3xl mb-10">All Treatments</h2>
          <div className="border border-[#E8DCCB]">
            {treatments.map((t, i) => (
              <div
                key={t.id}
                className={`flex items-center justify-between gap-4 px-6 py-5 ${
                  i < treatments.length - 1 ? "border-b border-[#E8DCCB]" : ""
                } hover:bg-[#F8F5EF]/80 transition-colors group`}
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-14 h-14 overflow-hidden shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-sm text-[#243C32] group-hover:text-[#B69A65] transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs font-body text-[#A9B7A4] mt-0.5">{t.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-xs font-body text-[#A9B7A4] hidden sm:flex">
                    <Clock size={12} />
                    <span>{t.duration} min</span>
                  </div>
                  <span className="font-body font-semibold text-sm text-[#243C32] min-w-[70px] text-right">
                    from £{t.price}
                  </span>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="hidden md:flex items-center gap-1 text-xs font-body text-[#B69A65] hover:text-[#243C32] transition-colors"
                  >
                    Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[#E8DCCB]/40 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Packages</SectionLabel>
          <h2 className="font-heading font-light text-[#243C32] text-4xl mb-10">
            Curated treatment <span className="italic text-[#B69A65]">packages.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white border border-[#E8DCCB] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[16/7] overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-2xl text-[#243C32] font-light">{pkg.name}</h3>
                    <span className="flex items-center gap-1 text-xs font-body font-medium bg-[#243C32]/10 text-[#243C32] px-3 py-1">
                      <Tag size={11} /> Save £{pkg.savings}
                    </span>
                  </div>
                  <p className="text-sm font-body text-[#262622]/60 leading-relaxed mb-5">{pkg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pkg.treatments.map((t) => (
                      <span key={t} className="text-xs font-body bg-[#E8DCCB] text-[#262622] px-3 py-1">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-[#E8DCCB]">
                    <div>
                      <p className="text-xs font-body text-[#A9B7A4] flex items-center gap-1">
                        <Clock size={11} /> {pkg.totalDuration} min total
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-heading text-2xl text-[#243C32] font-light">£{pkg.packagePrice}</span>
                        <span className="text-sm font-body text-[#A9B7A4] line-through">£{pkg.originalPrice}</span>
                      </div>
                    </div>
                    <Button href="/book" size="sm">Book Package</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
