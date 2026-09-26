import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`space-y-2 mb-8 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
        {title}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
