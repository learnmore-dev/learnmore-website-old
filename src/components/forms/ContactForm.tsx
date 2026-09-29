"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, User, BookOpen } from "lucide-react";
import { locations } from "@/data/locations";
import { courses } from "@/data/courses";

interface ContactFormProps {
  defaultCourse?: string;
  defaultLocation?: string;
}

export function ContactForm({ defaultCourse = "", defaultLocation = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: defaultCourse,
    location: defaultLocation,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please fill in your name, phone number, and email.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ""))) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    let targetPhone = "919036524555";
    const locLower = (formData.location || "").toLowerCase();
    if (locLower.includes("btm")) {
      targetPhone = "919036542555";
    } else if (locLower.includes("kalyan")) {
      targetPhone = "919036354551";
    } else if (locLower.includes("marathahalli")) {
      targetPhone = "919036524555";
    }
    // Send lead to backend API which emails office.learnmore@gmail.com
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course || "General Consultation",
          location: formData.location || "Bangalore Campus",
          message: formData.message,
          source: "Contact Page Form",
          type: "Admission Inquiry",
        }),
      });
    } catch (err) {
      console.error("Error submitting contact form:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our senior technical counselor will call you on <span className="font-bold text-slate-800">{formData.phone}</span> within 15 minutes to share syllabus details and arrange your free demo pass.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", phone: "", email: "", course: "", location: "", message: "" });
            }}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-slate-900">Send an Admission Inquiry</h3>
        <p className="text-xs text-slate-500">Get batch schedules, fee structures, and free demo booking.</p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {error}
        </div>
      )}

      {/* Name */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-slate-400" />
          <span>Full Name *</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition"
          required
        />
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Mobile Number *</span>
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Email Address *</span>
          </label>
          <input
            type="email"
            placeholder="e.g. rahul@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition"
            required
          />
        </div>
      </div>

      {/* Course & Location selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Select Course</span>
          </label>
          <select
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition text-slate-800"
          >
            <option value="">-- Choose Technology Track --</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Preferred Branch</span>
          </label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition text-slate-800"
          >
            <option value="">-- Choose Bangalore Campus --</option>
            {locations.map((l) => (
              <option key={l.slug} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-700">Any specific question or timing preference?</label>
        <textarea
          rows={3}
          placeholder="e.g. Looking for weekend batch in Marathahalli with placement support..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry & Get Demo Pass"}</span>
      </button>

      <p className="text-[11px] text-center text-slate-400">
        🔒 100% Privacy. Your details are never shared with third parties.
      </p>
    </form>
  );
}
