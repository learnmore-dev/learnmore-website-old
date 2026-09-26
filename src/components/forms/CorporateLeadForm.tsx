"use client";

import React, { useState } from "react";
import { Building2, CheckCircle2, Send, Phone, Mail, User, Users, Layers } from "lucide-react";
import { categories } from "@/data/categories";

export function CorporateLeadForm() {
  const [formData, setFormData] = useState({
    contactName: "",
    workEmail: "",
    phone: "",
    companyName: "",
    teamSize: "6-20 Engineers",
    trainingDomain: "Cloud Computing & DevOps",
    deliveryMode: "On-Premises Corporate Lab",
    requirements: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.workEmail || !formData.phone || !formData.companyName) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const targetPhone = "919036524555";
    // Send corporate inquiry to backend API in the background
    try {
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactName,
          phone: formData.phone,
          email: formData.workEmail,
          course: formData.trainingDomain,
          location: "Bangalore / Enterprise On-Site",
          source: "Corporate Training Form",
          type: "Enterprise Proposal",
          message: `Company: ${formData.companyName}, Team Size: ${formData.teamSize}, Mode: ${formData.deliveryMode}, Requirements: ${formData.requirements}`,
        }),
      }).catch(() => {});
    } catch {}

    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI am requesting a Corporate Training Proposal:\n• Contact Person: ${formData.contactName}\n• Company: ${formData.companyName}\n• Work Email: ${formData.workEmail}\n• Work Phone: +91 ${formData.phone}\n• Batch Size: ${formData.teamSize}\n• Domain: ${formData.trainingDomain}\n• Delivery Mode: ${formData.deliveryMode}\n• Requirements: ${formData.requirements || "Standard Corporate Program"}\n\nPlease share the enterprise proposal and commercials.`
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
        <h3 className="text-xl font-bold text-slate-900">Corporate Request Dispatched!</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-slate-800">{formData.contactName}</span>. Our Enterprise L&amp;D Director will review your requirements for <span className="font-bold text-slate-800">{formData.companyName}</span> and send a customized proposal deck to <span className="font-bold text-slate-800">{formData.workEmail}</span> today.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition"
          >
            Submit Another Corporate Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">B2B Enterprise Training Desk</span>
        <h3 className="text-lg font-bold text-slate-900 mt-0.5">Request Custom Corporate Training Proposal</h3>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {error}
        </div>
      )}

      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Contact Person *</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Anand V (L&D Lead)"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Company Name *</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Infosys, Oracle, Tech Corp"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
            required
          />
        </div>
      </div>

      {/* Work Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Corporate / Official Email *</span>
          </label>
          <input
            type="email"
            placeholder="e.g. anand@company.com"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Work Contact Number *</span>
          </label>
          <input
            type="tel"
            placeholder="Direct / Mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition"
            required
          />
        </div>
      </div>

      {/* Team Size & Domain */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>Batch / Team Size</span>
          </label>
          <select
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition text-slate-800"
          >
            <option value="1-5 Engineers">1 - 5 Engineers (Sprint)</option>
            <option value="6-20 Engineers">6 - 20 Engineers (Cohort)</option>
            <option value="20-50 Engineers">20 - 50 Engineers (Department)</option>
            <option value="50+ Enterprise">50+ Enterprise Scale</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>Primary Technology Domain</span>
          </label>
          <select
            value={formData.trainingDomain}
            onChange={(e) => setFormData({ ...formData, trainingDomain: e.target.value })}
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition text-slate-800"
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Requirements */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-700">Custom Training Scope &amp; Target Timeline</label>
        <textarea
          rows={3}
          placeholder="e.g. AWS Cloud Migration & Kubernetes training for 15 Java developers starting next month..."
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Generating Proposal Request..." : "Request Customized Enterprise Proposal"}</span>
      </button>
    </form>
  );
}
