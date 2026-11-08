import Link from "next/link";
import { Check } from "lucide-react";
import { FITFLEX_PRICING } from "@/data/fitnessData";

export default function FitFlexPricing() {
  return (
    <section className="py-24 bg-[#222222] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
            <span>FLEXIBLE PLANS </span>FOR EVERY BUDGET
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-4">
            Invest in your health with transparent pricing. No lock-in contracts and no hidden maintenance fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FITFLEX_PRICING.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-[#282828] border-2 border-[#f2fd84] shadow-2xl md:-translate-y-2"
                  : "bg-[#1c1c1c] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f2fd84] text-[#222222] text-[10px] font-black uppercase tracking-wider px-4 py-1 font-[family-name:var(--heading-font)]">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-[#f2fd84] font-[family-name:var(--heading-font)]">
                  {plan.name}
                </h3>

                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white/60">$</span>
                  <span className="text-6xl font-black text-white font-[family-name:var(--heading-font)]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-white/50 font-semibold uppercase">/ month</span>
                </div>

                <div className="py-6 border-t border-white/10 space-y-3.5">
                  <ul className="space-y-3 text-xs sm:text-sm text-white/70">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-[#f2fd84] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <Link
                  href="/contact"
                  className={`w-full text-center ${
                    plan.popular ? "cs_btn_style_1" : "cs_btn_style_outline"
                  }`}
                >
                  <span>GET STARTED</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

