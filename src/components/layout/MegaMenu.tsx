"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";
import { ArrowRight, Sparkles, BookOpen, Layers } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#0a0f1d] text-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] border-t border-b border-slate-700/90 z-50 animate-fadeIn"
    >
      <div className="max-w-[1700px] mx-auto p-6 sm:p-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1: Popular Domains */}
          <div className="space-y-3 bg-[#0e1628] border border-slate-800 rounded-2xl p-4 shadow-md">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Top Domains</span>
            </div>
            <ul className="space-y-1.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/courses/category/${cat.slug}`}
                    onClick={onClose}
                    className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/90 transition"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-red-400 transition">
                        {cat.name}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {cat.shortDescription}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition -translate-x-1 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Flagship Courses */}
          <div className="space-y-3 md:col-span-2 bg-[#0e1628] border border-slate-800 rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Trending Master Programs (100% Placement)
              </span>
              <Link
                href="/courses"
                onClick={onClose}
                className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 transition"
              >
                <span>View All 50+ Courses</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {courses.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  onClick={onClose}
                  className="group p-3 rounded-xl bg-[#090d18] border border-slate-800 hover:border-red-500/50 hover:bg-slate-800/70 transition flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      {c.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30 uppercase">
                          {c.badge}
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400 font-medium">{c.categoryName}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-red-400 line-clamp-2 transition">
                      {c.title}
                    </div>
                  </div>
                  <div className="mt-2.5 text-[11px] text-slate-400 flex items-center gap-2.5">
                    <span>⏳ {c.duration.weeks} Wks</span>
                    <span>⭐ {c.rating.score} ({c.rating.reviewCount}+)</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Quick Highlights / Promo */}
          <div className="bg-gradient-to-br from-[#0e1628] via-[#111c33] to-red-950/50 border border-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Offline Batch</span>
              </div>
              <h4 className="text-base font-bold text-white leading-snug">
                Classroom Labs at Marathahalli, BTM &amp; Kalyan Nagar
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Join our weekend &amp; weekday batches with hands-on live project labs, direct mentor access, and guaranteed interview scheduling.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <Link
                href="/locations/marathahalli"
                onClick={onClose}
                className="block text-xs font-semibold text-red-300 hover:text-white transition"
              >
                📍 Visit Marathahalli Flagship Campus →
              </Link>
              <Link
                href="/placement"
                onClick={onClose}
                className="block text-xs font-semibold text-red-300 hover:text-white transition"
              >
                🎓 View 500+ Placement Partners →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
