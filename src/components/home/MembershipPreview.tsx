import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { membershipPlans } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function MembershipPreview() {
  return (
    <section className="bg-[#F8F5EF] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <SectionLabel>Membership</SectionLabel>
          <h2 className="font-heading font-light text-[#243C32] leading-tight">
            <span className="block text-4xl lg:text-5xl">Invest in your skin,</span>
            <span className="block text-4xl lg:text-5xl italic text-[#B69A65]">every month.</span>
          </h2>
          <p className="text-base font-body text-[#262622]/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Our membership programmes give you consistent access to luxury treatments at exceptional value, with exclusive benefits designed for committed skin health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col border transition-shadow hover:shadow-lg duration-300 ${
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

              <div className="p-8 border-b border-[#E8DCCB]/30 flex-1">
                <p
                  className={`text-xs font-body font-medium tracking-[0.2em] uppercase mb-3 ${
                    plan.popular ? "text-[#B69A65]" : "text-[#A9B7A4]"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`font-heading text-5xl font-light ${
                      plan.popular ? "text-[#F8F5EF]" : "text-[#243C32]"
                    }`}
                  >
                    £{plan.price}
                  </span>
                  <span
                    className={`text-sm font-body ${plan.popular ? "text-[#A9B7A4]" : "text-[#262622]/50"}`}
                  >
                    /month
                  </span>
                </div>
                <p
                  className={`text-sm font-body leading-relaxed mb-6 ${
                    plan.popular ? "text-[#A9B7A4]" : "text-[#262622]/60"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${plan.popular ? "text-[#B69A65]" : "text-[#243C32]"}`}
                      />
                      <span
                        className={`text-sm font-body leading-snug ${
                          plan.popular ? "text-[#E8DCCB]" : "text-[#262622]/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6">
                <Link
                  href="/membership"
                  className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-body font-medium tracking-wide transition-all duration-200 group ${
                    plan.popular
                      ? "bg-[#B69A65] text-white hover:bg-[#a08855]"
                      : "border border-[#243C32] text-[#243C32] hover:bg-[#243C32] hover:text-white"
                  }`}
                >
                  Get Started
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#243C32] hover:text-[#B69A65] transition-colors group border-b border-[#243C32]/30 pb-0.5"
          >
            Compare all membership benefits
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
