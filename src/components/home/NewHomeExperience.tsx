"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Tv,
  Code2,
  Users,
  TrendingUp,
  Play,
  ArrowRight,
  Star,
  Clock,
  ShieldCheck,
  Building2,
  BookOpen,
  Calendar,
  GraduationCap,
  Phone,
  HelpCircle,
  Headphones,
  Send,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Layers,
  Cpu,
  Smartphone,
  Lock,
  PenTool,
  CheckSquare,
  X,
  MapPin,
  Laptop,
  Briefcase,
  Quote,
  Globe,
  Target,
  Lightbulb,
  Award,
  BarChart3,
  Handshake,
  Cog,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Rocket,
  FileText,
} from "lucide-react";

// Official Partner Logos Component (Light/Clean White Strip with Smooth Moving Marquee Animation)
export function PartnerLogos({ className = "" }: { className?: string }) {
  const logosList = (
    <div className="flex items-center gap-10 sm:gap-14 lg:gap-20 shrink-0 px-6">
      {/* Microsoft */}
      <div className="inline-flex items-center gap-2.5 text-slate-950 font-black text-lg sm:text-2xl whitespace-nowrap hover:opacity-80 transition select-none">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24">
          <rect x="1" y="1" width="10" height="10" fill="#F25022" />
          <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
          <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
          <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
        </svg>
        <span className="font-black tracking-tight text-slate-950">Microsoft</span>
      </div>

      {/* Google */}
      <div className="inline-flex items-center font-black text-xl sm:text-3xl tracking-tighter whitespace-nowrap hover:opacity-80 transition select-none">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>

      {/* Amazon */}
      <div className="inline-flex items-center gap-0.5 text-slate-950 font-black text-lg sm:text-2xl tracking-tighter whitespace-nowrap hover:opacity-80 transition select-none">
        <span>amazon</span>
        <svg className="w-5 h-3 text-[#FF9900] fill-current ml-0.5 shrink-0" viewBox="0 0 20 8">
          <path d="M1 5 Q 10 9 19 2 Q 13 6 1 5 Z" />
        </svg>
      </div>

      {/* Deloitte */}
      <div className="inline-flex items-center text-slate-950 font-black text-lg sm:text-2xl tracking-tight whitespace-nowrap hover:opacity-80 transition select-none">
        <span>Deloitte</span>
        <span className="text-[#86BC25] font-black text-2xl sm:text-3xl leading-none">.</span>
      </div>

      {/* Infosys */}
      <div className="inline-flex items-center text-[#006699] font-black text-lg sm:text-2xl tracking-tight whitespace-nowrap hover:opacity-80 transition select-none">
        <span>Infosys</span>
      </div>

      {/* TCS */}
      <div className="inline-flex items-center gap-1.5 text-slate-950 font-black text-base sm:text-lg whitespace-nowrap hover:opacity-80 transition select-none">
        <span className="text-[#e81c24] text-xl sm:text-3xl font-black tracking-tighter">tcs</span>
        <span className="text-[10px] sm:text-xs text-slate-800 font-black leading-tight">
          TATA<br />CONSULTANCY
        </span>
      </div>

      {/* IBM */}
      <div className="inline-flex items-center font-black text-lg sm:text-2xl text-[#0F62FE] tracking-widest whitespace-nowrap hover:opacity-80 transition select-none">
        <span>IBM</span>
      </div>

      {/* Wipro */}
      <div className="inline-flex items-center gap-1.5 text-slate-950 font-black text-lg sm:text-2xl whitespace-nowrap hover:opacity-80 transition select-none">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-[3px] border-emerald-500 border-t-amber-500 border-r-indigo-500 shrink-0"></div>
        <span>wipro</span>
      </div>

      {/* Accenture */}
      <div className="inline-flex items-center gap-0.5 text-slate-950 font-black text-lg sm:text-2xl tracking-tight whitespace-nowrap hover:opacity-80 transition select-none">
        <span>accenture</span>
        <span className="text-[#A100FF] font-black text-lg sm:text-2xl">&gt;</span>
      </div>

      {/* Capgemini */}
      <div className="inline-flex items-center gap-1.5 text-slate-950 font-black text-lg sm:text-2xl tracking-tight whitespace-nowrap hover:opacity-80 transition select-none">
        <span className="text-[#0070AD] font-bold text-xl">♠</span>
        <span>Capgemini</span>
      </div>

      {/* HCL */}
      <div className="inline-flex items-center font-black text-lg sm:text-2xl text-[#00529C] tracking-wider whitespace-nowrap hover:opacity-80 transition select-none">
        <span>HCL</span>
      </div>
    </div>
  );

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Left and Right Smooth Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Moving Marquee Track */}
      <div className="flex animate-marquee hover:[animation-play-state:paused] py-2 cursor-pointer w-max">
        {logosList}
        {logosList}
      </div>
    </div>
  );
}

