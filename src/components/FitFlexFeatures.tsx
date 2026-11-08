import { Dumbbell, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import { FITFLEX_FEATURES } from "@/data/fitnessData";

export default function FitFlexFeatures() {
  const icons = [Dumbbell, Clock, ShieldCheck, HeartPulse];

  return (
    <section className="py-24 bg-[#1f1f1f] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
            <span>WHY APEXPULSE IS </span>YOUR IDEAL FITNESS PARTNER
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-4">
            We focus on sustainable athletic progression, joint longevity, and a welcoming culture.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FITFLEX_FEATURES.map((f, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={f.title}
                className="bg-[#242424] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#f2fd84] flex items-center justify-center mb-6 group-hover:bg-[#f2fd84] group-hover:text-[#222222] transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] group-hover:text-[#f2fd84] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-3 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

