"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FITFLEX_INFO } from "@/data/fitnessData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Banner */}
        <FitFlexPageBanner
          title="MEET OUR FITNESS EXPERTS HERE"
          breadcrumbs={[{ label: "Contact Us" }]}
        />

        {/* Contact Content Section */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Get In Touch Cards */}
              <div className="lg:col-span-5 space-y-8">
                <RevealOnScroll direction="right">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
                      DIRECT ASSISTANCE
                    </span>
                    <h2 className="cs_text_strock text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-4">
                      <span>GET IN </span>TOUCH
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed font-[family-name:var(--body-font)]">
                      Have questions about membership packages, group class timetables, or personalized coaching? Our studio team is ready to assist you.
                    </p>
                  </div>

                  <div className="space-y-4 mt-8">
                    {/* Location Card */}
                    <div className="bg-[#1c1c1c] border border-white/10 p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#f2fd84] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase font-[family-name:var(--heading-font)]">
                          Our Studio Location
                        </h3>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          {FITFLEX_INFO.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-[#1c1c1c] border border-white/10 p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#f2fd84] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase font-[family-name:var(--heading-font)]">
                          Phone Number
                        </h3>
                        <a href={`tel:${FITFLEX_INFO.phone}`} className="text-xs text-white/60 hover:text-[#f2fd84] mt-1 block">
                          {FITFLEX_INFO.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-[#1c1c1c] border border-white/10 p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#f2fd84] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase font-[family-name:var(--heading-font)]">
                          Email Address
                        </h3>
                        <a href={`mailto:${FITFLEX_INFO.email}`} className="text-xs text-white/60 hover:text-[#f2fd84] mt-1 block">
                          {FITFLEX_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Working Hours Card */}
                    <div className="bg-[#1c1c1c] border border-white/10 p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#f2fd84] flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase font-[family-name:var(--heading-font)]">
                          Working Hours
                        </h3>
                        <p className="text-xs text-white/60 mt-1">
                          {FITFLEX_INFO.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Right Column: Send Us A Message Form */}
              <div className="lg:col-span-7">
                <RevealOnScroll direction="left" delayMs={100}>
                  <div className="bg-[#1c1c1c] border border-white/10 p-8 sm:p-12 shadow-2xl">
                    <h2 className="cs_text_strock text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-2">
                      <span>SEND US </span>A MESSAGE
                    </h2>
                    <p className="text-xs text-white/60 mb-8 font-[family-name:var(--body-font)]">
                      Fill out the form below and an athletic concierge will get back to you within 24 hours.
                    </p>

                    {submitted ? (
                      <div className="p-8 bg-[#222222] border border-[#f2fd84]/40 text-center space-y-4">
                        <div className="w-14 h-14 bg-[#f2fd84]/10 text-[#f2fd84] flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase font-[family-name:var(--heading-font)]">
                          Message Dispatched!
                        </h3>
                        <p className="text-xs text-white/60">
                          Thank you, {formData.name}. We have received your inquiry and will contact you shortly.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="cs_btn_style_1 text-xs cursor-pointer"
                        >
                          SEND ANOTHER MESSAGE
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5 font-[family-name:var(--body-font)]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs uppercase font-bold text-white/70 mb-2 font-[family-name:var(--heading-font)]">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Alex Hunter"
                              className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2fd84] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase font-bold text-white/70 mb-2 font-[family-name:var(--heading-font)]">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="alex@example.com"
                              className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2fd84] transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs uppercase font-bold text-white/70 mb-2 font-[family-name:var(--heading-font)]">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2fd84] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase font-bold text-white/70 mb-2 font-[family-name:var(--heading-font)]">
                              Subject
                            </label>
                            <input
                              type="text"
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              placeholder="Membership Inquiry"
                              className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2fd84] transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase font-bold text-white/70 mb-2 font-[family-name:var(--heading-font)]">
                            Your Message *
                          </label>
                          <textarea
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your fitness targets, schedule preference, or membership questions..."
                            className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2fd84] transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="cs_btn_style_1 w-full text-xs py-3.5 tracking-wider font-bold cursor-pointer"
                        >
                          <span>SUBMIT INQUIRY</span>
                        </button>
                      </form>
                    )}
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
