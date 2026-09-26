"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Star, Users, ArrowRight, Download, Sparkles } from "lucide-react";
import { Course } from "@/types";
import { BrochureDownloadModal } from "../forms/BrochureDownloadModal";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
        {/* Card Header & Badges */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {course.categoryName}
            </span>
            {course.badge && (
              <span className="text-[10px] font-black text-white bg-gradient-to-r from-crimson-600 to-amber-600 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Sparkles className="w-2.5 h-2.5" />
                <span>{course.badge}</span>
              </span>
            )}
          </div>

          <Link href={`/courses/${course.slug}`}>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
              {course.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
            {course.overview}
          </p>

          {/* Highlights Checklist */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            {course.highlights.slice(0, 2).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Meta & Actions */}
        <div className="bg-slate-50 p-5 border-t border-slate-100 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.duration.weeks} Weeks ({course.duration.hours} hrs)</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="font-bold text-slate-800">{course.rating.score}</span>
              <span className="text-slate-400">({course.rating.reviewCount}+)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className="py-2 px-3 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition flex items-center justify-center gap-1"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Syllabus</span>
            </button>

            <Link
              href={`/courses/${course.slug}`}
              className="py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-1 group/btn"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 transition group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <BrochureDownloadModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        courseTitle={course.title}
      />
    </>
  );
}
