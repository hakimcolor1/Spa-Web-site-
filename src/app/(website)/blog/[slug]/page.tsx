import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Mock article content
  const content = `
    ${post.excerpt}

    Understanding the science behind your skincare choices is one of the most empowering things you can do for your skin. At Lumière, we believe informed clients achieve better results — not because they suddenly develop medical expertise, but because they understand why a treatment works, how to support it at home, and what to realistically expect.

    ## The fundamentals you need to know

    Every skin care ingredient works within a biological context. The stratum corneum — your skin's outermost layer — acts as a selective barrier. Some molecules pass through it readily; others cannot penetrate at all without professional assistance. This is one reason why professional treatments can achieve results that home care cannot.

    Your skin also operates on a cycle. The epidermis renews itself approximately every 28 days, though this slows with age. Professional treatments can accelerate this cycle, bringing fresher, healthier skin cells to the surface more quickly. The result is the visible glow that clients notice immediately after a facial.

    ## What this means for your routine

    The best home skincare routine supports what your professional treatments begin. Think of it as maintaining the gains from your sessions between visits. A well-designed routine cleanses gently, provides active ingredients at appropriate concentrations, and protects the skin barrier.

    At Lumière, your specialist will always recommend a home routine that complements your treatment plan. This is not upselling — it is completing the picture. A monthly facial without a supporting home routine is like exercising one day a week and eating poorly for the other six.

    ## Working with your specialist

    Your specialist's expertise extends beyond the treatment room. Use your consultation time to ask about ingredients, understand your skin's current state, and get honest answers about what professional skincare can and cannot achieve for you specifically.

    Great skin is a collaboration between professional care and consistent home practice. Lumière is here to be your expert partner in that process.
  `;

  return (
    <>
      {/* Back */}
      <div className="bg-[#F8F5EF] border-b border-[#E8DCCB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-body text-[#A9B7A4] hover:text-[#243C32] transition-colors">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#F8F5EF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-14 pb-10">
          <Badge variant="gold" className="mb-5">{post.category}</Badge>
          <h1 className="font-heading font-light text-[#243C32] text-4xl lg:text-5xl leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-xs font-body text-[#A9B7A4]">
            <span>By {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={12} />{post.publishedAt}</span>
            <span className="flex items-center gap-1.5"><Clock size={12} />{post.readingTime} min read</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="aspect-[16/7] overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-[#F8F5EF] py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="prose prose-sm max-w-none font-body text-[#262622]/75 leading-relaxed space-y-5">
            {content.trim().split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl text-[#243C32] font-light mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#E8DCCB]/40 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Continue Reading</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group bg-white border border-[#E8DCCB] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-[#243C32] font-light leading-snug mb-2 group-hover:text-[#B69A65] transition-colors">
                    {p.title}
                  </h3>
                  <p className="inline-flex items-center gap-1.5 text-xs font-body text-[#B69A65] group-hover:gap-2.5 transition-all">
                    Read <ArrowRight size={11} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
