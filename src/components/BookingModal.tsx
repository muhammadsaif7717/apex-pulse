"use client";

import { useState, useEffect } from "react";
import { GymClub } from "@/data/gyms";
import { X, Calendar, Phone, User, MessageCircle, CheckCircle, Flame, Clock } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setPlan(initialPlan);
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*ফিটনেস মেম্বারশিপ / ফ্রি ট্রায়াল বুকিং (${gym.name})*
----------------------------------
👤 মেম্বারের নাম: ${name}
📱 মোবাইল নম্বর: ${phone}
🏋️ কাঙ্ক্ষিত প্যাকেজ: ${plan}
⏰ পছন্দের শিফট: ${shift}
🎯 প্রধান শারীরিক লক্ষ্য: ${goal}
📝 বিশেষ তথ্য / নোট: ${notes || "নেই"}
----------------------------------`;

    const whatsappUrl = `https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-zinc-900 rounded-3xl max-w-md w-full p-5 sm:p-7 shadow-2xl border border-zinc-700 relative my-auto max-h-[92vh] overflow-y-auto animate-slide-up text-zinc-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-left mb-4 sm:mb-5 pr-8">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                {gym.name}
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                ফ্রি ট্রায়াল পাস ও মেম্বারশিপ বুকিং
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                আপনার তথ্য দিন, আমরা কিছুক্ষণের মধ্যে ফ্রি পাস কনফার্ম করব।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  আপনার পূর্ণ নাম *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="আপনার নাম লিখুন"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  মোবাইল নম্বর *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  কাঙ্ক্ষিত প্যাকেজ / সুবিধা
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
                >
                  <option value="১ দিনের ফ্রি ট্রায়াল পাস (Free Guest Pass)">
                    ১ দিনের ফ্রি ট্রায়াল পাস (Free Guest Pass)
                  </option>
                  {gym.packages.map((pkg) => (
                    <option key={pkg.id} value={`${pkg.bengaliName} (${pkg.price})`}>
                      {pkg.bengaliName} ({pkg.price})
                    </option>
                  ))}
                  <option value="পার্সোনাল ট্রেইনার (Personal Training)">
                    পার্সোনাল ট্রেইনার (Personal Training)
                  </option>
                  <option value="লেডিস এক্সক্লুসিভ শিফট">
                    লেডিস এক্সক্লুসিভ শিফট
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    পছন্দের শিফট
                  </label>
                  <select
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
                  >
                    <option value="সকালের শিফট (৬:০০ AM - ১১:০০ AM)">সকালের শিফট</option>
                    <option value="দুপুরের লেডিস শিফট (১২:০০ PM - ৫:০০ PM)">দুপুরের লেডিস শিফট</option>
                    <option value="সন্ধ্যার শিফট (৬:০০ PM - ১০:০০ PM)">সন্ধ্যার শিফট</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    প্রধান লক্ষ্য
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
                  >
                    <option value="বডি ফ্যাট লস / ওজন হ্রাস">বডি ফ্যাট লস</option>
                    <option value="মাসল বিল্ডিং / হাইপারট্রফি">মাসল বিল্ডিং</option>
                    <option value="পাওয়ার ও স্ট্রেংথ বৃদ্ধি">পাওয়ার ও স্ট্রেন্থ</option>
                    <option value="জেনারেল হেলথ ও ফিটনেস">জেনারেল ফিটনেস</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  কোনো ইনজুরি বা বিশেষ মন্তব্য (ঐচ্ছিক)
                </label>
                <textarea
                  rows={2}
                  placeholder="যেমন: কোমর ব্যথা, আগে কোনো জিম করিনি..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>হোয়াটসঅ্যাপে ফ্রি পাস কনফার্ম করুন</span>
                </button>
                <p className="text-[11px] text-center text-zinc-500 mt-2">
                  🔒 আপনার ফোন নম্বর সম্পূর্ণ নিরাপদ থাকবে।
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-white">
              ফ্রি ট্রায়াল রিকোয়েস্ট তৈরি হয়েছে!
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              আপনার তথ্য নিয়ে হোয়াটসঅ্যাপ ওপেন হচ্ছে। জিম টিম থেকে দ্রুতই আপনার স্লট কনফার্ম করা হবে।
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-6 py-2.5 rounded-xl bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700"
            >
              বন্ধ করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

