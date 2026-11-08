import Link from "next/link";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import { FITFLEX_BLOGS } from "@/data/fitnessData";

export default function BlogPage() {
  const categories = [
    { name: "Mental Health", count: 4 },
    { name: "Workout Routine", count: 8 },
    { name: "Nutrition", count: 6 },
    { name: "Strength & Power", count: 5 },
    { name: "Mobility & Yoga", count: 3 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Banner */}
        <FitFlexPageBanner
          title="LATEST POSTS"
          breadcrumbs={[{ label: "Blog" }]}
        />

        {/* Blog Content Section with Sidebar */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Posts List */}
              <div className="lg:col-span-8 space-y-12">
                {FITFLEX_BLOGS.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Post Image */}
                    <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#f2fd84] text-[#222222] text-xs font-black uppercase px-3 py-1 font-[family-name:var(--heading-font)]">
                        {post.category}
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-8">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-white/50 mb-3 font-[family-name:var(--heading-font)]">
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
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] group-hover:text-[#f2fd84] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-sm text-white/70 mt-4 leading-relaxed font-[family-name:var(--body-font)]">
                        {post.excerpt}
                      </p>

                      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="cs_btn_style_1 text-xs px-6 py-2.5 h-10"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4 space-y-10">
                {/* Categories Widget */}
                <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-6 pb-3 border-b border-white/10">
                    Categories
                  </h3>
                  <ul className="space-y-3 text-sm text-white/70 font-[family-name:var(--body-font)]">
                    {categories.map((cat) => (
                      <li key={cat.name} className="flex items-center justify-between hover:text-[#f2fd84] transition-colors cursor-pointer">
                        <span>{cat.name}</span>
                        <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-white/40">({cat.count})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-6 pb-3 border-b border-white/10">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {FITFLEX_BLOGS.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group flex items-center gap-3.5 pb-4 border-b border-white/5 last:border-none last:pb-0"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-16 h-16 object-cover border border-white/10 shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="text-[10px] text-white/40 block font-[family-name:var(--heading-font)]">
                            {p.date}
                          </span>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#f2fd84] transition-colors line-clamp-2 uppercase font-[family-name:var(--heading-font)]">
                            {p.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Archives Widget */}
                <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-4 pb-3 border-b border-white/10">
                    Archives
                  </h3>
                  <ul className="space-y-2.5 text-xs text-white/70">
                    <li className="hover:text-[#f2fd84] transition-colors cursor-pointer">November 2026 (12)</li>
                    <li className="hover:text-[#f2fd84] transition-colors cursor-pointer">October 2026 (18)</li>
                    <li className="hover:text-[#f2fd84] transition-colors cursor-pointer">September 2026 (14)</li>
                  </ul>
                </div>
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
