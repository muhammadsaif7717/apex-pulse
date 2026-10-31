"use client";

import { GymClub } from "@/data/gyms";
import { Check, Sparkles, Flame, Clock, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  gym: GymClub;
  onOpenBooking: (planName?: string) => void;
}

export default function PricingSection({
  gym,
  onOpenBooking,
}: PricingSectionProps) {
  return (
    <section id="packages" className="relative py-16 md:py-24 bg-black border-b border-zinc-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>স্বচ্ছ মেম্বারশিপ ফি ও প্যাকেজ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            আপনার লক্ষ্য অনুযায়ী সেরা মেম্বারশিপ প্ল্যান
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2">
            কোনো প্রকার লুকানো চার্জ নেই। প্রতিটি প্ল্যানে পাবেন আনলিমিটেড ফ্লোর অ্যাক্সেস ও ট্রেইনারদের সক্রিয় গাইডেন্স।
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {gym.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.popular
                  ? "bg-gradient-to-b from-zinc-900 via-zinc-900 to-black border-amber-500 shadow-2xl shadow-amber-500/15 ring-1 ring-amber-500/40"
                  : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    সবচেয়ে জনপ্রিয় প্যাকেজ
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {pkg.duration}
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    {pkg.bengaliName}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 font-medium">{pkg.name}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 my-3 border-y border-zinc-800 flex items-baseline gap-2">
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

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onOpenBooking(pkg.bengaliName)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    pkg.popular
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black active:scale-98 shadow-amber-500/20"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 active:scale-98"
                  }`}
                >
                  <span>এই প্যাকেজে ভর্তি হন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Consultation Strip */}
        <div className="mt-12 bg-gradient-to-r from-zinc-900 via-zinc-850 to-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg md:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>কোন প্যাকেজটি আপনার জন্য উপযোগী বুঝতে পারছেন না?</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              সরাসরি আমাদের ফিটনেস কনসালটেন্টের সাথে কথা বলে আপনার শরীর ও লক্ষ্য অনুযায়ী ফ্রি পরামর্শ নিন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
              className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm border border-zinc-700 transition shadow-xs text-center justify-center flex items-center"
            >
              সরাসরি কল দিন
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs sm:text-sm shadow-md transition cursor-pointer text-center justify-center flex items-center active:scale-95"
            >
              ফ্রি ট্রায়াল নিন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

