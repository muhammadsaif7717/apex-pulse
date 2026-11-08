import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Send } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import { FITFLEX_BLOGS } from "@/data/fitnessData";

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
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#f2fd84] hover:underline uppercase tracking-wider font-[family-name:var(--heading-font)]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>

                {/* Featured Photo */}
                <div className="relative border border-white/10 overflow-hidden bg-black aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>

                {/* Meta */}
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
                  <span>{post.readTime}</span>
                </div>

                {/* Content */}
                <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed font-[family-name:var(--body-font)]">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                    Understanding the Connection Between Exercise and Mental Health
                  </h2>

                  {post.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  <div className="p-6 sm:p-8 bg-[#181818] border-l-4 border-[#f2fd84] text-white/90 italic my-8">
                    &quot;Physical exertion breaks the mental loop of fatigue, flooding your system with endorphins and rewiring your nervous system for optimism.&quot;
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                    How Exercise Improves Brain Function & Stress Relief
                  </h3>
                  <p>
                    Regular cardiovascular interval workouts elevate resting cerebral blood flow, promoting the formation of new neurons in the hippocampus. Whether through heavy barbell squats or a high-cadence cycling sprint, the acute focus required silences anxious rumination.
                  </p>
                </div>

                {/* Leave a reply form */}
                <div className="mt-16 pt-12 border-t border-white/10 bg-[#1c1c1c] p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-2">
                    Leave A Reply
                  </h3>
                  <p className="text-xs text-white/50 mb-6">Your email address will not be published. Required fields are marked *</p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">Comment *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write your comment..."
                        className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                      />
                    </div>
                    <button type="button" className="cs_btn_style_1 text-xs">
                      POST COMMENT
                    </button>
                  </form>
                </div>
              </article>

              {/* Right Column: Sidebar */}
              <aside className="lg:col-span-4 space-y-10">
                <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-6 pb-3 border-b border-white/10">
                    Author Details
                  </h3>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300&q=80"
                      alt={post.author}
                      className="w-14 h-14 rounded-full object-cover border border-[#f2fd84]"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white uppercase font-[family-name:var(--heading-font)]">{post.author}</h4>
                      <p className="text-xs text-[#f2fd84]">Head Fitness Specialist</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1c1c1c] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-6 pb-3 border-b border-white/10">
                    Recent Articles
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
                          <span className="text-[10px] text-white/40 block font-[family-name:var(--heading-font)]">{p.date}</span>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#f2fd84] transition-colors line-clamp-2 uppercase font-[family-name:var(--heading-font)]">
                            {p.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
