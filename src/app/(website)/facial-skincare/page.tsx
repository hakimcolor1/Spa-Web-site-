"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { treatments } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const skinConcerns = [
  {
    id: "acne",
    label: "Acne-Prone",
    icon: "🔴",
    description: "Skin that frequently breaks out with spots, blackheads, or whiteheads. Can be caused by excess sebum, bacteria, hormones, or diet.",
    recommendedTreatments: ["Deep Cleansing Facial", "Brightening Treatment"],
    tips: ["Use non-comedogenic products", "Avoid over-cleansing", "Change pillowcases regularly", "Professional extractions only"],
  },
  {
    id: "dry",
    label: "Dry Skin",
    icon: "💧",
    description: "Skin that lacks sufficient natural moisture, often feeling tight, rough, or flaky. The skin barrier may be compromised.",
    recommendedTreatments: ["Hydrating Facial", "Sensitive Skin Therapy"],
    tips: ["Layer hydrating serums", "Use occlusive moisturisers at night", "Avoid hot water on skin", "Drink 2L of water daily"],
  },
  {
    id: "oily",
    label: "Oily Skin",
    icon: "✨",
    description: "Overproduction of sebum resulting in a shiny appearance, enlarged pores, and increased likelihood of breakouts.",
    recommendedTreatments: ["Deep Cleansing Facial", "Brightening Treatment"],
    tips: ["Use gel-based moisturisers", "Don't skip hydration", "Blotting papers for midday shine", "Clay masks 1–2x per week"],
  },
  {
    id: "sensitive",
    label: "Sensitive",
    icon: "🌸",
    description: "Skin that reacts easily to products or environmental factors with redness, itching, or irritation. The skin barrier is often weaker.",
    recommendedTreatments: ["Sensitive Skin Therapy", "Hydrating Facial"],
    tips: ["Patch test all new products", "Use fragrance-free formulas", "Introduce actives slowly", "Minimal ingredient lists"],
  },
  {
    id: "uneven",
    label: "Uneven Tone",
    icon: "🌟",
    description: "Patches of darker or lighter skin, post-inflammatory hyperpigmentation from breakouts, or sun damage that affects colour uniformity.",
    recommendedTreatments: ["Brightening Treatment", "Luxury Glow Facial"],
    tips: ["Wear SPF every day", "Use vitamin C in the morning", "Niacinamide helps evening tone", "Avoid picking spots"],
  },
  {
    id: "aging",
    label: "Signs of Aging",
    icon: "⏱",
    description: "Fine lines, wrinkles, loss of firmness, and reduced skin elasticity that come with age and environmental exposure.",
    recommendedTreatments: ["Anti-Aging Facial", "Luxury Glow Facial"],
    tips: ["Start retinol early", "Peptides for collagen support", "SPF is the best anti-aging product", "Facial massage increases circulation"],
  },
];

const faqs = [
  { q: "How often should I get a professional facial?", a: "Most clients benefit from a monthly facial, which aligns with the skin's natural 28-day renewal cycle. However, your specialist will recommend a frequency based on your specific skin type and goals." },
  { q: "Will a facial make my acne worse?", a: "A professionally performed facial should not worsen acne. In fact, our Deep Cleansing Facial is designed specifically for acne-prone skin. We always begin with a consultation to ensure the treatment is appropriate for your current skin condition." },
  { q: "What is the difference between a facial and a skincare routine?", a: "Your home skincare routine maintains your skin's condition daily. A professional facial provides clinical-level treatments that your home routine cannot replicate — including professional extraction, deeper exfoliation, and high-concentration active ingredients applied by a trained specialist." },
  { q: "At what age should I start professional facials?", a: "There is no minimum age. Teenagers can benefit from deep cleansing treatments, while clients in their twenties may focus on prevention and hydration. Our specialists tailor treatments to every age and skin concern." },
];

