"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Award,
  TrendingUp,
  Building2,
  Users,
  CheckCircle,
  GraduationCap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  BookOpen,
  Layers,
  Rocket,
  ArrowUpRight,
  Quote,
  ShieldCheck,
  Briefcase,
  Code2,
  UserCheck,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

// 4 Stats
const stats = [
  {
    icon: GraduationCap,
    iconBg: "bg-red-50 text-red-600 border border-red-100",
    value: "45,000+",
    valueColor: "text-[#ea2837]",
    label: "Graduates Placed",
    sub: "Across top MNCs & Unicorns",
  },
  {
    icon: Star,
    iconBg: "bg-amber-50 text-amber-500 border border-amber-100",
    value: "4.9 / 5.0",
    valueColor: "text-slate-900",
    label: "Google & Platform Rating",
    sub: "Based on 3,200+ verified reviews",
  },
  {
    icon: Users,
    iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
    value: "450+",
    valueColor: "text-slate-900",
    label: "Active Hiring Partners",
    sub: "Direct interview drives",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    value: "₹6.8 LPA",
    valueColor: "text-[#ea2837]",
    label: "Average Fresher CTC",
    sub: "Upto ₹24 LPA for lateral hires",
  },
];

// Verified Graduate Reviews (from Google Reviews link: https://share.google/mbQhN9ou3LcnA46d7)
const studentReviewsRow1 = [
  {
    id: "rev-1",
    name: "Pooja Hegde",
    role: "Python Full Stack Developer",
    campus: "Marathahalli Campus",
    company: "Placed @ Capgemini",
    reviewText:
      "I joined LearnMore Technologies in Marathahalli for Python Full Stack. Rahul Sir explained every concept practically with real-time projects. The mock interviews gave me immense confidence to crack my first IT job with a 50%+ hike!",
    cardBg: "bg-red-50/20 border-red-100/80 hover:border-red-300",
    quoteColor: "text-red-500",
  },
  {
    id: "rev-2",
    name: "Rohit Verma",
    role: "AWS Certified Solutions Architect",
    campus: "Kalyan Nagar Campus",
    company: "Placed @ Cognizant",
    reviewText:
      "The hands-on AWS and Kubernetes labs were unmatched. The real-world projects and architecture case studies gave me the confidence to clear MNC interviews. Highly recommend for anyone serious about a tech career.",
    cardBg: "bg-blue-50/20 border-blue-100/80 hover:border-blue-300",
    quoteColor: "text-blue-500",
  },
  {
    id: "rev-3",
    name: "Priyanka Nair",
    role: "Data Scientist & AI Specialist",
    campus: "BTM Layout Campus",
    company: "Placed @ Accenture AI",
    reviewText:
      "Best institute for Data Science in Bangalore. The curriculum, mentors and placement support helped me land my dream role in just 5 months. Truly a game changer!",
    cardBg: "bg-amber-50/20 border-amber-100/80 hover:border-amber-300",
    quoteColor: "text-amber-500",
  },
  {
    id: "rev-4",
    name: "Mohd. Farhan",
    role: "Power BI & Business Intelligence",
    campus: "Marathahalli Campus",
    company: "Placed @ Societe Generale",
    reviewText:
      "The DAX formulas and data modeling modules were taught so clearly with real financial datasets. The mock interviews were rigorous and prepared me for tough scenario questions.",
    cardBg: "bg-emerald-50/20 border-emerald-100/80 hover:border-emerald-300",
    quoteColor: "text-emerald-500",
  },
  {
    id: "rev-5",
    name: "Kiran Kumar",
    role: "Cloud & DevOps Engineer",
    campus: "Kalyan Nagar Campus",
    company: "Placed @ Dell Technologies",
    reviewText:
      "Hands-on labs on AWS, Docker, and CI/CD pipelines were top notch. The faculty is very approachable and helped clear doubts even after batch hours. 100% recommended!",
    cardBg: "bg-cyan-50/20 border-cyan-100/80 hover:border-cyan-300",
    quoteColor: "text-cyan-500",
  },
  {
    id: "rev-6",
    name: "Sneha Reddy",
    role: "Java Full Stack Developer",
    campus: "BTM Layout Campus",
    company: "Placed @ Infosys",
    reviewText:
      "Coming from a non-CS background, I was nervous about coding. LearnMore's step-by-step teaching, daily assignments, and interview prep made the journey smooth and rewarding.",
    cardBg: "bg-purple-50/20 border-purple-100/80 hover:border-purple-300",
    quoteColor: "text-purple-500",
  },
];

