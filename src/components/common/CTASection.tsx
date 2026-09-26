import React from "react";
import { Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";

interface CTASectionProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  phone?: string;
  phones?: string[];
  className?: string;
}

export function CTASection({
  badge = "Seats Limited for Upcoming Batches",
  title = "Ready to Build Your Technology Career? Join Bangalore's #1 Institute Today.",
  description = "Attend a free live demo session, interact directly with our senior instructors, and receive a customized learning roadmap.",
  primaryBtnText = "Book Free Demo Class",
  primaryBtnHref = "/contact-us",
  secondaryBtnText,
  secondaryBtnHref,
  phone,
  phones,
  className = "",
}: CTASectionProps) {
  const defaultPhones = ["+91 90365 24555", "+91 90365 42555", "+91 90363 54551"];
  const phoneNumbers = phones || (phone ? [phone] : defaultPhones);

  return (
    <section className={`max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 ${className}`}>
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-brand-950 to-slate-950 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl border border-brand-900/30">
        <div className="absolute inset-0 bg-radial from-brand-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-6">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </span>
          )}
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white max-w-3xl mx-auto leading-snug">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <CTAButton
              href={primaryBtnHref}
              variant="primary"
              size="lg"
              icon="arrow"
              className="w-full sm:w-auto"
            >
              {primaryBtnText}
            </CTAButton>

            {secondaryBtnText && secondaryBtnHref && (
              <CTAButton
                href={secondaryBtnHref}
                variant="outline"
                size="lg"
                icon="arrow"
                className="w-full sm:w-auto"
              >
                {secondaryBtnText}
              </CTAButton>
            )}

            {phoneNumbers.map((p, idx) => (
              <CTAButton
                key={idx}
                href={`tel:${p.replace(/[^0-9+]/g, "")}`}
                variant="outline"
                size="lg"
                icon="phone"
                className="w-full sm:w-auto hover:bg-white/15 whitespace-nowrap"
              >
                Call {p}
              </CTAButton>
            ))}

            {/* Justdial Official Profile Button */}
            <a
              href="https://www.justdial.com/Bangalore/Learn-More-Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base rounded-xl font-bold bg-[#ff6600]/15 hover:bg-[#ff6600]/25 text-[#ff8822] hover:text-white border border-[#ff6600]/40 transition duration-200 shadow-md w-full sm:w-auto whitespace-nowrap"
              aria-label="View LearnMore Technologies on Justdial"
            >
              <span className="w-5 h-5 rounded-full bg-[#ff6600] text-white flex items-center justify-center text-[10px] font-black leading-none shadow-xs">
                Jd
              </span>
              <span>Justdial (4.9★)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
