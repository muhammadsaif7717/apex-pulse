import Link from "next/link";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import { FITFLEX_PROGRAMS } from "@/data/fitnessData";

export default function ClassesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Banner */}
        <FitFlexPageBanner
          title="ELEVATE YOUR WORKOUT EXPERIENCE"
          breadcrumbs={[{ label: "Classes" }]}
        />

        {/* Classes Grid */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                <span>EXPLORE </span>OUR FITNESS CLASSES
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-4">
                From high-intensity conditioning and Olympic lifting to restorative yoga and striking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FITFLEX_PROGRAMS.map((prog) => (
                <div
                  key={prog.slug}
                  className="group relative bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Image with overlay */}
                    <div className="relative h-64 w-full overflow-hidden bg-black">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors" />

                      <div className="absolute top-3 left-3 bg-[#f2fd84] text-[#222222] text-[10px] font-extrabold uppercase px-2.5 py-1 tracking-wider font-[family-name:var(--heading-font)]">
                        {prog.tag}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href={`/classes/${prog.slug}`}
                          className="cs_btn_style_1 text-xs py-2 px-5 h-10"
                        >
                          VIEW DETAILS
                        </Link>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-[#f2fd84] font-bold block mb-1">
                        {prog.category}
                      </span>
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] group-hover:text-[#f2fd84] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 mt-3 line-clamp-2 leading-relaxed">
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                    <span>{prog.duration}</span>
                    <span className="text-white/80 font-semibold">{prog.calories}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FitFlexCta
          title="READY TO EXPERIENCE THE VARIETY AND EFFECTIVENESS OF OUR CLASSES?"
          subtitle="Reserve your spot today and train with certified coaches in an inspiring community."
        />
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
