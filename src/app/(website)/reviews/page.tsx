import type { Metadata } from "next";
import { testimonials, treatments } from "@/lib/data";
import { StarRating } from "@/components/ui/StarRating";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read genuine reviews from Lumière clients about their treatment experiences.",
};

const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>Client Reviews</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl mb-8">
            What our clients <span className="italic text-[#B69A65]">say.</span>
          </h1>
          {/* Summary stats */}
          <div className="flex items-center gap-8 flex-wrap">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-heading text-6xl text-[#B69A65] font-light">{avgRating}</span>
                <span className="text-sm font-body text-[#A9B7A4]">/ 5</span>
              </div>
              <StarRating rating={Number(avgRating)} size={18} className="mb-1" />
              <p className="text-xs font-body text-[#A9B7A4]">{testimonials.length} verified reviews</p>
            </div>
            <div className="space-y-2">
              {[5,4,3].map((star) => {
                const count = testimonials.filter((t) => t.rating === star).length;
                const pct = Math.round((count / testimonials.length) * 100);
                return (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-xs font-body text-[#A9B7A4] w-4">{star}</span>
                    <div className="w-32 h-1.5 bg-[#A9B7A4]/20">
                      <div className="h-full bg-[#B69A65]" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs font-body text-[#A9B7A4]">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white border border-[#E8DCCB] p-7">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center font-heading text-[#243C32] font-medium">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#243C32]">{t.name}</p>
                      <Badge variant="sage">{t.treatment}</Badge>
                    </div>
                  </div>
                  <StarRating rating={t.rating} size={13} />
                </div>
                <p className="text-sm font-body text-[#262622]/65 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8DCCB] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-light text-[#243C32] text-3xl mb-4">
            Experience it for yourself.
          </h2>
          <p className="text-sm font-body text-[#262622]/65 mb-6 leading-relaxed">
            Book your first treatment and discover why our clients return month after month.
          </p>
          <Button href="/book" variant="primary" size="lg">Book Now</Button>
        </div>
      </section>
    </>
  );
}
