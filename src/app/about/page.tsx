import Link from "next/link";
import { Check, Dumbbell, Users, Sparkles, UserCheck } from "lucide-react";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import { FITFLEX_TRAINERS } from "@/data/fitnessData";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Community",
      desc: "We foster an inclusive and motivating athletic brotherhood where every member supports one another.",
      icon: Users,
    },
    {
      title: "Inclusivity",
      desc: "From first-time beginners to seasoned competitive lifters, our coaching scales to all fitness backgrounds.",
      icon: UserCheck,
    },
    {
      title: "Innovation",
      desc: "Equipped with state-of-the-art machines, biometric tracking, and sports science recovery protocols.",
      icon: Sparkles,
    },
    {
      title: "Personalization",
      desc: "Tailored workout regimes and sustainable nutritional blueprints built specifically for your body.",
      icon: Dumbbell,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Page Banner */}
        <FitFlexPageBanner
          title="ABOUT APEXPULSE"
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* Section 1: Empowering Your Fitness Journey */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative border border-white/10 overflow-hidden bg-[#1a1a1a] aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                    alt="About ApexPulse Fitness Studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)] leading-tight">
                  <span>EMPOWERING </span>YOUR FITNESS JOURNEY
                </h2>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  At ApexPulse, our mission is to empower individuals of all backgrounds to unlock their fullest physical and mental vitality. We bridge the gap between commercial gyms and elite athletic conditioning.
                </p>

                <div className="space-y-3.5 pt-2 text-sm text-white/80 font-medium">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#f2fd84] shrink-0 mt-0.5" />
                    <span>State-of-the-art Olympic barbells, racks, and cardiovascular suites.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#f2fd84] shrink-0 mt-0.5" />
                    <span>Certified master trainers dedicated to biomechanics and injury safety.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#f2fd84] shrink-0 mt-0.5" />
                    <span>Flexible morning, midday, and evening class timetables.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact" className="cs_btn_style_1">
                    <span>GET STARTED TODAY</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Values */}
        <section className="py-24 bg-[#1f1f1f] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                <span>OUR </span>CORE VALUES
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-4">
                The four core principles that guide our studio culture and training philosophy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-[#262626] border border-white/10 p-8 flex flex-col justify-between hover:border-[#f2fd84] transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#f2fd84] mb-6 group-hover:bg-[#f2fd84] group-hover:text-[#222222] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 mt-3 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Meet The Experts (Trainers) */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                <span>MEET </span>THE EXPERT COACHES
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-4">
                Certified, passionate professionals dedicated to guiding your form and accelerating your results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FITFLEX_TRAINERS.map((trainer) => (
                <div
                  key={trainer.id}
                  className="bg-[#1c1c1c] border border-white/10 hover:border-[#f2fd84] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-72 w-full overflow-hidden bg-black">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <span className="text-xs uppercase font-bold text-[#f2fd84]">
                        {trainer.experience}
                      </span>
                      <h3 className="text-lg font-bold text-white uppercase tracking-tight font-[family-name:var(--heading-font)] mt-1">
                        {trainer.name}
                      </h3>
                      <p className="text-xs text-white/50 font-semibold">{trainer.role}</p>
                      <p className="text-xs text-white/60 mt-3 line-clamp-3 leading-relaxed">
                        {trainer.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FitFlexCta
          title="READY TO EMBARK ON YOUR FITNESS JOURNEY WITH APEXPULSE?"
          subtitle="Experience the coaching, community, and energy that makes our studio extraordinary."
        />
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
