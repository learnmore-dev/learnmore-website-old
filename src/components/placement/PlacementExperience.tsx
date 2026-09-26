"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Building2,
  TrendingUp,
  Award,
  ArrowRight,
  Play,
  CheckCircle2,
  Code2,
  Layers,
  UserCheck,
  MessageSquare,
  Sparkles,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MonitorCheck,
  Rocket,
  Check,
  Phone,
  FileText,
  Target,
  Compass,
  X,
  HelpCircle,
  GraduationCap,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

export function PlacementExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isStoriesPaused, setIsStoriesPaused] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // 6 Placement Roadmap Stages
  const roadmapStages = [
    {
      step: 1,
      title: "Practical Code Assessment",
      desc: "Evaluate your programming and problem-solving skills to create a personalized learning path.",
      icon: Code2,
    },
    {
      step: 2,
      title: "Production Capstone Building",
      desc: "Work on real-world projects and build portfolio-ready applications with guidance from industry mentors.",
      icon: Layers,
    },
    {
      step: 3,
      title: "Resume & LinkedIn Transformation",
      desc: "Get a professional resume, optimize your LinkedIn profile and learn personal branding strategies.",
      icon: UserCheck,
    },
    {
      step: 4,
      title: "Weekly Mock Technical Rounds",
      desc: "Practice with industry-style mock interviews and receive detailed feedback.",
      icon: MessageSquare,
    },
    {
      step: 5,
      title: "Unlimited MNC Interview Drives",
      desc: "Get direct access to partner companies, interview scheduling support, and end-to-end placement assistance.",
      icon: Target,
    },
    {
      step: 6,
      title: "Offer Negotiation & Onboarding",
      desc: "Expert guidance to help you negotiate the best offer and transition smoothly into your new role.",
      icon: Briefcase,
    },
  ];

  // Verified Alumni Success Stories
  const successStories = [
    {
      name: "Satvik Tripathi",
      role: "IT Analyst at TCS",
      company: "TCS",
      companyColor: "text-[#005596]",
      companyBg: "bg-blue-50 border-blue-100",
      avatar: "/student/satvik.png",
      quote:
        "The practical project coaching and mock interviews at LearnMore gave me the edge to crack the TCS technical rounds smoothly. Highly recommended!",
      course: "Python Full Stack & Cloud",
      duration: "3 Months",
      package: "₹ 8.5 LPA",
    },
    {
      name: "Kishan Choudhary",
      role: "Software Analyst at Capgemini",
      company: "Capgemini",
      companyColor: "text-[#0070ad]",
      companyBg: "bg-cyan-50 border-cyan-100",
      avatar: "/student/Kishan.png",
      quote:
        "From foundational programming to enterprise application development, the mentors guided me at every step to secure my role at Capgemini.",
      course: "Full Stack Development",
      duration: "4 Months",
      package: "₹ 8.0 LPA",
    },
    {
      name: "Aditya Patel",
      role: "Associate Applications Developer at DXC Technologies",
      company: "DXC Technologies",
      companyColor: "text-[#5f259f]",
      companyBg: "bg-purple-50 border-purple-100",
      avatar: "/student/Aditya.png",
      quote:
        "Hands-on projects and real-time scenario discussions built the technical confidence I needed to clear multiple interview rounds at DXC.",
      course: "Java Full Stack Development",
      duration: "3.5 Months",
      package: "₹ 7.8 LPA",
    },
    {
      name: "Rohit Yadav",
      role: "Snowflake Developer at Bizmetric",
      company: "Bizmetric",
      companyColor: "text-[#29b5e8]",
      companyBg: "bg-sky-50 border-sky-100",
      avatar: "/student/Rohit.png",
      quote:
        "The in-depth Snowflake data warehousing and ETL pipeline modules directly matched what the recruiters asked for. Exceptional placement support!",
      course: "Data Engineering & Snowflake",
      duration: "4 Months",
      package: "₹ 9.2 LPA",
    },
    {
      name: "Ganesh Parab",
      role: "Software Developer at IBM",
      company: "IBM",
      companyColor: "text-[#054ada]",
      companyBg: "bg-blue-50 border-blue-100",
      avatar: "/student/ganesh.png",
      quote:
        "The deep-dive coding practice, Git architecture, and system design sessions helped me transition into a core developer role at IBM.",
      course: "Full Stack Software Engineering",
      duration: "4 Months",
      package: "₹ 10.5 LPA",
    },
    {
      name: "Shubham P",
      role: "Team Lead at Tech Mahindra",
      company: "Tech Mahindra",
      companyColor: "text-[#e31837]",
      companyBg: "bg-red-50 border-red-100",
      avatar: "/student/Shubham.png",
      quote:
        "Advanced architecture patterns and leadership mentorship helped me level up my career to Team Lead at Tech Mahindra with a great hike.",
      course: "Cloud & DevOps Architecture",
      duration: "4 Months",
      package: "₹ 14.5 LPA",
    },
    {
      name: "Sachin C",
      role: "Software Engineer at Accenture",
      company: "Accenture",
      companyColor: "text-[#a100ff]",
      companyBg: "bg-purple-50 border-purple-100",
      avatar: "/student/SACHIN.png",
      quote:
        "The curriculum is laser-focused on industry requirements. The placement team arranged direct interview drives that led to my Accenture offer.",
      course: "Python Full Stack Master",
      duration: "3 Months",
      package: "₹ 8.2 LPA",
    },
    {
      name: "Rajesh K",
      role: "Project Manager at HCL",
      company: "HCL",
      companyColor: "text-[#0072ce]",
      companyBg: "bg-indigo-50 border-indigo-100",
      avatar: "/student/RAJESH.png",
      quote:
        "The Agile governance, sprint planning, and enterprise delivery modules helped me transition smoothly into Project Management at HCL.",
      course: "Enterprise Project & Agile Delivery",
      duration: "3 Months",
      package: "₹ 16.0 LPA",
    },
    {
      name: "Faiz Shah",
      role: "Data Analyst at Capgemini",
      company: "Capgemini",
      companyColor: "text-[#0070ad]",
      companyBg: "bg-cyan-50 border-cyan-100",
      avatar: "/student/FAIZ.png",
      quote:
        "Power BI dashboards, advanced SQL, and data modeling were taught with real business datasets. Landed a top Data Analyst role at Capgemini!",
      course: "Data Analytics & Power BI",
      duration: "3.5 Months",
      package: "₹ 8.0 LPA",
    },
    {
      name: "Deepak Yadav",
      role: "Advisory Software Engineer at IBM",
      company: "IBM",
      companyColor: "text-[#054ada]",
      companyBg: "bg-blue-50 border-blue-100",
      avatar: "/student/DEEPAK.png",
      quote:
        "The cloud-native microservices and Kubernetes cluster labs are unmatched in Bangalore. Successfully cracked the Advisory Engineer role at IBM.",
      course: "Cloud Architecture & Kubernetes",
      duration: "4 Months",
      package: "₹ 18.5 LPA",
    },
    {
      name: "Vashney M",
      role: "Senior Associate at Cognizant",
      company: "Cognizant",
      companyColor: "text-[#0033a0]",
      companyBg: "bg-indigo-50 border-indigo-100",
      avatar: "/student/VASHNEY.png",
      quote:
        "Mock interviews simulating actual corporate screening rounds gave me immense confidence. Got placed as Senior Associate with a great package!",
      course: "Full Stack & Automation QA",
      duration: "4 Months",
      package: "₹ 12.0 LPA",
    },
  ];

  // 5 Placement FAQs
  const placementFaqs = [
    {
      q: "How does the 100% placement assistance program work?",
      a: "From day one, our dedicated placement cell mentors you with resume rewriting, GitHub portfolio optimization, weekly technical mock interviews with corporate architects, and direct interview scheduling with partnered MNCs until you secure an offer letter.",
    },
    {
      q: "Do you provide interview preparation and mock tests?",
      a: "Yes! Every learner goes through at least 5 structured mock interview rounds (Coding, System Design, Scenario QA, and HR Rounds) with senior industry architects with comprehensive scoring and feedback.",
    },
    {
      q: "Is there any additional cost for placement support?",
      a: "No. 100% placement support, mock interviews, resume rebuilding, and recruiter drive access are fully included with every career master program at LearnMore Technologies.",
    },
    {
      q: "Can I apply for multiple job roles and companies?",
      a: "Yes. You receive unlimited interview drives and can apply for multiple software development, cloud, DevOps, or data roles across our 500+ partner companies until you accept your desired offer.",
    },
    {
      q: "Do you offer resume building and LinkedIn profile optimization?",
      a: "Yes. Our placement experts rewrite your resume to pass ATS (Applicant Tracking Systems) and optimize your LinkedIn profile with high-ranking keywords so top tech recruiters discover you directly.",
    },
  ];

  const handleNextStory = () => {
    setActiveStoryIdx((prev) => (prev + 1) % successStories.length);
  };

  const handlePrevStory = () => {
    setActiveStoryIdx((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  // Auto-play sliding motion (every 4 seconds, pauses on hover)
  useEffect(() => {
    if (isStoriesPaused) return;
    const interval = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isStoriesPaused, successStories.length]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full-bleed Background Image with Overlays) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#080d19] text-white pt-8 pb-0 sm:pt-12 sm:pb-0 overflow-hidden min-h-[560px] md:min-h-[600px] lg:min-h-[640px] flex flex-col justify-between">
        {/* Mobile Full-Bleed Background Image Layer (<lg) */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden w-full h-full">
          <img
            src="/placement-hero-mobile.png"
            alt="100% Placement Assistance Cell Mobile - LearnMore Technologies"
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          {/* Subtle gradient overlays to ensure text is crystal clear without obscuring background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d19]/75 via-transparent to-[#080d19]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d19]/70 via-[#080d19]/20 to-transparent" />
        </div>

        {/* Desktop Background Image Layer (lg:block) */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <img
            src="/placement-hero.png"
            alt="100% Placement Assistance Cell - LearnMore Technologies"
            className="w-full h-full object-cover object-[75%_center] md:object-center brightness-105 contrast-105"
          />
          {/* Subtle gradient overlay to keep text crystal clear and students vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent md:from-black/85 md:via-black/25 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="max-w-[1750px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10 relative z-10 w-full flex-1 flex flex-col justify-between">

          {/* ========================================================================= */}
          {/* LAPTOP & DESKTOP HERO LAYOUT (lg:grid) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-6 items-center pt-2">
            {/* Left Content */}
            <div className="col-span-7 lg:col-span-6 xl:col-span-5 max-w-[440px] space-y-4 xl:space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wide shadow-sm backdrop-blur-md">
                <span>⚡</span>
                <span>PLACEMENT FOCUSED TRAINING</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl md:text-[26px] lg:text-[30px] xl:text-[38px] font-black tracking-tight leading-[1.16] text-white drop-shadow-md">
                100% Placement <br />
                Assistance: <br />
                From Classroom Labs <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] via-[#FF7A00] to-[#FF5252]">
                  to Top MNC Offer Letters.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-[380px] font-normal drop-shadow-sm">
                Learn in-demand skills. Work on real projects. Get mentored by industry experts. <br />
                We don&apos;t just train — we help you get placed.
              </p>

              {/* 4 Metric Badges on Dark Glass */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-1">
                <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white leading-tight">10K+</div>
                    <div className="text-[9px] text-slate-300 font-medium">Students</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white leading-tight">500+</div>
                    <div className="text-[9px] text-slate-300 font-medium">Partners</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white leading-tight">85%</div>
                    <div className="text-[9px] text-slate-300 font-medium">Success</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white leading-tight">50%+</div>
                    <div className="text-[9px] text-slate-300 font-medium">Avg Hike</div>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#ff2038] hover:bg-[#e0142c] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Handwritten "Skills Today, Better Tomorrow" Accent */}
              <div className="pt-2 select-none -rotate-3 opacity-90">
                <div className="font-serif italic text-white text-sm font-semibold tracking-wide">
                  Skills Today, <span className="text-slate-300">Better Tomorrow</span>
                </div>
              </div>
            </div>

            {/* Right Hero Space with Top-Right Glass Card & Bottom-Right Handwritten Script */}
            <div className="col-span-5 lg:col-span-6 xl:col-span-7 min-h-[340px] md:min-h-[380px] lg:min-h-[460px] relative flex flex-col justify-between items-end pointer-events-none">
              {/* Top Right Floating Dark Glass Card */}
              <div className="pointer-events-auto mt-2 mr-2 sm:mr-6 p-3.5 sm:p-4 rounded-2xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-2xl space-y-2.5 sm:space-y-3 min-w-[140px] sm:min-w-[170px]">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <GraduationCap className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </div>
                  <span>Learn ...</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center">
                    <Code2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </div>
                  <span>Build</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </div>
                  <span>Practice</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Users className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </div>
                  <span>Get Placed</span>
                </div>
              </div>

              {/* Bottom Right "Your IT Career Starts Here" Annotation */}
              <div className="pointer-events-auto mb-4 mr-2 sm:mr-6 text-right select-none -rotate-6">
                <div className="font-serif italic text-white text-sm sm:text-base lg:text-lg font-bold leading-tight drop-shadow-md">
                  Your<br />
                  <span className="text-slate-200">IT Career</span><br />
                  <span className="text-red-400">Starts</span><br />
                  <span className="text-white">Here</span>
                </div>
                {/* Red Swoosh Arrow */}
                <svg
                  className="w-14 sm:w-16 h-3 text-[#ff2038] -mt-0.5 ml-auto"
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

          {/* ========================================================================= */}
          {/* MOBILE & TABLET HERO LAYOUT (<lg) */}
          {/* ========================================================================= */}
          <div className="lg:hidden flex flex-col justify-between space-y-6 pt-2 pb-4">
            {/* Top Section: Badge & Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wide shadow-sm backdrop-blur-md">
                <span>⚡</span>
                <span>PLACEMENT FOCUSED TRAINING</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.16] text-white drop-shadow-md">
                100% Placement <br />
                Assistance: <br />
                From Classroom Labs <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] via-[#FF7A00] to-[#FF5252]">
                  to Top MNC Offer Letters.
                </span>
              </h1>
            </div>

            {/* Middle Section: Clear Viewing Window for Placed Candidates & Sunset Skyline */}
            <div className="relative h-44 sm:h-56 w-full select-none pointer-events-none" />

            {/* Bottom Section: Subtitle, Metric Badges, and Action Buttons Moved Down */}
            <div className="space-y-4 bg-gradient-to-t from-[#080d19] via-[#080d19]/90 to-transparent pt-4 pb-2 rounded-2xl backdrop-blur-xs">
              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal drop-shadow-sm">
                Learn in-demand skills. Work on real projects. Get mentored by industry experts. <br />
                We don&apos;t just train — we help you get placed.
              </p>

              {/* 4 Metric Badges in 4 Columns on Mobile */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center mb-1">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-black text-white leading-tight">10K+</div>
                  <div className="text-[9px] text-slate-300 font-medium">Students</div>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-black text-white leading-tight">500+</div>
                  <div className="text-[9px] text-slate-300 font-medium">Partners</div>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-1">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-black text-white leading-tight">85%</div>
                  <div className="text-[9px] text-slate-300 font-medium">Success</div>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-black text-white leading-tight">50%+</div>
                  <div className="text-[9px] text-slate-300 font-medium">Avg Hike</div>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#ff2038] hover:bg-[#e0142c] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Handwritten "Skills Today, Better Tomorrow" Accent */}
              <div className="pt-1 select-none -rotate-2 opacity-90 text-center sm:text-left">
                <div className="font-serif italic text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Skills Today, <span className="text-slate-300">Better Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Curved Wave Transition into White Section */}
        <div className="w-full overflow-hidden leading-none z-10 pointer-events-none mt-6 sm:mt-10 block -mb-0.5">
          <svg
            className="relative block w-full h-8 sm:h-14 lg:h-20 text-white fill-white"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C380,95 1060,95 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PLACEMENT ROADMAP (6-Step Structured Process) */}
      {/* ========================================================================= */}
      <section className="pt-6 sm:pt-10 pb-12 sm:pb-20 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
            <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest">
              OUR PLACEMENT ROADMAP
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight">
              Your Journey from Learning to Landing a Dream Job
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              A structured, mentor-driven process to transform your skills into a high-growth IT career.
            </p>
          </div>

          {/* 6 Step Cards in a Connected Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 xl:gap-2.5 relative items-stretch">
            {roadmapStages.map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <div key={idx} className="relative flex items-stretch">
                  {/* Card */}
                  <div className="w-full p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col justify-start space-y-4">
                    {/* Top Icon Squircle Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-[#fff0f2] border border-red-100/60 text-[#ff253a] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2 flex-1">
                      <h3 className="text-[13px] sm:text-sm font-extrabold text-slate-900 leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Red Chevron Arrow for Large Desktop */}
                  {idx < roadmapStages.length - 1 && (
                    <div className="hidden xl:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#ff253a] font-bold text-sm pointer-events-none select-none">
                      ›
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 500+ HIRING PARTNER LOGOS BANNER */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="bg-[#0e1422] rounded-3xl p-6 sm:p-8 border border-slate-800 text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left: Handwritten "Our Hiring Partners" */}
              <div className="flex-shrink-0 text-center md:text-left select-none">
                <div className="font-serif italic text-white text-xl sm:text-2xl font-bold leading-tight">
                  Our<br />
                  <span className="text-slate-100">Hiring Partners</span>
                </div>
                {/* Red Swoosh */}
                <svg
                  className="w-24 h-3 text-[#ff2038] -mt-0.5 mx-auto md:ml-0"
                  viewBox="0 0 100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                >
                  <path d="M5 14 Q 50 3, 95 12" />
                </svg>
              </div>

              {/* Right: Partner Logos & Title */}
              <div className="flex-1 space-y-4">
                <div className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  500+ TOP HIRING MNCS RECRUITING LEARNMORE GRADUATES
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 lg:gap-8 text-slate-300">
                  <span className="font-black text-sm sm:text-base lg:text-lg tracking-tight hover:text-white transition">
                    Google
                  </span>
                  <span className="font-bold text-sm sm:text-base lg:text-lg tracking-tight hover:text-white transition">
                    Microsoft
                  </span>
                  <span className="font-black text-sm sm:text-base lg:text-lg lowercase tracking-tight hover:text-white transition">
                    amazon
                  </span>
                  <span className="font-bold text-sm sm:text-base lg:text-lg tracking-tight text-blue-400 hover:text-blue-300 transition">
                    Infosys
                  </span>
                  <span className="font-black text-sm sm:text-base lg:text-lg lowercase tracking-widest text-red-500 hover:text-red-400 transition">
                    tcs
                  </span>
                  <span className="font-bold text-sm sm:text-base lg:text-lg lowercase tracking-tight hover:text-white transition">
                    accenture
                  </span>
                  <span className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight hover:text-white transition">
                    Deloitte.
                  </span>
                  <span className="font-bold text-sm sm:text-base lg:text-lg tracking-tight text-cyan-400 hover:text-cyan-300 transition">
                    wipro)
                  </span>
                  <span className="font-bold text-sm sm:text-base lg:text-lg tracking-tight hover:text-white transition">
                    Capgemini
                  </span>
                  <span className="font-black text-sm sm:text-base lg:text-lg tracking-tight hover:text-white transition">
                    HCL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 4. ALUMNI SUCCESS / VERIFIED PLACEMENT STORIES */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-20 bg-white border-b border-slate-200/80 w-full max-w-full overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          {/* Header Row with Action Button & Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="space-y-1.5">
              <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest">
                ALUMNI SUCCESS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Real People. Real Journeys. Real Results.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                From learners to professionals — hear how LearnMore changed their careers.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap">
              <a
                href="https://share.google/mbQhN9ou3LcnA46d7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-md transition transform hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <span>★ Add Review on Google</span>
              </a>

              {/* Prev / Next Carousel Controls in Header */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevStory}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 flex items-center justify-center hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition cursor-pointer"
                  aria-label="Previous student story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextStory}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 flex items-center justify-center hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition cursor-pointer"
                  aria-label="Next student story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid with Auto-motion */}
          <div
            className="relative w-full"
            onMouseEnter={() => setIsStoriesPaused(true)}
            onMouseLeave={() => setIsStoriesPaused(false)}
          >
            {/* 4 Placement Cards in 2x2 Grid on Mobile/Tablet and 4 cols on Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {[0, 1, 2, 3].map((offset) => {
                const storyIdx = (activeStoryIdx + offset) % successStories.length;
                const story = successStories[storyIdx];
                return (
                  <div
                    key={`${story.name}-${storyIdx}`}
                    className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-slate-200 transition-all duration-500 p-3.5 sm:p-6 flex flex-col justify-between space-y-3 sm:space-y-5 animate-in fade-in zoom-in-95 duration-500"
                  >
                    {/* Top: Avatar & Quote Symbol */}
                    <div className="flex items-start gap-2.5 sm:gap-4">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover bg-slate-100 border border-slate-200 shadow-2xs flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                        <div className="text-red-500 font-serif text-lg sm:text-2xl font-bold leading-none">“</div>
                        <p className="text-[10px] sm:text-[13px] text-slate-600 font-normal leading-relaxed italic line-clamp-3 sm:line-clamp-none">
                          {story.quote}
                        </p>
                      </div>
                    </div>

                    {/* Student Name & Company Badge */}
                    <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-slate-100 gap-1.5">
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate">
                          {story.name}
                        </div>
                        <div className="text-[9px] sm:text-xs text-slate-500 font-medium mt-0.5 truncate">{story.role}</div>
                      </div>
                      <div className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-xl text-[9px] sm:text-xs font-black shrink-0 ${story.companyBg} ${story.companyColor}`}>
                        {story.company}
                      </div>
                    </div>

                    {/* Bottom Tags: Course, Duration, Package */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5 sm:pt-1 text-[9px] sm:text-[11px] font-bold">
                      <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-lg bg-slate-100 text-slate-700 truncate max-w-full">
                        ✓ {story.course}
                      </span>
                      <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-black">
                        {story.package}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {successStories.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveStoryIdx(dotIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${activeStoryIdx === dotIdx
                    ? "w-8 h-2.5 bg-[#ff253a]"
                    : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STATS SECTION (Floating 5-Metric White Pill Card) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-3 items-center">
              {/* Metric 1 */}
              <div className="flex items-center gap-3 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                    10K+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">Students Trained</div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-3 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                    500+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">Hiring Partners</div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-3 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                  <Target className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                    85%
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">Placement Success</div>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="flex items-center gap-3 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                  <Rocket className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                    50%+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">Avg Salary Hike</div>
                </div>
              </div>

              {/* Metric 5 */}
              <div className="flex items-center gap-3 sm:px-3 col-span-2 sm:col-span-1">
                <div className="w-11 h-11 rounded-full bg-[#fdeef0] border border-red-100/60 flex items-center justify-center text-[#ff253a] flex-shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#ff253a] tracking-tight leading-tight">
                    25+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">Top IT Domains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PLACEMENT QUERIES (5 Accordion FAQs + Illustrated 3D Graphic) */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left: 5 Accordion FAQs (7 Cols) */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <div className="text-xs font-black text-[#ff253a] uppercase tracking-widest flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#ff253a]" />
                  <span>PLACEMENT QUERIES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                  Frequently Asked <br className="hidden sm:inline" />
                  Placement Support Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Have questions? Find quick answers from our academic counselors.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-3 pt-2">
                {placementFaqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-50 border border-red-100 text-[#ff253a] flex items-center justify-center flex-shrink-0 shadow-2xs">
                            <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.4]" />
                          </div>
                          <span className="text-xs sm:text-[14px] font-bold text-slate-800 leading-snug">
                            {faq.q}
                          </span>
                        </div>

                        {/* Plus / Minus Toggle Button */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${isOpen
                              ? "bg-slate-100 text-slate-700 shadow-inner"
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

            {/* Right: 3D Illustrated Graphic from /placement-qurey.png (5 Cols) */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100/90 bg-white group hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <img
                  src="/placement-qurey.png"
                  alt="Placement Support Queries - LearnMore Technologies"
                  className="w-full h-auto object-cover brightness-105 contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM BANNER ("READY TO SECURE YOUR FIRST IT JOB?") */}
      {/* ========================================================================= */}
      <section className="relative bg-[#070b14] text-white py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Background Visual Layer: /placement-bottom-section.png */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="/placement-bottom-section.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark gradient overlay to ensure crystal clear text contrast on all viewports */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/70 via-transparent to-[#070b14]/30" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 relative z-10 w-full min-h-[340px] md:min-h-[380px] lg:min-h-[440px] flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left Content (7 Cols) */}
            <div className="md:col-span-7 space-y-5 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3d1808]/70 border border-amber-600/40 text-amber-300 text-xs font-bold tracking-wide shadow-sm backdrop-blur-md select-none">
                <span>Next Job, A Brighter You</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-4xl xl:text-[40px] font-black text-white tracking-tight leading-[1.2]">
                <span className="block">Ready to Secure Your First IT Job</span>
                <span className="block text-slate-100">or Earn a 50%+ Salary Hike?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Join LearnMore Technologies and get trained, mentored, and placed with top MNCs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#ff1b34] hover:bg-[#e0142c] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_25px_rgba(255,27,52,0.45)] transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919036524555"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-black/60 hover:bg-slate-900 border border-slate-700/80 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2.5 backdrop-blur-md hover:border-slate-500 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Talk to a Career Expert</span>
                </a>
              </div>
            </div>

            {/* Middle Feature Rows (5 Cols) */}
            <div className="md:col-span-5 space-y-3.5">
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-2xl bg-[#1c080d]/80 border border-red-500/50 text-red-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.25)] group-hover:scale-105 group-hover:border-red-400 transition">
                  <Users className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition">
                  Live Mentorship
                </span>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-2xl bg-[#1c080d]/80 border border-red-500/50 text-red-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.25)] group-hover:scale-105 group-hover:border-red-400 transition">
                  <FileText className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition">
                  Industry Projects
                </span>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-2xl bg-[#1c080d]/80 border border-red-500/50 text-red-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.25)] group-hover:scale-105 group-hover:border-red-400 transition">
                  <Compass className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition">
                  Career Guidance
                </span>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-2xl bg-[#1c080d]/80 border border-red-500/50 text-red-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.25)] group-hover:scale-105 group-hover:border-red-400 transition">
                  <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition">
                  Placement Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Script Annotation */}
          <div className="mt-8 md:mt-0 md:absolute md:bottom-3 md:right-4 lg:right-8 xl:right-12 flex flex-col items-start -rotate-3 select-none z-20 pointer-events-none">
            <div className="font-serif italic text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-[1.12] tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">
              Dream<br />
              <span className="ml-1.5 text-slate-100">Learn</span><br />
              <span className="ml-3 text-red-400">Build</span><br />
              <span className="ml-4 text-white">Get Placed</span>
            </div>
          </div>
        </div>
      </section>



      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultCourseSlug="Placement Support & Job Guarantee"
      />
    </div>
  );
}
