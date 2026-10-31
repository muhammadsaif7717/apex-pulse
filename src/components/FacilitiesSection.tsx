"use client";

import { GymClub } from "@/data/gyms";
import { Dumbbell, Flame, Activity, Sparkles, Shield, Trophy } from "lucide-react";

interface FacilitiesSectionProps {
  gym: GymClub;
}

export default function FacilitiesSection({ gym }: FacilitiesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Dumbbell":
        return Dumbbell;
      case "Flame":
        return Flame;
      case "Activity":
        return Activity;
      case "Shield":
        return Shield;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="facilities" className="relative py-16 md:py-24 bg-zinc-950 border-b border-zinc-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>ইকুইপমেন্ট ও আধুনিক সুবিধাসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            ওয়ার্ল্ড-ক্লাস ট্রেনিং ফ্লোর ও সুযোগ-সুবিধা
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2">
            সর্বোচ্চ নিরাপত্তা, পরিচ্ছন্নতা ও পেশাদার ইকুইপমেন্টের সমন্বয়ে প্রস্তুত আমাদের জিম ফ্লোর।
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gym.facilities.map((fac, idx) => {
            const Icon = getIcon(fac.iconName);
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-800">
                    <img
                      src={fac.image}
                      alt={fac.bengaliTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="w-9 h-9 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wide">
                        ফিচার 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                      {fac.bengaliTitle}
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold">{fac.title}</p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                      {fac.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      সার্টিফাইড মেইনটেইনড
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">১০০% হাইজিন</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
