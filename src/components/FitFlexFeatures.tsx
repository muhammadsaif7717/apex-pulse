"use client";

import { Dumbbell, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import { FITFLEX_FEATURES } from "@/data/fitnessData";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function FitFlexFeatures() {
  const icons = [Dumbbell, Clock, ShieldCheck, HeartPulse];

  return (
    <section className="py-24 bg-[#1f1f1f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
              THE APEXPULSE STANDARD
            </span>
            <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
              <span>WHY APEXPULSE IS </span>YOUR IDEAL FITNESS PARTNER
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-4 font-[family-name:var(--body-font)]">
              We focus on sustainable athletic progression, joint longevity, and a welcoming culture.
            </p>
          </div>
        </RevealOnScroll>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FITFLEX_FEATURES.map((f, idx) => {
            const Icon = icons[idx] || Dumbbell;
            return (
              <RevealOnScroll
                key={f.title}
                direction="up"
                delayMs={idx * 100}
                className="h-full"
              >
                <div className="bg-[#242424] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 p-8 flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#f2fd84] flex items-center justify-center mb-6 group-hover:bg-[#f2fd84] group-hover:text-[#222222] transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] group-hover:text-[#f2fd84] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-3 leading-relaxed font-[family-name:var(--body-font)]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
