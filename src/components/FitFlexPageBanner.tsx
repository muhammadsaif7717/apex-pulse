import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FitFlexPageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
}

export default function FitFlexPageBanner({
  title,
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
}: FitFlexPageBannerProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#222222] overflow-hidden border-b border-white/10 text-center">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover filter brightness-[0.2] contrast-125"
        />
        <div className="absolute inset-0 bg-[#222222]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold text-white/60 font-[family-name:var(--heading-font)]">
          <Link href="/" className="hover:text-[#f2fd84] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#f2fd84] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#f2fd84]">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

