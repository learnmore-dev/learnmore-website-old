import React from "react";
import { FolderGit2, CheckCircle2, Cpu } from "lucide-react";
import { CourseProject } from "@/types";

interface ProjectShowcaseProps {
  projects: CourseProject[];
  courseTitle?: string;
}

export function ProjectShowcase({ projects, courseTitle }: ProjectShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                #{idx + 1}
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {courseTitle ? `${courseTitle} Project` : "Industry Capstone Project"}
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-900 leading-snug">
              {proj.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {proj.description}
            </p>

            {/* Tech stack pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {proj.technologies.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Portfolio Outcome: </span>
              <span>{proj.keyOutcome}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
