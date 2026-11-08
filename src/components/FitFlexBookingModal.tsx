"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Dumbbell, ShieldCheck, Zap } from "lucide-react";
import { FITFLEX_PROGRAMS } from "@/data/fitnessData";

export function openBookingModal(interest = "Free 7-Day All-Access Pass") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-fitflex-booking", { detail: { interest } })
    );
  }
}

interface FitFlexBookingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialInterest?: string;
}

export default function FitFlexBookingModal({
  isOpen: propIsOpen,
  onClose: propOnClose,
  initialInterest: propInitialInterest = "Free 7-Day All-Access Pass",
}: FitFlexBookingModalProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(propInitialInterest);

  const isControlled = propIsOpen !== undefined;
  const isModalOpen = isControlled ? propIsOpen : internalOpen;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: propInitialInterest,
    timePreference: "Morning (06:00 - 09:00 AM)",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleClose = () => {
    if (propOnClose) {
      propOnClose();
    }
    setInternalOpen(false);
    setErrorMsg("");
    setSuccess(false);
  };

  useEffect(() => {
    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ interest?: string }>;
      const newInterest = customEvent.detail?.interest || "Free 7-Day All-Access Pass";
      setSelectedInterest(newInterest);
      setFormData((prev) => ({ ...prev, interest: newInterest }));
      setInternalOpen(true);
      setSuccess(false);
    };

    window.addEventListener("open-fitflex-booking", handleCustomOpen);
    return () => {
      window.removeEventListener("open-fitflex-booking", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (propInitialInterest) {
      setSelectedInterest(propInitialInterest);
      setFormData((prev) => ({ ...prev, interest: propInitialInterest }));
    }
  }, [propInitialInterest]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please provide your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg("Please enter a valid phone number for SMS pass confirmation.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 750);
  };

  const handleCloseAndReset = () => {
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleCloseAndReset}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#1e1e1e] border border-white/15 p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f2fd84]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleCloseAndReset}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#f2fd84]/15 border border-[#f2fd84] text-[#f2fd84] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase font-[family-name:var(--heading-font)]">
              Studio Pass Reserved!
            </h3>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto">
              Welcome, <span className="text-white font-bold">{formData.name}</span>! Your admission confirmation has been texted to{" "}
              <span className="text-[#f2fd84] font-bold">{formData.phone}</span>.
            </p>

            <div className="bg-[#171717] p-4 border border-white/10 text-left text-xs space-y-2 mt-4 text-white/80">
              <div className="flex justify-between">
                <span className="text-white/50">Program:</span>
                <span className="text-[#f2fd84] font-bold">{formData.interest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Time Slot:</span>
                <span className="text-white">{formData.timePreference}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCloseAndReset}
              className="cs_btn_style_1 w-full text-xs mt-4"
            >
              DONE & RETURN TO STUDIO
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#f2fd84] bg-[#f2fd84]/10 px-2.5 py-1 inline-block border border-[#f2fd84]/20 mb-2 font-[family-name:var(--heading-font)]">
                APEXPULSE PASS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                Claim Your Free Trial Pass
              </h2>
              <p className="text-xs text-white/60 mt-1">
                Zero commitments. Test our coaches, group classes, and facilities.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-[family-name:var(--body-font)]">
              <div>
                <label className="block text-xs font-bold uppercase text-white mb-1.5 font-[family-name:var(--heading-font)]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jordan Hayes"
                  className="w-full bg-[#141414] border border-white/15 p-3 text-xs text-white placeholder-white/30 focus:border-[#f2fd84] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-white mb-1.5 font-[family-name:var(--heading-font)]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#141414] border border-white/15 p-3 text-xs text-white placeholder-white/30 focus:border-[#f2fd84] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-white mb-1.5 font-[family-name:var(--heading-font)]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full bg-[#141414] border border-white/15 p-3 text-xs text-white placeholder-white/30 focus:border-[#f2fd84] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white mb-1.5 font-[family-name:var(--heading-font)]">
                  Select Program or Pass
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none font-[family-name:var(--heading-font)]"
                >
                  <option value="Free 7-Day All-Access Pass">Free 7-Day All-Access Pass</option>
                  <option value="Basic Plan ($29/mo)">Basic Plan ($29/mo)</option>
                  <option value="Premium Plan ($59/mo)">Premium Plan ($59/mo)</option>
                  <option value="Elite Plan ($99/mo)">Elite Plan ($99/mo)</option>
                  {FITFLEX_PROGRAMS.map((p) => (
                    <option key={p.slug} value={`Class: ${p.title}`}>
                      Class: {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white mb-1.5 font-[family-name:var(--heading-font)]">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.timePreference}
                  onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none font-[family-name:var(--heading-font)]"
                >
                  <option value="Early Morning (06:00 - 08:00 AM)">Early Morning (06:00 - 08:00 AM)</option>
                  <option value="Morning (08:00 - 11:00 AM)">Morning (08:00 - 11:00 AM)</option>
                  <option value="Midday (12:00 - 02:00 PM)">Midday (12:00 - 02:00 PM)</option>
                  <option value="Evening (05:00 - 08:00 PM)">Evening (05:00 - 08:00 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="cs_btn_style_1 w-full text-xs h-12 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-[#222222] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>CONFIRM & ISSUE PASS</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-white/50 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f2fd84]" />
                <span>No credit card required. Free 7-day trial.</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
