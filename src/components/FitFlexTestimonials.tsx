"use client";

import { Star, Quote } from "lucide-react";
import { FITFLEX_TESTIMONIALS } from "@/data/fitnessData";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function FitFlexTestimonials() {
  return (
    <section className="py-24 bg-[#1f1f1f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
              REAL TRANSFORMATIONS
            </span>
            <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
              <span>TRANSFORMATIONS SPEAK </span>LOUDER THAN WORDS
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-4 font-[family-name:var(--body-font)]">
              Hear from our athletes who reached peak strength, mental discipline, and body composition.
            </p>
          </div>
        </RevealOnScroll>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FITFLEX_TESTIMONIALS.map((t, idx) => (
            <RevealOnScroll
              key={t.id}
              direction="up"
              delayMs={idx * 130}
              className="h-full"
            >
              <div className="bg-[#262626] border border-white/10 hover:border-[#f2fd84]/60 transition-all duration-300 p-8 flex flex-col justify-between h-full group">
                <div>
                  {/* 5 Stars and Quote mark */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#f2fd84]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#f2fd84]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-white/20 group-hover:text-[#f2fd84]/40 transition-colors" />
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed italic mb-8 font-[family-name:var(--body-font)]">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#f2fd84]"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white font-[family-name:var(--heading-font)]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#f2fd84]/90 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
