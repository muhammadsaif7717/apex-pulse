import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Send } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FITFLEX_BLOGS } from "@/data/fitnessData";

export const instant = false;

export async function generateStaticParams() {
  return FITFLEX_BLOGS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = FITFLEX_BLOGS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Banner */}
        <FitFlexPageBanner
          title={post.title}
          breadcrumbs={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Post Article Section */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Article Body */}
              <article className="lg:col-span-8 space-y-8">
                <RevealOnScroll direction="down">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f2fd84] hover:underline uppercase tracking-wider font-[family-name:var(--heading-font)]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Blog</span>
                  </Link>
                </RevealOnScroll>

                {/* Featured Photo */}
                <RevealOnScroll direction="up">
                  <div className="relative border border-white/10 overflow-hidden bg-black aspect-[16/9] shadow-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover filter contrast-105"
                    />
                  </div>
                </RevealOnScroll>

                {/* Meta */}
                <RevealOnScroll direction="up">
                  <div className="flex items-center gap-4 text-xs text-white/50 pb-4 border-b border-white/10 font-[family-name:var(--heading-font)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#f2fd84]" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#f2fd84]" />
                      <span>By {post.author}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#f2fd84]" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="text-[#f2fd84] font-bold uppercase">{post.category}</span>
                  </div>
                </RevealOnScroll>

                {/* Heading */}
                <RevealOnScroll direction="up">
                  <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] leading-tight">
                    {post.title}
                  </h1>
                </RevealOnScroll>

                {/* Article Content Paragraphs */}
                <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed font-[family-name:var(--body-font)]">
                  {post.content.map((p, idx) => (
                    <RevealOnScroll key={idx} direction="up" delayMs={idx * 60}>
                      <p>{p}</p>
                    </RevealOnScroll>
                  ))}
                </div>

                {/* Tags and Share */}
                <RevealOnScroll direction="up">
                  <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-bold text-white/50 font-[family-name:var(--heading-font)]">
                        Tags:
                      </span>
                      <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 text-[#f2fd84]">
                        #{post.category.toLowerCase().replace(/\s+/g, "")}
                      </span>
                      <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 text-white/70">
                        #apexpulse
                      </span>
                    </div>

                    <Link
                      href="/blog"
                      className="text-xs font-bold text-[#f2fd84] hover:underline uppercase font-[family-name:var(--heading-font)]"
                    >
                      ← Back to All Articles
                    </Link>
                  </div>
                </RevealOnScroll>
              </article>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4 space-y-10">
                <RevealOnScroll direction="left">
                  {/* Author Card */}
                  <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#2a2a2a] border border-[#f2fd84] flex items-center justify-center text-[#f2fd84] mb-4">
                      <User className="w-10 h-10" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase font-[family-name:var(--heading-font)]">
                      {post.author}
                    </h3>
                    <p className="text-xs text-[#f2fd84] font-semibold mt-0.5">Master Strength Coach</p>
                    <p className="text-xs text-white/60 mt-3 leading-relaxed font-[family-name:var(--body-font)]">
                      Passionate about evidence-based training, functional hypertrophy, and athletic longevity.
                    </p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="left" delayMs={100}>
                  {/* Related Articles */}
                  <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-6 pb-3 border-b border-white/10">
                      More Articles
                    </h3>
                    <div className="space-y-4">
                      {FITFLEX_BLOGS.filter((b) => b.slug !== slug).map((item) => (
                        <Link
                          key={item.slug}
                          href={`/blog/${item.slug}`}
                          className="group flex items-center gap-3.5 pb-4 border-b border-white/5 last:border-none last:pb-0"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-cover border border-white/10 shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="text-[10px] text-white/40 block font-[family-name:var(--heading-font)]">
                              {item.date}
                            </span>
                            <h4 className="text-xs font-bold text-white group-hover:text-[#f2fd84] transition-colors line-clamp-2 uppercase font-[family-name:var(--heading-font)]">
                              {item.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