// Dark variant partner logos for testimonials slider
export function DarkPartnerLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 ${className}`}>
      <div className="inline-flex items-center gap-2 text-white font-black text-sm sm:text-lg whitespace-nowrap">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
          <rect x="1" y="1" width="10" height="10" fill="#F25022" />
          <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
          <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
          <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
        </svg>
        <span className="text-white font-black">Microsoft</span>
      </div>

      <div className="inline-flex items-center text-base sm:text-2xl font-black tracking-tighter whitespace-nowrap">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>

      <div className="inline-flex items-center gap-0.5 text-white font-black text-sm sm:text-lg whitespace-nowrap">
        <span>amazon</span>
        <svg className="w-4 h-2 text-amber-500 fill-current ml-0.5 shrink-0" viewBox="0 0 20 8">
          <path d="M1 5 Q 10 9 19 2 Q 13 6 1 5 Z" />
        </svg>
      </div>

      <div className="inline-flex items-center text-white font-black text-sm sm:text-lg whitespace-nowrap">
        <span>Deloitte</span>
        <span className="text-emerald-400 font-black text-xl leading-none">.</span>
      </div>

      <div className="inline-flex items-center text-[#388bfd] font-black text-sm sm:text-lg whitespace-nowrap">
        <span>Infosys</span>
      </div>

      <div className="inline-flex items-center gap-1.5 text-xs sm:text-base font-black text-white whitespace-nowrap">
        <span className="text-[#ff453a] text-lg sm:text-2xl font-black">tcs</span>
        <span className="text-[10px] sm:text-xs text-slate-200 font-black leading-tight hidden sm:inline">
          TATA CONSULTANCY
        </span>
      </div>

      <div className="inline-flex items-center font-black text-sm sm:text-lg text-[#4589ff] tracking-widest whitespace-nowrap">
        <span>IBM</span>
      </div>

      <div className="inline-flex items-center gap-1 text-white font-black text-sm sm:text-lg whitespace-nowrap">
        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-emerald-400 border-t-amber-400 border-r-indigo-400 shrink-0"></div>
        <span>wipro</span>
      </div>

      <div className="inline-flex items-center gap-0.5 text-white font-black text-sm sm:text-lg whitespace-nowrap">
        <span>accenture</span>
        <span className="text-[#C84BFF] font-black text-sm sm:text-lg">&gt;</span>
      </div>
    </div>
  );
}

// 8 Popular Course Cards
export const coursePrograms = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    category: "Full Stack",
    desc: "Master MERN stack and build real-world web applications.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    icon: Code2,
    slug: "python-full-stack-course",
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    category: "Data Science",
    desc: "Learn Python, ML and data analysis with projects.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]",
    icon: Cpu,
    slug: "data-science-course",
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    category: "DevOps",
    desc: "Gain hands-on experience with AWS, Docker, Kubernetes.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-indigo-500 to-blue-700 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    icon: Layers,
    slug: "devops-training",
  },
  {
    id: "python-automation",
    title: "Python for Automation",
    category: "Cloud",
    desc: "Build real-world automation tools and solutions.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    icon: Code2,
    slug: "python-full-stack-course",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Cybersecurity",
    desc: "Learn ethical hacking and security practices.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    icon: Lock,
    slug: "aws-certified-solutions-architect",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    category: "UI/UX",
    desc: "Design beautiful and user-friendly experiences.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    icon: PenTool,
    slug: "python-full-stack-course",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    category: "Mobile App",
    desc: "Build Android & iOS apps with React Native / Flutter.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    icon: Smartphone,
    slug: "java-full-stack-course",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    category: "Testing",
    desc: "Manual & automation testing with Selenium.",
    duration: "6 Months",
    placement: "100% Placement",
    iconBg: "bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]",
    icon: CheckSquare,
    slug: "software-testing-course",
  },
];

export const filterTabs = [
  "All Courses",
  "Full Stack",
  "Data Science",
  "DevOps",
  "Cloud",
  "AI & ML",
  "Testing",
  "Cybersecurity",
  "UI/UX",
  "Mobile App",
];

export function NewHomeExperience() {
  const [selectedTab, setSelectedTab] = useState("All Courses");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      bgImage: "/home-hero.png",
      mobileBgImage: "/hero-student-mobile.jpg",
      theme: "red",
      badge: "#1 IT Training Institute in Bangalore",
      badgeIcon: "🎯",
      badgeStyle: "bg-amber-500/10 border-amber-500/30 text-amber-300",
      titleLine1: "Master Next-Gen Tech.",
      titleHighlight: "Launch High-Salary",
      titleHighlightGradient: "from-[#ff354b] via-[#ff556b] to-[#ff2038]",
      titleLine2: "IT Careers.",
      subtitle:
        "Industry-focused training with real-world projects, expert mentors and 100% placement support.",
      features: [
        { label: "Live Classes", icon: Tv, color: "text-red-500" },
        { label: "Hands-on Projects", icon: Code2, color: "text-red-500" },
        { label: "Industry Mentors", icon: Users, color: "text-red-500" },
        { label: "Placement Support", icon: TrendingUp, color: "text-emerald-400" },
      ],
      buttonPrimary: "Explore Programs",
      buttonPrimaryClass: "bg-[#ff2038] hover:bg-[#e0142c] text-white shadow-red-600/40",
      stats: [
        { value: "15,000+", label: "Students Trained" },
        { value: "4.8★", label: "Average Rating", isRating: true, ratingColor: "text-red-500" },
        { value: "500+", label: "Hiring Partners" },
        { value: "24 LPA", label: "Highest Package" },
      ],
      pillsLayout: "right-stack",
      globeScript: "Global\nOpportunities\nStart Here",
      pills: [
        { label: "Learn", icon: GraduationCap },
        { label: "Build", icon: Code2 },
        { label: "Grow", icon: TrendingUp },
        { label: "Go Global", icon: Globe },
      ],
      bottomScript: "Better Skills\nBrighter Future",
      hasScriptUnderline: true,
    },
    {
      id: 2,
      bgImage: "/home-hero-slide2.png",
      mobileBgImage: "/home-hero-slide2-mobile.jpg",
      theme: "amber",
      badge: "A Global-Ready Learning Experience",
      badgeIcon: "🌐",
      badgeStyle: "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      titleLine1: "Learn Today.",
      titleHighlight: "Create Opportunities",
      titleHighlightGradient: "from-[#FFD54F] via-[#FFCA28] to-[#FFA000]",
      titleLine2: "Beyond Borders.",
      subtitle:
        "Gain in-demand global skills, work on real-world projects and prepare for international career opportunities.",
      features: [
        { label: "Global Curriculum", icon: Globe, color: "text-amber-400" },
        { label: "Real-World Projects", icon: Laptop, color: "text-amber-400" },
        { label: "Expert Mentors", icon: Users, color: "text-amber-400" },
        { label: "International Career Support", icon: BarChart3, color: "text-amber-400" },
      ],
      buttonPrimary: "Explore Programs",
      buttonPrimaryClass: "bg-gradient-to-r from-[#FFB800] via-[#FFA000] to-[#FF8F00] text-slate-950 font-black shadow-amber-500/30 hover:brightness-110",
      stats: [
        { value: "15,000+", label: "Students Trained", icon: GraduationCap },
        { value: "4.8★", label: "Average Rating", isRating: true, ratingColor: "text-amber-400", icon: Star },
        { value: "500+", label: "Hiring Partners", icon: Handshake },
        { value: "24 LPA", label: "Highest Package", icon: Briefcase },
      ],
      bottomTagline: "LEARN  BUILD  GROW  GLOBALLY",
      pillsLayout: "grid-surround",
      surroundPills: [
        { id: "tl", title: "Learn", subtitle: "In-Demand Skills", icon: BookOpen, position: "top-6 sm:top-10 lg:top-12 -left-8 sm:-left-16 lg:-left-24" },
        { id: "bl", title: "Work on", subtitle: "Real Projects", icon: Cog, position: "top-40 sm:top-44 lg:top-48 -left-8 sm:-left-16 lg:-left-24" },
        { id: "tr", title: "Build a", subtitle: "Global Career", icon: TrendingUp, position: "top-6 sm:top-10 lg:top-12 right-0 sm:right-2 lg:right-4" },
        { id: "br", title: "Get Industry", subtitle: "Guidance", icon: Star, position: "top-40 sm:top-44 lg:top-48 right-0 sm:right-2 lg:right-4" },
      ],
      bottomScript: "Same Learning.\nBigger Opportunities.",
      hasScriptUnderline: false,
    },
    {
      id: 3,
      bgImage: "/home-hero-slide3.png",
      mobileBgImage: "/home-hero-slide3-mobile.png",
      theme: "amber",
      badge: "Career-Focused Training & Placement Support",
      badgeIcon: "💼",
      badgeStyle: "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      titleLine1: "From Learning",
      titleHighlight: "To a Brighter Future.",
      titleHighlightGradient: "from-[#FFD54F] via-[#FFCA28] to-[#FFA000]",
      titleLine2: "",
      subtitle:
        "Build job-ready skills, work on real-world projects, get expert mentorship, and receive dedicated placement support to kickstart your global career.",
      features: [
        { label: "Resume Building", icon: BookOpen, color: "text-amber-400" },
        { label: "Mock Interviews", icon: Users, color: "text-amber-400" },
        { label: "Career Mentoring", icon: TrendingUp, color: "text-amber-400" },
        { label: "Placement Assistance", icon: ShieldCheck, color: "text-emerald-400" },
      ],
      buttonPrimary: "Start Your Journey",
      buttonPrimaryClass: "bg-gradient-to-r from-[#FFB800] via-[#FFA000] to-[#FF8F00] text-slate-950 font-black shadow-amber-500/30 hover:brightness-110",
      stats: [
        { value: "15,000+", label: "Learners Guided", icon: Users },
        { value: "500+", label: "Hiring Partners", icon: Building2 },
        { value: "100%", label: "Placement Support*", icon: ShieldCheck },
        { value: "4.8★", label: "Student Rating", isRating: true, ratingColor: "text-amber-400", icon: Star },
      ],
      bottomTagline: "SKILLS  TODAY  SUCCESS  TOMORROW",
      bottomScript: "Good Ideas.\nBetter Future.",
      pillsLayout: "none",
    },
    {
      id: 4,
      bgImage: "/home-hero-slide4.png",
      mobileBgImage: "/home-hero-slide4-mobile.png",
      theme: "amber",
      badge: "Skills for a Future Without Limits",
      badgeIcon: "🎓",
      badgeStyle: "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      titleLine1: "Don't Just Learn.",
      titleHighlight: "Build What's Next.",
      titleHighlightGradient: "from-[#FFD54F] via-[#FFCA28] to-[#FFA000]",
      titleLine2: "",
      subtitle:
        "Turn your curiosity into in-demand skills with hands-on learning, real-world projects and expert guidance. Build the confidence to shape a brighter future.",
      features: [
        { label: "Practical Learning", icon: Lightbulb, color: "text-amber-400" },
        { label: "Real-World Projects", icon: Laptop, color: "text-amber-400" },
        { label: "Expert Mentors", icon: Users, color: "text-amber-400" },
        { label: "Certification Support", icon: Award, color: "text-amber-400" },
      ],
      buttonPrimary: "Start Learning Today",
      buttonPrimaryClass: "bg-gradient-to-r from-[#FFB800] via-[#FFA000] to-[#FF8F00] text-slate-950 font-black shadow-amber-500/30 hover:brightness-110",
      stats: [
        { value: "100+", label: "Real Projects", icon: GraduationCap },
        { value: "15,000+", label: "Students Trained", icon: Users },
        { value: "500+", label: "Hiring Partners", icon: Building2 },
        { value: "24 LPA", label: "Highest Package", icon: TrendingUp },
      ],
      bottomTagline: "LEARN  PRACTICE  GROW  SUCCEED",
      bottomScript: "Your Potential\nHas No Limits",
      pillsLayout: "none",
    },
  ];

  const currentHero = heroSlides[currentSlide];

  // Auto-advance hero slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const filteredCourses =
    selectedTab === "All Courses"
      ? coursePrograms
      : coursePrograms.filter(
        (c) =>
          c.category.toLowerCase() === selectedTab.toLowerCase() ||
          (selectedTab === "AI & ML" && c.category === "Data Science") ||
          (selectedTab === "Cloud" && (c.category === "DevOps" || c.category === "Cloud"))
      );

  const homeFaqs = [
    {
      q: "Which course is best for freshers?",
      a: "For freshers, Python Full Stack Development, Java Full Stack, Software Testing (Automation + Manual), and Data Analytics are highly recommended. These tracks require no prior coding experience and have the highest volume of campus and off-campus hiring in Bangalore.",
    },
    {
      q: "Do you provide placement support?",
      a: "Yes! We provide 100% placement support including 1-on-1 technical mock interviews, resume and GitHub portfolio building, soft skills training, and direct interview scheduling with our network of 500+ partnered IT companies.",
    },
    {
      q: "Are the classes available online?",
      a: "Yes! We offer both offline classroom batches with live dedicated lab facilities across Bangalore (Marathahalli, BTM Layout, Kalyan Nagar) and interactive live instructor-led online batches with recordings and 24/7 LMS access.",
    },
    {
      q: "What is the course duration?",
      a: "Our comprehensive master programs run for 3 to 6 months depending on the track and whether you choose regular weekday sessions or weekend fast-track batches.",
    },
    {
      q: "Will I get a certificate after completion?",
      a: "Yes! You will receive the industry-recognized LearnMore Technologies Course Completion Certificate with verifiable credential credentials, along with preparation guidance for global vendor certifications (AWS, Azure, Microsoft, ISTQB).",
    },
  ];

  return (
    <div className="bg-[#070b14] text-white min-h-screen selection:bg-red-600 selection:text-white overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-14 border-b border-slate-800/80 bg-[#070b14] overflow-hidden min-h-0 lg:min-h-[600px] flex flex-col justify-between">
        {/* Mobile Full-Bleed Background Image Layer */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
          <img
            key={currentHero.id}
            src={currentHero.mobileBgImage || currentHero.bgImage}
            alt={`LearnMore Technologies Hero Slide ${currentHero.id}`}
            className={`w-full h-full brightness-95 contrast-105 animate-fadeIn ${
              currentHero.id === 1 ? "object-cover object-[78%_top]" : "object-cover object-center"
            }`}
          />
          {/* Subtle gradient overlays to keep upper text crystal clear and blend smoothly into cards */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/75 via-transparent to-[#070b14]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/85 via-[#070b14]/30 to-transparent" />
        </div>

        {/* Full-bleed Background Image Container (DESKTOP ONLY to prevent mobile overlap) */}
        <div className="hidden lg:block absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none">
          <img
            key={currentHero.bgImage}
            src={currentHero.bgImage}
            alt="LearnMore Technologies Hero"
            className="w-full h-full object-cover object-center brightness-105 contrast-105 animate-fadeIn"
          />
          {/* Subtle gradient overlay to keep text crystal clear and preserve the globe/student on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/95 via-[#070b14]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-transparent to-black/30" />
        </div>

        {/* Top Right Counter Indicator (01 / 04) - DESKTOP ONLY */}
        <div className="hidden lg:flex max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-20 items-center justify-end gap-3 pb-2 w-full">
          <div className="font-mono text-xs sm:text-sm font-bold text-slate-300 tracking-wider select-none">
            0{currentSlide + 1} <span className="text-slate-500 font-normal">/</span> 04
          </div>
          <div className="flex items-center gap-1.5 select-none">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${currentSlide === idx
                  ? currentHero.theme === "amber"
                    ? "w-2.5 h-2.5 bg-amber-400 ring-2 ring-amber-400/40"
                    : currentHero.theme === "cyan"
                      ? "w-2.5 h-2.5 bg-cyan-400 ring-2 ring-cyan-400/40"
                      : "w-2.5 h-2.5 bg-[#FF4E64] ring-2 ring-[#FF4E64]/40"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side Carousel Navigation Buttons - DESKTOP ONLY */}
        <button
          onClick={handlePrevSlide}
          className="hidden lg:flex absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 border border-slate-700/80 text-white items-center justify-center hover:bg-[#ff2038] hover:border-red-500 transition shadow-xl cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNextSlide}
          className="hidden lg:flex absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 border border-slate-700/80 text-white items-center justify-center hover:bg-[#ff2038] hover:border-red-500 transition shadow-xl cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Main Content: Desktop Grid + Mobile Layout */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 relative z-10 w-full flex-1 flex flex-col justify-between">

          {/* ========================================================================= */}
          {/* MOBILE RESPONSIVE HERO (Dynamic Per Slide with Custom Mobile Backgrounds) */}
          {/* ========================================================================= */}
          <div className="lg:hidden space-y-5 pt-2 pb-6">
            {/* Mobile Slide Switcher Bar & Badge */}
            <div className="flex items-center justify-between gap-2">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-md ${currentHero.badgeStyle || "bg-amber-500/10 border border-amber-500/30 text-amber-300"}`}>
                <span>{currentHero.badgeIcon || "🚀"}</span>
                <span className="truncate max-w-[200px] sm:max-w-none">{currentHero.badge}</span>
              </div>

              {/* Mobile Carousel Indicators */}
              <div className="flex items-center gap-2 bg-[#0b1020]/80 border border-slate-800 rounded-full px-2.5 py-1 backdrop-blur-md shrink-0">
                <button
                  onClick={handlePrevSlide}
                  className="text-slate-400 hover:text-white transition p-0.5"
                  aria-label="Previous Slide Mobile"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-1">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all rounded-full ${currentSlide === idx
                        ? currentHero.theme === "amber"
                          ? "w-2.5 h-2.5 bg-amber-400"
                          : currentHero.theme === "cyan"
                            ? "w-2.5 h-2.5 bg-cyan-400"
                            : "w-2.5 h-2.5 bg-[#FF4E64]"
                        : "w-1.5 h-1.5 bg-slate-600"
                        }`}
                      aria-label={`Mobile slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextSlide}
                  className="text-slate-400 hover:text-white transition p-0.5"
                  aria-label="Next Slide Mobile"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. Headline */}
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-[1.18] tracking-tight drop-shadow-md">
              {currentHero.titleLine1} <br />
              <span className={`bg-gradient-to-r ${currentHero.titleHighlightGradient || "from-[#ff2a55] via-[#ff4d6d] to-[#ff2a55]"} bg-clip-text text-transparent`}>
                {currentHero.titleHighlight}
              </span>
              {currentHero.titleLine2 && (
                <>
                  <br />
                  <span>{currentHero.titleLine2}</span>
                </>
              )}
            </h1>

            {/* 3. Subtitle */}
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed drop-shadow-sm max-w-md">
              {currentHero.subtitle}
            </p>

            {/* 4. Three Quick Features Bar */}
            <div className="flex items-center justify-between text-xs font-bold text-white pt-1 max-w-md">
              {currentHero.features.slice(0, 3).map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-1.5">
                    <FeatIcon className={`w-4 h-4 ${feat.color || "text-[#ff2a55]"}`} />
                    <span>{feat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* 5. Action Buttons */}
            <div className="pt-2 max-w-md">
              <a
                href="#programs"
                className={`w-full py-3.5 px-6 rounded-full font-black text-sm flex items-center justify-center gap-2 transition transform active:scale-95 shadow-lg ${currentHero.buttonPrimaryClass || "bg-gradient-to-r from-red-600 via-[#ff2a55] to-rose-600 text-white shadow-red-600/40 hover:brightness-110"
                  }`}
              >
                <span>{currentHero.buttonPrimary || "Explore Programs"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 6. Background Graphic Viewing Space with Cursive Script */}
            <div className="relative h-64 sm:h-72 w-full select-none pointer-events-none flex items-start justify-end">
              <div className="relative mr-2 mt-4 select-none -rotate-12 z-20 pointer-events-none">
                <div className={`font-serif italic text-sm sm:text-base font-bold leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] text-right tracking-wide whitespace-pre-line ${
                  currentHero.theme === "amber" ? "text-amber-200" : "text-white"
                }`}>
                  {currentHero.bottomScript || currentHero.globeScript || "Global\nOpportunities\nStart Here"}
                </div>
              </div>
            </div>

            {/* 7. Key Stats Card (Glassmorphism 4 cols) */}
            <div className="bg-[#0b1020]/90 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
              <div className="grid grid-cols-4 gap-2 text-center divide-x divide-slate-800">
                {currentHero.stats.map((stat, idx) => {
                  const isRating = stat.value.includes("★") || (stat as any).isRating;
                  const ratingColor = (stat as any).ratingColor || (currentHero.theme === "amber" ? "text-amber-400" : "text-[#ff2a55]");
                  return (
                    <div key={idx} className="px-1">
                      <div className="text-base sm:text-lg font-black text-white tracking-tight flex items-center justify-center gap-1">
                        <span>{stat.value.replace("★", "")}</span>
                        {isRating && (
                          <span className={ratingColor}>★</span>
                        )}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium pt-0.5">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. Four Feature Circles Card */}
            <div className="bg-[#0b1020]/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center mx-auto mb-2 ${currentHero.theme === "amber"
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                    : "border-pink-500/40 bg-pink-500/10 text-pink-400"
                    }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 leading-tight block">Skill-Driven Programs</span>
                </div>
                <div>
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center mx-auto mb-2 ${currentHero.theme === "amber"
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                    : "border-pink-500/40 bg-pink-500/10 text-pink-400"
                    }`}>
                    <Cog className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 leading-tight block">Hands-on Projects</span>
                </div>
                <div>
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center mx-auto mb-2 ${currentHero.theme === "amber"
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                    : "border-pink-500/40 bg-pink-500/10 text-pink-400"
                    }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 leading-tight block">Industry Certifications</span>
                </div>
                <div>
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center mx-auto mb-2 ${currentHero.theme === "amber"
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                    : "border-pink-500/40 bg-pink-500/10 text-pink-400"
                    }`}>
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 leading-tight block">Career Support</span>
                </div>
              </div>
            </div>

            {/* 9. Follow Us Bar */}
            <div className="bg-[#0b1020]/90 border border-slate-800 rounded-full px-5 py-3 flex items-center justify-between shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-xs tracking-wider text-slate-200">FOLLOW US</span>
                <span className="text-slate-600 font-normal">|</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/learnmore_technologies?stkn=MXJld2hldXY5ZWs3ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@learnnmore?si=vhpKcUMcilVArZkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/learnmoretechnologiesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/LearnMoreEdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-black flex items-center justify-center transition border border-slate-700/60"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.trustpilot.com/review/learnmoretechnologies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/90 text-[#00b67a] hover:text-white hover:bg-[#00b67a] flex items-center justify-center transition border border-[#00b67a]/40"
                  aria-label="Trustpilot Reviews"
                  title="Trustpilot Reviews"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0l3.708 7.514 8.292 1.205-6 5.848 1.416 8.258L12 18.927l-7.416 3.898L6 14.567 0 8.719l8.292-1.205L12 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 10. Carousel Indicators */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${currentSlide === idx
                    ? "w-3 h-3 bg-[#ff2a55] shadow-md shadow-red-500/50 ring-2 ring-red-500/30"
                    : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP HERO GRID (lg:grid) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
            {/* Left Content (7 cols) */}
            <div className="col-span-7 space-y-5">
              {/* Badge & Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-md select-none border ${currentHero.badgeStyle}`}>
                  <span>{currentHero.badgeIcon}</span>
                  <span>{currentHero.badge}</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-black text-white leading-[1.14] tracking-tight">
                {currentHero.titleLine1} {currentHero.titleLine1 && <br />}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentHero.titleHighlightGradient}`}>
                  {currentHero.titleHighlight}
                </span>
                {currentHero.titleLine2 && (
                  <>
                    <br />
                    {currentHero.titleLine2}
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
                {currentHero.subtitle}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-200 pt-1">
                {currentHero.features.map((feat, fIdx) => {
                  const IconComp = feat.icon;
                  return (
                    <span key={fIdx} className="flex items-center gap-1.5">
                      <IconComp className={`w-4 h-4 ${feat.color}`} />
                      <span>{feat.label}</span>
                    </span>
                  );
                })}
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#programs"
                  className={`px-6 py-3 rounded-full font-extrabold text-xs sm:text-sm shadow-xl transition transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer ${currentHero.buttonPrimaryClass}`}
                >
                  <span>{currentHero.buttonPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Stats Counters Row with Vertical Dividers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/90 text-left">
                {currentHero.stats.map((stat, sIdx) => {
                  const StatIcon = "icon" in stat ? (stat as any).icon : null;
                  const statIconColor = currentHero.theme === "red" ? "text-[#FF455B]" : "text-amber-400";
                  const isRating = stat.value.includes("★") || (stat as any).isRating;
                  const ratingColor = (stat as any).ratingColor || statIconColor;
                  return (
                    <div
                      key={sIdx}
                      className={`${sIdx < currentHero.stats.length - 1 ? "sm:border-r border-slate-800 sm:pr-4" : ""
                        }`}
                    >
                      <div className="text-xl sm:text-2xl font-black text-white flex items-center gap-1.5 tracking-tight">
                        {StatIcon && <StatIcon className={`w-4 h-4 shrink-0 ${statIconColor}`} />}
                        <span>{stat.value.replace("★", "")}</span>
                        {isRating && <span className={ratingColor}>★</span>}
                      </div>
                      <div className="text-xs text-slate-400 font-medium pt-0.5">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Tagline for Slide 2 & 3 */}
              {currentHero.bottomTagline && (
                <div className="pt-2 text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-slate-400 flex items-center gap-4 select-none">
                  <span>{currentHero.bottomTagline}</span>
                  <div className="flex-1 h-[1px] bg-slate-800" />
                </div>
              )}
            </div>

            {/* Right: Interactive Badges & Script Text (5 cols) */}
            <div className="col-span-5 relative h-[440px] sm:h-[480px] lg:h-[520px] pointer-events-none">
              {/* Slide 1 Layout: Right Stack + Lower-Left Globe Script */}
              {currentHero.pillsLayout === "right-stack" && currentHero.pills && (
                <div className="w-full h-full relative">
                  {/* Globe Script positioned cleanly on the lower-left neon red orbital glow */}
                  {currentHero.globeScript && (
                    <div className="pointer-events-auto absolute -left-12 sm:-left-20 lg:-left-28 top-[240px] sm:top-[270px] lg:top-[300px] select-none -rotate-12 z-20 hidden md:block">
                      <div className="font-serif italic text-white text-sm sm:text-base lg:text-lg font-bold leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] whitespace-pre-line tracking-wide">
                        {currentHero.globeScript}
                      </div>
                    </div>
                  )}

                  {/* Right Pills Stack starting cleanly below 01/04 indicator */}
                  <div className="absolute right-0 sm:right-2 top-6 sm:top-10 lg:top-12 z-20 flex flex-col items-end gap-2 sm:gap-2.5">
                    {currentHero.pills.map((pill, pIdx) => {
                      const PillIcon = pill.icon;
                      return (
                        <div
                          key={pIdx}
                          className="pointer-events-auto px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-black/75 border border-slate-700/80 backdrop-blur-md flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-slate-100 shadow-2xl hover:border-red-500/80 hover:scale-105 transition transform cursor-default"
                        >
                          <PillIcon className="w-4 h-4 text-[#ff2038] flex-shrink-0" />
                          <span>{pill.label}</span>
                        </div>
                      );
                    })}

                    {/* Handwritten Script Accent with Red Underline */}
                    <div className="pointer-events-auto text-right select-none -rotate-6 pt-2 pr-1">
                      <div className="font-serif italic text-white text-sm sm:text-base font-bold leading-tight drop-shadow-lg whitespace-pre-line tracking-wide">
                        {currentHero.bottomScript}
                      </div>
                      {currentHero.hasScriptUnderline && (
                        <svg
                          className="w-20 sm:w-24 h-3 sm:h-3.5 text-[#ff2038] -mt-1 ml-auto"
                          viewBox="0 0 100 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        >
                          <path d="M5 14 Q 50 2, 95 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 2 Layout: Surround Gold Cards & Script */}
              {currentHero.pillsLayout === "grid-surround" && currentHero.surroundPills && (
                <div className="w-full h-full relative">
                  {currentHero.surroundPills.map((sp) => {
                    const CardIcon = sp.icon;
                    return (
                      <div
                        key={sp.id}
                        className={`pointer-events-auto absolute ${sp.position} p-2.5 sm:p-3 rounded-2xl bg-black/75 border border-amber-500/30 backdrop-blur-md shadow-2xl flex items-center gap-3 z-20 hover:border-amber-400 transition transform hover:scale-105`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                          <CardIcon className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="text-[11px] font-bold text-slate-300 leading-tight">
                            {sp.title}
                          </div>
                          <div className="text-xs font-black text-amber-300 leading-tight">
                            {sp.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Handwritten Script for Slide 2 positioned above the books on desk */}
                  <div className="pointer-events-auto absolute right-0 sm:right-2 lg:right-4 top-[290px] sm:top-[320px] lg:top-[350px] select-none -rotate-6 z-20 text-right">
                    <div className="font-serif italic text-amber-200 text-sm sm:text-base font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] whitespace-pre-line">
                      {currentHero.bottomScript}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Bottom Banner Strip: Follow Us Social Links & Pagination Dots */}
          <div className="hidden lg:flex pt-6 sm:pt-8 border-t border-slate-800/80 items-center justify-between gap-4 select-none relative z-20">
            {/* Follow Us Path */}
            <div className="flex items-center gap-3.5 bg-[#0a0f1d]/95 border border-slate-700/90 rounded-full px-5 py-2.5 shadow-2xl backdrop-blur-md">
              <span className="text-xs sm:text-sm font-black text-white tracking-wide uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span>Follow Us:</span>
              </span>

              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/learnmore_technologies?stkn=MXJld2hldXY5ZWs3ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-200 hover:text-white flex items-center justify-center transition shadow-md hover:scale-115 hover:shadow-pink-500/25"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 hover:bg-[#0077b5] text-slate-200 hover:text-white flex items-center justify-center transition shadow-md hover:scale-115 hover:shadow-blue-500/25"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/learnmoretechnologiesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 hover:bg-[#1877f2] text-slate-200 hover:text-white flex items-center justify-center transition shadow-md hover:scale-115 hover:shadow-blue-600/25"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@learnnmore?si=vhpKcUMcilVArZkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 hover:bg-[#ff0000] text-slate-200 hover:text-white flex items-center justify-center transition shadow-md hover:scale-115 hover:shadow-red-600/25"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/LearnMoreEdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 hover:bg-black text-slate-200 hover:text-white flex items-center justify-center transition shadow-md hover:scale-115 hover:shadow-slate-600/25 border border-slate-700/60"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 sm:w-4.5 h-4 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Trustpilot */}
                <a
                  href="https://www.trustpilot.com/review/learnmoretechnologies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 hover:bg-[#00b67a] text-[#00b67a] hover:text-white flex items-center justify-center transition shadow-md hover:scale-115 hover:shadow-emerald-500/25 border border-[#00b67a]/40"
                  aria-label="Trustpilot Reviews"
                  title="Trustpilot Reviews"
                >
                  <svg className="w-4 sm:w-4.5 h-4 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0l3.708 7.514 8.292 1.205-6 5.848 1.416 8.258L12 18.927l-7.416 3.898L6 14.567 0 8.719l8.292-1.205L12 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="flex items-center justify-center gap-2.5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${currentSlide === idx
                    ? "w-3.5 h-3.5 bg-[#ff2a55] shadow-md shadow-red-500/50 ring-2 ring-red-500/30"
                    : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OFFICIAL PARTNER LOGOS STRIP */}
      {/* ========================================================================= */}
      <section className="bg-white py-8 sm:py-10 border-y border-slate-200 overflow-hidden relative shadow-inner">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-6 text-center">
          <div className="text-xs sm:text-sm font-black text-slate-800 tracking-wider uppercase inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>Our Students Work At Top Global Brands</span>
          </div>
          <div className="w-full py-2">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "FIND YOUR IDEAL TECHNOLOGY PROGRAM" (8 COURSES GRID) */}
      {/* ========================================================================= */}
      <section id="programs" className="py-16 sm:py-24 relative bg-[#070b14]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-10">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-black tracking-wider uppercase text-red-500 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full inline-block shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                Explore Domains
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Find Your Ideal Technology Program
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Industry-aligned programs designed to make you job-ready
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-xs font-black transition self-start md:self-auto group"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 ${isActive
                    ? "bg-gradient-to-r from-[#ea2837] via-[#f43f5e] to-[#dc2626] text-white shadow-[0_0_20px_rgba(234,40,55,0.4)] scale-105"
                    : "bg-[#0e1626] text-slate-200 hover:text-white border border-[#1e293b] hover:border-slate-600 font-bold"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 8 Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCourses.map((c) => {
              const IconComponent = c.icon;
              return (
                <div
                  key={c.id}
                  className="bg-[#0c1220] hover:bg-[#10182b] border border-[#1e293b] hover:border-slate-600 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3.5">
                    {/* Glowing Course Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-black text-white group-hover:text-red-400 transition">
                        {c.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium leading-relaxed line-clamp-2">
                        {c.desc}
                      </p>
                    </div>

                    {/* Metadata Pills */}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-slate-200 bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700/60">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{c.duration}</span>
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-black text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/60">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>{c.placement}</span>
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-3 border-t border-slate-800">
                    <Link
                      href={`/courses/${c.slug}`}
                      className="w-full py-2.5 rounded-lg bg-slate-800/80 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-600 text-white font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "WHY LEARNMORE TECHNOLOGIES IS BANGALORE'S PREFERRED CHOICE" */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 relative bg-gradient-to-b from-[#090d18] via-[#0b1020] to-[#070b14] border-y border-slate-800/80 overflow-hidden">
        {/* Dramatic Ambient Red Beam Lights on Left & Right */}
        <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-12">
          {/* Header */}
          <div className="text-left space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Why LearnMore Technologies<br />is Bangalore&apos;s Preferred Choice
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Career-focused. Industry-driven. Results-oriented.
            </p>
          </div>

          {/* 5 Feature Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-[#0c1220] border border-slate-800 hover:border-amber-500/50 p-4 sm:p-5 rounded-2xl space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                Industry-Relevant Curriculum
              </div>
            </div>

            <div className="bg-[#0c1220] border border-slate-800 hover:border-blue-500/50 p-4 sm:p-5 rounded-2xl space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                Live Projects &amp; Case Studies
              </div>
            </div>

            <div className="bg-[#0c1220] border border-slate-800 hover:border-rose-500/50 p-4 sm:p-5 rounded-2xl space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                Expert Trainers
              </div>
            </div>

            <div className="bg-[#0c1220] border border-slate-800 hover:border-teal-500/50 p-4 sm:p-5 rounded-2xl space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                Dedicated Placement Cell
              </div>
            </div>

            <div className="bg-[#0c1220] border border-slate-800 hover:border-purple-500/50 p-4 sm:p-5 rounded-2xl space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                Flexible Learning Options
              </div>
            </div>
          </div>

          {/* Building Architecture Visual & Stats Overlay */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 p-6 sm:p-10 min-h-[340px] sm:min-h-[400px] flex items-center justify-between">
            {/* Background Texture & Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-600/20 via-transparent to-transparent pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 space-y-4 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black">
                <MapPin className="w-3.5 h-3.5" />
                <span>3 Advanced Bangalore Campuses</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                World-Class Lab Infrastructure in Marathahalli, BTM &amp; Kalyan Nagar
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                Experience high-performance dedicated workstation labs with 24/7 cloud sandbox access, conference breakout rooms, and continuous mentor support.
              </p>
            </div>

            {/* Right: Floating Glass Metrics Card + Script Typography */}
            <div className="relative z-10 hidden md:flex flex-col items-center space-y-4">
              <div className="bg-[#0c1220]/95 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-4 w-64 text-left">
                <div>
                  <div className="text-2xl font-black text-amber-400">24 LPA</div>
                  <div className="text-xs text-slate-300 font-bold">Highest Package</div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-2xl font-black text-emerald-400">85%</div>
                  <div className="text-xs text-slate-300 font-bold">Placement Rate</div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-2xl font-black text-white">500+</div>
                  <div className="text-xs text-slate-300 font-bold">Hiring Partners</div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-2xl font-black text-red-400">100%</div>
                  <div className="text-xs text-slate-300 font-bold">Career Support</div>
                </div>
              </div>

              {/* Handwritten Brush Script */}
              <div className="font-script text-3xl font-bold text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)] -rotate-6">
                Your Success Our Mission
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. "WHAT OUR STUDENTS SAY" (TESTIMONIALS + PARTNER TICKER) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 relative bg-[#070b14]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-black tracking-wider uppercase text-red-500 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full inline-block shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                Student Success
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                What Our Students Say
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Real people. Real careers. Real results.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap">
              <a
                href="https://share.google/mbQhN9ou3LcnA46d7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-black transition shadow-[0_0_15px_rgba(239,68,68,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>★ Add Review on Google</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-xs font-black transition group"
              >
                <span>View More Stories</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          {/* 4 Cards Grid (3 Real Google Reviews + 1 Dream Company Card) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Review 1 - Google Review */}
            <div className="bg-[#0c1220] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                      PH
                    </div>
                    <div>
                      <div className="text-sm font-black text-white">Pooja Hegde</div>
                      <div className="text-xs text-slate-300 font-semibold">Python Full Stack • Placed at Capgemini</div>
                    </div>
                  </div>
                  <Quote className="w-4 h-4 text-slate-600" />
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed italic">
                  &ldquo;I joined LearnMore Technologies in Marathahalli for Python Full Stack. Rahul Sir explained every concept practically with real-time projects. The mock interviews gave me immense confidence to crack my first IT job with a 50%+ hike!&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-slate-300 ml-1 font-bold">5.0</span>
                </div>
                <a
                  href="https://share.google/mbQhN9ou3LcnA46d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 px-2 py-0.5 rounded-md transition cursor-pointer flex items-center gap-1"
                >
                  <span>✓ Google Review</span>
                </a>
              </div>
            </div>

            {/* Review 2 - Google Review */}
            <div className="bg-[#0c1220] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                      KK
                    </div>
                    <div>
                      <div className="text-sm font-black text-white">Kiran Kumar</div>
                      <div className="text-xs text-slate-300 font-semibold">AWS & DevOps • Placed at Cognizant</div>
                    </div>
                  </div>
                  <Quote className="w-4 h-4 text-slate-600" />
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed italic">
                  &ldquo;Best training institute in Bangalore! Hands-on labs on AWS, Docker, and Kubernetes were top tier. The trainers have deep industry experience and help clear doubts even after batch hours. Highly recommended!&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-slate-300 ml-1 font-bold">5.0</span>
                </div>
                <a
                  href="https://share.google/mbQhN9ou3LcnA46d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 px-2 py-0.5 rounded-md transition cursor-pointer flex items-center gap-1"
                >
                  <span>✓ Google Review</span>
                </a>
              </div>
            </div>

            {/* Review 3 - Google Review */}
            <div className="bg-[#0c1220] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                      AN
                    </div>
                    <div>
                      <div className="text-sm font-black text-white">Anjali Nair</div>
                      <div className="text-xs text-slate-300 font-semibold">Data Science & AI • Placed at Accenture</div>
                    </div>
                  </div>
                  <Quote className="w-4 h-4 text-slate-600" />
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed italic">
                  &ldquo;The curriculum covers real-world datasets, machine learning, and Power BI. The placement team arranged 4 direct interview drives within weeks of capstone completion. Thank you LearnMore team!&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-slate-300 ml-1 font-bold">5.0</span>
                </div>
                <a
                  href="https://share.google/mbQhN9ou3LcnA46d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 px-2 py-0.5 rounded-md transition cursor-pointer flex items-center gap-1"
                >
                  <span>✓ Google Review</span>
                </a>
              </div>
            </div>

            {/* Card 4: From Classroom to Dream Company */}
            <div className="bg-gradient-to-br from-[#111a2e] to-[#0a0f1d] border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between items-center text-center space-y-4 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-white">
                  From Classroom<br />to Dream Company
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  Join 15,000+ placed graduates today.
                </p>
              </div>
              <Link
                href="/courses"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ea2837] to-[#f43f5e] hover:from-[#d31027] hover:to-[#e11d48] text-white font-black text-xs shadow-md transition flex items-center justify-center gap-1.5 transform active:scale-95"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. "FREQUENTLY ASKED QUESTIONS" */}
      {/* ========================================================================= */}
      <section className="pt-16 pb-6 sm:pt-24 sm:pb-8 bg-[#050811] border-t border-slate-800/80 relative">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Real Boy Student Photo (boy.png) + Curved Arrow + Script Text (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3">
              <div className="relative w-full max-w-[260px] flex flex-col items-center">
                {/* Ambient Glow behind boy */}
                <div className="absolute -inset-4 bg-gradient-to-t from-cyan-600/20 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Boy Student Photo */}
                <div className="relative z-10 w-full flex justify-center">
                  <Image
                    src="/boy.png"
                    alt="Student at LearnMore Technologies"
                    width={300}
                    height={340}
                    style={{ width: "100%", height: "auto" }}
                    className="w-full h-auto max-h-[340px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Curved Arrow SVG */}
                <svg className="w-16 h-8 text-cyan-400 fill-none stroke-current stroke-2 -mt-4 mr-10 z-20" viewBox="0 0 60 30">
                  <path d="M 50 5 Q 30 25 10 15" strokeLinecap="round" />
                  <path d="M 15 10 L 10 15 L 18 20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="font-script text-2xl sm:text-3xl font-bold text-cyan-300 drop-shadow-[0_2px_10px_rgba(6,182,212,0.8)] leading-tight -rotate-3">
                Good Questions,<br />Better Careers
              </div>
            </div>

            {/* Center: FAQ Accordion List (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Everything you need to know about our programs.
                </p>
              </div>

              <div className="space-y-3">
                {homeFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#0c1220] border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/60 transition gap-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <HelpCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-extrabold text-white">
                            {faq.q}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-red-400" : ""
                            }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-0 border-t border-slate-800 text-xs text-slate-200 font-medium leading-relaxed bg-slate-950/40 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Still Have Questions Card (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-[#0c1220] border border-slate-800 rounded-2xl p-6 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center mx-auto border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-black text-white">Still have questions?</h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Talk to our senior academic experts.
                  </p>
                </div>
                <a
                  href="https://wa.me/919036524555?text=Hi%20LearnMore%20Technologies%2C%20I%20have%20questions%20regarding%20course%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ea2837] to-[#f43f5e] hover:from-[#d31027] hover:to-[#e11d48] text-white font-black text-xs shadow-[0_0_15px_rgba(234,40,55,0.4)] transition flex items-center justify-center gap-1.5 transform active:scale-95"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. "READY TO BUILD YOUR TECHNOLOGY CAREER?" DARK GRADIENT CTA CARD */}
      {/* ========================================================================= */}
      <section className="pt-2 pb-16 sm:pt-4 sm:pb-24 bg-[#050811] relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#240a15] via-[#100c1e] to-[#0a0a14] border border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
            {/* Ambient Red/Orange Top-Left Glow */}
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-red-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/3 -bottom-16 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              {/* Left: Title & Subtitle */}
              <div className="space-y-2 text-center lg:text-left max-w-xl">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                  Ready to Build Your Technology Career?<br />
                  Join Bangalore&apos;s #1 IT Training Institute Today.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  Take the first step towards a brighter future.
                </p>
              </div>

              {/* Center/Right: Stacked Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto shrink-0 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=919036524555&text=Hi%20LearnMore%20Technologies%2C%20I%20would%20like%20to%20get%20Free%20Career%20Counseling."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-2.5 rounded-full bg-[#ff2038] hover:bg-[#e0142c] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 whitespace-nowrap text-center"
                >
                  <span>Get Free Counseling</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+919036524555"
                  className="px-7 py-2.5 rounded-full bg-black/40 hover:bg-black/70 border border-slate-600/80 hover:border-slate-400 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center whitespace-nowrap text-center"
                >
                  Call: +91 90365 24555
                </a>
              </div>

              {/* Right: 3 Squircle Feature Badges */}
              <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-center shrink-0">
                {/* 1. Free Counseling */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-rose-400 shadow-sm transition hover:border-rose-500/40 hover:bg-white/[0.07]">
                    <Headphones className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium whitespace-nowrap">
                    Free Counseling
                  </span>
                </div>

                {/* 2. Expert Guidance */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-rose-400 shadow-sm transition hover:border-rose-500/40 hover:bg-white/[0.07]">
                    <Sparkles className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium whitespace-nowrap">
                    Expert Guidance
                  </span>
                </div>

                {/* 3. Career Support */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-rose-400 shadow-sm transition hover:border-rose-500/40 hover:bg-white/[0.07]">
                    <GraduationCap className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium whitespace-nowrap">
                    Career Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}

    </div>
  );
}
