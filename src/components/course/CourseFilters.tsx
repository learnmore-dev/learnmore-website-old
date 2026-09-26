"use client";

import React from "react";
import { Filter, RotateCcw, X, Sparkles } from "lucide-react";
import { Category, Course } from "@/types";

interface CourseFiltersProps {
  categories: Category[];
  allCourses: Course[];
  selectedCategory: string;
  onSelectCategory: (catSlug: string) => void;
  selectedModes: string[];
  onToggleMode: (mode: string) => void;
  activeFilterCount: number;
  onResetFilters: () => void;
  isMobileDrawerOpen: boolean;
  onCloseMobileDrawer: () => void;
  totalFilteredCount: number;
}

export function CourseFilters({
  categories,
  allCourses,
  selectedCategory,
  onSelectCategory,
  selectedModes,
  onToggleMode,
  activeFilterCount,
  onResetFilters,
  isMobileDrawerOpen,
  onCloseMobileDrawer,
  totalFilteredCount,
}: CourseFiltersProps) {
  const deliveryModes = [
    { label: "Classroom Lab (Bangalore)", value: "Classroom" },
    { label: "Live Online Interactive", value: "Live Online" },
    { label: "Weekend Professional Batches", value: "Weekend" },
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:block bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 sticky top-28">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <Filter className="w-4 h-4 text-brand-600" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-brand-100 text-brand-700 text-xs px-2 py-0.5 rounded-full font-bold">
                {activeFilterCount}
              </span>
            )}
          </div>
          {activeFilterCount > 0 && (
            <button
              onClick={onResetFilters}
              className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Categories Group */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Training Domain
          </h4>
          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
            <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer hover:text-brand-600 transition">
              <input
                type="radio"
                name="desktop-cat"
                checked={selectedCategory === "all"}
                onChange={() => onSelectCategory("all")}
                className="rounded text-brand-600 focus:ring-brand-500 w-3.5 h-3.5"
              />
              <span className="font-semibold">All Domains</span>
            </label>
            {categories.map((cat) => {
              const count = allCourses.filter((c) => c.categorySlug === cat.slug).length;
              return (
                <label
                  key={cat.slug}
                  className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-brand-600 transition py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="desktop-cat"
                      checked={selectedCategory === cat.slug}
                      onChange={() => onSelectCategory(cat.slug)}
                      className="rounded text-brand-600 focus:ring-brand-500 w-3.5 h-3.5"
                    />
                    <span className="truncate max-w-[160px]">{cat.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">({count})</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Training Delivery Modes Group */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Delivery Mode
          </h4>
          <div className="space-y-2">
            {deliveryModes.map((mode) => (
              <label
                key={mode.value}
                className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer hover:text-brand-600 transition"
              >
                <input
                  type="checkbox"
                  checked={selectedModes.includes(mode.value)}
                  onChange={() => onToggleMode(mode.value)}
                  className="rounded text-brand-600 focus:ring-brand-500 w-3.5 h-3.5"
                />
                <span>{mode.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Quick Help Box */}
        <div className="bg-brand-50/70 border border-brand-100 rounded-2xl p-4 text-xs space-y-2">
          <div className="font-bold text-brand-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Need Course Guidance?</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Talk directly with our senior instructors for customized career roadmap matching.
          </p>
          <a
            href="https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20need%20help%20selecting%20a%20course"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold text-brand-700 hover:text-brand-800 underline"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </aside>

      {/* MOBILE SLIDE-OVER DRAWER */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobileDrawer}
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto p-6 space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-bold text-slate-900 text-base">Filter Courses</span>
                <button
                  onClick={onCloseMobileDrawer}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Categories */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Domain Category
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <input
                      type="radio"
                      name="mobile-cat-group"
                      checked={selectedCategory === "all"}
                      onChange={() => onSelectCategory("all")}
                      className="text-brand-600"
                    />
                    <span>All Domains ({allCourses.length})</span>
                  </label>
                  {categories.map((cat) => (
                    <label
                      key={cat.slug}
                      className="flex items-center gap-2 text-xs text-slate-700 py-0.5"
                    >
                      <input
                        type="radio"
                        name="mobile-cat-group"
                        checked={selectedCategory === cat.slug}
                        onChange={() => onSelectCategory(cat.slug)}
                        className="text-brand-600"
                      />
                      <span>{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Modes */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Delivery Mode
                </h4>
                <div className="space-y-2">
                  {deliveryModes.map((mode) => (
                    <label
                      key={mode.value}
                      className="flex items-center gap-2 text-xs text-slate-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedModes.includes(mode.value)}
                        onChange={() => onToggleMode(mode.value)}
                        className="rounded text-brand-600"
                      />
                      <span>{mode.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
              <button
                onClick={onResetFilters}
                className="flex-1 py-3 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition text-center"
              >
                Reset All
              </button>
              <button
                onClick={onCloseMobileDrawer}
                className="flex-1 py-3 text-xs font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-md transition text-center"
              >
                Apply ({totalFilteredCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
