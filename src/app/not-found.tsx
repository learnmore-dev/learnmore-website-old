import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-slate-900 text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-3xl font-black mb-2">
          404
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm">
          Sorry, the page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-red-600/30"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
