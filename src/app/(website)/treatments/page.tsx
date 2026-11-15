"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Search, SlidersHorizontal } from "lucide-react";
import { treatments } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";

const categories = ["All", ...Array.from(new Set(treatments.map((t) => t.category)))];

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "duration">("default");

  let filtered = treatments.filter((t) => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    const matchesSearch =
      search === "" ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "duration") filtered = [...filtered].sort((a, b) => a.duration - b.duration);

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden bg-[#243C32]">
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&q=85"
          alt="Treatments"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32] via-[#243C32]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <SectionLabel light>Our Services</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl leading-none">
            All Treatments
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[#E8DCCB] sticky top-[89px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A9B7A4]" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm font-body border border-[#E8DCCB] focus:outline-none focus:border-[#243C32] bg-[#F8F5EF]"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-body font-medium tracking-wide transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#243C32] text-[#F8F5EF]"
                      : "bg-transparent border border-[#E8DCCB] text-[#262622] hover:border-[#243C32]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <SlidersHorizontal size={15} className="text-[#A9B7A4]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="text-sm font-body border-none bg-transparent text-[#262622] focus:outline-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#F8F5EF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#A9B7A4] mb-8 tracking-wide">
            {filtered.length} treatment{filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-heading text-2xl text-[#243C32] font-light mb-2">No treatments found</p>
              <p className="text-sm font-body text-[#A9B7A4]">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((treatment) => (
                <Link
                  key={treatment.id}
                  href={`/treatments/${treatment.slug}`}
                  className="group bg-white overflow-hidden border border-[#E8DCCB] hover:border-[#A9B7A4] hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="sage">{treatment.category}</Badge>
                      <StarRating rating={treatment.rating} size={12} />
                    </div>
                    <h3 className="font-heading text-xl text-[#243C32] font-light mb-2 group-hover:text-[#B69A65] transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-sm font-body text-[#262622]/60 leading-relaxed mb-4 line-clamp-2">
                      {treatment.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#E8DCCB]">
                      <div className="flex items-center gap-1.5 text-xs font-body text-[#A9B7A4]">
                        <Clock size={12} />
                        <span>{treatment.duration} min</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-body font-semibold text-[#243C32]">from £{treatment.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