const studentReviewsRow2 = [
  {
    id: "rev-7",
    name: "Siddharth Hegde",
    role: "Automation Testing & Selenium",
    campus: "Marathahalli Campus",
    company: "Placed @ Wipro",
    reviewText:
      "The Selenium WebDriver, TestNG framework, and Postman API testing modules are taught with real enterprise applications. Cleared multiple technical rounds with ease.",
    cardBg: "bg-indigo-50/20 border-indigo-100/80 hover:border-indigo-300",
    quoteColor: "text-indigo-500",
  },
  {
    id: "rev-8",
    name: "Anjali Nair",
    role: "Data Analytics & Machine Learning",
    campus: "BTM Layout Campus",
    company: "Placed @ Analytics Vidhya",
    reviewText:
      "The practical case studies with real financial datasets and continuous mentor feedback made all the difference. Excellent institute for genuine career transformation!",
    cardBg: "bg-rose-50/20 border-rose-100/80 hover:border-rose-300",
    quoteColor: "text-rose-500",
  },
  {
    id: "rev-9",
    name: "Vigneshwaran S",
    role: "Full Stack Developer (React & Node)",
    campus: "Marathahalli Campus",
    company: "Placed @ Mindtree",
    reviewText:
      "The project-based learning model helped me understand how backend APIs connect seamlessly with modern React components. Secured a great placement directly through campus drives.",
    cardBg: "bg-teal-50/20 border-teal-100/80 hover:border-teal-300",
    quoteColor: "text-teal-500",
  },
  {
    id: "rev-10",
    name: "Deepa Sundaram",
    role: "Snowflake & Cloud Data Engineer",
    campus: "Kalyan Nagar Campus",
    company: "Placed @ TCS Digital",
    reviewText:
      "From SQL queries to large-scale data pipelines in Snowflake and AWS, the depth of coverage was remarkable. Mentors were patient and always available to guide us.",
    cardBg: "bg-sky-50/20 border-sky-100/80 hover:border-sky-300",
    quoteColor: "text-sky-500",
  },
  {
    id: "rev-11",
    name: "Manoj Gowda",
    role: "DevOps & Kubernetes Specialist",
    campus: "Marathahalli Campus",
    company: "Placed @ Oracle Cloud",
    reviewText:
      "I was able to transition from a manual operations role to a high-paying DevOps position. The live CI/CD pipeline and Kubernetes cluster labs are the best in Bangalore.",
    cardBg: "bg-violet-50/20 border-violet-100/80 hover:border-violet-300",
    quoteColor: "text-violet-500",
  },
  {
    id: "rev-12",
    name: "Kavya Ramesh",
    role: "Quality Assurance & API Testing",
    campus: "Kalyan Nagar Campus",
    company: "Placed @ HCL Technologies",
    reviewText:
      "Top-notch training in both manual and automation QA. The mock interviews with industry experts simulated real technical rounds and boosted my self-confidence.",
    cardBg: "bg-orange-50/20 border-orange-100/80 hover:border-orange-300",
    quoteColor: "text-orange-500",
  },
];

// Why Choose Us Pillars
const whyChooseUs = [
  {
    icon: UserCheck,
    title: "Expert Mentorship",
    desc: "Learn from industry professionals",
    iconBg: "bg-red-50 text-red-500 border border-red-100",
  },
  {
    icon: Layers,
    title: "Real-World Projects",
    desc: "Build job-ready skills",
    iconBg: "bg-purple-50 text-purple-500 border border-purple-100",
  },
  {
    icon: ShieldCheck,
    title: "Mock Interviews",
    desc: "Gain confidence",
    iconBg: "bg-blue-50 text-blue-500 border border-blue-100",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "Direct hiring drives with top MNCs",
    iconBg: "bg-emerald-50 text-emerald-500 border border-emerald-100",
  },
];

