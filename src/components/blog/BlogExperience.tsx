"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Featured Articles Carousel Data
const FEATURED_SLIDES = [
  {
    id: 0,
    badge: "FEATURED ARTICLE",
    badgeColor: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    title: "Top 30 AWS Interview Questions and Answers for 2026",
    summary: "A complete guide for freshers and experienced candidates covering AWS architecture, services, real-world scenarios and expert answers.",
    authorName: "Suresh Kumar",
    authorRole: "Principal Cloud Architect",
    authorInitials: "SK",
    href: "/blog/aws-interview-questions",
    bgImage: "/blog-featured-aws.png",
    bgImageMobile: "/blog-featured-aws-mobile.png",
    cursiveScript: "Cloud Skills Real Careers",
    workflow: ["BUILD", "DEPLOY", "SCALE"],
  },
  {
    id: 1,
    badge: "HOT TESTING GUIDE",
    badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    title: "Top 25 Selenium with Python Interview Questions & Answers",
    summary: "Essential Selenium WebDriver with Python questions with real-time examples, expected answers, and Page Object Model framework design.",
    authorName: "Pooja Sharma",
    authorRole: "Senior QA Automation Architect",
    authorInitials: "PS",
    href: "/blog/selenium-with-python-interview-questions",
    bgImage: "/blog-featured-aws.png",
    bgImageMobile: "/blog-featured-aws-mobile.png",
    cursiveScript: "Automation Code Real Projects",
    workflow: ["LOCATE", "AUTOMATE", "EXECUTE"],
  },
  {
    id: 2,
    badge: "DATA & ANALYTICS",
    badgeColor: "bg-teal-500/10 border-teal-500/30 text-teal-400",
    title: "Cracking Data Analyst Interviews: Top 30 SQL, Power BI & Python Questions",
    summary: "Real interview questions asked at top MNCs for Data Analyst and BI roles covering SQL joins, DAX measures, and business intelligence.",
    authorName: "Karthik Nambiar",
    authorRole: "Lead BI Consultant",
    authorInitials: "KN",
    href: "/blog/data-analyst-interview-questions-answers",
    bgImage: "/blog-featured-aws.png",
    bgImageMobile: "/blog-featured-aws-mobile.png",
    cursiveScript: "Data Insights Real Growth",
    workflow: ["QUERY", "ANALYZE", "VISUALIZE"],
  },
  {
    id: 3,
    badge: "CAREER ROADMAP",
    badgeColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    title: "Accenture Salary Package for Freshers in 2026: Roles & Band Structure",
    summary: "Detailed salary breakdown for freshers at Accenture India across ASE, FSE, Cloud and Data Analyst profiles with career growth insights.",
    authorName: "Raghavendra Rao",
    authorRole: "Placement Lead",
    authorInitials: "RR",
    href: "/blog/accenture-salary-package-for-freshers",
    bgImage: "/blog-featured-aws.png",
    bgImageMobile: "/blog-featured-aws-mobile.png",
    cursiveScript: "High Packages Real Offers",
    workflow: ["PREPARE", "ASSESS", "GET PLACED"],
  },
];
import {
  Search,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Briefcase,
  Cloud,
  Code2,
  Sparkles,
  Building2,
  TrendingUp,
  Compass,
  CheckCircle2,
  Users,
  Award,
  Send,
  Phone,
  Flame,
  FileText,
  GraduationCap,
  Layers,
  Terminal,
  ShieldCheck,
  Star,
  Cpu,
  Database,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import { blogs } from "@/data/blogs";

// Category Pills for Hero Filter
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "interview-questions", label: "Interview Q&A" },
  { id: "career-guides", label: "Career Guides" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "development", label: "Development" },
  { id: "data-ai", label: "Data & AI" },
  { id: "company-prep", label: "Company Prep" },
  { id: "industry-trends", label: "Industry Trends" },
];

