"use client";

import { GymClub } from "@/data/gyms";
import { Star, Quote, CheckCircle2, MessageSquare, TrendingUp } from "lucide-react";

interface TransformationsSectionProps {
  gym: GymClub;
}

export default function TransformationsSection({
  gym,
}: TransformationsSectionProps) {
  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-black border-b border-zinc-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>সফল সদস্যদের ট্রান্সফর্মেশন ও ফিডব্যাক</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            আমাদের সদস্যরা কী বলছেন
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2">
            গুগল ও সোশ্যাল মিডিয়ায় {gym.name}-এর নিয়মিত মেম্বারদের দেওয়া শতভাগ খাঁটি রিভিউ ও অর্জিত ফলাফল।
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {gym.reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    ভেরিফাইড মেম্বার
                  </span>
                </div>

                <Quote className="w-7 h-7 text-amber-500/30 mb-2" />

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div>
                {/* Result Pill */}
                <div className="mb-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">লক্ষ্য: {rev.goal}</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {rev.result}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                    </h4>
                    <p className="text-[11px] text-zinc-500">{rev.area}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

