"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Sparkles } from "lucide-react";
import { QuickEnquiryModal } from "../forms/QuickEnquiryModal";

export function StickyBottomBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl px-3 py-2.5 lg:hidden w-full">
        <div className="w-full grid grid-cols-3 gap-2 items-center">
          <a
            href="tel:+919036524555"
            className="w-full py-2.5 px-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 text-center text-xs font-bold border border-slate-700 flex items-center justify-center gap-1.5 transition min-w-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff2a55] flex-shrink-0" />
            <span className="truncate">Call Now</span>
          </a>

          <a
            href="https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20need%20course%20details"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm shadow-emerald-900/40 min-w-0"
          >
            <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2.5 px-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-red-600/30 transition min-w-0 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span className="truncate">Free Demo</span>
          </button>
        </div>
      </div>

      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
