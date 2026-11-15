import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Journal",
  description: "Expert skincare insights, tips, and wellness guidance from the Lumière team.",
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)!;
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>The Journal</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Skincare <span className="italic text-[#B69A65]">insights.</span>
          </h1>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#F8F5EF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-[#E8DCCB] overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] lg:aspect-auto lg:h-80 overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 lg:p-10">
              <Badge variant="gold" className="mb-4">{featured.category}</Badge>
              <h2 className="font-heading text-3xl text-[#243C32] font-light leading-snug mb-4 group-hover:text-[#B69A65] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm font-body text-[#262622]/65 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-5 text-xs font-body text-[#A9B7A4]">
                <span className="flex items-center gap-1.5"><Calendar size={12} />{featured.publishedAt}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readingTime} min read</span>
              </div>
              <p className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#B69A65] mt-5 group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} />
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#F8F5EF] pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-1.5 text-xs font-body font-medium border border-[#E8DCCB] text-[#262622] hover:border-[#243C32] cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#F8F5EF] py-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white border border-[#E8DCCB] overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <Badge variant="sage" className="mb-3">{post.category}</Badge>
                  <h3 className="font-heading text-xl text-[#243C32] font-light leading-snug mb-3 group-hover:text-[#B69A65] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm font-body text-[#262622]/60 leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs font-body text-[#A9B7A4] pt-4 border-t border-[#E8DCCB]">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readingTime} min</span>
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
