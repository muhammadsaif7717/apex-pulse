"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap, Sparkles } from "lucide-react";
import { FITFLEX_PRICING } from "@/data/fitnessData";
import RevealOnScroll from "@/components/RevealOnScroll";
import { openBookingModal } from "@/components/FitFlexBookingModal";

export default function FitFlexPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-[#222222] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
              TRANSPARENT PASSES
            </span>
            <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
              <span>FLEXIBLE PLANS </span>FOR EVERY BUDGET
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-4 font-[family-name:var(--body-font)]">
              Invest in your athletic vitality with zero hidden maintenance fees. Cancel or freeze your membership anytime.
            </p>

            {/* Billing Cycle Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-[#171717] border border-white/10 rounded-full font-[family-name:var(--heading-font)]">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  !isAnnual
                    ? "bg-[#f2fd84] text-[#222222] shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                MONTHLY
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                  isAnnual
                    ? "bg-[#f2fd84] text-[#222222] shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span>ANNUAL PASS</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {FITFLEX_PRICING.map((plan, idx) => {
            const displayPrice = isAnnual
              ? Math.round(plan.price * 0.8)
              : plan.price;

            return (
              <RevealOnScroll
                key={plan.id}
                direction="up"
                delayMs={idx * 150}
                className="h-full"
              >
                <div
                  className={`relative p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#282828] border-2 border-[#f2fd84] shadow-2xl md:-translate-y-2 ring-1 ring-[#f2fd84]/50"
                      : "bg-[#1c1c1c] border border-white/10 hover:border-white/25"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f2fd84] text-[#222222] text-[10px] font-black uppercase tracking-wider px-4 py-1 font-[family-name:var(--heading-font)] shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 fill-[#222222]" />
                      <span>MOST POPULAR CHOICE</span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-[#f2fd84] font-[family-name:var(--heading-font)]">
                      {plan.name}
                    </h3>

                    <div className="my-6 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white/60">$</span>
                      <span className="text-6xl font-black text-white font-[family-name:var(--heading-font)] tracking-tight">
                        {displayPrice}
                      </span>
                      <span className="text-xs text-white/50 font-semibold uppercase">
                        / month
                      </span>
                    </div>

                    {isAnnual && (
                      <p className="text-[11px] text-[#f2fd84] font-medium -mt-4 mb-4">
                        Billed annually (${displayPrice * 12}/yr)
                      </p>
                    )}

                    <div className="py-6 border-t border-white/10 space-y-3.5">
                      <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-[family-name:var(--body-font)]">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-[#f2fd84] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 mt-auto">
                    <button
                      type="button"
                      onClick={() =>
                        openBookingModal(
                          `${plan.name} (${isAnnual ? "Annual" : "Monthly"})`
                        )
                      }
                      className={`w-full text-center cursor-pointer ${
                        plan.popular ? "cs_btn_style_1" : "cs_btn_style_outline"
                      }`}
                    >
                      <span>GET STARTED</span>
                    </button>
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
