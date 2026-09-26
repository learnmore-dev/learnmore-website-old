"use client";

import React, { useState } from "react";
import { ChevronDown, BookOpen, FlaskConical, Clock } from "lucide-react";
import { CourseModule } from "@/types";

interface CurriculumAccordionProps {
  modules: CourseModule[];
}

export function CurriculumAccordion({ modules }: CurriculumAccordionProps) {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const expandAll = () => {
    setExpandedIndices(modules.map((_, i) => i));
  };

  const collapseAll = () => {
    setExpandedIndices([]);
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600 pb-1">
        <span>{modules.length} Modules • Practical Lab Curriculum</span>
        <div className="flex items-center gap-3">
          <button
            onClick={expandAll}
            className="text-brand-600 hover:text-brand-700 underline"
          >
            Expand All
          </button>
          <span>•</span>
          <button
            onClick={collapseAll}
            className="text-slate-500 hover:text-slate-700 underline"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {modules.map((mod, index) => {
          const isExpanded = expandedIndices.includes(index);
          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 font-black text-xs flex items-center justify-center flex-shrink-0 border border-brand-100">
                    M{mod.moduleNumber}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {mod.title}
                    </h4>
                    <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{mod.durationHours} Hours • {mod.topics.length} Key Topics</span>
                    </span>
                  </div>
                </div>

                <div className="p-1 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 bg-slate-50/50 space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Topics Covered:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-brand-600 font-bold">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {mod.handsOnLab && (
                    <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                      <FlaskConical className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Hands-On Practice Lab: </span>
                        <span>{mod.handsOnLab}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
