"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { CourseFAQ } from "@/types";
import { JsonLd } from "./JsonLd";

interface FAQAccordionProps {
  faqs: CourseFAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Have questions? Find quick answers from our academic counselors.",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>
        </div>
      )}

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition gap-4"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div className="p-1 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
