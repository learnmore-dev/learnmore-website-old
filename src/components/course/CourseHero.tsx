import React from "react";
import Link from "next/link";
import { Star, Clock, Monitor, ShieldCheck, Users, ArrowRight, Phone, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { Course, Category } from "@/types";

interface CourseHeroProps {
  course: Course;
  category?: Category;
}

export function CourseHero({ course, category }: CourseHeroProps) {
  const levelText = course.level || "Beginner to Advanced";

  return (
    <section className="relative bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Top Badges & Ratings */}
            <div className="flex flex-wrap items-center gap-3">
              {category && (
                <Link
                  href={`/courses/category/${category.slug}`}
                  className="px-3 py-1 bg-brand-600/30 text-brand-400 border border-brand-500/30 text-xs font-bold rounded-full hover:bg-brand-600/50 transition"
                >
                  {category.name}
                </Link>
              )}
              {course.badge && (
                <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full uppercase tracking-wider">
                  ★ {course.badge}
                </span>
              )}
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{course.rating.score}</span>
                <span className="text-slate-400">({course.rating.reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {course.title}
            </h1>

            {/* Overview text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {course.overview}
            </p>

            {/* Key Metrics Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-400" />
                  <span>Duration</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {course.duration.weeks} Weeks ({course.duration.hours} Hrs)
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Monitor className="w-3 h-3 text-brand-400" />
                  <span>Mode & Level</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                  {course.duration.modes[0]} • {levelText}
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 uppercase font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Placement</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  100% Job Assistance
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Users className="w-3 h-3 text-brand-400" />
                  <span>Campus</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  3 Bangalore Hubs
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#curriculum"
                className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>View Full Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919036524555"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                <span>Call Desk: +91 90365 24555</span>
              </a>

              <a
                href={`https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-800/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Syllabus</span>
              </a>
            </div>
          </div>

          {/* Quick Summary Card */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Program Highlights</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {course.highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
              <span>Batch starts every Monday</span>
              <span className="font-bold text-white">Classroom &amp; Live Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
