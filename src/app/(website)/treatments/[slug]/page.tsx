import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight, Check } from "lucide-react";
import { treatments, specialists } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return {};
  return {
    title: treatment.name,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const related = treatments.filter((t) => t.id !== treatment.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32]/95 via-[#243C32]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <Badge variant="sage" className="mb-4">{treatment.category}</Badge>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl mb-4">{treatment.name}</h1>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-body text-[#A9B7A4]">
              <Clock size={14} />
              <span>{treatment.duration} minutes</span>
            </div>
            <span className="text-sm font-body font-medium text-[#B69A65]">from £{treatment.price}</span>
            <div className="flex items-center gap-2">
              <StarRating rating={treatment.rating} size={14} />
              <span className="text-xs font-body text-[#A9B7A4]">({treatment.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8F5EF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <SectionLabel>About This Treatment</SectionLabel>
                <p className="text-base font-body text-[#262622]/70 leading-relaxed">{treatment.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <SectionLabel>Benefits</SectionLabel>
                <ul className="space-y-3">
                  {treatment.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check size={16} className="text-[#243C32] mt-0.5 shrink-0" />
                      <span className="text-sm font-body text-[#262622]/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <SectionLabel>The Process</SectionLabel>
                <div className="space-y-5">
                  {treatment.process.map((step) => (
                    <div key={step.step} className="flex gap-5">
                      <div className="w-8 h-8 bg-[#243C32] flex items-center justify-center shrink-0 font-body text-xs text-[#F8F5EF] font-medium">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-sm text-[#243C32] mb-1">{step.title}</h4>
                        <p className="text-sm font-body text-[#262622]/65 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable for */}
              <div>
                <SectionLabel>Suitable For</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {treatment.suitableFor.map((s) => (
                    <Badge key={s} variant="champagne">{s}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book card */}
              <div className="bg-[#243C32] p-8 sticky top-24">
                <h3 className="font-heading text-2xl text-[#F8F5EF] font-light mb-2">{treatment.name}</h3>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#A9B7A4]/20">
                  <span className="text-sm font-body text-[#A9B7A4]">{treatment.duration} min</span>
                  <span className="font-heading text-2xl text-[#B69A65] font-light">£{treatment.price}</span>
                </div>
                <Button href="/book" variant="gold" size="lg" className="w-full mb-3">
                  Book This Treatment
                </Button>
                <Button href="/contact" variant="outline" size="md" className="w-full border-[#A9B7A4]/40 text-[#E8DCCB] hover:bg-[#F8F5EF]/10 hover:text-[#F8F5EF]">
                  Ask a Question
                </Button>
                <p className="text-xs font-body text-[#A9B7A4] text-center mt-4">
                  Free consultation included
                </p>
              </div>

              {/* Specialists */}
              <div className="bg-white border border-[#E8DCCB] p-6">
                <h4 className="font-body font-semibold text-sm text-[#243C32] mb-4 tracking-wide uppercase">
                  Available Specialists
                </h4>
                <div className="space-y-4">
                  {specialists.slice(0, 2).map((s) => (
                    <div key={s.id} className="flex items-center gap-3">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <p className="text-sm font-body font-medium text-[#243C32]">{s.name}</p>
                        <p className="text-xs font-body text-[#A9B7A4]">{s.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/specialists"
                  className="inline-flex items-center gap-1.5 text-xs font-body text-[#B69A65] mt-4 hover:underline"
                >
                  View all specialists <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related treatments */}
      <section className="bg-[#E8DCCB]/40 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-heading font-light text-[#243C32] text-3xl mb-10">
            You might also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((t) => (
              <Link key={t.id} href={`/treatments/${t.slug}`} className="group bg-white overflow-hidden border border-[#E8DCCB]">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-[#243C32] font-light group-hover:text-[#B69A65] transition-colors mb-1">
                    {t.name}
                  </h3>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E8DCCB]">
                    <span className="text-xs font-body text-[#A9B7A4] flex items-center gap-1">
                      <Clock size={11} /> {t.duration} min
                    </span>
                    <span className="text-sm font-body font-medium text-[#243C32]">£{t.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
