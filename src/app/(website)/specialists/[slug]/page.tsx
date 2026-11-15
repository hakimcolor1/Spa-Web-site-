import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { specialists, treatments } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CalendarDays, Clock } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const s = specialists.find((sp) => sp.slug === slug);
  if (!s) return {};
  return { title: s.name, description: `${s.name} — ${s.designation} at Lumière Spa` };
}

export default async function SpecialistDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const specialist = specialists.find((s) => s.slug === slug);
  if (!specialist) notFound();

  const specialistTreatments = treatments.filter((t) =>
    specialist.treatments.includes(t.name)
  );

  return (
    <>
      {/* Profile hero */}
      <section className="bg-[#243C32] pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="pb-16">
              <SectionLabel light>Specialist</SectionLabel>
              <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl mb-3">
                {specialist.name}
              </h1>
              <p className="text-[#B69A65] font-body text-sm tracking-widest uppercase mb-6">
                {specialist.designation}
              </p>
              <p className="text-base font-body text-[#A9B7A4] leading-relaxed mb-8 max-w-lg">
                {specialist.bio}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {specialist.expertise.map((e) => (
                  <Badge key={e} variant="gold">{e}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-heading text-3xl text-[#F8F5EF] font-light">{specialist.experience}+</p>
                  <p className="text-xs font-body text-[#A9B7A4] tracking-wide">years experience</p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-[#F8F5EF] font-light">{specialist.treatments.length}</p>
                  <p className="text-xs font-body text-[#A9B7A4] tracking-wide">treatments offered</p>
                </div>
              </div>
            </div>
            <div className="lg:self-end">
              <div className="aspect-[4/5] max-w-sm mx-auto overflow-hidden">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="bg-[#E8DCCB]/40 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-10 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays size={16} className="text-[#B69A65]" />
                <h3 className="font-body font-semibold text-sm text-[#243C32] tracking-wide uppercase">Availability</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
                  <span
                    key={day}
                    className={`px-3 py-1.5 text-xs font-body font-medium border ${
                      specialist.availability.includes(day)
                        ? "bg-[#243C32] text-[#F8F5EF] border-[#243C32]"
                        : "bg-transparent text-[#A9B7A4] border-[#E8DCCB]"
                    }`}
                  >
                    {day.slice(0, 3)}
                  </span>
                ))}
              </div>
            </div>
            <div className="ml-auto">
              <Button href="/book" variant="primary" size="lg">Book with {specialist.name.split(" ")[0]}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      {specialistTreatments.length > 0 && (
        <section className="bg-[#F8F5EF] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionLabel>Treatments Offered</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialistTreatments.map((t) => (
                <Link key={t.id} href={`/treatments/${t.slug}`} className="group bg-white border border-[#E8DCCB] overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-[#243C32] font-light group-hover:text-[#B69A65] transition-colors mb-1">{t.name}</h3>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E8DCCB]">
                      <span className="text-xs font-body text-[#A9B7A4] flex items-center gap-1"><Clock size={11} /> {t.duration} min</span>
                      <span className="text-sm font-body font-medium text-[#243C32]">£{t.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
