import React from "react";

interface CourseSkeletonProps {
  count?: number;
}

export function CourseSkeleton({ count = 6 }: CourseSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-pulse flex flex-col justify-between h-[380px]"
        >
          {/* Header */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-5 w-28 bg-slate-200 rounded-full" />
              <div className="h-4 w-16 bg-slate-200 rounded-full" />
            </div>

            <div className="space-y-2">
              <div className="h-6 w-4/5 bg-slate-200 rounded-lg" />
              <div className="h-6 w-3/5 bg-slate-200 rounded-lg" />
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="h-3.5 w-full bg-slate-100 rounded" />
              <div className="h-3.5 w-5/6 bg-slate-100 rounded" />
              <div className="h-3.5 w-2/3 bg-slate-100 rounded" />
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <div className="h-3 w-3/4 bg-slate-100 rounded" />
              <div className="h-3 w-2/3 bg-slate-100 rounded" />
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 p-5 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 bg-slate-200 rounded" />
              <div className="h-4 w-16 bg-slate-200 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-9 bg-slate-200 rounded-xl" />
              <div className="h-9 bg-slate-300 rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
