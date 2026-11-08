"use client";

import Link from "next/link";
import { ArrowRight, Flame, Clock } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import { openBookingModal } from "@/components/FitFlexBookingModal";
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
            <RevealOnScroll direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
                  CURATED DISCIPLINES
                </span>
                <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                  <span>EXPLORE </span>OUR FITNESS CLASSES
                </h2>
                <p className="text-white/60 text-sm sm:text-base mt-4 font-[family-name:var(--body-font)]">
                  From high-intensity conditioning and Olympic lifting to restorative yoga and striking.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FITFLEX_PROGRAMS.map((prog, idx) => (
                <RevealOnScroll
                  key={prog.slug}
                  direction="up"
                  delayMs={idx * 100}
                  className="h-full"
                >
                  <div className="group relative bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                    <div>
                      {/* Image with overlay */}
                      <div className="relative h-64 w-full overflow-hidden bg-black">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors" />

                        <div className="absolute top-3 left-3 bg-[#f2fd84] text-[#222222] text-[10px] font-extrabold uppercase px-2.5 py-1 tracking-wider font-[family-name:var(--heading-font)] shadow-md">
                          {prog.tag}
                        </div>

                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold uppercase px-2 py-1 flex items-center gap-1 border border-white/10">
                          <Flame className="w-3 h-3 text-[#f2fd84]" />
                          <span>{prog.calories}</span>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                          <button
                            type="button"
                            onClick={() => openBookingModal(prog.title)}
                            className="cs_btn_style_1 text-xs py-2 px-5 h-10 w-full text-center cursor-pointer"
                          >
                            BOOK CLASS PASS
                          </button>
                          <Link
                            href={`/classes/${prog.slug}`}
                            className="cs_btn_style_outline text-xs py-2 px-5 h-10 w-full text-center bg-black/60"
                          >
                            VIEW DETAILS
                          </Link>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <span className="text-xs uppercase tracking-wider text-[#f2fd84] font-bold block mb-1 font-[family-name:var(--heading-font)]">
                          {prog.category}
                        </span>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] group-hover:text-[#f2fd84] transition-colors">
                          {prog.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/60 mt-3 line-clamp-2 leading-relaxed font-[family-name:var(--body-font)]">
                          {prog.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom Meta */}
                    <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-white/50 mt-auto font-[family-name:var(--heading-font)]">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#f2fd84]" />
                        <span>{prog.duration}</span>
                      </span>
                      <Link
                        href={`/classes/${prog.slug}`}
                        className="text-white hover:text-[#f2fd84] flex items-center gap-1 font-bold transition-colors"
                      >
                        <span>DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
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
