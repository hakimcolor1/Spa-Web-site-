"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-[#E8DCCB] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionLabel>Newsletter</SectionLabel>
        <h2 className="font-heading font-light text-[#243C32] text-3xl lg:text-4xl mb-4">
          Skincare insights, exclusive offers, <span className="italic text-[#B69A65]">delivered quietly.</span>
        </h2>
        <p className="text-sm font-body text-[#262622]/60 mb-8 leading-relaxed">
          Join our community and receive expert skincare advice, seasonal treatment offers, and member-only privileges directly to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-8 h-8 bg-[#243C32] flex items-center justify-center">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-sm font-body font-medium text-[#243C32]">
              Thank you — you're on the list.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 text-sm font-body bg-white border border-[#E8DCCB] focus:outline-none focus:border-[#243C32] placeholder:text-[#262622]/40 text-[#262622]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#243C32] text-[#F8F5EF] px-6 py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[#1a2d25] transition-colors group"
            >
              Subscribe
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        )}

        <p className="text-xs font-body text-[#262622]/40 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
