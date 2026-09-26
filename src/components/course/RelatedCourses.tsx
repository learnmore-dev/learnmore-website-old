import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { Course } from "@/types";

interface RelatedCoursesProps {
  relatedCourses: Course[];
  courseTitle: string;
}

export function RelatedCourses({ relatedCourses, courseTitle }: RelatedCoursesProps) {
  if (!relatedCourses || relatedCourses.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
        <BookOpen className="w-4 h-4" />
        <span>Career Pathways</span>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Courses Related to {courseTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore adjacent tracks to complement your {courseTitle} expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {relatedCourses.map((rel) => (
          <Link
            key={rel.slug}
            href={`/courses/${rel.slug}`}
            className="group p-5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 transition flex flex-col justify-between space-y-4 shadow-sm"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200/70 inline-block">
                {rel.categoryName}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition leading-snug">
                {rel.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {rel.overview}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{rel.duration.weeks} Weeks</span>
              </span>
              <span className="text-brand-600 group-hover:translate-x-0.5 transition flex items-center gap-0.5 font-bold">
                <span>View Syllabus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
