"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Sparkles, ArrowRight, Filter } from "lucide-react";
import { Course, Category } from "@/types";
import { CourseCard } from "./CourseCard";

interface CourseSearchDiscoveryProps {
  initialCourses: Course[];
  categories: Category[];
}

export function CourseSearchDiscovery({
  initialCourses,
  categories,
}: CourseSearchDiscoveryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.categorySlug === selectedCategory;
      const rawQuery = searchQuery.toLowerCase().trim();
      if (!rawQuery) return matchesCategory;

      // Clean noise words like 'training', 'course', 'institute', 'in', 'btm', 'marathahalli', 'bangalore'
      const tokens = rawQuery.split(/\s+/).filter(Boolean);
      const courseText = `${course.title} ${course.overview} ${course.categoryName} ${course.skillsGained.join(" ")} ${course.toolsAndTechnologies.map(t => t.name).join(" ")}`.toLowerCase();

      // Check if all meaningful non-stopword tokens or the full query matches
      const stopWords = new Set(["in", "at", "the", "for", "and", "training", "course", "classes", "institute", "btm", "marathahalli", "kalyan", "nagar", "bangalore"]);
      const meaningfulTokens = tokens.filter(t => !stopWords.has(t));

      const matchesSearch =
        courseText.includes(rawQuery) ||
        (meaningfulTokens.length > 0 && meaningfulTokens.every(token => courseText.includes(token))) ||
        tokens.some(token => !stopWords.has(token) && courseText.includes(token));

      return matchesCategory && matchesSearch;
    });
  }, [initialCourses, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search Input Bar & Category Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search 50+ Certified Courses (e.g. AWS Solutions Architect, Python Full Stack, Power BI, DevOps, Selenium)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-1 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              selectedCategory === "all"
                ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Master Programs ({initialCourses.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                selectedCategory === cat.slug
                  ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.name.split("&")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.slice(0, 9).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <p className="text-base font-bold text-slate-800">
            No exact course found for &quot;{searchQuery}&quot;
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We offer 50+ specialized custom modules. Speak directly with our admission advisors for syllabus matching.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2.5 bg-brand-600 text-white text-xs font-bold rounded-xl shadow-md"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* View Full Catalog Link */}
      <div className="text-center pt-4">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-lg transition"
        >
          <span>Explore All 50+ Courses in Full Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
