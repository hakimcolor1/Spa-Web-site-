import { Award, Heart, Leaf, Shield, Sparkles, Users } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    icon: Award,
    title: "Expert Specialists",
    description: "Each of our therapists holds advanced certifications and brings a minimum of five years of professional skincare experience.",
  },
  {
    icon: Heart,
    title: "Personalised Treatments",
    description: "No two skins are the same. Every visit begins with a thorough consultation to tailor your treatment precisely.",
  },
  {
    icon: Leaf,
    title: "Premium Formulations",
    description: "We use only clinical-grade, ethically sourced skincare brands — cruelty-free, sustainably produced, and genuinely effective.",
  },
  {
    icon: Shield,
    title: "Pristine Treatment Rooms",
    description: "Our treatment rooms are individually climate-controlled and sanitised to the highest professional standards.",
  },
  {
    icon: Sparkles,
    title: "Restorative Atmosphere",
    description: "From the moment you arrive, every detail — the light, the scent, the sound — is designed for genuine relaxation.",
  },
  {
    icon: Users,
    title: "Skin Consultations",
    description: "Individual skin analysis with every appointment, building a long-term skincare programme unique to you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#F8F5EF] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=85"
                alt="Why choose Lumière"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stat overlay */}
            <div className="absolute bottom-8 -right-6 bg-[#243C32] p-6 hidden lg:block">
              <p className="font-heading text-5xl text-[#B69A65] font-light">98%</p>
              <p className="text-xs font-body text-[#A9B7A4] tracking-wide mt-1">Client satisfaction rate</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionLabel>Why Lumière</SectionLabel>
            <h2 className="font-heading font-light text-[#243C32] leading-tight mb-10">
              <span className="block text-4xl lg:text-5xl">Where expertise</span>
              <span className="block text-4xl lg:text-5xl italic text-[#B69A65]">meets intention.</span>
            </h2>

            <div className="space-y-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex items-start gap-5">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#243C32]" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-[#243C32] text-sm mb-1">{reason.title}</h3>
                      <p className="text-sm font-body text-[#262622]/60 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
