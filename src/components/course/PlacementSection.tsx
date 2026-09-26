import React from "react";
import { Briefcase, CheckCircle2, TrendingUp, Users, Building2 } from "lucide-react";

interface PlacementSectionProps {
  courseTitle: string;
}

export function PlacementSection({ courseTitle }: PlacementSectionProps) {
  const placementHighlights = [
    {
      title: "1-on-1 Mock Technical Interviews",
      desc: "Simulated tech interviews with Senior Engineering Leads & hiring managers to refine your problem solving and architecture explanations.",
    },
    {
      title: "Professional Resume & Portfolio Building",
      desc: "ATS-optimized resume crafting highlighting capstone projects, GitHub repositories, and verified industry skill competencies.",
    },
    {
      title: "Dedicated Corporate Placement Cell",
      desc: "Direct interview scheduling with our network of 500+ partnered IT MNCs, product enterprises, and funded technology startups.",
    },
    {
      title: "Salary Negotiation & Offer Guidance",
      desc: "Comprehensive coaching on role evaluation, salary package benchmarks, and career roadmap transition support.",
    },
  ];

  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
        <Briefcase className="w-4 h-4" />
        <span>Career Acceleration</span>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          100% Placement Support &amp; Job Assistance for {courseTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Our dedicated placement cell supports you from initial skill assessments until you sign your dream job offer.
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-1">
          <div className="text-xl sm:text-2xl font-black text-brand-600">500+</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase">Hiring Partners</div>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-1">
          <div className="text-xl sm:text-2xl font-black text-slate-900">24 LPA</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase">Highest CTC</div>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-1">
          <div className="text-xl sm:text-2xl font-black text-emerald-600">85%</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase">Average Salary Hike</div>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-1">
          <div className="text-xl sm:text-2xl font-black text-brand-600">1,200+</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase">Annual Drives</div>
        </div>
      </div>

      {/* Key Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {placementHighlights.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-slate-50/70 border border-slate-100 rounded-2xl space-y-2 hover:bg-slate-50 transition"
          >
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{item.title}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
