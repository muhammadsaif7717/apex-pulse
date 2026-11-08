"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
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
                <div>
                  <h2 className="cs_text_strock text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-4">
                    <span>GET IN </span>TOUCH
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Have questions about membership packages, group class timetables, or personalized coaching? Our studio team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-4">
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
              </div>

              {/* Right Column: Send Us A Message Form */}
              <div className="lg:col-span-7 bg-[#1c1c1c] border border-white/10 p-8 sm:p-12">
                <h2 className="cs_text_strock text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mb-2">
                  <span>SEND US </span>A MESSAGE
                </h2>
                <p className="text-xs text-white/60 mb-8">
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
                      className="cs_btn_style_1 text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-[family-name:var(--body-font)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your Email"
                          className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your Phone Number"
                          className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Subject"
                          className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white uppercase mb-1 font-[family-name:var(--heading-font)]">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full bg-[#141414] border border-white/10 p-3 text-xs text-white focus:border-[#f2fd84] focus:outline-none"
                      />
                    </div>

                    <button type="submit" className="cs_btn_style_1 text-xs">
                      SUBMIT NOW
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map View */}
        <section className="h-80 bg-[#181818] relative flex items-center justify-center border-b border-white/10">
          <div className="text-center p-8 bg-[#222222] border border-white/10 z-10 max-w-md">
            <h4 className="text-lg font-bold text-white uppercase font-[family-name:var(--heading-font)]">
              {FITFLEX_INFO.name} Flagship Studio
            </h4>
            <p className="text-xs text-white/60 mt-1">{FITFLEX_INFO.address}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-xs font-bold text-[#f2fd84] hover:underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </section>
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
