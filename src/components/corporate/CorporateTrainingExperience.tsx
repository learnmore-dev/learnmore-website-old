"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  TrendingUp,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Award,
  Play,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Lock,
  Cloud,
  Bot,
  Infinity as InfinityIcon,
  BarChart3,
  Code2,
  Compass,
  FileSpreadsheet,
  Calendar,
  Headphones,
  Phone,
  Mail,
  X,
  Send,
  Workflow,
  Check,
  Heart,
  MonitorPlay,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

export function CorporateTrainingExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Proposal Form State
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    mobile: "",
    track: "Cloud Infrastructure & Migration (AWS / Azure)",
    teamSize: "10-25 Engineers",
    requirements: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = "919036524555";
    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI am requesting a Corporate Training Proposal:\n• Name: ${formData.fullName}\n• Company: ${formData.companyName}\n• Email: ${formData.workEmail}\n• Phone: +91 ${formData.mobile}\n• Track: ${formData.track}\n• Team Size: ${formData.teamSize}\n• Requirements: ${formData.requirements || "Standard Corporate Batch"}\n\nPlease share customized proposal and enterprise pricing.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const tracks = [
    {
      id: "cloud",
      title: "Cloud Infrastructure & Migration (AWS / Azure)",
      desc: "Architecture, deployment, DevOps integration, cost optimization.",
      icon: Cloud,
      iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      id: "ai",
      title: "Agentic AI & LLM Systems",
      desc: "Build AI-powered tools, RAG pipelines, fine-tuning, and enterprise use cases.",
      icon: Bot,
      iconBg: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      id: "devops",
      title: "DevOps, Docker & Kubernetes (CKA)",
      desc: "CI/CD, infrastructure automation, monitoring, and real-world deployments.",
      icon: InfinityIcon,
      iconBg: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      id: "data",
      title: "Data Analytics & BI",
      desc: "Python, SQL, Power BI, data pipelines, and business intelligence dashboards.",
      icon: BarChart3,
      iconBg: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    },
    {
      id: "fullstack",
      title: "Full Stack & Modern Web Development",
      desc: "React, Node.js, Next.js, databases, and scalable application design.",
      icon: Code2,
      iconBg: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    },
    {
      id: "custom",
      title: "Custom & Domain-Specific Training",
      desc: "Tailored modules based on your industry requirements.",
      icon: Building2,
      iconBg: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
  ];

  const faqs = [
    {
      q: "Can you customize the training content for our industry or project timeline?",
      a: "Yes. We work closely with your team to understand your tools, domain, and goals. Our training programs are fully customizable in terms of content, duration, and delivery mode.",
    },
    {
      q: "What delivery options are available for enterprise teams?",
      a: "We offer instructor-led on-premises workshops at your office, dedicated live interactive virtual cohorts, hybrid learning bootcamps, and intensive weekend fast-track sprints.",
    },
    {
      q: "Do you provide dedicated cloud sandboxes or lab environments?",
      a: "Yes. Each participating engineer receives isolated cloud console sandboxes (AWS, Azure, GCP, Kubernetes) preloaded with real-world architecture templates, security guardrails, and project datasets.",
    },
    {
      q: "Are real-world projects or case studies included in the training?",
      a: "Absolutely. 100% of our enterprise modules emphasize live coding, architectural reviews, automated pipeline deployment, and domain-specific capstones mapped to your internal deliverables.",
    },
    {
      q: "Will we receive progress reports and assessment results?",
      a: "Yes. Engineering managers and L&D leaders receive weekly milestone attendance, code-review scores, lab completion benchmarks, and individual capability matrix reports.",
    },
  ];

  const handleSelectTrack = (trackTitle: string) => {
    setFormData((prev) => ({ ...prev, track: trackTitle }));
    const formElement = document.getElementById("proposal-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* Top Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-2.5 px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-[1700px] mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-red-600 transition flex items-center gap-1">
            <span>🏠 Home</span>
          </Link>
          <span>•</span>
          <span className="text-slate-800 font-bold">Corporate Training</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full-bleed Clear Background Image with Overlays) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#06080e] text-white pt-8 pb-0 lg:pt-14 lg:pb-0 overflow-hidden min-h-[560px] lg:min-h-[640px] flex flex-col justify-between">
        {/* Mobile Full-Bleed Background Image Layer (<lg) */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden w-full h-full">
          <img
            src="/corporate-hero-mobile.png"
            alt="LearnMore Technologies Corporate Training Session Mobile"
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          {/* Subtle gradient overlays to keep text ultra sharp and readable without obscuring background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#06080e]/75 via-transparent to-[#06080e]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080e]/70 via-[#06080e]/20 to-transparent" />
        </div>

        {/* Tablet & Desktop Background Image Layer (lg:block) */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <img
            src="/corporate-hero.png"
            alt="LearnMore Technologies Corporate Training Session"
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          {/* Lighter, subtle gradient overlay so the presentation, instructor and attendees remain vibrant and crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-black/20" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full flex-1 flex flex-col justify-between">
          
          {/* ========================================================================= */}
          {/* TABLET, LAPTOP & DESKTOP HERO LAYOUT (lg:grid) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center pt-2">
            {/* Left Content (Left 6.5 cols) */}
            <div className="col-span-7 xl:col-span-6 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide shadow-sm backdrop-blur-xs">
                <span>⚡</span>
                <span>Enterprise Learning Solutions</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
                Custom Corporate <br />
                Training & Team <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] via-[#FF7A00] to-[#FF5252]">
                  Technology Upskilling.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal drop-shadow-sm">
                Accelerate your organization&apos;s growth with industry-focused training in Cloud, DevOps, Full Stack, Data, AI and more — tailored to your goals.
              </p>

              {/* 4 Feature Items with Round Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Compass className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Customized Learning Paths
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Users className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Expert Trainers
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Laptop className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Flexible Delivery Modes
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Measurable Impact
                  </span>
                </div>
              </div>

              {/* Action Buttons & Bottom Floating Pills */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById("proposal-form");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else setIsEnquiryModalOpen(true);
                    }}
                    className="px-7 py-3.5 rounded-full bg-[#ff2038] hover:bg-[#e0142c] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Get a Custom Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Delivery Modes Glass Bar */}
                <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-2xl bg-black/70 border border-slate-700/80 backdrop-blur-md text-xs font-bold text-slate-200 shadow-xl">
                  <div className="flex items-center gap-1.5">
                    <span>🏢</span>
                    <span>In-Person</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <span>💻</span>
                    <span>Live Online</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <span>🔄</span>
                    <span>Hybrid</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <span>📍</span>
                    <span>Onsite at Your Office</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Empty space with handwritten script accent on desktop */}
            <div className="col-span-5 xl:col-span-6 min-h-[360px] lg:min-h-[460px] relative flex flex-col justify-end items-end pointer-events-none pb-8 pr-4">
              <div className="relative mr-2 select-none -rotate-6 z-20 pointer-events-none">
                <div className="font-serif italic text-amber-200 text-base lg:text-lg font-bold leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] text-right tracking-wide whitespace-pre-line">
                  Invest in People.{"\n"}Build a Stronger Tomorrow.
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE RESPONSIVE HERO LAYOUT (<lg) */}
          {/* ========================================================================= */}
          <div className="lg:hidden flex flex-col justify-between space-y-6 pt-2 pb-4">
            {/* Top Section: Badge & Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide shadow-sm backdrop-blur-xs">
                <span>⚡</span>
                <span>Enterprise Learning Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.14] text-white drop-shadow-md">
                Custom Corporate <br />
                Training & Team <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] via-[#FF7A00] to-[#FF5252]">
                  Technology Upskilling.
                </span>
              </h1>
            </div>

            {/* Middle Section: Clear Viewing Window for Mobile Presentation / Trainer Image */}
            <div className="relative h-44 sm:h-56 w-full select-none pointer-events-none flex items-start justify-end">
              <div className="relative mr-2 mt-2 select-none -rotate-6 z-20 pointer-events-none">
                <div className="font-serif italic text-amber-200 text-xs sm:text-sm font-bold leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] text-right tracking-wide whitespace-pre-line">
                  Invest in People.{"\n"}Build a Stronger Tomorrow.
                </div>
              </div>
            </div>

            {/* Bottom Section: Subtitle, 4 Feature Badges, Action Buttons & Delivery Modes Moved Down */}
            <div className="space-y-4 bg-gradient-to-t from-[#06080e] via-[#06080e]/95 to-transparent pt-4 pb-2 rounded-2xl backdrop-blur-xs">
              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal drop-shadow-sm">
                Accelerate your organization&apos;s growth with industry-focused training in Cloud, DevOps, Full Stack, Data, AI and more — tailored to your goals.
              </p>

              {/* 4 Feature Items with Round Badges */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
                    <Compass className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Customized Learning Paths
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Expert Trainers
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
                    <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Flexible Delivery Modes
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-slate-200 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-200 leading-tight drop-shadow-xs">
                    Measurable Impact
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    const el = document.getElementById("proposal-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else setIsEnquiryModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#ff2038] hover:bg-[#e0142c] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get a Custom Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Delivery Modes Glass Bar */}
              <div className="w-full flex flex-wrap items-center justify-around gap-2 px-3 py-2 rounded-2xl bg-black/70 border border-slate-700/80 backdrop-blur-md text-[11px] font-bold text-slate-200 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <span>🏢</span>
                  <span>In-Person</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <span>💻</span>
                  <span>Live Online</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <span>🔄</span>
                  <span>Hybrid</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  <span>Onsite at Your Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Curved Wave Transition */}
        <div className="w-full overflow-hidden leading-none z-10 pointer-events-none mt-8 sm:mt-12 block -mb-0.5">
          <svg
            className="relative block w-full h-8 sm:h-14 lg:h-20 text-[#f8fafc] fill-[#f8fafc]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C380,95 1060,95 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "TAILORED FOR ENGINEERING SPRINTS AND ENTERPRISE SCHEDULES" (4 Pastel Cards) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Light Corner Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="text-center space-y-2 max-w-3xl mx-auto mb-10">
            <div className="text-xs font-black text-[#ff2a4a] uppercase tracking-widest">
              FLEXIBLE. SCALABLE. IMPACTFUL.
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
              Tailored for Engineering Sprints and Enterprise Schedules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Choose the delivery mode, learning tracks and support options that work best for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: On-Premises Client Labs (Light Rose) */}
            <div className="bg-[#fff5f6] p-6 sm:p-7 rounded-2xl border border-[#fecdd3]/60 shadow-xs hover:shadow-md transition space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center shadow-xs group-hover:scale-105 transition">
                <Lock className="w-5 h-5 text-[#e11d48]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug">
                  On-Premises Client Labs
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  We set up secure training environments at your location with full infrastructure support.
                </p>
              </div>
            </div>

            {/* Card 2: Private Virtual Cohorts (Light Emerald) */}
            <div className="bg-[#f0fdf7] p-6 sm:p-7 rounded-2xl border border-[#bbf7d0]/60 shadow-xs hover:shadow-md transition space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-[#dcfce7] text-[#10b981] flex items-center justify-center shadow-xs group-hover:scale-105 transition">
                <Laptop className="w-5 h-5 text-[#10b981]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug">
                  Private Virtual Cohorts
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Exclusive batches for your organization with flexible schedules and dedicated mentors.
                </p>
              </div>
            </div>

            {/* Card 3: Weekend / Fast-Track Sprints (Light Amber) */}
            <div className="bg-[#fffcf0] p-6 sm:p-7 rounded-2xl border border-[#fde68a]/60 shadow-xs hover:shadow-md transition space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-[#fef3c7] text-[#d97706] flex items-center justify-center shadow-xs group-hover:scale-105 transition">
                <Calendar className="w-5 h-5 text-[#d97706]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug">
                  Weekend / Fast-Track Sprints
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Intensive, hands-on training for specific technologies — designed for minimal disruption.
                </p>
              </div>
            </div>

            {/* Card 4: SLA Program Tracking (Light Purple) */}
            <div className="bg-[#faf5ff] p-6 sm:p-7 rounded-2xl border border-[#e9d5ff]/60 shadow-xs hover:shadow-md transition space-y-4 group">
              <div className="w-11 h-11 rounded-xl bg-[#f3e8ff] text-[#9333ea] flex items-center justify-center shadow-xs group-hover:scale-105 transition">
                <FileSpreadsheet className="w-5 h-5 text-[#9333ea]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug">
                  SLA Program Tracking
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Complete training lifecycle management with reports, assessments, and dedicated account managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRACKS (LEFT) + PROPOSAL FORM (RIGHT) - 2 Column Layout */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Top Technology Tracks (6 Cols) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-black text-red-600 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>HIGH-IMPACT UPSKILLING</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Top Technology Tracks for Corporate Cohorts
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Build future-ready teams with our industry-aligned training tracks, customized for your domain and goals.
                </p>
              </div>

              {/* 6 Interactive Track Cards */}
              <div className="space-y-3 pt-2">
                {tracks.map((track) => {
                  const Icon = track.icon;
                  const isSelected = formData.track === track.title;
                  return (
                    <div
                      key={track.id}
                      onClick={() => handleSelectTrack(track.title)}
                      className={`p-4 sm:p-5 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? "bg-red-50/70 border-red-500 shadow-md ring-1 ring-red-500"
                          : "bg-slate-50/70 hover:bg-slate-50 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center border flex-shrink-0 ${track.iconBg}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                            {track.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium">
                            {track.desc}
                          </p>
                        </div>
                      </div>
                      <div className="text-red-500 font-bold shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dark Floating Proposal Form (6 Cols) */}
            <div className="lg:col-span-6 xl:col-span-6" id="proposal-form">
              <div className="bg-[#0b101e] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
                {/* Subtle Ambient Glow inside Card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-1.5 relative z-10">
                  <div className="text-xs font-black text-red-500 uppercase tracking-widest">
                    LET&apos;S BUILD YOUR TEAM&apos;S SUCCESS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Request a Custom Corporate Training Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Tell us your requirements and our team will get back with a tailored plan.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-fadeIn relative z-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="text-base font-bold text-white">Proposal Request Received!</div>
                    <p className="text-xs text-slate-300">
                      Redirecting to our corporate solutions specialist on WhatsApp...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-200">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-200">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. ABC Technologies"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition"
                        />
                      </div>
                    </div>

                    {/* Row 2: Work Email & Mobile Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-200">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-200">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          placeholder="e.g. 10-digit number"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition"
                        />
                      </div>
                    </div>

                    {/* Row 3: Preferred Track & Team Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-200">
                          Preferred Training Track <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.track}
                          onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 transition"
                        >
                          <option value="Cloud Infrastructure & Migration (AWS / Azure)">
                            Cloud Infrastructure & Migration
                          </option>
                          <option value="Agentic AI & LLM Systems">Agentic AI & LLM Systems</option>
                          <option value="DevOps, Docker & Kubernetes (CKA)">
                            DevOps & Kubernetes
                          </option>
                          <option value="Data Analytics & BI">Data Analytics & BI</option>
                          <option value="Full Stack & Modern Web Development">
                            Full Stack Web Development
                          </option>
                          <option value="Custom & Domain-Specific Training">
                            Custom / Specialized Domain
                          </option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-200">
                          Team Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 transition"
                        >
                          <option value="5-10 Engineers">5-10 Engineers</option>
                          <option value="10-25 Engineers">10-25 Engineers</option>
                          <option value="25-50 Engineers">25-50 Engineers</option>
                          <option value="50-100 Engineers">50-100 Engineers</option>
                          <option value="100+ Engineers">100+ Enterprise Cohort</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Additional Requirements */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200">
                        Additional Requirements (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="e.g. Preferred dates, location, specific tools, any custom topics..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#ff2038] hover:bg-[#e0142c] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-red-600/40 transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>We respect your privacy. No spam, only custom solutions.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STATS SECTION (Floating 4-Stat Pill Card + Handwritten Doodle) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-[#f8fafc] border-b border-slate-200/80 relative">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-8">
            {/* Unified Floating White Pill Container with 4 Stats */}
            <div className="flex-1 w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 sm:px-4 first:pl-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                    <Building2 className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                      200+
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-slate-500 mt-0.5">
                      Corporate Clients
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                    <Users className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                      10,000+
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-slate-500 mt-0.5">
                      Professionals Trained
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                    <Heart className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                      95%
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-slate-500 mt-0.5">
                      Client Satisfaction
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 last:pr-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                    <MonitorPlay className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                      50+
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-slate-500 mt-0.5">
                      Custom Programs Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Handwritten Text with Red Swoosh */}
            <div className="hidden xl:flex flex-col items-start -rotate-6 select-none flex-shrink-0 pr-4">
              <div className="font-serif italic text-slate-800 text-lg font-bold leading-[1.15] tracking-wide">
                Empower<br />
                <span className="ml-1">Teams</span><br />
                <span className="ml-2">Enable</span><br />
                <span className="ml-3">Growth</span>
              </div>
              {/* Red Swoosh Underline */}
              <svg
                className="w-20 h-3 text-[#ff253a] -mt-1 ml-4"
                viewBox="0 0 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              >
                <path d="M5 14 Q 50 3, 95 12" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS + TESTIMONIAL */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Script Doodle */}
            <div className="hidden xl:flex lg:col-span-2 flex-col items-start -rotate-6 select-none pt-28">
              <div className="font-serif italic text-slate-800 text-xl font-bold leading-[1.2] tracking-wide">
                Your<br />
                <span className="ml-1.5">People</span><br />
                <span className="ml-3">Our</span><br />
                <span className="ml-4">Priority</span>
              </div>
              {/* Red Swoosh Underline */}
              <svg
                className="w-24 h-3.5 text-[#ff253a] -mt-1 ml-4"
                viewBox="0 0 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              >
                <path d="M5 14 Q 50 3, 95 12" />
              </svg>
            </div>

            {/* Center: FAQs (7 Cols) */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6">
              {/* Section Header */}
              <div className="text-center sm:text-left space-y-1.5">
                <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest">
                  ENTERPRISE QUERIES
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight leading-tight">
                  Frequently Asked Corporate Training Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Get quick answers to the most common questions from our corporate partners.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-xl bg-[#fdeef0] border border-red-100/80 text-[#ff253a] flex items-center justify-center flex-shrink-0 shadow-2xs">
                            <Workflow className="w-4 h-4 stroke-[2.2]" />
                          </div>
                          <span className="text-xs sm:text-[14px] font-bold text-slate-800 leading-snug">
                            {faq.q}
                          </span>
                        </div>

                        {/* Round Plus / Minus Toggle Button */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                            isOpen
                              ? "bg-slate-100 text-slate-600 shadow-inner"
                              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed border-t border-slate-100 mt-1 pt-3 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Floating Testimonial Card (4-5 Cols) */}
            <div className="lg:col-span-5 xl:col-span-4 relative pt-2">
              {/* Floating Testimonial Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] relative z-10 space-y-4">
                {/* Indigo Quote Mark Badge */}
                <div className="w-11 h-11 rounded-full bg-[#ede9fe] text-[#6366f1] flex items-center justify-center font-serif text-2xl font-bold shadow-xs">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] font-bold text-slate-800 leading-relaxed">
                  &ldquo;LearnMore helped our engineering teams upskill faster and deliver better, together.&rdquo;
                </p>

                {/* Author Info */}
                <div className="text-xs text-slate-500 font-medium leading-tight">
                  <div className="text-slate-700 font-semibold">— Head of Engineering</div>
                  <div className="text-slate-400 mt-0.5">Fortune 500 Tech Company</div>
                </div>

                {/* 3 Indicator Carousel Dots */}
                <div className="flex items-center gap-1.5 pt-2">
                  <span className="w-2 h-2 rounded-full bg-[#818cf8]" />
                  <span className="w-2 h-2 rounded-full bg-indigo-200" />
                  <span className="w-2 h-2 rounded-full bg-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM BANNER ("READY TO UPSKILL YOUR TEAM?") */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-r from-[#170208] via-[#780d1f] to-[#150208] text-white py-8 sm:py-10 overflow-hidden">
        {/* Subtle Wave Texture Overlay on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 opacity-15 pointer-events-none overflow-hidden select-none">
          <svg
            className="w-full h-full text-white"
            viewBox="0 0 500 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M0 200 C 180 140, 320 40, 500 0" />
            <path d="M40 200 C 210 150, 350 50, 500 20" />
            <path d="M80 200 C 240 160, 380 60, 500 40" />
            <path d="M120 200 C 270 170, 410 70, 500 60" />
            <path d="M160 200 C 300 180, 440 80, 500 80" />
          </svg>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left: Outline Wireframe Paper Airplane + Main Text */}
            <div className="flex items-center gap-6 text-center md:text-left">
              {/* Origami Wireframe Red Paper Airplane Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-[#ff253a] -rotate-6 transition-transform duration-300 hover:scale-110 drop-shadow-[0_2px_8px_rgba(255,37,58,0.4)]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 32 L56 12 L34 52 L26 36 L8 32 Z" />
                  <path d="M56 12 L26 36" />
                </svg>
              </div>

              {/* Headline & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Ready to Upskill Your Team?
                </h3>
                <p className="text-xs sm:text-sm text-rose-100/90 font-normal">
                  Partner with us for customized, high-impact training programs.
                </p>
              </div>
            </div>

            {/* Right: Pill Action Button & Handwritten Annotation */}
            <div className="shrink-0 flex items-center gap-6 sm:gap-10">
              {/* White Pill Button */}
              <button
                onClick={() => {
                  const el = document.getElementById("proposal-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else setIsEnquiryModalOpen(true);
                }}
                className="px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#ff2038] font-extrabold text-xs sm:text-sm shadow-xl transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <span className="text-[#ff2038] text-base leading-none">→</span>
              </button>

              {/* Right Script Doodle ("Let's Grow Together") */}
              <div className="hidden lg:flex flex-col items-start -rotate-6 select-none flex-shrink-0">
                <div className="font-serif italic text-white text-base sm:text-lg font-bold leading-[1.15] tracking-wide">
                  Let&apos;s<br />
                  <span className="ml-1">Grow</span><br />
                  <span className="ml-2">Together</span>
                </div>
                {/* Red Curved Underline */}
                <svg
                  className="w-18 h-3 text-[#ff2038] -mt-0.5 ml-2"
                  viewBox="0 0 100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                >
                  <path d="M5 14 Q 50 3, 95 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
