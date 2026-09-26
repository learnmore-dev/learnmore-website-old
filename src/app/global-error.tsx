"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-2">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Application Encountered an Error
          </h2>
          <p className="text-slate-400 text-sm">
            We apologize for the inconvenience. Please refresh the page or try again in a moment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-red-600/30 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh App</span>
            </button>
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition"
            >
              <Home className="w-4 h-4" />
              <span>Go to Home</span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