export default function FacialSkincareePage() {
  const [activeConcern, setActiveConcern] = useState(skinConcerns[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const concernTreatments = treatments.filter((t) =>
    activeConcern.recommendedTreatments.includes(t.name)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden bg-[#243C32]">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=85"
          alt="Facial skincare"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32] via-[#243C32]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <SectionLabel light>Education & Expertise</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Facial & Skincare
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Why Professional Care Matters</SectionLabel>
              <h2 className="font-heading font-light text-[#243C32] text-4xl lg:text-5xl leading-tight mb-6">
                What your home routine <span className="italic text-[#B69A65]">cannot do alone.</span>
              </h2>
              <p className="text-base font-body text-[#262622]/70 leading-relaxed mb-5">
                A well-designed home skincare routine is essential. But there are limits to what you can achieve without professional intervention. Clinical-grade exfoliants, professional extraction techniques, and high-concentration serums applied by trained hands go deeper than any at-home treatment.
              </p>
              <p className="text-base font-body text-[#262622]/70 leading-relaxed">
                Our specialists are trained to read your skin's real condition — not just what you see in the mirror — and design treatments that address the underlying causes of your concerns, not just their surface appearance.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=85"
              alt="Skincare science"
              className="aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skin concern selector */}
      <section className="bg-[#E8DCCB]/40 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Your Skin, Your Treatment</SectionLabel>
          <h2 className="font-heading font-light text-[#243C32] text-4xl mb-10">
            Find the right <span className="italic text-[#B69A65]">treatment for your concern.</span>
          </h2>

          {/* Concern tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {skinConcerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => setActiveConcern(concern)}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-body font-medium transition-all duration-200 border ${
                  activeConcern.id === concern.id
                    ? "bg-[#243C32] text-[#F8F5EF] border-[#243C32]"
                    : "bg-white text-[#262622] border-[#E8DCCB] hover:border-[#243C32]"
                }`}
              >
                {concern.label}
              </button>
            ))}
          </div>

          {/* Active concern content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-8">
              <h3 className="font-heading text-2xl text-[#243C32] font-light mb-4">{activeConcern.label} Skin</h3>
              <p className="text-sm font-body text-[#262622]/65 leading-relaxed mb-6">{activeConcern.description}</p>
              <h4 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-3">Skincare Tips</h4>
              <ul className="space-y-2">
                {activeConcern.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm font-body text-[#262622]/65">
                    <span className="text-[#B69A65] mt-0.5">—</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-5">
                Recommended Treatments
              </h4>
              {concernTreatments.length > 0 ? (
                <div className="space-y-4">
                  {concernTreatments.map((t) => (
                    <Link key={t.id} href={`/treatments/${t.slug}`} className="group flex gap-5 bg-white p-4 border border-[#E8DCCB] hover:border-[#A9B7A4] transition-colors">
                      <img src={t.image} alt={t.name} className="w-20 h-20 object-cover shrink-0" />
                      <div>
                        <h5 className="font-heading text-lg text-[#243C32] font-light group-hover:text-[#B69A65] transition-colors mb-1">{t.name}</h5>
                        <p className="text-xs font-body text-[#262622]/60 line-clamp-2">{t.shortDescription}</p>
                        <p className="text-xs font-body text-[#B69A65] mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight size={11} />
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-body text-[#A9B7A4]">Consult with a specialist for personalised recommendations.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading font-light text-[#243C32] text-4xl mb-10">
            Frequently asked <span className="italic text-[#B69A65]">questions.</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#E8DCCB] bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-body font-medium text-sm text-[#243C32]">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-[#B69A65] shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-[#A9B7A4] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm font-body text-[#262622]/65 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-light text-[#F8F5EF] text-4xl mb-5">
            Start with a <span className="italic text-[#B69A65]">skin consultation.</span>
          </h2>
          <p className="text-sm font-body text-[#A9B7A4] mb-8 leading-relaxed">
            Our specialists will assess your skin, discuss your concerns, and recommend the ideal treatment plan — complimentary with every first visit.
          </p>
          <Button href="/book" variant="gold" size="lg">Book a Consultation</Button>
        </div>
      </section>
    </>
  );
}
