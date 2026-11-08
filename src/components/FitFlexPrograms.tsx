import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FITFLEX_PROGRAMS } from "@/data/fitnessData";

export default function FitFlexPrograms() {
  const featured = FITFLEX_PROGRAMS.slice(0, 4);

  return (
    <section className="py-24 bg-[#222222] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="cs_text_strock text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
              <span>CHOOSE </span>OUR PATH TO FITNESS
            </h2>
          </div>
          <Link
            href="/classes"
            className="cs_btn_style_outline text-xs px-6 py-2.5 h-11 shrink-0"
          >
            <span>VIEW ALL CLASSES</span>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prog) => (
            <div
              key={prog.slug}
              className="group relative bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Container with overlay */}
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#f2fd84] text-[#222222] text-[10px] font-extrabold uppercase px-2.5 py-1 tracking-wider font-[family-name:var(--heading-font)]">
                    {prog.tag}
                  </div>

                  {/* Center Reveal Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/classes/${prog.slug}`}
                      className="cs_btn_style_1 text-xs py-2 px-5 h-10"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-[#f2fd84] font-bold block mb-1">
                    {prog.category}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] group-hover:text-[#f2fd84] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-2.5 line-clamp-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                <span>{prog.duration}</span>
                <span className="text-white/80 font-semibold">{prog.calories}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

