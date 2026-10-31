"use client";

import { GymClub } from "@/data/gyms";
import {
  Flame,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle2,
  Star,
  Dumbbell,
  Clock,
  Sparkles,
  Users,
  Trophy,
  ShieldCheck,
} from "lucide-react";

interface HeroProps {
  gym: GymClub;
  onOpenBooking: () => void;
}

export default function Hero({ gym, onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-zinc-800/80">
      {/* Background Graphic Patterns & Glow Orbs */}
      <div className="absolute inset-0 gym-mesh-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div
        className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 animate-slide-up">
            {/* Area Pill & Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-900/90 text-zinc-200 text-[11px] sm:text-xs font-semibold border border-zinc-700/80 shadow-md backdrop-blur-md flex-wrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-zinc-300">{gym.area}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-amber-400 font-bold">{gym.specialHighlight}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.22] tracking-tight">
              {gym.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
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
                <span>ফ্রি কাস্টমাইজড ডায়েট ও ওয়ার্কআউট চার্ট</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>সার্বক্ষণিক ফ্লোর ট্রেইনার ও নারীদের আলাদা স্লট</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="group relative flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs sm:text-sm transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-95 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                <span>ফ্রি ট্রায়াল পাস বুক করুন</span>
              </button>

              <a
                href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
                  `হ্যালো, আমি ${gym.name}-এ মেম্বারশিপ প্যাকেজ সম্পর্কে জানতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-md active:scale-95 hover:shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp এ কথা বলুন</span>
              </a>

              <a
                href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm transition shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>কল: {gym.phone}</span>
              </a>
            </div>

            {/* Live Stats Counter Row */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-zinc-800 text-center">
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                <p className="text-base sm:text-lg font-black text-amber-400">
                  {gym.stats.membersCount.split(" ")[0]}
                </p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">সক্রিয় সদস্য</p>
              </div>
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                <p className="text-base sm:text-lg font-black text-white">
                  {gym.stats.equipmentsCount.split(" ")[0]}
                </p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">উন্নত মেশিনারি</p>
              </div>
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                <p className="text-base sm:text-lg font-black text-white">
                  {gym.stats.trainersCount.split(" ")[0]}
                </p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">সার্টিফাইড কোচ</p>
              </div>
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                <p className="text-base sm:text-lg font-black text-amber-400 flex items-center justify-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {gym.stats.rating.split(" ")[0]}
                </p>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">গুগল রিভিউ রেটিং</p>
              </div>
            </div>
          </div>

          {/* Right Visual Gym Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-zinc-900/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-zinc-800 shadow-2xl relative transition duration-300 hover:border-zinc-700">
              {/* Gym Floor Top Image Banner */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-2xl mb-5 group shadow-inner">
                <img
                  src={gym.heroImage}
                  alt={`${gym.name} ফ্লোর`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                {/* Status Badges */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-amber-400 font-mono text-[11px] font-bold border border-white/10 flex items-center gap-1.5 shadow-sm">
                    <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                    <span>প্রিমিয়াম ট্রেনিং ফ্লোর</span>
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Gym Open Now</span>
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5 drop-shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {gym.name}
                  </span>
                  <span className="text-[11px] text-zinc-300 font-medium">
                    {gym.area.split(",")[0]}
                  </span>
                </div>
              </div>

              {/* Day Pass & Membership Feature Box */}
              <div className="border border-zinc-800 bg-black/60 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      এক্সক্লুসিভ অফার
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      ১ দিনের ভিআইপি গেস্ট পাস
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-black">
                    ১০০% ফ্রি
                  </span>
                </div>

                <div className="space-y-2 text-xs text-zinc-300">
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-400">মেম্বারশিপ প্যাকেজ শুরু:</span>
                    <span className="font-bold text-white">
                      {gym.packages[0]?.price} / মাস
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-400">স্পেশাল প্যাকেজ অফার:</span>
                    <span className="font-bold text-amber-400">
                      ৩ মাসের প্যাকেজে ভর্তি ফি ফ্রি
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-0.5">
                    <span className="text-zinc-400 shrink-0">সময়সূচি:</span>
                    <span className="font-medium text-white text-right">
                      {gym.hours.general}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full mt-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs transition duration-200 text-center shadow-lg cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <Flame className="w-4 h-4 text-black" />
                  <span>এখনই ফ্রি ট্রায়াল স্লট বুক করুন</span>
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-[11px] text-zinc-500">
                  *ট্রায়াল সেশনে কোনো প্রকার হিডেন চার্জ বা বাধ্যবাধকতা নেই।
                </p>
              </div>
            </div>

            {/* Floating Live Badge (desktop/tablet) */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl border border-zinc-700/80 items-center gap-3 animate-float-slow hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">১০০% গ্যারান্টিড রেজাল্ট</p>
                <p className="text-[10px] text-amber-400 font-medium">সায়েন্টিফিক ওয়ার্কআউট প্ল্যান</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