export function TestimonialsExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="bg-[#fcfdfe] text-slate-900 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark theme with glowing background & Student Visuals) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#070b14] text-white pt-6 pb-14 sm:pt-8 sm:pb-18 lg:pt-10 lg:pb-22 overflow-hidden">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="/placement-bottom-section.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]" />
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-white transition flex items-center gap-1">
              <span>🏠 Home</span>
            </Link>
            <span>›</span>
            <span className="text-slate-200">Testimonials</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-5 max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2a170e]/80 border border-amber-600/40 text-amber-300 text-xs font-bold tracking-wide shadow-sm select-none backdrop-blur-sm">
                <span>⭐ Verified Alumni Testimonials</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-black text-white tracking-tight leading-[1.12]">
                Real Stories.<br />
                <span className="text-[#ff3b4e]">Real Transformations.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                From classroom to dream career — hear from our students who turned their skills into opportunities with top MNCs.
              </p>

              {/* 4 Feature Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-sm">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Learn</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-sm">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Build Skills</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-sm">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Mentored</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-sm">
                  <Rocket className="w-3.5 h-3.5 text-rose-400" />
                  <span>Get Placed</span>
                </div>
              </div>
            </div>

            {/* Center/Right Visual Area (6 Cols) */}
            <div className="lg:col-span-6 relative flex items-center justify-between lg:justify-end gap-4 sm:gap-8">
              {/* Cursive Annotation */}
              <div className="flex flex-col items-start text-left -rotate-6 select-none z-10">
                <span className="font-serif italic text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  Students<br />
                  Today<br />
                  <span className="text-slate-100">Professionals</span><br />
                  Tomorrow
                </span>
                <svg
                  className="w-24 sm:w-28 h-4 text-[#ff2038] -mt-1 drop-shadow-[0_0_8px_rgba(255,32,56,0.8)]"
                  viewBox="0 0 100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <path d="M5 14 Q 50 2, 95 12" />
                </svg>
              </div>

              {/* Smiling Student Holding Laptop Photo */}
              <div className="relative flex items-center justify-center flex-shrink-0">
                <div className="relative w-[180px] sm:w-[240px] lg:w-[280px] h-auto">
                  <Image
                    src="/girl.png"
                    alt="LearnMore Placed Graduate"
                    width={280}
                    height={380}
                    style={{ width: "100%", height: "auto" }}
                    className="w-full h-auto object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>
              </div>

              {/* Right Glowing Card: Dream Learn Build Get Placed */}
              <div className="hidden xl:flex flex-col items-start p-5 rounded-2xl bg-black/60 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.2)] relative flex-shrink-0">
                <div className="font-serif italic text-white text-xl font-bold space-y-1">
                  <div>Dream</div>
                  <div className="text-slate-300">Learn</div>
                  <div className="text-cyan-400">Build</div>
                  <div className="text-[#ff3b4e]">Get Placed</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cyan-400 absolute top-4 right-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS SECTION (4 White Floating Metric Cards) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex items-center gap-4 hover:shadow-md transition duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.iconBg}`}>
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className={`text-2xl sm:text-3xl font-black tracking-tight ${stat.valueColor}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VERIFIED GRADUATE REVIEWS (Continuous Moving Marquee Tracks) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest">
                STUDENT REVIEWS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Verified Graduate Reviews
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                From zero coding experience to cracking top IT interviews in Bangalore.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap self-start sm:self-auto">
              {/* Hover to pause pill */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Hover card to pause &amp; read</span>
              </div>

              {/* 4.9 Star Google Rating Pill */}
              <div className="flex items-center gap-1.5 text-xs text-white bg-[#ea2837] px-4 py-2 rounded-full font-extrabold shadow-sm">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                <span>4.9 Star Google Rating</span>
              </div>

              {/* Add Review Button */}
              <a
                href="https://share.google/mbQhN9ou3LcnA46d7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 hover:border-red-500 text-slate-700 hover:text-red-600 bg-white font-bold text-xs shadow-xs transition cursor-pointer"
              >
                <span>+ Add Review on Google</span>
              </a>
            </div>
          </div>

          {/* Moving Reviews Container with Edge Gradients */}
          <div className="relative space-y-6">
            {/* Left & Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Row 1: Moving Left */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-marquee-reviews hover:[animation-play-state:paused] py-2 w-max">
                {[...studentReviewsRow1, ...studentReviewsRow1].map((rev, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className={`w-[320px] sm:w-[380px] md:w-[410px] shrink-0 rounded-3xl border ${rev.cardBg} bg-white shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between space-y-4`}
                  >
                    {/* Top: Google Badge & 5 Stars */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <a
                          href="https://share.google/mbQhN9ou3LcnA46d7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 transition"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span>Google Review</span>
                          <span className="text-amber-500 font-black">5.0 ★</span>
                        </a>

                        <div className="flex items-center gap-0.5 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed italic">
                        &ldquo;{rev.reviewText}&rdquo;
                      </p>
                    </div>

                    {/* Bottom: Name, Role, Company & Campus */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 leading-tight">
                          {rev.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          {rev.role} • <span className="text-emerald-600 font-semibold">{rev.company}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                        {rev.campus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Moving Right */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-marquee-reviews-reverse hover:[animation-play-state:paused] py-2 w-max">
                {[...studentReviewsRow2, ...studentReviewsRow2].map((rev, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className={`w-[320px] sm:w-[380px] md:w-[410px] shrink-0 rounded-3xl border ${rev.cardBg} bg-white shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between space-y-4`}
                  >
                    {/* Top: Google Badge & 5 Stars */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <a
                          href="https://share.google/mbQhN9ou3LcnA46d7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 transition"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span>Google Review</span>
                          <span className="text-amber-500 font-black">5.0 ★</span>
                        </a>

                        <div className="flex items-center gap-0.5 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed italic">
                        &ldquo;{rev.reviewText}&rdquo;
                      </p>
                    </div>

                    {/* Bottom: Name, Role, Company & Campus */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 leading-tight">
                          {rev.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          {rev.role} • <span className="text-emerald-600 font-semibold">{rev.company}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                        {rev.campus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "WHY STUDENTS CHOOSE US" / "More Than Training. A Career Partner." */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest">
                WHY STUDENTS CHOOSE US
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                More Than Training.<br />
                A Career Partner.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed pt-1">
                We don&apos;t just teach, we help you build a future. From personalized mentorship to direct placement support — we&apos;re with you at every step.
              </p>
            </div>

            {/* Right 4 Pillars (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              {whyChooseUs.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)] p-5 flex flex-col items-center justify-between space-y-3 hover:shadow-md transition"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${pillar.iconBg}`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {pillar.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* 6. BOTTOM CTA: "Start Your Tech Transformation Today" */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] p-8 sm:p-12 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              {/* Left Content */}
              <div className="space-y-2 max-w-xl">
                <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest">
                  Be Our Next Success Story
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Start Your Tech Transformation Today
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Join the next batch in Bangalore or online. Attend a free live demo class to experience our training quality firsthand.
                </p>
              </div>

              {/* Right Action Buttons + Cursive Script */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="px-6 py-3.5 rounded-2xl bg-[#ea2837] hover:bg-[#d31027] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_20px_rgba(234,40,55,0.35)] transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book Free Demo Class</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919036524555"
                    className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-xs transition flex items-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>Call +91 90365 24555</span>
                  </a>
                </div>

                {/* Hand-drawn Annotation: Future Starts Here! */}
                <div className="hidden xl:flex flex-col items-start -rotate-12 select-none ml-2">
                  <span className="font-serif italic text-slate-800 text-lg font-bold leading-tight">
                    Future<br />Starts<br />Here!
                  </span>
                  <svg
                    className="w-14 h-8 text-slate-600 -mt-1 ml-1"
                    viewBox="0 0 50 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M40 5 Q 20 15, 5 25 M 5 15 L 5 25 L 15 25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultCourseSlug="Testimonials & Placement Consultation"
      />
    </div>
  );
}

