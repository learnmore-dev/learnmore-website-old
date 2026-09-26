"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Phone, Mail, GraduationCap, Briefcase, Link as LinkIcon, FileText } from "lucide-react";

interface ApplicationFormProps {
  type: "internship" | "teacher";
  title?: string;
}

export function ApplicationForm({ type, title }: ApplicationFormProps) {
  const isTeacher = type === "teacher";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualificationOrCompany: "",
    experienceOrGradYear: "",
    domain: isTeacher ? "Cloud Computing (AWS/Azure)" : "Python Full Stack Development",
    profileOrResumeLink: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill out your name, email, and mobile number.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    const targetPhone = "919036524555";
    // Send application to backend API in the background
    try {
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.domain,
          location: "Bangalore",
          source: isTeacher ? "Become a Teacher Application" : "Internship Application",
          type: isTeacher ? "Trainer Application" : "Internship Application",
          message: `Company/College: ${formData.qualificationOrCompany}, Exp/GradYear: ${formData.experienceOrGradYear}, Resume: ${formData.profileOrResumeLink}`,
        }),
      }).catch(() => {});
    } catch {}

    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI am submitting an Application for ${isTeacher ? "Instructor / Trainer" : "Industrial Project Internship"}:\n• Name: ${formData.name}\n• Mobile: +91 ${formData.phone}\n• Email: ${formData.email}\n• ${isTeacher ? "Current MNC / Company" : "College / Degree"}: ${formData.qualificationOrCompany || "N/A"}\n• ${isTeacher ? "Total Industry Exp" : "Graduation Year"}: ${formData.experienceOrGradYear || "N/A"}\n• Specialization: ${formData.domain}\n• Profile / Resume Link: ${formData.profileOrResumeLink || "N/A"}\n\nPlease review my application.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our {isTeacher ? "Faculty Recruitment Team" : "Internship Coordination Cell"} will review your profile and contact you on <span className="font-bold text-slate-800">{formData.phone}</span> within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
          {isTeacher ? "Faculty Onboarding Portal" : "Student Internship Desk"}
        </span>
        <h3 className="text-lg font-bold text-slate-900 mt-0.5">
          {title || (isTeacher ? "Apply to Teach at LearnMore" : "Apply for Industrial Project Internship")}
        </h3>
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
          placeholder="e.g. Ramesh Kumar"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
          required
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Email Address *</span>
          </label>
          <input
            type="email"
            placeholder="e.g. ramesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
            required
          />
        </div>

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
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
            required
          />
        </div>
      </div>

      {/* Role specific inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            {isTeacher ? <Briefcase className="w-3.5 h-3.5 text-slate-400" /> : <GraduationCap className="w-3.5 h-3.5 text-slate-400" />}
            <span>{isTeacher ? "Current MNC / Company" : "College / Degree"}</span>
          </label>
          <input
            type="text"
            placeholder={isTeacher ? "e.g. Oracle (Senior Lead)" : "e.g. B.E Computer Science (VTU)"}
            value={formData.qualificationOrCompany}
            onChange={(e) => setFormData({ ...formData, qualificationOrCompany: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>{isTeacher ? "Total Industry Exp (Yrs)" : "Graduation Year"}</span>
          </label>
          <input
            type="text"
            placeholder={isTeacher ? "e.g. 8+ Years" : "e.g. 2025 / 2026 Batch"}
            value={formData.experienceOrGradYear}
            onChange={(e) => setFormData({ ...formData, experienceOrGradYear: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
          />
        </div>
      </div>

      {/* Domain Selection */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-700">Technology Specialization / Domain *</label>
        <select
          value={formData.domain}
          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
          className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition text-slate-800"
        >
          <option value="Python Full Stack Development">Python Full Stack Development</option>
          <option value="Java Full Stack Development">Java Full Stack Development</option>
          <option value="Cloud Computing (AWS / Azure / GCP)">Cloud Computing (AWS / Azure / GCP)</option>
          <option value="DevOps & Kubernetes Infrastructure">DevOps & Kubernetes Infrastructure</option>
          <option value="Data Science, Machine Learning & AI">Data Science, Machine Learning & AI</option>
          <option value="Software Testing (Selenium & Automation)">Software Testing (Selenium & Automation)</option>
          <option value="Power BI & Data Analytics">Power BI & Data Analytics</option>
          <option value="Snowflake Data Cloud Platform">Snowflake Data Cloud Platform</option>
        </select>
      </div>

      {/* LinkedIn / Resume Link */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
          <span>LinkedIn Profile or Google Drive Resume URL</span>
        </label>
        <input
          type="url"
          placeholder="https://linkedin.com/in/your-profile"
          value={formData.profileOrResumeLink}
          onChange={(e) => setFormData({ ...formData, profileOrResumeLink: e.target.value })}
          className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Submitting Application..." : isTeacher ? "Submit Instructor Application" : "Submit Internship Application"}</span>
      </button>
    </form>
  );
}
