import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { membershipPlans } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join Lumière's membership programme for consistent access to luxury skincare treatments at exceptional value.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden bg-[#243C32]">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=85"
          alt="Membership"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32] via-[#243C32]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <SectionLabel light>Membership</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Invest in your skin.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F8F5EF] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-base font-body text-[#262622]/65 leading-relaxed">
            Lumière membership gives you consistent, affordable access to the treatments your skin needs — every month. Beyond the financial value, members enjoy priority booking, exclusive offers, and a dedicated relationship with your specialist.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#F8F5EF] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col border ${
                  plan.popular
                    ? "border-[#B69A65] bg-[#243C32]"
                    : "border-[#E8DCCB] bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 bg-[#B69A65] px-4 py-1">
                    <span className="text-[10px] font-body font-medium tracking-widest uppercase text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  <p className={`text-xs font-body font-medium tracking-[0.2em] uppercase mb-3 ${plan.popular ? "text-[#B69A65]" : "text-[#A9B7A4]"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`font-heading text-6xl font-light ${plan.popular ? "text-[#F8F5EF]" : "text-[#243C32]"}`}>
                      £{plan.price}
                    </span>
                    <span className={`text-sm font-body ${plan.popular ? "text-[#A9B7A4]" : "text-[#262622]/50"}`}>
                      /month
                    </span>
                  </div>
                  <p className={`text-sm font-body leading-relaxed mb-8 ${plan.popular ? "text-[#A9B7A4]" : "text-[#262622]/60"}`}>
                    {plan.description}
                  </p>
                  <div className={`w-full h-px mb-8 ${plan.popular ? "bg-[#A9B7A4]/20" : "bg-[#E8DCCB]"}`} />
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={15} className={`mt-0.5 shrink-0 ${plan.popular ? "text-[#B69A65]" : "text-[#243C32]"}`} />
                        <span className={`text-sm font-body leading-snug ${plan.popular ? "text-[#E8DCCB]" : "text-[#262622]/70"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/book"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 text-sm font-body font-medium tracking-wide transition-all duration-200 group ${
                      plan.popular
                        ? "bg-[#B69A65] text-white hover:bg-[#a08855]"
                        : "border border-[#243C32] text-[#243C32] hover:bg-[#243C32] hover:text-white"
                    }`}
                  >
                    Get Started <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#E8DCCB]/40 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Member Benefits</SectionLabel>
          <h2 className="font-heading font-light text-[#243C32] text-4xl mb-10">
            More than just <span className="italic text-[#B69A65]">treatments.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Priority Booking", text: "Members access the booking calendar before general availability." },
              { title: "Exclusive Discounts", text: "Reduced rates on additional treatments and retail products." },
              { title: "Dedicated Specialist", text: "Premium members are assigned a dedicated specialist who knows your skin." },
              { title: "Member Events", text: "Invitations to private skincare evenings, launches, and masterclasses." },
            ].map((b) => (
              <div key={b.title} className="bg-white p-6">
                <h4 className="font-body font-semibold text-sm text-[#243C32] mb-2">{b.title}</h4>
                <p className="text-xs font-body text-[#262622]/60 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
