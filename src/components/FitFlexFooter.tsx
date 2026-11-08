"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { FITFLEX_INFO } from "@/data/fitnessData";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function FitFlexFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1c1c1c] text-white/70 border-t border-white/10 font-[family-name:var(--body-font)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Info (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#f2fd84] text-[#222222] flex items-center justify-center font-black">
                <Zap className="w-5 h-5 fill-[#222222] stroke-[#222222]" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                APEX<span className="text-[#f2fd84]">PULSE</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              {FITFLEX_INFO.description}
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>{FITFLEX_INFO.address}</p>
              <p>{FITFLEX_INFO.phone}</p>
              <p>{FITFLEX_INFO.email}</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#f2fd84] hover:text-[#222222] border border-white/10 flex items-center justify-center text-white/70 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#f2fd84] hover:text-[#222222] border border-white/10 flex items-center justify-center text-white/70 transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#f2fd84] hover:text-[#222222] border border-white/10 flex items-center justify-center text-white/70 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#f2fd84] hover:text-[#222222] border border-white/10 flex items-center justify-center text-white/70 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: About */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-[family-name:var(--heading-font)]">
              About
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#f2fd84] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f2fd84] transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f2fd84] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f2fd84] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-[family-name:var(--heading-font)]">
              Contact
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/contact" className="hover:text-[#f2fd84] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f2fd84] transition-colors">
                  Location & Hours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f2fd84] transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f2fd84] transition-colors">
                  Partnership Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Classes */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-[family-name:var(--heading-font)]">
              Classes
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/timetable" className="hover:text-[#f2fd84] transition-colors">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#f2fd84] transition-colors">
                  Types of Workouts
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f2fd84] transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#f2fd84] transition-colors">
                  Virtual Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-[family-name:var(--heading-font)]">
              Sign up for our newsletter
            </h3>
            <p className="text-xs text-white/50 mb-3">
              Get the latest workout routines, nutrition guides, and announcements.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#f2fd84]/10 border border-[#f2fd84]/30 text-[#f2fd84] text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#141414] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#f2fd84] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="cs_btn_style_1 w-full text-xs h-10 flex items-center justify-center gap-1.5"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 ApexPulse Fitness Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

