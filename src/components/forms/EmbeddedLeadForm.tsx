"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";

interface EmbeddedLeadFormProps {
  courseTitle?: string;
  locationName?: string;
  source?: string;
}

export function EmbeddedLeadForm({
  courseTitle = "Software Training Program",
  locationName = "Bangalore Campus",
  source = "Page Sidebar",
}: EmbeddedLeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "Classroom",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let targetPhone = "919036524555";
    const locLower = (locationName || "").toLowerCase();
    if (locLower.includes("btm")) {
      targetPhone = "919036542555";
    } else if (locLower.includes("kalyan")) {
      targetPhone = "919036354551";
    } else if (locLower.includes("marathahalli")) {
      targetPhone = "919036524555";
    }

    // Dispatch GA4 conversion event
    trackLeadSubmission({
      courseTitle,
      locationName,
      source: source || "Page Sidebar Demo Form",
      mode: formData.mode,
    });

    // Send lead to backend API in the background
    try {
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: courseTitle,
          location: locationName,
          source: source || "Page Sidebar Demo Form",
          type: "Demo Booking",
          message: `Mode: ${formData.mode}`,
        }),
      }).catch(() => {});
    } catch {}

    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI am booking a Free Demo Session:\n• Program: ${courseTitle}\n• Name: ${formData.name}\n• Phone: +91 ${formData.phone}\n• Email: ${formData.email}\n• Preferred Mode: ${formData.mode}\n• Campus/Source: ${locationName} (${source})\n\nPlease share the demo class link and batch schedule.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white p-5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next Batch Starts Monday</span>
        </div>
        <h3 className="text-lg font-bold">Book Free Live Demo Session</h3>
        <p className="text-xs text-slate-300 mt-0.5">
          Specialized for {courseTitle} ({locationName})
        </p>
      </div>

      <div className="p-5">
        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Thank you!</h4>
            <p className="text-xs text-slate-600">
              Our career advisor has reserved your free demo seat and will WhatsApp you the class link.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 Mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Learning Preference
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-1.5 p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                  <input
                    type="radio"
                    name="mode"
                    value="Classroom"
                    checked={formData.mode === "Classroom"}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="text-brand-600"
                  />
                  <span>Classroom Lab</span>
                </label>
                <label className="flex items-center gap-1.5 p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                  <input
                    type="radio"
                    name="mode"
                    value="Online"
                    checked={formData.mode === "Online"}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="text-brand-600"
                  />
                  <span>Live Online</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-lg shadow-md transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Book Demo & Get Fee Quote</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Privacy • No Spam Guarantee</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
