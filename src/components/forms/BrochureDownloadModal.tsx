"use client";

import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2, Phone, Mail, User } from "lucide-react";

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export function BrochureDownloadModal({
  isOpen,
  onClose,
  courseTitle,
}: BrochureDownloadModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = "919036524555";
    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI want to download the Course Syllabus Brochure:\n• Course: ${courseTitle}\n• Name: ${formData.name}\n• WhatsApp: +91 ${formData.phone}\n• Email: ${formData.email}\n\nPlease share the detailed PDF syllabus.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-brand-900 to-navy-900 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-lg bg-brand-500/30 flex items-center justify-center mb-2 text-brand-300">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold">Download Course Syllabus</h3>
          <p className="text-xs text-slate-300 mt-0.5 truncate">
            {courseTitle} (Complete 2026 Edition)
          </p>
        </div>

        <div className="p-5">
          {downloaded ? (
            <div className="py-6 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-base font-bold text-slate-900">Syllabus Sent via WhatsApp!</h4>
              <p className="text-xs text-slate-600">
                The detailed module-by-module PDF brochure has also been dispatched to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Number (To receive PDF) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 px-4 bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-sm rounded-lg shadow-md transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Brochure Now</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
