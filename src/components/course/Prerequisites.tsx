import React from "react";
import { CheckCircle2, UserCheck, HelpCircle } from "lucide-react";

interface PrerequisitesProps {
  prerequisites?: string[];
  targetAudience?: string[];
  courseTitle: string;
}

export function Prerequisites({ prerequisites, targetAudience, courseTitle }: PrerequisitesProps) {
  const defaultPrereqs = prerequisites && prerequisites.length > 0 ? prerequisites : [
    "Basic computer literacy and enthusiasm to build software applications.",
    "No mandatory prior programming background required for beginner foundations.",
    "High-speed internet connection and personal laptop for hands-on project labs.",
    "Logical reasoning and problem-solving mindset.",
  ];

  const defaultAudience = targetAudience && targetAudience.length > 0 ? targetAudience : [
    "Fresh engineering graduates (B.E / B.Tech / BCA / MCA / B.Sc) seeking top tech jobs.",
    "Working IT professionals looking to upskill or transition into higher-paying domains.",
    "Non-IT professionals aiming for a career shift into the technology industry.",
    "Freelancers & entrepreneurs wanting to build scalable digital products.",
  ];

  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Prerequisites */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Eligibility Criteria</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Prerequisites for {courseTitle}
          </h3>
          <ul className="space-y-3 pt-1">
            {defaultPrereqs.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Audience */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>Ideal Candidates</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Who Should Enroll in {courseTitle}?
          </h3>
          <ul className="space-y-3 pt-1">
            {defaultAudience.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
