"use client";

import { GymClub } from "@/data/gyms";
import { Camera, Sparkles, ShieldCheck } from "lucide-react";

interface GallerySectionProps {
  gym: GymClub;
}

export default function GallerySection({ gym }: GallerySectionProps) {
  return (
    <section id="gallery" className="relative py-16 md:py-24 bg-zinc-950 border-b border-zinc-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-wide inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              জিম ফ্লোর চিত্রশালা
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
              পরিচ্ছন্ন পরিবেশ ও আধুনিক ইকুইপমেন্টের এক ঝলক
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              {gym.name}-এর সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত, সাউন্ড সিস্টেম ও আলোয় সাজানো প্রিমিয়াম স্পেস।
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-zinc-900 border border-emerald-500/40 px-3 py-1.5 rounded-full shadow-sm shrink-0 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>১০০% হাইজিন ও স্যানিটাইজড</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {gym.gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-60 sm:h-64 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-amber-500/50 hover:-translate-y-1"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold text-amber-400 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-block text-[11px] font-bold text-amber-400 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 mb-1">
                  ছবি 0{idx + 1}
                </span>
                <p className="text-xs font-bold text-white leading-snug drop-shadow-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

