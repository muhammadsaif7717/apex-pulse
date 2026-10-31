"use client";

import { GymClub, GymTrainer } from "@/data/gyms";
import { Award, ShieldCheck, Dumbbell, Calendar, Sparkles } from "lucide-react";

interface TrainersSectionProps {
  gym: GymClub;
  onOpenBooking: (serviceName?: string) => void;
}

export default function TrainersSection({
  gym,
  onOpenBooking,
}: TrainersSectionProps) {
  return (
    <section id="trainers" className="relative py-16 md:py-24 bg-black border-b border-zinc-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>অভিজ্ঞ কোচ ও প্রশিক্ষকবৃন্দ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            সার্টিফাইড ফিটনেস এক্সপার্টদের সরাসরি পরিচর্যা
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2">
            ইনজুরি ছাড়া দ্রুত ও স্থায়ী শারীরিক রূপান্তরের জন্য আমাদের প্রতিটি ট্রেইনার আন্তর্জাতিকভাবে স্বীকৃত ও প্রশিক্ষিত।
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {gym.trainers.map((tr, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Trainer Portrait Photo Frame */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-800">
                  <img
                    src={tr.image}
                    alt={tr.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

                  {/* Certification Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-amber-400 text-[10px] sm:text-[11px] font-bold border border-white/10 flex items-center gap-1 shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      {tr.certification.split(" ")[0]} Certified
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md text-zinc-300 text-xs font-bold border border-zinc-700">
                      {tr.experience.split(" ")[0]} অভিজ্ঞতা
                    </span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5 sm:p-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {tr.designation}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {tr.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    বিশেষজ্ঞ: <strong className="text-zinc-200">{tr.specialty}</strong>
                  </p>
                  <p className="text-xs text-zinc-500 pt-1">
                    সার্টিফিকেশন: {tr.certification}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(`পার্সোনাল ট্রেইনিং - ${tr.name}`)}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-black text-zinc-200 font-bold text-xs sm:text-sm transition-all duration-200 border border-zinc-700 hover:border-transparent flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ট্রেইনারের সাথে সেশন বুক করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
