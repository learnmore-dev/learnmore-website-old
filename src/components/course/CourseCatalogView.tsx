"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Course, Category } from "@/types";
import { CourseCard } from "./CourseCard";
import { CourseFilters } from "./CourseFilters";
import { CourseEmptyState } from "./CourseEmptyState";
import { CoursePagination } from "./CoursePagination";

interface CourseCatalogViewProps {
  allCourses: Course[];
  categories: Category[];
  initialCategorySlug?: string;
}

export function CourseCatalogView({
  allCourses,
  categories,
  initialCategorySlug = "all",
}: CourseCatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategorySlug);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"popular" | "rating" | "az" | "duration">("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const ITEMS_PER_PAGE = 9;

  // Reset page whenever any facet changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedModes, sortBy]);

  const toggleMode = (mode: string) => {
    setSelectedModes((prev) =>
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );
  };

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedModes([]);
    setSortBy("popular");
    setCurrentPage(1);
  };

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedModes.length +
    (searchQuery.trim() ? 1 : 0);

  // Multi-facet filtering & sorting
  const filteredCourses = useMemo(() => {
    return allCourses
      .filter((course) => {
        if (selectedCategory !== "all" && course.categorySlug !== selectedCategory) {
          return false;
        }

        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchTitle = course.title.toLowerCase().includes(query);
          const matchOverview = course.overview.toLowerCase().includes(query);
          const matchCategory = course.categoryName.toLowerCase().includes(query);
          const matchTools = course.toolsAndTechnologies.some((t) =>
            t.name.toLowerCase().includes(query)
          );
          const matchKeywords = course.seo?.keywords?.some((k) =>
            k.toLowerCase().includes(query)
          );
          if (!matchTitle && !matchOverview && !matchCategory && !matchTools && !matchKeywords) {
            return false;
          }
        }

        if (selectedModes.length > 0) {
          const courseModes = course.duration.modes || [];
          const hasMode = selectedModes.some((m) =>
            courseModes.some((cm) => cm.toLowerCase().includes(m.toLowerCase()))
          );
          if (!hasMode) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating.score - a.rating.score;
        if (sortBy === "az") return a.title.localeCompare(b.title);
        if (sortBy === "duration") return a.duration.hours - b.duration.hours;

        // Default: Popularity weighting
        const aBadgeWeight = a.badge === "Bestseller" ? 2 : a.badge ? 1 : 0;
        const bBadgeWeight = b.badge === "Bestseller" ? 2 : b.badge ? 1 : 0;
        if (bBadgeWeight !== aBadgeWeight) return bBadgeWeight - aBadgeWeight;
        return b.rating.reviewCount - a.rating.reviewCount;
      });
  }, [allCourses, searchQuery, selectedCategory, selectedModes, sortBy]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE) || 1;
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  return (
    <div className="space-y-8">
      {/* 1. SEARCH & CATEGORY QUICK CHIP BAR */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
        {/* Search Field */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search 50+ Certified Courses (e.g. AWS Solutions Architect, Python Full Stack, Power BI, DevOps, Selenium)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 bg-slate-200 hover:bg-slate-300 p-1 rounded-full transition"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              selectedCategory === "all"
                ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Master Programs ({allCourses.length})
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

      {/* 2. MAIN 2-COLUMN CATALOG LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: FILTERS (SIDEBAR & MOBILE DRAWER) */}
        <div className="lg:col-span-3">
          <CourseFilters
            categories={categories}
            allCourses={allCourses}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedModes={selectedModes}
            onToggleMode={toggleMode}
            activeFilterCount={activeFilterCount}
            onResetFilters={resetAllFilters}
            isMobileDrawerOpen={isMobileFilterOpen}
            onCloseMobileDrawer={() => setIsMobileFilterOpen(false)}
            totalFilteredCount={filteredCourses.length}
          />
        </div>

        {/* RIGHT COLUMN: CATALOG RESULTS PANE */}
        <main className="lg:col-span-9 space-y-6">
          {/* Results Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <span className="text-sm font-bold text-slate-800">
                Showing <span className="text-brand-600 font-black">{filteredCourses.length}</span> Course
                {filteredCourses.length !== 1 ? "s" : ""}
              </span>

              {/* Mobile Filter Trigger */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
              >
                <Filter className="w-3.5 h-3.5 text-brand-600" />
                <span>Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}</span>
              </button>
            </div>

            {/* Sort Control */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
              <span className="text-slate-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl px-3 py-1.5 focus:bg-white focus:border-brand-500 outline-none transition"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="az">Alphabetical (A to Z)</option>
                <option value="duration">Duration (Short to Long)</option>
              </select>
            </div>
          </div>

          {/* Active Filter Tags */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-semibold">
                  <span>Search: &quot;{searchQuery}&quot;</span>
                  <button onClick={() => setSearchQuery("")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                  <span>Domain: {categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}</span>
                  <button onClick={() => setSelectedCategory("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedModes.map((mode) => (
                <span
                  key={mode}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold"
                >
                  <span>Mode: {mode}</span>
                  <button onClick={() => toggleMode(mode)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={resetAllFilters}
                className="text-xs text-brand-600 hover:text-brand-800 font-bold ml-1 transition underline"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Course Grid / Empty State */}
          {paginatedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          ) : (
            <CourseEmptyState
              searchQuery={searchQuery}
              onResetFilters={resetAllFilters}
            />
          )}

          {/* Pagination */}
          <CoursePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
}
