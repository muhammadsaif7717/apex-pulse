"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FITFLEX_INFO } from "@/data/fitnessData";

export default function FitFlexHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#222222] pt-32 pb-20 overflow-hidden border-b border-white/10">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Gym background"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/60 to-[#222222]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Section Heading */}
        <div className="max-w-4xl">
          <h1 className="cs_text_strock text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[1.05] font-[family-name:var(--heading-font)] mb-6">
            <span>ACHIEVE </span>MORE THAN JUST FITNESS
          </h1>

          <p className="text-white/70 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10 font-[family-name:var(--body-font)]">
            Combine strength, flexibility, and endurance in a community that values well-rounded health and supportive growth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="cs_btn_style_1">
              <span>START NOW</span>
            </Link>
            <Link href="/contact" className="cs_btn_style_outline">
              <span>JOIN FREE TRIAL</span>
            </Link>
          </div>
        </div>

        {/* 4 Counter Stats Bar */}
        <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FITFLEX_INFO.stats.map((stat) => (
            <div key={stat.title} className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--heading-font)] tracking-tight">
                {stat.count}
              </div>
              <p className="text-sm sm:text-base font-bold text-white font-[family-name:var(--heading-font)]">
                {stat.title}
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-[family-name:var(--body-font)]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

