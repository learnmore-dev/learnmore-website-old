import React from "react";
import { Layers, CheckCircle2 } from "lucide-react";

interface LearningOutcomesProps {
  skills: string[];
  courseTitle: string;
}

export function LearningOutcomes({ skills, courseTitle }: LearningOutcomesProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
        <Layers className="w-4 h-4" />
        <span>Core Competencies</span>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Skills &amp; Technologies You Will Master in {courseTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Industry-vetted curriculum designed to take you from fundamentals to enterprise-ready engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
          >
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
