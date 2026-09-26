import React from "react";
import { Wrench } from "lucide-react";

interface TechnologyItem {
  name: string;
  category?: string;
}

interface TechnologyListProps {
  technologies: TechnologyItem[];
  courseTitle?: string;
}

export function TechnologyList({ technologies, courseTitle }: TechnologyListProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
        <Wrench className="w-4 h-4" />
        <span>Ecosystem &amp; Stack</span>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Tools, Libraries &amp; Frameworks Covered {courseTitle ? `in ${courseTitle}` : ""}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Master the exact software stack used in top tech enterprises during your {courseTitle || "training"}.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 pt-2">
        {technologies.map((tool, idx) => (
          <div
            key={idx}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-xs sm:text-sm text-slate-800 shadow-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            <span>{tool.name}</span>
            {tool.category && (
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                {tool.category}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
