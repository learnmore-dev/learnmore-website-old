import React from "react";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  metrics?: { label: string; value?: string; icon?: React.ReactNode }[];
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  metrics,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white pt-10 sm:pt-16 pb-14 sm:pb-18 overflow-hidden border-b border-navy-800">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-6">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-amber-300 font-bold">{badge}</span>
          </div>
        )}

        <div className="max-w-3xl space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {title}{" "}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                {titleHighlight}
              </span>
            )}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-bold text-slate-300">
            {metrics.map((m, idx) => (
              <span key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl">
                {m.icon}
                <span>{m.label}</span>
                {m.value && <span className="text-amber-300 font-black">{m.value}</span>}
              </span>
            ))}
          </div>
        )}

        {children && <div className="pt-2">{children}</div>}
      </div>
    </section>
  );
}
