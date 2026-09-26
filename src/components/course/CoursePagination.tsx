import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
}: CoursePaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Course catalog pagination"
      className="flex items-center justify-center gap-1.5 pt-6"
    >
      {/* Previous Page Button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          aria-current={currentPage === pageNum ? "page" : undefined}
          aria-label={`Go to page ${pageNum}`}
          className={`w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center ${
            currentPage === pageNum
              ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          {pageNum}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
        aria-label="Go to next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}
