import React from "react";
import { Search, RotateCcw, MessageSquare } from "lucide-react";

interface CourseEmptyStateProps {
  searchQuery?: string;
  onResetFilters: () => void;
}

export function CourseEmptyState({
  searchQuery,
  onResetFilters,
}: CourseEmptyStateProps) {
  return (
    <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-5 shadow-sm">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
        <Search className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          No courses found {searchQuery ? `matching "${searchQuery}"` : "for the selected filters"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          We offer 50+ specialized custom master programs and tailored syllabus modules. Try adjusting your search query or reset your filters.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onResetFilters}
          className="w-full sm:w-auto px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>

        <a
          href="https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20am%20looking%20for%20a%20specific%20course"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ask Admission Advisor</span>
        </a>
      </div>
    </div>
  );
}
