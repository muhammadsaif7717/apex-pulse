"use client";

import { GymClub } from "@/data/gyms";
import {
  Flame,
  MessageCircle,
  Phone,
  CheckCircle2,
  Star,
  Dumbbell,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";

interface HeroProps {
  gym: GymClub;
  onOpenBooking: () => void;
}

export default function Hero({ gym, onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-zinc-800/80">
      {/* Background Graphic Patterns & Glow Orbs */}
      <div className="absolute inset-0 gym-mesh-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-8 right-1/4 w-[380px] h-[380px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div
        className="absolute bottom-8 left-8 w-[340px] h-[340px] bg-orange-600/10 rounded-full blur-[90px] pointer-events-none animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 animate-slide-up">
            
            {/* Area Pill & Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-900 text-zinc-200 text-[11px] sm:text-xs font-semibold border border-zinc-700/80 shadow-sm backdrop-blur-md flex-wrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-zinc-300 font-medium">{gym.area}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-amber-400 font-bold">{gym.specialHighlight}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.22] tracking-tight uppercase">
              {gym.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {gym.heroSubheadline}
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>১ দিনের ফ্রি ট্রায়াল সেশন ও জিম ট্যুর</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ইনবডি বডি কম্পোজিশন এনালাইসিস</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ফ্রি কাস্টমাইজড ডায়েট ও ওয়ার্কআউট প্ল্যান</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>সার্বক্ষণিক ফ্লোর ট্রেইনার ও নারীদের আলাদা স্লট</span>
              </div>
            </div>

            {/* Primary Action Buttons (Vercel Guidelines compliant) */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="group flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all duration-150 shadow-xs hover:shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 min-h-[44px] cursor-pointer"
              >
                <Flame className="w-4 h-4 text-zinc-950 transition-transform group-hover:scale-110" />
                <span>ফ্রি ট্রায়াল পাস বুক করুন</span>
              </button>

              <a
                href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
                  `হ্যালো, আমি ${gym.name}-এ মেম্বারশিপ প্যাকেজ সম্পর্কে জানতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-xs sm:text-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp এ অফার</span>
              </a>

              <a
                href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>কল: {gym.phone}</span>
              </a>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-4 sm:pt-5 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-zinc-800 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">৪.৯/৫</span>
                <span className="text-zinc-500">(সদস্যদের রিভিউ)</span>
              </div>
              <div className="h-3.5 w-px bg-zinc-800 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-medium text-zinc-300">১০০% আন্তর্জাতিক ইকুইপমেন্ট</span>
              </div>
              <div className="h-3.5 w-px bg-zinc-800 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-medium text-zinc-300">১৫০০+ সক্রিয় সদস্য</span>
              </div>
            </div>

          </div>

          {/* Right Gym Floor Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-zinc-900/90 rounded-2xl p-5 sm:p-6 border border-zinc-800 shadow-md">
              
              {/* Gym Floor Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4 bg-zinc-950">
                <img
                  src={gym.heroImage}
                  alt={`${gym.name} ফিটনেস ফ্লোর`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Live Training Status */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-amber-500/30 flex items-center gap-1.5 shadow-xs">
                    <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                    <span>ইম্পোর্টেড মেশিনস</span>
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>সেশন চালু আছে</span>
                  </span>
                </div>

                {/* Bottom Gym Name Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold text-zinc-100 uppercase tracking-wide">
                    {gym.name}
                  </span>
                  <span className="text-[11px] text-amber-400 font-semibold">
                    {gym.area}
                  </span>
                </div>
              </div>

              {/* Today's Shifts & Admission Offer */}
              <div className="space-y-2.5 pb-4 border-b border-zinc-800 text-xs">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>জেনারেল সময়সূচি:</span>
                  </span>
                  <span className="font-semibold text-white">{gym.hours.general}</span>
                </div>
                {gym.hours.female && (
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-pink-400" />
                      <span>লেডিস এক্সক্লুসিভ শিফট:</span>
                    </span>
                    <span className="font-semibold text-pink-300">{gym.hours.female}</span>
                  </div>
                )}
              </div>

              {/* Free Day Pass Instant Trigger */}
              <div className="pt-3.5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                    স্পেশাল অফার
                  </span>
                  <span className="text-sm font-black text-amber-400">
                    ফ্রি ট্রায়াল + ইনবডি টেস্ট
                  </span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-zinc-950 text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer min-h-[44px]"
                >
                  পাস ক্লেম করুন
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
