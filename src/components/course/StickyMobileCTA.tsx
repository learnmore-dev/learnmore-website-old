"use client";

import React from "react";
import { Phone, MessageSquare, Send } from "lucide-react";

interface StickyMobileCTAProps {
  courseTitle: string;
  locationName?: string;
  phone?: string;
  whatsapp?: string;
}

export function StickyMobileCTA({
  courseTitle,
  locationName,
  phone = "+91 90365 24555",
  whatsapp = "919036524555",
}: StickyMobileCTAProps) {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formEl = document.getElementById("lead-form-container");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const rawPhone = phone.replace(/[^0-9+]/g, "");
  const rawWa = whatsapp.replace(/[^0-9]/g, "");
  const locSuffix = locationName ? ` (${locationName} campus)` : "";
  const whatsappMessage = encodeURIComponent(
    `Hi LearnMore Technologies, I want more details & fee structure for the ${courseTitle} training${locSuffix}.`
  );

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        {/* Call Link */}
        <a
          href={`tel:${rawPhone}`}
          className="flex-1 py-2.5 px-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-center text-xs font-bold border border-slate-700 flex items-center justify-center gap-1.5 transition"
        >
          <Phone className="w-3.5 h-3.5 text-brand-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={`https://wa.me/${rawWa}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 transition"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Now button */}
        <button
          onClick={scrollToForm}
          className="flex-[1.4] py-2.5 px-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-center text-xs font-black flex items-center justify-center gap-1.5 transition shadow-lg shadow-brand-600/30"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
}
