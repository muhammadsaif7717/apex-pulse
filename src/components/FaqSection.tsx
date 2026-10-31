"use client";

import { useState } from "react";
import { GymClub } from "@/data/gyms";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  gym: GymClub;
}

export default function FaqSection({ gym }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 bg-black border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>সচরাচর জিজ্ঞাসা (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            ভর্তি ও ট্রেনিং সংক্রান্ত সাধারণ প্রশ্ন ও উত্তর
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5">
            জিম শুরু করার পূর্বে আপনার মনে যেসব সাধারণ প্রশ্ন আসতে পারে।
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {gym.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-amber-500/60 bg-zinc-900/90 shadow-lg"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-white text-xs sm:text-sm md:text-base hover:text-amber-400 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 animate-slide-up">
                    <p className="pl-4 sm:pl-5 text-zinc-400">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

