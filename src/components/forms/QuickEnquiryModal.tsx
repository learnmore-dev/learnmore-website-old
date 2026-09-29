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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const selectedProgram = formData.program || "General Enquiry / Master Program";

    // 1. Dispatch GA4 conversion event
    trackLeadSubmission({
      courseTitle: selectedProgram,
      source: "Quick Enquiry Modal (Popup)",
    });

    // 2. Prepare pre-filled email to office.learnmore@gmail.com
    const emailSubject = encodeURIComponent(`Instant Callback Request - ${formData.name} - ${selectedProgram}`);
    const emailBody = encodeURIComponent(
`Hello LearnMore Technologies Admissions Desk,

I would like to request an instant career callback for:
Program: ${selectedProgram}

My Contact Information:
• Full Name: ${formData.name}
• Mobile Number: +91 ${formData.phone}
• Email Address: ${formData.email}
• Selected Program: ${selectedProgram}

Please share syllabus details, upcoming batch timings, and fee structure.

Thank you,
${formData.name}`
    );

    const mailtoUrl = `mailto:office.learnmore@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // 3. Open user's email app / client
    try {
      window.location.href = mailtoUrl;
    } catch {}

    try {
      // 4. Also send lead to backend API for dual delivery
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: selectedProgram,
          location: "Bangalore (Fast-Track Callback)",
          source: "Popup Quick Enquiry Modal",
          type: "Fast-Track Career Callback",
          message: `Student requested an immediate career callback for: ${selectedProgram}.`,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.error) {
          setErrorMessage(data.error);
          setIsSubmitting(false);
          return;
        }
      }
      setSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting lead:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedProgram = formData.program || "General Enquiry / Master Program";
  const emailSubject = encodeURIComponent(`Instant Callback Request - ${formData.name} - ${selectedProgram}`);
  const emailBody = encodeURIComponent(
`Hello LearnMore Technologies Admissions Desk,

I would like to request an instant career callback for:
Program: ${selectedProgram}

My Contact Information:
• Full Name: ${formData.name}
• Mobile Number: +91 ${formData.phone}
• Email Address: ${formData.email}
• Selected Program: ${selectedProgram}

Please share syllabus details, upcoming batch timings, and fee structure.

Thank you,
${formData.name}`
  );
  const mailtoUrl = `mailto:office.learnmore@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=office.learnmore@gmail.com&su=${emailSubject}&body=${emailBody}`;

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
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-2xl font-extrabold text-slate-900">Request Sent Successfully!</h4>
            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your inquiry for <strong className="text-slate-900">{formData.program || "IT Master Program"}</strong> is directed to our admissions desk at <strong className="text-slate-900">office.learnmore@gmail.com</strong>.
            </p>

            <div className="pt-2 space-y-2.5">
              <a
                href={mailtoUrl}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email / Mail App</span>
              </a>

              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition flex items-center justify-center gap-2"
              >
                <span>Open in Gmail (Web Browser)</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-6 rounded-full text-slate-500 hover:text-slate-800 font-medium text-xs transition"
              >
                Close
              </button>
            </div>
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

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-5 py-3.5 px-6 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-red-600/25 hover:shadow-red-600/35 transition transform active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Request Instant Callback</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
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
