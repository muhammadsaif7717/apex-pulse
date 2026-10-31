"use client";

import { GymClub } from "@/data/gyms";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  Compass,
  Users,
} from "lucide-react";

interface LocationSectionProps {
  gym: GymClub;
}

export default function LocationSection({ gym }: LocationSectionProps) {
  const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${gym.name} ${gym.address}`
  )}`;

  return (
    <section id="location" className="relative py-16 md:py-24 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-wide">
                জিমের অবস্থান ও শিডিউল
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2.5">
                সরাসরি চলে আসুন আমাদের জিম ফ্লোরে
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                সহজ যাতায়াত, প্রশস্ত এসি স্পেস ও নিরাপত্তা নিশ্চিত পরিবেশে আপনার আগমন প্রত্যাশা করছি।
              </p>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {/* Address */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-start gap-3.5 transition hover:border-amber-500/40 shadow-sm">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide">
                    জিমের পূর্ণ ঠিকানা
                  </h4>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {gym.address}
                  </p>
                </div>
              </div>

              {/* Hours Breakdown */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-start gap-3.5 transition hover:border-amber-500/40 shadow-sm">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 w-full">
                  <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide">
                    শিফট ও ট্রেইনিং শিডিউল
                  </h4>
                  <p className="text-sm font-bold text-white">
                    সাধারণ সময়: {gym.hours.general}
                  </p>
                  {gym.hours.male && (
                    <p className="text-xs text-zinc-300">
                      • পুরুষদের শিফট: {gym.hours.male}
                    </p>
                  )}
                  {gym.hours.female && (
                    <p className="text-xs text-rose-400 font-semibold">
                      • নারীদের এক্সক্লুসিভ শিফট: {gym.hours.female}
                    </p>
                  )}
                  <p className="text-xs text-zinc-400">
                    • শুক্রবার: {gym.hours.friday}
                  </p>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-start gap-3.5 transition hover:border-amber-500/40 shadow-sm">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide">
                    ভর্তি ও মেম্বারশিপ হেল্পলাইন
                  </h4>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {gym.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={gmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95 text-center"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>গুগল ম্যাপে দিকনির্দেশনা দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>

              <a
                href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
                  `হ্যালো, আমি ${gym.name}-এর লোকেশন ও আসার রুট সম্পর্কে জানতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-emerald-400 font-bold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>হোয়াটসঅ্যাপে লোকেশন নিন</span>
              </a>
            </div>
          </div>

          {/* Right Simulated Map Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-5 sm:p-8 text-center relative shadow-2xl min-h-[320px] sm:min-h-[400px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 gym-mesh-pattern opacity-40 pointer-events-none" />

              <div className="relative z-10 max-w-md w-full bg-zinc-950/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl border border-zinc-800 transition hover:border-zinc-700">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-black flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
                  <MapPin className="w-7 h-7 text-black animate-bounce" />
                </div>
                <h3 className="text-lg font-black text-white">{gym.name}</h3>
                <p className="text-xs text-amber-400 font-bold mt-1">{gym.area}</p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {gym.address}
                </p>

                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-center">
                  <a
                    href={gmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                  >
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>গুগল ম্যাপসে বড় করে দেখুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

