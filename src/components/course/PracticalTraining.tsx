import React from "react";
import { Terminal, Laptop, Cpu, CheckCircle2 } from "lucide-react";

interface PracticalTrainingProps {
  courseTitle: string;
  practicalTraining?: {
    labHours?: number;
    labCount?: number;
    description: string;
    keyFeatures: string[];
  };
}

export function PracticalTraining({ courseTitle, practicalTraining }: PracticalTrainingProps) {
  const labData = practicalTraining || {
    labHours: 40,
    labCount: 35,
    description: `Hands-on practical training is at the core of our ${courseTitle} program. Every theory session is immediately followed by rigorous terminal labs, architectural design tasks, and real-time debugging scenarios.`,
    keyFeatures: [
      "Dedicated 24/7 Cloud Sandbox & Local Development Environment Setup",
      "Live Production Debugging Labs under Senior Mentor Supervision",
      "Step-by-step Lab Manuals, Architectural Solution Blueprints & Code Snippets",
      "Daily Coding Challenges & Weekly Architecture Design Reviews",
      "Git & CI/CD Workflow Execution on Real Repositories",
    ],
  };

  return (
    <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
      <div className="flex items-center gap-2 text-brand-400 font-bold text-sm uppercase tracking-wider">
        <Terminal className="w-4 h-4" />
        <span>100% Practical Implementation</span>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Hands-On Lab Infrastructure &amp; Live Projects
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {labData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-600/30 text-brand-400 flex items-center justify-center flex-shrink-0 border border-brand-500/30">
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-black text-white">{labData.labHours}+ Practical Hours</div>
            <div className="text-xs text-slate-400">Intensive Hands-on Terminal &amp; IDE Coding</div>
          </div>
        </div>

        <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-black text-white">{labData.labCount}+ Lab Assignments</div>
            <div className="text-xs text-slate-400">Real Enterprise Use-Cases &amp; Problem Sets</div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Key Practical Lab Features:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {labData.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
