"use client";

import { GymClub } from "@/data/gyms";
import { Check, Flame, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  gym: GymClub;
  onOpenBooking: (planName?: string) => void;
}

export default function PricingSection({
  gym,
  onOpenBooking,
}: PricingSectionProps) {
  return (
    <section id="packages" className="relative py-14 sm:py-20 lg:py-24 bg-black border-b border-zinc-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>স্বচ্ছ মেম্বারশিপ ফি ও প্যাকেজসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
            আপনার শারীরিক লক্ষ্য অনুযায়ী সেরা প্ল্যান
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            কোনো প্রকার লুকানো চার্জ নেই। প্রতিটি প্ল্যানে পাবেন আনলিমিটেড ফ্লোর অ্যাক্সেস ও ট্রেইনারদের সার্বক্ষণিক গাইডেন্স।
          </p>
        </div>

        {/* Pricing Cards (Flat clean cards - No nested cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {gym.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                pkg.popular
                  ? "bg-zinc-900 border-amber-500 ring-1 ring-amber-500/50 shadow-md"
                  : "bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 shadow-2xs"
              }`}
            >
              <div>
                {/* Popular Tag */}
                {pkg.popular && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-amber-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider">
                      <Flame className="w-3 h-3 text-zinc-950" />
                      সবচেয়ে জনপ্রিয় প্যাকেজ
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {pkg.duration}
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    {pkg.bengaliName}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 font-medium">{pkg.name}</p>
                </div>

                {/* Price Display */}
                <div className="py-3.5 my-3 border-y border-zinc-800 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {pkg.price}
                  </span>
                  {pkg.regularPrice && (
                    <span className="text-sm text-zinc-500 line-through">
                      {pkg.regularPrice}
                    </span>
                  )}
                  <span className="text-xs text-zinc-400 font-medium">/ মোট</span>
                </div>

                {/* Admission Fee Pill */}
                <div className="mb-5 inline-block">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
                      pkg.admissionFee.includes("ফ্রি")
                        ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                        : "bg-zinc-800 border-zinc-700 text-zinc-300"
                    }`}
                  >
                    ভর্তি ফি: {pkg.admissionFee}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 text-xs text-zinc-300 mb-6">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking(pkg.bengaliName)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[44px] cursor-pointer ${
                    pkg.popular
                      ? "bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-xs"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                  }`}
                >
                  <span>প্যাকেজটি বেছে নিন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
