import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Clock, Flame, Zap, Dumbbell, ShieldCheck, ArrowRight } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import { FITFLEX_PROGRAMS } from "@/data/fitnessData";

export async function generateStaticParams() {
  return FITFLEX_PROGRAMS.map((prog) => ({
    slug: prog.slug,
  }));
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = FITFLEX_PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const benefits = [
    { title: "Calorie Torch", desc: "Maximize EPOC calorie burn for up to 36 hours post-workout." },
    { title: "Full-Body Conditioning", desc: "Engage every major kinetic muscle chain with functional balance." },
    { title: "Increased Endurance", desc: "Elevate your VO2 max and anaerobic threshold with structured intervals." },
    { title: "Metabolic Boost", desc: "Stimulate lean muscle tissue that increases your baseline metabolism." },
    { title: "Time Efficiency", desc: "Achieve the stimulus of a 90-minute routine in an efficient 50-minute format." },
    { title: "Mental Focus", desc: "Develop sharp psychological grit, breath discipline, and stress resilience." },
    { title: "Adaptability", desc: "Easily scaled for beginners and intense enough for competitive athletes." },
    { title: "Community Engagement", desc: "Thrive in an encouraging atmosphere where everyone cheers your personal bests." },
  ];

  const related = FITFLEX_PROGRAMS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Banner */}
        <FitFlexPageBanner
          title={program.title}
          breadcrumbs={[
            { label: "Classes", href: "/classes" },
            { label: program.title },
          ]}
        />

        {/* Section 1: Overview & Details */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Image & Specifications */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative border border-white/10 overflow-hidden bg-black aspect-[4/3]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#f2fd84] text-[#222222] text-xs font-black uppercase px-3 py-1 font-[family-name:var(--heading-font)]">
                    {program.tag}
                  </div>
                </div>

                {/* 4 Metric Badges */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-[#1c1c1c] border border-white/10 p-4">
                    <span className="text-[10px] uppercase font-bold text-white/50 block">Level</span>
                    <span className="text-sm font-bold text-white font-[family-name:var(--heading-font)]">
                      {program.level}
                    </span>
                  </div>
                  <div className="bg-[#1c1c1c] border border-white/10 p-4">
                    <span className="text-[10px] uppercase font-bold text-white/50 block">Duration</span>
                    <span className="text-sm font-bold text-[#f2fd84] font-[family-name:var(--heading-font)]">
                      {program.duration}
                    </span>
                  </div>
                  <div className="bg-[#1c1c1c] border border-white/10 p-4">
                    <span className="text-[10px] uppercase font-bold text-white/50 block">Calories</span>
                    <span className="text-sm font-bold text-white font-[family-name:var(--heading-font)]">
                      {program.calories}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Description & Action */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f2fd84] font-[family-name:var(--heading-font)]">
                  {program.category}
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                  About {program.title}
                </h2>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {program.description} Our certified instructors guide you through every movement with strict biomechanical form, ensuring you maximize caloric output while preventing joint strain.
                </p>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Whether you are seeking to shed stubborn body fat, build explosive compound power, or enhance day-to-day cardiovascular stamina, {program.title} delivers tangible physical adaptations week over week.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="cs_btn_style_1">
                    <span>BOOK THIS CLASS</span>
                  </Link>
                  <Link href="/timetable" className="cs_btn_style_outline">
                    <span>CHECK TIMETABLE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Benefits */}
        <section className="py-24 bg-[#1f1f1f] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                <span>BENEFITS </span>OF {program.title}
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-4">
                Structured physical and physiological adaptations you will experience through consistent training.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-[#262626] border border-white/10 hover:border-[#f2fd84] transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: You May Also Be Interested In */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <h2 className="cs_text_strock text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                <span>YOU MAY ALSO </span>BE INTERESTED IN
              </h2>
              <Link href="/classes" className="text-xs font-bold text-[#f2fd84] hover:underline flex items-center gap-1">
                <span>All Classes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/classes/${r.slug}`}
                  className="group bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84] transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase text-[#f2fd84]">{r.category}</span>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mt-1 group-hover:text-[#f2fd84] transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-xs text-white/60 mt-2 line-clamp-2">{r.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FitFlexCta
          title={`READY TO EXPERIENCE THE INTENSITY AND VERSATILITY OF ${program.title}?`}
          subtitle="Book your spot today and test our world-class coaches and community."
        />
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
