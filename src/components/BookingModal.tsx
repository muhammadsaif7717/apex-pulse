"use client";

import { useState, useEffect } from "react";
import { GymClub } from "@/data/gyms";
import { X, Calendar, Phone, User, MessageCircle, CheckCircle, Flame, Clock, Loader2, Dumbbell } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  gym: GymClub;
  initialPlan?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  gym,
  initialPlan,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState(initialPlan || "১ দিনের ফ্রি ট্রায়াল পাস (Free Guest Pass)");
  const [shift, setShift] = useState("সন্ধ্যার শিফট (৬:০০ PM - ১০:০০ PM)");
  const [goal, setGoal] = useState("বডি ফ্যাট লস / ফিটনেস");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setPlan(initialPlan);
    }
  }, [initialPlan]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*ফিটনেস মেম্বারশিপ / ফ্রি ট্রায়াল বুকিং (${gym.name})*
----------------------------------
👤 মেম্বারের নাম: ${name}
📱 মোবাইল নম্বর: ${phone}
🏋️ কাঙ্ক্ষিত প্যাকেজ: ${plan}
⏰ পছন্দের শিফট: ${shift}
🎯 প্রধান শারীরিক লক্ষ্য: ${goal}
📝 বিশেষ তথ্য / নোট: ${notes || "নেই"}
----------------------------------
বিনীত,
${name}`;

    const whatsappUrl = `https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(message)}`;

    // Realistic optimistic loading state (Vercel Guidelines)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 700);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setNotes("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gym-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-zinc-900 rounded-2xl max-w-md w-full p-5 sm:p-7 shadow-2xl border border-zinc-700 relative my-auto max-h-[92vh] overflow-y-auto animate-slide-up text-zinc-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="ফর্ম বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-left mb-4 sm:mb-5 pr-8">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block">
                {gym.name}
              </span>
              <h2 id="gym-modal-title" className="text-lg sm:text-xl font-black text-white mt-0.5 tracking-tight uppercase">
                ফ্রি ট্রায়াল পাস ও মেম্বারশিপ বুকিং
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                আপনার তথ্য দিন, আমরা কিছুক্ষণের মধ্যে ফ্রি ট্রায়াল পাস কনফার্ম করব।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label htmlFor="member-name" className="block text-xs font-semibold text-zinc-300 mb-1">
                  আপনার পূর্ণ নাম <span className="text-amber-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                  <input
                    id="member-name"
                    type="text"
                    required
                    placeholder="আপনার নাম লিখুন"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="member-phone" className="block text-xs font-semibold text-zinc-300 mb-1">
                  মোবাইল নম্বর <span className="text-amber-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                  <input
                    id="member-phone"
                    type="tel"
                    required
                    placeholder="০১XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="member-plan" className="block text-xs font-semibold text-zinc-300 mb-1">
                  কাঙ্ক্ষিত মেম্বারশিপ প্যাকেজ
                </label>
                <div className="relative">
                  <Dumbbell className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                  <select
                    id="member-plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[44px]"
                  >
                    <option value="১ দিনের ফ্রি ট্রায়াল পাস (Free Guest Pass)">
                      ১ দিনের ফ্রি ট্রায়াল পাস (Free Guest Pass)
                    </option>
                    {gym.packages.map((p) => (
                      <option key={p.id} value={p.bengaliName}>
                        {p.bengaliName} ({p.price})
                      </option>
                    ))}
                    <option value="পার্সোনাল ট্রেইনার (১-অন-১ স্পেশাল গাইডেন্স)">
                      পার্সোনাল ট্রেইনার (১-অন-১ স্পেশাল গাইডেন্স)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="member-shift" className="block text-xs font-semibold text-zinc-300 mb-1">
                    পছন্দের ওয়ার্কআউট শিফট
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <select
                      id="member-shift"
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full pl-9 pr-2.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[44px]"
                    >
                      <option value="সকালের শিফট (৬:০০ AM - ১১:০০ AM)">সকাল (৬:০০ - ১১:০০ AM)</option>
                      <option value="দুপুরের শিফট (১১:০০ AM - ৪:০০ PM)">দুপুর (১১:০০ - ৪:০০ PM)</option>
                      <option value="সন্ধ্যার শিফট (৬:০০ PM - ১০:০০ PM)">সন্ধ্যা (৬:০০ - ১০:০০ PM)</option>
                      {gym.hours.female && (
                        <option value="মহিলাদের এক্সক্লুসিভ শিফট">মহিলাদের বিশেষ শিফট</option>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="member-goal" className="block text-xs font-semibold text-zinc-300 mb-1">
                    প্রধান শারীরিক লক্ষ্য
                  </label>
                  <div className="relative">
                    <Flame className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <select
                      id="member-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full pl-9 pr-2.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[44px]"
                    >
                      <option value="বডি ফ্যাট লস / ফিটনেস">বডি ফ্যাট লস / স্লিম হওয়া</option>
                      <option value="মাসল বিল্ডিং ও স্ট্রেন্থ">মাসল বিল্ডিং ও হাইপারট্রফি</option>
                      <option value="ওজন বাড়ানো / বাল্কিং">ওজন বাড়ানো (Weight Gain)</option>
                      <option value="সাধারণ ফিটনেস ও স্ট্যামিনা">সাধারণ ফিটনেস ও স্ট্যামিনা</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="member-notes" className="block text-xs font-semibold text-zinc-300 mb-1">
                  কোনো শারীরিক ইনজুরি বা তথ্য (ঐচ্ছিক)
                </label>
                <textarea
                  id="member-notes"
                  rows={2}
                  placeholder="যেমন: ব্যাক পেইন, হাঁটুর সমস্যা বা ডায়েট সংক্রান্ত নোট..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-zinc-950 font-bold text-sm transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[44px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                      <span>পাস জেনারেট হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Flame className="w-4 h-4 text-zinc-950" />
                      <span>ফ্রি ট্রায়াল পাস নিশ্চিত করুন</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-zinc-400 mt-2.5">
                  সাবমিট করার সাথে সাথে আপনার হোয়াটসঅ্যাপে জিম এন্ট্রি পাস চলে যাবে।
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 sm:py-8 space-y-3.5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
              ফ্রি ট্রায়াল পাস কনফার্ম হয়েছে!
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              স্বাগতম <strong>{name}</strong>! আপনার ফ্রি ডে পাস তথ্য {gym.name}-এ গৃহীত হয়েছে। জিম ম্যানেজমেন্ট থেকে দ্রুত কনফার্মেশন মেসেজ পাবেন।
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition active:scale-[0.98] min-h-[44px]"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
