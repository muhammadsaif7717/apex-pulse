"use client";

import Link from "next/link";
import { ArrowRight, Flame, Clock, Zap } from "lucide-react";
import { FITFLEX_PROGRAMS } from "@/data/fitnessData";
import RevealOnScroll from "@/components/RevealOnScroll";
import { openBookingModal } from "@/components/FitFlexBookingModal";

export default function FitFlexPrograms() {
  const featured = FITFLEX_PROGRAMS.slice(0, 4);

  return (
    <section className="py-24 bg-[#222222] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
                CHOSEN BY ATHLETES
              </span>
              <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                <span>CHOOSE </span>OUR PATH TO FITNESS
              </h2>
            </div>
            <Link
              href="/classes"
              className="cs_btn_style_outline text-xs px-6 py-2.5 h-11 shrink-0 group inline-flex items-center gap-2"
            >
              <span>VIEW ALL CLASSES</span>
              <ArrowRight className="w-4 h-4 text-[#f2fd84] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prog, idx) => (
            <RevealOnScroll key={prog.slug} direction="up" delayMs={idx * 120}>
              <div className="group relative bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                <div>
                  {/* Image Container with overlay */}
                  <div className="relative h-64 w-full overflow-hidden bg-black">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition-colors" />

                    {/* Top Badge */}
                    <div className="absolute top-3 left-3 bg-[#f2fd84] text-[#222222] text-[10px] font-extrabold uppercase px-2.5 py-1 tracking-wider font-[family-name:var(--heading-font)] shadow-md">
                      {prog.tag}
                    </div>

                    {/* Calories / Intensity badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold uppercase px-2 py-1 flex items-center gap-1 border border-white/10">
                      <Flame className="w-3 h-3 text-[#f2fd84]" />
                      <span>{prog.calories}</span>
                    </div>

                    {/* Center Action Overlay on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <button
                        type="button"
                        onClick={() => openBookingModal(prog.title)}
                        className="cs_btn_style_1 text-xs py-2 px-5 h-10 w-full text-center cursor-pointer"
                      >
                        BOOK TRIAL PASS
                      </button>
                      <Link
                        href={`/classes/${prog.slug}`}
                        className="cs_btn_style_outline text-xs py-2 px-5 h-10 w-full text-center bg-black/60"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-white/50 uppercase tracking-wider mb-2 font-[family-name:var(--heading-font)]">
                      <Clock className="w-3.5 h-3.5 text-[#f2fd84]" />
                      <span>{prog.duration}</span>
                      <span>•</span>
                      <span>{prog.intensity} Intensity</span>
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-[#f2fd84] transition-colors uppercase font-[family-name:var(--heading-font)]">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-white/60 mt-2 line-clamp-2 font-[family-name:var(--body-font)] leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Bottom link bar */}
                <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#f2fd84] tracking-wider uppercase">
                    {prog.category}
                  </span>
                  <Link
                    href={`/classes/${prog.slug}`}
                    className="text-xs font-bold text-white group-hover:text-[#f2fd84] flex items-center gap-1 transition-colors"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
