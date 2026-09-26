"use client";

import React, { useState } from "react";
import { X, User, Phone, Mail, GraduationCap, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseSlug?: string;
}

const PROGRAM_OPTIONS = [
  "Python Fullstack Master Program",
  "Data Analytics Master Program",
  "Cloud DevOps Master Program",
  "Software Testing Master Program",
  "Data Engineering Master Program",
  "Data Science with AI Master Program",
];

export function QuickEnquiryModal({
  isOpen,
  onClose,
  defaultCourseSlug,
}: QuickEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: defaultCourseSlug || "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message redirect
    const targetPhone = "919036524555";
    const selectedProgram = formData.program || "General Enquiry / Master Program";

    // Dispatch GA4 conversion event
    trackLeadSubmission({
      courseTitle: selectedProgram,
      source: "Quick Enquiry Modal",
    });

    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI would like to enquire about the program:\n• Program: ${selectedProgram}\n• Name: ${formData.name}\n• Phone: +91 ${formData.phone}\n• Email: ${formData.email || "Not provided"}\n\nPlease share the syllabus, fees, and upcoming batch schedule.`
    );

    // Open WhatsApp in new tab/window
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-[460px] bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-2xl font-extrabold text-slate-900">Enquiry Submitted!</h4>
            <p className="text-slate-600 text-sm max-w-xs mx-auto">
              Redirecting to WhatsApp counselor desk. Our senior advisor will assist you immediately.
            </p>
          </div>
        ) : (
          <>
            {/* Header Content */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
                <span>🔥</span>
                <span>FAST-TRACK CAREER CALLBACK</span>
              </div>
              <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight mt-3 mb-1">
                Get Hired in Top IT MNCs
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                100% Placement Assistance • 1-on-1 Senior Mentorship
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: FULL NAME */}
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  FULL NAME *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50/40 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-medium"
                  />
                </div>
              </div>

              {/* Field 2: MOBILE NUMBER */}
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  MOBILE NUMBER *
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 px-3 py-3 rounded-full border border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-700 select-none flex-shrink-0">
                    <span>IN</span>
                    <span>+91</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="relative flex-1">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="10 digit phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50/40 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Field 3: EMAIL ADDRESS */}
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50/40 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-medium"
                  />
                </div>
              </div>

              {/* Field 4: TARGET PROGRAM */}
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  TARGET PROGRAM *
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <select
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 rounded-full border border-slate-200 bg-slate-50/40 text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Select Program</option>
                    {PROGRAM_OPTIONS.map((prog) => (
                      <option key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-5 py-3.5 px-6 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-red-600/25 hover:shadow-red-600/35 transition transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Instant Callback</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 100% Privacy Guaranteed. Instant Senior Mentor Callback.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