// Explore by Category Grid
const EXPLORE_CATEGORIES = [
  {
    title: "Interview Questions",
    count: "120+ Articles",
    icon: Search,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20 hover:border-rose-500/50",
    categorySlug: "interview-questions",
  },
  {
    title: "Career Guides",
    count: "85+ Articles",
    icon: Briefcase,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20 hover:border-amber-500/50",
    categorySlug: "career-guides",
  },
  {
    title: "Cloud & DevOps",
    count: "60+ Articles",
    icon: Cloud,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20 hover:border-sky-500/50",
    categorySlug: "cloud-devops",
  },
  {
    title: "Development",
    count: "90+ Articles",
    icon: Code2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
    categorySlug: "development",
  },
  {
    title: "Data & AI",
    count: "50+ Articles",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20 hover:border-purple-500/50",
    categorySlug: "data-ai",
  },
  {
    title: "Company Preparation",
    count: "35+ Articles",
    icon: Building2,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20 hover:border-pink-500/50",
    categorySlug: "company-prep",
  },
  {
    title: "Industry Trends",
    count: "40+ Articles",
    icon: TrendingUp,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20 hover:border-yellow-500/50",
    categorySlug: "industry-trends",
  },
];

// Popular Learning Paths
const LEARNING_PATHS = [
  {
    title: "AWS Learning Path",
    subtitle: "Cloud Solutions Architect",
    icon: Cloud,
    href: "/courses/aws-certified-solutions-architect",
    badge: "AWS",
    gradient: "from-blue-950/80 via-slate-900 to-slate-950",
    borderColor: "border-sky-500/30 hover:border-sky-400",
    accentColor: "text-sky-400",
    iconBg: "bg-sky-500/15 text-sky-400",
  },
  {
    title: "Full Stack Development",
    subtitle: "Python & Java Mastery",
    icon: Code2,
    href: "/courses/python-full-stack-course",
    badge: "</>",
    gradient: "from-indigo-950/80 via-slate-900 to-slate-950",
    borderColor: "border-indigo-500/30 hover:border-indigo-400",
    accentColor: "text-indigo-400",
    iconBg: "bg-indigo-500/15 text-indigo-400",
  },
  {
    title: "Data Analyst Roadmap",
    subtitle: "SQL, Power BI & Python",
    icon: BarChart3,
    href: "/courses/power-bi-course",
    badge: "Analytics",
    gradient: "from-teal-950/80 via-slate-900 to-slate-950",
    borderColor: "border-teal-500/30 hover:border-teal-400",
    accentColor: "text-teal-400",
    iconBg: "bg-teal-500/15 text-teal-400",
  },
  {
    title: "DevOps Roadmap",
    subtitle: "Docker, K8s & CI/CD",
    icon: Layers,
    href: "/courses/devops-training",
    badge: "DevOps",
    gradient: "from-blue-950/80 via-slate-900 to-slate-950",
    borderColor: "border-blue-500/30 hover:border-blue-400",
    accentColor: "text-blue-400",
    iconBg: "bg-blue-500/15 text-blue-400",
  },
  {
    title: "Python for Automation",
    subtitle: "Selenium & PyTest",
    icon: Terminal,
    href: "/courses/software-testing-course",
    badge: "Python",
    gradient: "from-amber-950/80 via-slate-900 to-slate-950",
    borderColor: "border-amber-500/30 hover:border-amber-400",
    accentColor: "text-amber-400",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
  {
    title: "Placement Preparation",
    subtitle: "Mock Interviews & Resume",
    icon: Briefcase,
    href: "/placement",
    badge: "Jobs",
    gradient: "from-rose-950/80 via-slate-900 to-slate-950",
    borderColor: "border-rose-500/30 hover:border-rose-400",
    accentColor: "text-rose-400",
    iconBg: "bg-rose-500/15 text-rose-400",
  },
];

const DEFAULT_IMAGES: Record<string, string> = {
  "aws-interview-questions": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  "selenium-with-python-interview-questions": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
  "data-analyst-interview-questions-answers": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  "accenture-salary-package-for-freshers": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  "java-full-stack-developer-interview-questions": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  "react-js-interview-questions-and-answers": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
  "sql-database-queries-interview-questions": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
  "devops-docker-kubernetes-interview-questions": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop",
  "aws-vs-azure-cloud-solutions-architect-guide": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  "power-bi-data-visualization-interview-questions": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  "python-for-data-science-interview-questions": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
  "software-testing-automation-qa-interview-questions": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
  "data-engineering-spark-pyspark-interview-questions": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
  "cyber-security-soc-analyst-interview-questions": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
};

// Rich Article Cards dynamically derived from blogs data
const ARTICLES = blogs.map((b) => ({
  slug: b.slug,
  tag: b.category.toUpperCase(),
  tagColor:
    b.categorySlug === "career-guides"
      ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
      : "bg-red-500/10 text-red-500 border-red-500/20",
  readTime: `${b.readingTimeMinutes} min read`,
  title: b.title,
  excerpt: b.summary,
  author: b.author.name,
  date: b.publishedDate,
  image:
    DEFAULT_IMAGES[b.slug] ||
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  categorySlug: b.categorySlug,
  logoBadge: b.slug.split("-")[0] || "tech",
}));

export function BlogExperience() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeFeaturedSlide, setActiveFeaturedSlide] = useState(0);
  const [isSlideHovered, setIsSlideHovered] = useState(false);

  // Auto-move featured slides every 5 seconds
  useEffect(() => {
    if (isSlideHovered) return;
    const timer = setInterval(() => {
      setActiveFeaturedSlide((prev) => (prev + 1) % FEATURED_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isSlideHovered]);

  const currentFeatured = FEATURED_SLIDES[activeFeaturedSlide];

  // Filtered Articles based on Search & Category
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        article.categorySlug === selectedCategory ||
        (selectedCategory === "interview-questions" && article.tag.includes("INTERVIEW")) ||
        (selectedCategory === "career-guides" && article.tag.includes("CAREER"));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      const targetPhone = "919036524555";
      const textMsg = encodeURIComponent(
        `Hello LearnMore Technologies,\n\nI would like to subscribe to the Weekly Tech Newsletter and Interview Guides:\n• Email: ${newsletterEmail}`
      );
      window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSubscribed(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-red-500 selection:text-white font-sans antialiased">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (High-Resolution Full-Bleed Panorama Background) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[680px] flex flex-col justify-between bg-[#070b14] overflow-hidden border-b border-slate-800/80">
        {/* Mobile Full-Bleed Background Image Layer (<lg) */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden w-full h-full">
          <img
            src="/blog-hero-mobile.png"
            alt="LearnMore Technologies Engineering Blog Mobile"
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          {/* Subtle gradient overlays to ensure text is crystal clear without obscuring background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/75 via-transparent to-[#070b14]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/70 via-[#070b14]/20 to-transparent" />
        </div>

        {/* Desktop Background Image Layer (lg:block) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <Image
            src="/blog-hero.png"
            alt="LearnMore Technologies Engineering Blog"
            fill
            priority
            unoptimized
            className="object-cover object-right md:object-center select-none"
          />
          {/* Subtle Left Text Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/85 to-transparent sm:w-3/4 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent h-24 top-auto bottom-0" />
        </div>

        {/* Top/Main Hero Grid Content */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full pt-8 sm:pt-12 lg:pt-16 flex-1 flex flex-col justify-between">
          
          {/* ========================================================================= */}
          {/* TABLET, LAPTOP & DESKTOP HERO LAYOUT (lg:grid) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Content (8 cols on lg, 9 cols on xl) */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/90 text-[11px] font-black tracking-widest text-slate-200 uppercase shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#ff253a] animate-pulse"></span>
                <span>BLOG • LEARN • PRACTICE • GROW</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Real Knowledge<br />
                for <span className="text-[#ff253a]">Real Careers.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-200 max-w-xl font-medium leading-relaxed drop-shadow-sm">
                In-depth tutorials, interview question breakdowns, tech trends, and career roadmaps — written by industry experts, for your success.
              </p>
            </div>

            {/* Right Side: 4 Pillar Feature Badges Overlay (4 cols on lg, 3 cols on xl) */}
            <div className="lg:col-span-4 xl:col-span-3 flex justify-end">
              <div className="hidden lg:flex flex-col gap-2.5 w-56 backdrop-blur-md bg-slate-950/40 p-4 rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-850 p-2.5 rounded-2xl border border-white/10 shadow-sm transition">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-100">New Skills</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-850 p-2.5 rounded-2xl border border-white/10 shadow-sm transition">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-100">Better Opportunities</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-850 p-2.5 rounded-2xl border border-white/10 shadow-sm transition">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-100">Higher Confidence</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-850 p-2.5 rounded-2xl border border-white/10 shadow-sm transition">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-100">A Brighter Future</span>
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/90 text-[11px] font-black tracking-widest text-slate-200 uppercase shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#ff253a] animate-pulse"></span>
                <span>BLOG • LEARN • PRACTICE • GROW</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
                Real Knowledge<br />
                for <span className="text-[#ff253a]">Real Careers.</span>
              </h1>
            </div>

            {/* Middle Section: Clear Viewing Window for Mobile Coder & Workspace Image */}
            <div className="relative h-44 sm:h-56 w-full select-none pointer-events-none" />

            {/* Bottom Section: Subtitle & 4 Feature Badges Moved Down */}
            <div className="space-y-4 bg-gradient-to-t from-[#070b14] via-[#070b14]/95 to-transparent pt-4 pb-2 rounded-2xl backdrop-blur-xs">
              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed drop-shadow-sm">
                In-depth tutorials, interview question breakdowns, tech trends, and career roadmaps — written by industry experts, for your success.
              </p>

              {/* 4 Feature Badges in 4 Columns on Mobile */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-100 leading-tight">New Skills</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-100 leading-tight">Opportunities</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mb-1">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-100 leading-tight">Confidence</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-100 leading-tight">Brighter Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Filter Strip (Right at the base of the Hero) */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full pb-8 pt-4 sm:pt-8 lg:pt-12">
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap sm:flex-nowrap w-full overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition whitespace-nowrap backdrop-blur-md shrink-0 shadow-sm ${
                    isActive
                      ? "bg-[#ff253a] text-white shadow-md shadow-red-600/40 scale-105"
                      : "bg-slate-900/85 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED ARTICLE BANNER CAROUSEL (Auto-moving with HD Background) */}
      {/* ========================================================================= */}
      <section className="py-10 bg-[#070b14]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div
            onMouseEnter={() => setIsSlideHovered(true)}
            onMouseLeave={() => setIsSlideHovered(false)}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-[#0d1424] to-[#1a0c16] border border-slate-800 shadow-2xl p-6 sm:p-10 min-h-[400px] lg:min-h-[440px] flex flex-col justify-between transition-all duration-700"
          >
            {/* Mobile Full-Bleed Background Image Layer (<lg) */}
            <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden w-full h-full">
              <img
                src={currentFeatured.bgImageMobile || "/blog-featured-aws-mobile.png"}
                alt={currentFeatured.title}
                className="w-full h-full object-cover object-center brightness-105 contrast-105"
              />
              {/* Subtle gradient overlays to ensure text is crystal clear without obscuring background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/75 via-transparent to-[#050810]/95" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/70 via-[#050810]/20 to-transparent" />
            </div>

            {/* Desktop Full-Bleed Background Image Layer (lg:block) */}
            <div className="hidden lg:block absolute inset-0 z-0">
              <Image
                src={currentFeatured.bgImage}
                alt={currentFeatured.title}
                fill
                priority
                unoptimized
                className="object-cover object-right md:object-center select-none opacity-95 transition-all duration-700"
              />
              {/* Left Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/95 via-[#050810]/80 to-transparent w-full md:w-3/5 lg:w-1/2" />
            </div>

            {/* Desktop/Tablet Layout (lg:grid) */}
            <div className="hidden lg:grid grid-cols-12 gap-8 items-center h-full my-auto relative z-10">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4 max-w-xl transition-all duration-500">
                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md ${currentFeatured.badgeColor}`}>
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{currentFeatured.badge}</span>
                </div>

                {/* Title */}
                <Link href={currentFeatured.href} className="block group">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-red-400 transition leading-tight">
                    {currentFeatured.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-medium leading-relaxed drop-shadow-sm">
                  {currentFeatured.summary}
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    href={currentFeatured.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff253a] hover:bg-[#e0182d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 transition transform hover:scale-105 active:scale-95"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-red-400 font-bold text-xs">
                    {currentFeatured.authorInitials}
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-white">{currentFeatured.authorName}</p>
                    <p className="text-slate-400 text-[11px]">{currentFeatured.authorRole}</p>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-end justify-between h-full pt-4 lg:pt-0">
                {/* Workflow Pills */}
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-300 bg-slate-950/60 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg">
                  {currentFeatured.workflow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-sky-400 font-bold">
                        {step}
                      </span>
                      {idx < currentFeatured.workflow.length - 1 && <span className="text-slate-500">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout (<lg) */}
            <div className="lg:hidden flex flex-col justify-between space-y-5 relative z-10 pt-1">
              {/* Top: Badge + Title */}
              <div className="space-y-2.5">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md ${currentFeatured.badgeColor}`}>
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{currentFeatured.badge}</span>
                </div>

                <Link href={currentFeatured.href} className="block group">
                  <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-400 transition leading-tight">
                    {currentFeatured.title}
                  </h2>
                </Link>
              </div>

              {/* Middle: Open viewing gap for AWS cloud logo and glowing orbit icons */}
              <div className="relative h-40 sm:h-52 w-full select-none pointer-events-none" />

              {/* Bottom (Moved Down): Summary, CTA button, Author Info */}
              <div className="space-y-3.5 bg-gradient-to-t from-[#050810] via-[#050810]/95 to-transparent pt-3 pb-1 rounded-2xl backdrop-blur-xs">
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed drop-shadow-sm">
                  {currentFeatured.summary}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <Link
                    href={currentFeatured.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#ff253a] hover:bg-[#e0182d] text-white font-bold text-xs shadow-lg shadow-red-600/30 transition transform hover:scale-105 active:scale-95"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-red-400 font-bold text-xs shrink-0">
                      {currentFeatured.authorInitials}
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-white leading-tight">{currentFeatured.authorName}</p>
                      <p className="text-slate-400 text-[10px]">{currentFeatured.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Carousel Controls Bar */}
            <div className="relative z-10 flex items-center justify-between w-full pt-6 border-t border-white/10 mt-6">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {FEATURED_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveFeaturedSlide(idx)}
                    className={`transition-all rounded-full ${
                      activeFeaturedSlide === idx
                        ? "w-8 h-2 bg-[#ff253a] shadow-md shadow-red-500/50"
                        : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                <span className="text-[11px] text-slate-400 font-semibold ml-2">
                  {activeFeaturedSlide + 1} / {FEATURED_SLIDES.length}
                </span>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveFeaturedSlide((prev) => (prev > 0 ? prev - 1 : FEATURED_SLIDES.length - 1))
                  }
                  className="w-8 h-8 rounded-full bg-slate-900/90 hover:bg-[#ff253a] border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition shadow-md"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveFeaturedSlide((prev) => (prev + 1) % FEATURED_SLIDES.length)
                  }
                  className="w-8 h-8 rounded-full bg-slate-900/90 hover:bg-[#ff253a] border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition shadow-md"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LATEST ARTICLES (4 Cards Grid matching design) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#070b14]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#ff253a]" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Latest Articles
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Stay updated with the latest trends, interview strategies and expert learning resources.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff253a] hover:text-red-400 transition shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((article, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0e1526] to-[#0a0f1d] border border-slate-800 hover:border-slate-700 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Top Image & Badge Graphic */}
                <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 opacity-60 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-transparent to-transparent" />

                  {/* Logo Watermark inside Card Header */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {article.logoBadge === "aws" && (
                      <span className="text-3xl font-black text-sky-400/90 font-mono uppercase tracking-widest drop-shadow-md">
                        aws
                      </span>
                    )}
                    {article.logoBadge === "python" && (
                      <span className="text-3xl font-black text-amber-400/90 font-mono uppercase tracking-widest drop-shadow-md">
                        🐍 Python
                      </span>
                    )}
                    {article.logoBadge === "analytics" && (
                      <span className="text-2xl font-black text-emerald-400/90 font-mono uppercase tracking-widest drop-shadow-md">
                        📊 SQL / BI
                      </span>
                    )}
                    {article.logoBadge === "accenture" && (
                      <span className="text-2xl font-black text-purple-400/90 font-mono uppercase tracking-widest drop-shadow-md">
                        accenture
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-3">
                    {/* Tag & Read Time */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${article.tagColor}`}>
                        {article.tag}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="text-sm sm:text-base font-black text-white group-hover:text-red-400 transition line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-400 font-medium line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Card Footer: Author + Date + Arrow */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-200 text-[11px]">{article.author}</p>
                        <p className="text-[10px] text-slate-400">{article.date}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#ff253a] text-slate-300 hover:text-white flex items-center justify-center transition"
                      aria-label="Read Article"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPLORE BY CATEGORY (Horizontal Slider / Cards Grid) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#050810] border-y border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
          {/* Header Row */}
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#ff253a]" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Explore by Category
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Find exactly what you need, faster.
              </p>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 flex items-center justify-center transition"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedCategory("interview-questions")}
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 flex items-center justify-center transition"
                aria-label="Next Category"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 7 Category Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {EXPLORE_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat.categorySlug)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/90 border ${cat.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl text-center space-y-2.5 group`}
                >
                  <div className={`w-11 h-11 rounded-xl ${cat.bgColor} ${cat.color} flex items-center justify-center transition group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-200 group-hover:text-white leading-tight">
                      {cat.title}
                    </h4>
                    <p className="text-[10px] font-semibold text-slate-400 mt-0.5">
                      {cat.count}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DUAL BANNER: Stay Ahead Newsletter + Learning Beyond Classrooms Impact */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#070b14]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Card: Stay Ahead Newsletter */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#121829] via-[#0d1322] to-[#090d18] border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              {/* Ambient Red Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-extrabold text-[11px] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>STAY AHEAD</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                  Get the Latest Tech Insights<br />
                  Straight to Your Inbox.
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  New articles, interview questions, career tips and industry updates every week.
                </p>

                {/* Form */}
                <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#ff253a] hover:bg-[#e0182d] text-white font-bold text-xs shadow-md shadow-red-600/30 transition flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>{newsletterSubscribed ? "Subscribed!" : "Subscribe"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Note */}
                <p className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
                  <span>🔒 No spam. Unsubscribe anytime.</span>
                </p>
              </div>

              {/* Bottom Cursive Script */}
              <div className="pt-6 relative z-10 font-serif italic text-slate-300 text-xs font-bold select-none">
                Knowledge today <span className="text-red-400">Opportunities tomorrow</span>
              </div>
            </div>

            {/* Right Card: Our Impact */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#121829] via-[#0d1322] to-[#090d18] border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              {/* Ambient Blue Glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-[11px] uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>OUR IMPACT</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                  Learning Beyond Classrooms.
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Empowering learners with expert content to build successful careers.
                </p>

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Stat 1 */}
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">200+</p>
                      <p className="text-[11px] font-semibold text-slate-400">In-Depth Articles</p>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">50+</p>
                      <p className="text-[11px] font-semibold text-slate-400">Expert Contributors</p>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">1M+</p>
                      <p className="text-[11px] font-semibold text-slate-400">Learners Reached</p>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">95%</p>
                      <p className="text-[11px] font-semibold text-slate-400">Positive Feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. POPULAR LEARNING PATHS (Roadmaps Grid) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#050810] border-t border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
          {/* Header Row */}
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#ff253a]" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Popular Learning Paths
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Step-by-step guides to help you master in-demand skills.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff253a] hover:text-red-400 transition shrink-0"
            >
              <span>View All Roadmaps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 6 Path Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {LEARNING_PATHS.map((path, idx) => {
              const Icon = path.icon;
              return (
                <Link
                  key={idx}
                  href={path.href}
                  className={`group rounded-2xl bg-gradient-to-b ${path.gradient} border ${path.borderColor} p-4 shadow-lg flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className={`w-9 h-9 rounded-xl ${path.iconBg} flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-200">
                        {path.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-white group-hover:text-red-400 transition leading-snug">
                        {path.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                        {path.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <span className="text-slate-400 group-hover:text-red-400 transition text-xs font-bold">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CTA BANNER: Turn Your Learning Into Opportunities */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#070b14] via-[#100810] to-[#070b14] border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            {/* Left Headline (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Turn Your Learning<br />
                Into <span className="text-[#ff253a]">Opportunities.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
                Join our live classes, get expert guidance, and accelerate your career with industry-ready skills.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#ff253a] hover:bg-[#e0182d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919036524555"
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#ff253a]" />
                  <span>Talk to an Expert</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script (5 cols) */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <div className="font-serif italic text-right select-none space-y-1">
                <p className="text-2xl sm:text-3xl text-slate-300 font-bold">Skills Today</p>
                <p className="text-2xl sm:text-3xl text-red-500 font-black">Success Tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourseSlug="aws-certified-solutions-architect"
      />
    </div>
  );
}
