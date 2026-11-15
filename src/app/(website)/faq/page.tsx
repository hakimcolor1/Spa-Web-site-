"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>Help & Information</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Frequently Asked <span className="italic text-[#B69A65]">Questions.</span>
          </h1>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-1.5 text-xs font-body font-medium border transition-all ${
                activeCategory === "All" ? "bg-[#243C32] text-[#F8F5EF] border-[#243C32]" : "border-[#E8DCCB] text-[#262622] hover:border-[#243C32]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-body font-medium border transition-all ${
                  activeCategory === cat ? "bg-[#243C32] text-[#F8F5EF] border-[#243C32]" : "border-[#E8DCCB] text-[#262622] hover:border-[#243C32]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((faq) => (
              <div key={faq.id} className="border border-[#E8DCCB] bg-white">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-body font-medium text-sm text-[#243C32]">{faq.question}</span>
                  {openId === faq.id ? (
                    <ChevronUp size={16} className="text-[#B69A65] shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-[#A9B7A4] shrink-0" />
                  )}
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="w-8 h-px bg-[#B69A65] mb-4" />
                    <p className="text-sm font-body text-[#262622]/65 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-14 bg-[#243C32] p-10 text-center">
            <h3 className="font-heading text-2xl text-[#F8F5EF] font-light mb-3">
              Still have questions?
            </h3>
            <p className="text-sm font-body text-[#A9B7A4] mb-6 leading-relaxed">
              Our team is happy to help with any questions about treatments, bookings, or memberships.
            </p>
            <Button href="/contact" variant="gold">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
