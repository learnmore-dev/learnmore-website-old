"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  BookOpen,
  ArrowRight,
  Sparkles,
  CornerDownLeft,
  Star,
  Clock,
  Tag,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { courses } from "@/data/courses";
import { categories } from "@/data/categories";

interface CourseSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CourseSearchModal({ isOpen, onClose }: CourseSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isMac, setIsMac] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Detect OS for shortcut display
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent));
    }
  }, []);

  // Focus input and lock body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setSelectedCategory("all");
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Filter courses based on query and category
  const filteredCourses = useMemo(() => {
    const cleanQuery = query.toLowerCase().trim();

    return courses.filter((course) => {
      // Category filter
      if (selectedCategory !== "all" && course.categorySlug !== selectedCategory) {
        return false;
      }

      // Query filter
      if (!cleanQuery) return true;

      const titleMatch = course.title.toLowerCase().includes(cleanQuery);
      const categoryMatch = course.categoryName.toLowerCase().includes(cleanQuery);
      const overviewMatch = course.overview.toLowerCase().includes(cleanQuery);
      const skillsMatch = course.skillsGained.some((skill) =>
        skill.toLowerCase().includes(cleanQuery)
      );
      const toolsMatch = course.toolsAndTechnologies.some((tool) =>
        tool.name.toLowerCase().includes(cleanQuery)
      );
      const highlightsMatch = course.highlights.some((hl) =>
        hl.toLowerCase().includes(cleanQuery)
      );

      return (
        titleMatch ||
        categoryMatch ||
        overviewMatch ||
        skillsMatch ||
        toolsMatch ||
        highlightsMatch
      );
    });
  }, [query, selectedCategory]);

  // Reset selectedIndex if it exceeds length
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Keyboard navigation within modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (filteredCourses.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCourses.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredCourses.length) % filteredCourses.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = filteredCourses[selectedIndex];
        if (selected) {
          onClose();
          router.push(`/courses/${selected.slug}`);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCourses, selectedIndex, onClose, router]);

  // Auto scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeItem = listRef.current.querySelector(
      `[data-index="${selectedIndex}"]`
    ) as HTMLElement;
    if (activeItem) {
      activeItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search courses"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#04060d]/80 backdrop-blur-md transition-opacity duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 flex flex-col max-h-[80vh] z-10 overflow-hidden animate-fadeIn">
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-red-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, skills, tools (e.g., AWS, Python, Docker, AI)..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition flex items-center gap-1"
          >
            <span>Esc</span>
          </button>
        </div>

        {/* Category Filters Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-800/80 bg-slate-900/90 overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition ${
              selectedCategory === "all"
                ? "bg-red-600 text-white shadow-sm shadow-red-600/30 font-semibold"
                : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            All Courses ({courses.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition ${
                selectedCategory === cat.slug
                  ? "bg-red-600 text-white shadow-sm shadow-red-600/30 font-semibold"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-3 space-y-2 divide-y divide-slate-800/40"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={course.id}
                  data-index={idx}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    onClose();
                    router.push(`/courses/${course.slug}`);
                  }}
                  className={`pt-2 first:pt-0 cursor-pointer rounded-xl p-3 transition ${
                    isSelected
                      ? "bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800/60 border border-red-500/40 shadow-md"
                      : "hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {course.badge && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                            <Flame className="w-2.5 h-2.5 text-red-400" />
                            {course.badge}
                          </span>
                        )}
                        <span className="text-[11px] font-medium text-slate-400">
                          {course.categoryName}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-red-400 line-clamp-1">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                        {course.overview}
                      </p>

                      {/* Tools & Tech Chips */}
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                        {course.toolsAndTechnologies.slice(0, 5).map((tool) => (
                          <span
                            key={tool.name}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-700/60"
                          >
                            {tool.name}
                          </span>
                        ))}
                        {course.toolsAndTechnologies.length > 5 && (
                          <span className="text-[10px] text-slate-400">
                            +{course.toolsAndTechnologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metadata column */}
                    <div className="flex flex-col items-end justify-between shrink-0 text-right gap-2">
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{course.rating.score}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration.hours} hrs</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-red-400">
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 px-4 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                No matching courses found
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                We couldn&apos;t find any courses matching &quot;{query}&quot;. Try searching for popular topics like AWS, Python, Java, or DevOps.
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                {["AWS", "Python", "Java", "DevOps", "Power BI", "Testing"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 font-mono">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 font-mono">
                ↓
              </kbd>
              <span className="hidden sm:inline">to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 font-mono flex items-center gap-0.5">
                <CornerDownLeft className="w-2.5 h-2.5" />
                <span>Enter</span>
              </kbd>
              <span className="hidden sm:inline">to select</span>
            </span>
          </div>
          <Link
            href="/courses"
            onClick={onClose}
            className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
          >
            <span>Explore All 12 Courses</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
