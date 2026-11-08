"use client";

import Link from "next/link";
import { ArrowRight, Flame, Shield, Trophy } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { openBookingModal } from "@/components/FitFlexBookingModal";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function FitFlexHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-[#222222] pt-32 pb-20 overflow-hidden border-b border-white/10">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Gym background"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/70 to-[#222222]/85" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#f2fd84]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Section Heading */}
        <div className="max-w-4xl">
          <RevealOnScroll direction="down" delayMs={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#f2fd84] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90 font-[family-name:var(--heading-font)]">
                2026 TOP RATED STUDIO • ALL-ACCESS MEMBERSHIP
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delayMs={100}>
            <h1 className="cs_text_strock text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[1.05] font-[family-name:var(--heading-font)] mb-6">
              <span>ACHIEVE </span>MORE THAN JUST FITNESS
            </h1>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delayMs={200}>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10 font-[family-name:var(--body-font)]">
              Combine strength, flexibility, and endurance in a community that values well-rounded health and supportive growth. Train with elite coaches and sports-science recovery.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delayMs={300}>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openBookingModal("Free 7-Day All-Access Pass")}
                className="cs_btn_style_1 cursor-pointer"
              >
                <span>START NOW</span>
              </button>
              <button
                type="button"
                onClick={() => openBookingModal("Free 7-Day All-Access Pass")}
                className="cs_btn_style_outline cursor-pointer"
              >
                <span>JOIN FREE TRIAL</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* 4 Counter Stats Bar */}
        <RevealOnScroll direction="up" delayMs={400}>
          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1 p-4 bg-white/[0.02] border border-white/5 hover:border-[#f2fd84]/40 transition-colors">
              <div className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--heading-font)] tracking-tight">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-sm sm:text-base font-bold text-[#f2fd84] font-[family-name:var(--heading-font)]">
                Happy Members
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-[family-name:var(--body-font)]">
                Our athletic community is growing fast
              </p>
            </div>

            <div className="space-y-1 p-4 bg-white/[0.02] border border-white/5 hover:border-[#f2fd84]/40 transition-colors">
              <div className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--heading-font)] tracking-tight">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-sm sm:text-base font-bold text-[#f2fd84] font-[family-name:var(--heading-font)]">
                Weekly Classes
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-[family-name:var(--body-font)]">
                Pick from various targeted workouts
              </p>
            </div>

            <div className="space-y-1 p-4 bg-white/[0.02] border border-white/5 hover:border-[#f2fd84]/40 transition-colors">
              <div className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--heading-font)] tracking-tight">
                <AnimatedCounter end={10} suffix=" Coaches" />
              </div>
              <p className="text-sm sm:text-base font-bold text-[#f2fd84] font-[family-name:var(--heading-font)]">
                Certified Trainers
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-[family-name:var(--body-font)]">
                Expert biomechanic guidance at every step
              </p>
            </div>

            <div className="space-y-1 p-4 bg-white/[0.02] border border-white/5 hover:border-[#f2fd84]/40 transition-colors">
              <div className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--heading-font)] tracking-tight">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-sm sm:text-base font-bold text-[#f2fd84] font-[family-name:var(--heading-font)]">
                Satisfaction Rate
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-[family-name:var(--body-font)]">
                We guarantee personal progress satisfaction
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
