"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { openBookingModal } from "@/components/FitFlexBookingModal";

interface FitFlexCtaProps {
  title?: string;
  subtitle?: string;
}

export default function FitFlexCta({
  title = "READY TO START YOUR JOURNEY WITH APEXPULSE?",
  subtitle = "Step into an athletic atmosphere engineered for discipline, focus, and measurable results.",
}: FitFlexCtaProps) {
  return (
    <section className="relative py-28 bg-[#181818] overflow-hidden border-b border-white/10 text-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
          alt="CTA Background"
          className="w-full h-full object-cover filter brightness-[0.2] contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#222222]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-4 inline-block">
            LIMITED TIME TRIAL ADMISSIONS
          </span>
          <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] leading-tight mb-6">
            <span>READY TO START YOUR </span>JOURNEY WITH APEXPULSE?
          </h2>

          <p className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--body-font)]">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
