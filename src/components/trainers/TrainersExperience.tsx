"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Building2,
  Code2,
  Users,
  Briefcase,
  Star,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Phone,
  CheckCircle2,
  Layers,
  Cpu,
  Target,
  FileCode,
  UserPlus,
  BookOpen,
} from "lucide-react";
import { trainersList, TrainerMentor } from "@/data/trainers";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

export function TrainersExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerMentor | null>(null);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 font-sans antialiased selection:bg-[#ff253a] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (High-Resolution Full-Bleed Background) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#070b14] overflow-hidden border-b border-slate-800/80">
        {/* Full-bleed High-Resolution Background Image */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/blog-hero.png"
            alt="LearnMore Technologies Trainers & Faculty"
            fill
            priority
            unoptimized
            className="object-cover object-right md:object-center select-none"
          />
          {/* Subtle Readability Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/85 to-transparent sm:w-3/4 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-transparent to-transparent h-24 top-auto bottom-0" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              {/* Breadcrumb: Home > Trainers */}
              <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-200 font-bold">Trainers</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-[11px] font-black tracking-wider text-amber-400 uppercase shadow-lg backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Our Trainers, Your Advantage</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.14]">
                Learn From Senior Architects &amp;<br />
                <span className="text-[#ff253a]">Active MNC Tech Leaders.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed">
                Our trainers don&apos;t just teach theory — they architect real solutions, solve real-world problems, and build innovative tech at global technology enterprises.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 text-[#ff253a] border border-red-500/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">
                    Industry Experts from Top MNCs
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">
                    Real-World Project Experience
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">
                    Personalized Mentorship
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">
                    Career Guidance Beyond the Classroom
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Area (5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px] flex items-center justify-center">
                {/* Floating Cursive Script */}
                <div className="select-none -rotate-6">
                  <span className="font-serif italic text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                    Real<br />
                    Mentors<br />
                    <span className="text-[#ff3549]">Real</span><br />
                    Careers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ========================================================================= */}
      {/* 2. SECTION: OUR LEAD FACULTY & TECHNICAL MENTORS (12 Cards Grid) */}
      {/* ========================================================================= */}
      <section id="mentors-grid" className="py-14 sm:py-20 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-red-500/10 text-[#ff253a] border border-red-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Our Lead Faculty &amp; Technical Mentors
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Learn from industry professionals who bring real-world experience, practical insights, and a passion for teaching.
            </p>
          </div>

          <a
            href="#mentors-grid"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs shadow-md transition self-start sm:self-auto"
          >
            <span>View All Mentors</span>
            <ArrowRight className="w-3.5 h-3.5 text-red-500" />
          </a>
        </div>

        {/* 12 Mentor Cards in 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainersList.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-3xl bg-[#0b101d]/90 border border-slate-800 hover:border-red-500/50 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(255,37,58,0.12)] transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3.5">
                {/* Top: Avatar & Info */}
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 shrink-0 shadow-sm">
                    <Image
                      src={mentor.avatarUrl}
                      alt={mentor.name}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-black text-white tracking-tight truncate">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-bold text-[#ff253a] truncate mt-0.5">
                      {mentor.role}
                    </p>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {mentor.experience}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs text-slate-300 font-normal leading-relaxed line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {mentor.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-[#131b2e] border border-slate-700/60 text-[10px] font-bold text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Company Tag & Rating */}
              <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold text-[11px]">
                  {mentor.isAlumni && (
                    <span className="font-extrabold text-[#ff253a]">LT Alumni •</span>
                  )}
                  <span>{mentor.company}</span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 font-black text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{mentor.rating}</span>
                  <span className="text-slate-500 font-normal text-[11px]">
                    ({mentor.reviewsCount})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: WHY LEARNING FROM WORKING MNC ARCHITECTS MATTERS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#070b14] via-[#0d1322] to-[#070b14] border-y border-slate-800 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff253a]/15 border border-red-500/30 text-[11px] font-black tracking-wider text-red-400 uppercase">
              <span>Stronger Mentors, Brighter Careers.</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Why Learning from <span className="text-[#ff253a]">Working MNC Architects</span> Matters
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Traditional teaching gives you information. Our mentors give you industry-proven insights, real experience, and the confidence to apply technology in the real world.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl bg-[#0b101d] border border-slate-800 hover:border-red-500/40 p-6 space-y-3.5 transition duration-300 shadow-lg">
              <div className="w-11 h-11 rounded-2xl bg-red-500/10 text-[#ff253a] border border-red-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white tracking-tight">
                Learn Enterprise Experience
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Gain insights from professionals who have solved complex problems at global enterprises.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-[#0b101d] border border-slate-800 hover:border-red-500/40 p-6 space-y-3.5 transition duration-300 shadow-lg">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white tracking-tight">
                Practice Real-World Case Studies
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Work on scenarios and projects inspired by actual industry challenges.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-[#0b101d] border border-slate-800 hover:border-red-500/40 p-6 space-y-3.5 transition duration-300 shadow-lg">
              <div className="w-11 h-11 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white tracking-tight">
                Stay Updated with Latest Tech
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Learn cutting-edge tools, frameworks and best practices directly from active industry leaders.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl bg-[#0b101d] border border-slate-800 hover:border-red-500/40 p-6 space-y-3.5 transition duration-300 shadow-lg">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white tracking-tight">
                Get Career-Ready Guidance
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Receive mentorship on career paths, interview strategies, and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: ARE YOU A SENIOR ARCHITECT PASSIONATE ABOUT TEACHING? */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="rounded-3xl bg-gradient-to-r from-[#fff5f5] via-[#fffbfb] to-[#fff5f5] border border-red-200/90 p-7 sm:p-9 lg:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-slate-900">
          {/* Left: Info */}
          <div className="flex items-start gap-4 sm:gap-5 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#ff253a] border border-red-200 flex items-center justify-center shrink-0 shadow-sm mt-1">
              <UserPlus className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider">
                <span>JOIN OUR TRAINER NETWORK</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Are You a Senior Architect Passionate About Teaching?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Share your knowledge with tomorrow&apos;s tech leaders! Join our network of industry experts and help shape the next generation of developers, engineers, and problem solvers.
              </p>
            </div>
          </div>

          {/* Middle: 3 Pillars */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 text-xs font-bold text-slate-700 shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff253a]" />
              <span>Teach &amp; Inspire</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Flexible Engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Be Part of a Growing Community</span>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#ff253a] hover:bg-[#e0182d] text-white font-black text-xs sm:text-sm shadow-lg shadow-red-500/25 transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply as a Trainer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: ATTEND A FREE LIVE SESSION WITH OUR LEAD INSTRUCTORS */}
      {/* ========================================================================= */}
      <section className="pb-16 sm:pb-24 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="rounded-3xl bg-gradient-to-r from-[#0c1220] via-[#11192e] to-[#0c1220] border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Corner Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-extrabold text-[11px] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Learn Before You Join</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Attend a Free Live Session with Our <span className="text-amber-400">Lead Instructors</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
                Experience our teaching style, get your doubts clarified, and see how LearnMore can accelerate your career.
              </p>

              {/* Info + Action Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                  <Calendar className="w-4 h-4 text-red-500" />
                  <span>Live • Interactive • Doubt Solving | From Anywhere</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#ff253a] hover:bg-[#e0182d] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919036524555"
                  className="px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call: +91 9036524555</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script (4 Cols) */}
            <div className="lg:col-span-4 flex items-center justify-end select-none">
              <div className="text-right -rotate-3">
                <span className="font-serif italic text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  Knowledge<br />
                  <span className="text-slate-200">today</span><br />
                  <span className="text-amber-400">Opportunities</span><br />
                  tomorrow.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultCourseSlug="Cloud DevOps Master Program"
      />
    </div >
  );
}
