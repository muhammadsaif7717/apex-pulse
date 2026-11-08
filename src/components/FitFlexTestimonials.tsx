import { Star, Quote } from "lucide-react";
import { FITFLEX_TESTIMONIALS } from "@/data/fitnessData";

export default function FitFlexTestimonials() {
  return (
    <section className="py-24 bg-[#1f1f1f] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
            <span>TRANSFORMATIONS SPEAK </span>LOUDER THAN WORDS
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-4">
            Hear from our athletes who reached peak strength, mental discipline, and body composition.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FITFLEX_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#262626] border border-white/10 hover:border-[#f2fd84]/50 transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#f2fd84] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f2fd84]" />
                  ))}
                </div>

                <p className="text-sm text-white/80 leading-relaxed italic mb-8 font-[family-name:var(--body-font)]">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#f2fd84]"
                />
                <div>
                  <h3 className="text-base font-bold text-white font-[family-name:var(--heading-font)]">
                    {t.name}
                  </h3>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

