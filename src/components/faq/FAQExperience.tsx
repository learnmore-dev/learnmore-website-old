"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ChevronRight,
  Plus,
  Minus,
  Headphones,
  Phone,
  MessageSquare,
  Mail,
  Link as LinkIcon,
  Quote,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ChevronLeft,
  GraduationCap,
  Briefcase,
  Building2,
  HelpCircle,
  Gem,
  Star,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

// 4 FAQ Categories Data
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  categoryBadge: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  items: FAQItem[];
}

const FAQ_SECTIONS: FAQCategory[] = [
  {
    categoryBadge: "ADMISSIONS & BATCHES",
    title: "Course Admissions & Eligibility",
    subtitle: "Learn how to enroll, eligibility criteria, batch timings, and demo sessions.",
    icon: GraduationCap,
    items: [
      {
        id: "adm-1",
        question: "What is the admission and enrollment process at LearnMore Technologies?",
        answer:
          "You can enroll online through our website or visit any of our 3 Bangalore campuses (Marathahalli, BTM Layout, Kalyan Nagar). You can attend a free demo class, consult with our career counselors, choose your preferred batch timing (weekday or weekend), and complete registration with flexible payment options.",
      },
      {
        id: "adm-2",
        question: "Do you offer free demo sessions before joining?",
        answer:
          "Yes, we offer free interactive live demo sessions for all courses. You can experience the trainer's teaching style, inspect the curriculum, and ask technical questions before making any enrollment commitment.",
      },
      {
        id: "adm-3",
        question: "Can non-technical or non-CS graduates join coding courses?",
        answer:
          "Absolutely! Over 40% of our successful alumni come from non-CS and non-IT backgrounds (Mechanical, Civil, Commerce, B.Sc, BCA). Our courses start from absolute programming fundamentals and build up to advanced real-world project architecture.",
      },
      {
        id: "adm-4",
        question: "What are the batch timings available?",
        answer:
          "We offer multiple flexible batch formats: Morning Batches (7:00 AM - 9:00 AM, 9:30 AM - 11:30 AM), Evening Batches (6:00 PM - 8:00 PM, 8:00 PM - 10:00 PM), and dedicated Weekend Intensive Batches (Saturday & Sunday 10:00 AM - 2:00 PM or 2:30 PM - 6:30 PM).",
      },
    ],
  },
  {
    categoryBadge: "PLACEMENT & CAREERS",
    title: "100% Placement Support & Hiring",
    subtitle: "Interview scheduling, salary packages, mock interviews, and career switches.",
    icon: Briefcase,
    items: [
      {
        id: "plc-1",
        question: "How does the 100% Placement Support program work?",
        answer:
          "Our dedicated placement cell provides end-to-end placement assistance including resume building, GitHub portfolio optimization, LinkedIn profile reviews, 1-on-1 mock technical interviews, HR screening preparation, and unlimited interview scheduling with our 450+ hiring partner companies until you get placed.",
      },
      {
        id: "plc-2",
        question: "How many interview opportunities will I get?",
        answer:
          "We provide guaranteed unlimited interview drives until you secure a job offer. Typically, our students crack offers within the first 3 to 5 interview opportunities due to our rigorous technical interview coaching and live project experience.",
      },
      {
        id: "plc-3",
        question: "What is the average salary package offered to freshers and experienced candidates?",
        answer:
          "For freshers, entry-level CTC packages typically range from ₹4.5 LPA to ₹8.5 LPA. For working professionals switching tech stacks with 2-6 years of experience, packages range from ₹8.0 LPA to ₹18.0 LPA, with exceptional candidates receiving up to ₹24 LPA in specialized cloud/AI roles.",
      },
      {
        id: "plc-4",
        question: "Do you help candidates with career gaps or domain switches?",
        answer:
          "Yes, we specialize in career relaunch and non-IT to IT transitions. We bridge career gaps with verified project sprints, hands-on production experience, and tailored interview coaching addressing career transitions.",
      },
    ],
  },
  {
    categoryBadge: "CLASSROOMS & LABS",
    title: "Campus Facilities & Online Learning",
    subtitle: "Lab infrastructure, live classes, session recordings, and batch flexibility.",
    icon: Building2,
    items: [
      {
        id: "lab-1",
        question: "What hardware and lab facilities are available at your campuses?",
        answer:
          "Our 3 physical campuses (Marathahalli HQ, BTM Layout, Kalyan Nagar) feature high-spec Core i7 workstations with 32GB RAM, dedicated gigabit fiber internet, smart interactive board classrooms, 24/7 student practice lab access, and private interview preparation cabins.",
      },
      {
        id: "lab-2",
        question: "What is the difference between Classroom and Live Online training?",
        answer:
          "Both modes follow the exact same syllabus, live trainer interaction, assignments, and placement support. Classroom sessions happen in-person at our Bangalore campuses with direct trainer access and in-lab practice. Online training features live 2-way interactive Zoom classes with cloud virtual labs.",
      },
      {
        id: "lab-3",
        question: "What if I miss a live class?",
        answer:
          "Every live class is recorded in HD and uploaded to your student LMS portal within 2 hours. You receive lifetime access to class recordings, lecture notes, source code repositories, and can attend backup revision batches anytime.",
      },
      {
        id: "lab-4",
        question: "Can I switch between Classroom and Online mode during the course?",
        answer:
          "Yes, we offer complete hybrid flexibility! If your work or travel schedule changes, you can seamlessly switch from classroom to online or vice-versa at no additional cost.",
      },
    ],
  },
  {
    categoryBadge: "CERTIFICATIONS & CREDENTIALS",
    title: "Certificates & Global Exam Prep",
    subtitle: "Course credentials, QR-verified certificates, and vendor exam coaching.",
    icon: Award,
    items: [
      {
        id: "crt-1",
        question: "Will I receive a course completion certificate?",
        answer:
          "Yes! Upon completing the course and submitting your capstone project, you receive an industry-recognized, verifiable Course Completion Certificate with a unique QR code credential ID that can be shared on LinkedIn and added to your resume.",
      },
      {
        id: "crt-2",
        question: "Do you help students prepare for global certifications (AWS, Azure, ISTQB, CKA)?",
        answer:
          "Yes! Our curriculum is aligned with global vendor certification blueprints (AWS Solutions Architect, Microsoft Azure AZ-104/AZ-204, ISTQB CTFL, Docker/Kubernetes CKA). We provide official exam dumps, practice simulation mock exams, and voucher assistance.",
      },
    ],
  },
];

// Verified Student Reviews from LearnMore Technologies Google Reviews
const STUDENT_REVIEWS = [
  {
    quote: "I joined LearnMore Technologies in Marathahalli for Python Full Stack. Practical projects and mock interviews gave me immense confidence to crack my first IT job with a 50%+ hike!",
    name: "Pooja Hegde",
    role: "Python Full Stack Developer",
    rating: 5,
  },
  {
    quote: "The hands-on AWS and Kubernetes labs were unmatched. The real-world architecture case studies gave me the confidence to clear MNC interviews on my very first attempt.",
    name: "Rohit Verma",
    role: "AWS Certified Solutions Architect",
    rating: 5,
  },
  {
    quote: "Best institute for Data Science & AI in Bangalore. The curriculum, mentors and placement drives helped me land my dream role in just 5 months. Truly transformative!",
    name: "Priyanka Nair",
    role: "Data Scientist & AI Specialist",
    rating: 5,
  },
  {
    quote: "Coming from a non-CS background, I was nervous about coding. LearnMore's step-by-step teaching, daily assignments, and interview prep made the journey smooth and rewarding.",
    name: "Sneha Reddy",
    role: "Java Full Stack Developer",
    rating: 5,
  },
  {
    quote: "The Selenium WebDriver, TestNG framework, and Postman API testing modules are taught with real enterprise applications. Cleared multiple technical rounds with ease.",
    name: "Siddharth Hegde",
    role: "Automation QA Engineer",
    rating: 5,
  },
];

export function FAQExperience() {
  // State for open accordion items (defaulting to first item open)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "adm-1": true,
  });

  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-slide reviews every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % STUDENT_REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentReview = STUDENT_REVIEWS[activeReviewIdx];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (High-Resolution Full-Bleed Background with Dark Overlays) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[540px] lg:min-h-[580px] flex flex-col justify-between bg-[#070b14] overflow-hidden border-b border-slate-800">
        {/* Mobile Full-Bleed Background Image Layer (<lg) */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden w-full h-full">
          <img
            src="/faq-hero-mobile.png"
            alt="LearnMore Technologies FAQ Hub Mobile"
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
            alt="LearnMore Technologies FAQ Hub"
            fill
            priority
            unoptimized
            className="object-cover object-right md:object-center select-none"
          />
          {/* Subtle Left Text Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/85 to-transparent sm:w-3/4 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent h-20 top-auto bottom-0" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full pt-3 sm:pt-6 lg:pt-16 pb-6 flex-1 flex flex-col justify-between">
          
          {/* ========================================================================= */}
          {/* TABLET, LAPTOP & DESKTOP HERO LAYOUT (lg:block) */}
          {/* ========================================================================= */}
          <div className="hidden lg:block max-w-3xl space-y-6">
            {/* Breadcrumb: Home > FAQs */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="flex items-center gap-1 hover:text-white transition">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-200 font-bold">FAQs</span>
            </nav>

            {/* Badge Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-amber-500/40 text-[11px] font-black tracking-wider text-amber-400 uppercase shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              Everything You Need to Know<br />
              About <span className="text-[#ff253a]">Learning at LearnMore.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-medium leading-relaxed drop-shadow-sm">
              Clear answers to your questions about our courses, admissions, classroom facilities, online learning, placements, certifications, and more.
            </p>

            {/* 4 Feature Badges (Horizontal Row) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5 bg-slate-950/70 border border-white/10 rounded-2xl p-2.5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Expert Guidance</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Always here to help</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5 bg-slate-950/70 border border-white/10 rounded-2xl p-2.5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">100% Transparency</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">No hidden information</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5 bg-slate-950/70 border border-white/10 rounded-2xl p-2.5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Student First</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Your success matters</p>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-center gap-2.5 bg-slate-950/70 border border-white/10 rounded-2xl p-2.5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Trusted by 10,000+</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Aspiring professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE RESPONSIVE HERO LAYOUT (<lg) */}
          {/* ========================================================================= */}
          <div className="lg:hidden flex flex-col justify-between space-y-4 pt-0 pb-2">
            {/* Top Section: Breadcrumb + Badge + Headline (Moved Up) */}
            <div className="space-y-2 pt-0">
              <nav className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition">
                  <Home className="w-3 h-3" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-500" />
                <span className="text-slate-200 font-bold">FAQs</span>
              </nav>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-[10px] font-black tracking-wider text-amber-400 uppercase shadow-lg backdrop-blur-md">
                <Sparkles className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-[1.14] drop-shadow-md">
                Everything You Need to Know<br />
                About <span className="text-[#ff253a]">Learning at LearnMore.</span>
              </h1>
            </div>

            {/* Middle Section: Clear Viewing Window for Mobile Student & Workspace Image */}
            <div className="relative h-44 sm:h-56 w-full select-none pointer-events-none" />

            {/* Bottom Section: Subtitle & 4 Feature Badges Moved Down */}
            <div className="space-y-4 bg-gradient-to-t from-[#070b14] via-[#070b14]/95 to-transparent pt-4 pb-2 rounded-2xl backdrop-blur-xs">
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed drop-shadow-sm">
                Clear answers to your questions about our courses, admissions, classroom facilities, online learning, placements, certifications, and more.
              </p>

              {/* 4 Feature Badges in 4 Columns on Mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="flex items-center gap-2 bg-slate-950/70 border border-white/10 rounded-xl p-2 backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Headphones className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">Expert Guidance</p>
                    <p className="text-[9px] text-slate-400">Always here</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-950/70 border border-white/10 rounded-xl p-2 backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">100% Transparent</p>
                    <p className="text-[9px] text-slate-400">No hidden info</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-950/70 border border-white/10 rounded-xl p-2 backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">Student First</p>
                    <p className="text-[9px] text-slate-400">Your success</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-950/70 border border-white/10 rounded-xl p-2 backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">10,000+ Alumni</p>
                    <p className="text-[9px] text-slate-400">Trusted quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT (Left: 4 FAQ Categories, Right: Sticky Sidebar) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN (8 cols): 4 FAQ Categories with Accordions */}
            <div className="lg:col-span-8 space-y-12">
              {FAQ_SECTIONS.map((section, sIdx) => {
                const CategoryIcon = section.icon;
                return (
                  <div key={sIdx} className="space-y-5">
                    {/* Category Title Header */}
                    <div className="space-y-1.5 border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-2 text-xs font-black text-[#ff253a] uppercase tracking-wider">
                        <CategoryIcon className="w-4 h-4 text-[#ff253a]" />
                        <span>{section.categoryBadge}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        {section.subtitle}
                      </p>
                    </div>

                    {/* Accordion Cards List */}
                    <div className="space-y-3">
                      {section.items.map((item) => {
                        const isOpen = !!openItems[item.id];
                        return (
                          <div
                            key={item.id}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                              isOpen
                                ? "bg-white border-red-200 shadow-md shadow-red-500/5"
                                : "bg-white border-slate-200/90 hover:border-slate-300 shadow-xs"
                            }`}
                          >
                            {/* Accordion Trigger */}
                            <button
                              onClick={() => toggleAccordion(item.id)}
                              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition"
                            >
                              <div className="flex items-center gap-3">
                                {/* Circular Toggle Icon */}
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition ${
                                    isOpen
                                      ? "bg-[#ff253a] text-white"
                                      : "bg-red-50 text-[#ff253a] border border-red-200"
                                  }`}
                                >
                                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                </div>
                                <span className={`text-xs sm:text-sm font-black transition ${
                                  isOpen ? "text-[#ff253a]" : "text-slate-800 hover:text-slate-900"
                                }`}>
                                  {item.question}
                                </span>
                              </div>
                            </button>

                            {/* Accordion Body */}
                            {isOpen && (
                              <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-1 pt-3 pl-14">
                                {item.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN (4 cols): Sticky Sidebar Cards */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Card 1: Need More Help? (Dark Card) */}
              <div className="rounded-3xl bg-[#0b101d] text-white border border-slate-800 p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-red-500/15 border border-red-500/30 text-[#ff253a] flex items-center justify-center shrink-0 shadow-sm">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Need More Help?</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Our academic advisors are available 7 days a week to guide you with course details, batch timings, and career paths.
                </p>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-1">
                  {/* Call Button */}
                  <a
                    href="tel:+919036524555"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs flex items-center gap-2.5 transition shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#ff253a] shrink-0" />
                    <span>Call: +91 90365 24555</span>
                  </a>

                  {/* WhatsApp Support Button */}
                  <a
                    href="https://wa.me/919036524555?text=Hello%20LearnMore%20Technologies,%20I%20have%20questions%20regarding%20courses%20and%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-600/40 text-emerald-400 font-bold text-xs flex items-center gap-2.5 transition shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Support (Instant)</span>
                  </a>

                  {/* Email Support Button */}
                  <a
                    href="mailto:office.learnmore@gmail.com"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-bold text-xs flex items-center gap-2.5 transition shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Email: office.learnmore@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Quick Links (White Card) */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 font-black text-sm text-slate-900">
                  <LinkIcon className="w-4 h-4 text-sky-500" />
                  <span>Quick Links</span>
                </div>

                <div className="space-y-1 text-xs font-bold text-slate-700 divide-y divide-slate-100">
                  <Link
                    href="/courses"
                    className="flex items-center justify-between py-2.5 hover:text-[#ff253a] transition"
                  >
                    <span>Programs</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/courses"
                    className="flex items-center justify-between py-2.5 hover:text-[#ff253a] transition"
                  >
                    <span>Course Curriculum</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/placement"
                    className="flex items-center justify-between py-2.5 hover:text-[#ff253a] transition"
                  >
                    <span>Placement Support</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/locations"
                    className="flex items-center justify-between py-2.5 hover:text-[#ff253a] transition"
                  >
                    <span>Our Locations</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/testimonials"
                    className="flex items-center justify-between py-2.5 hover:text-[#ff253a] transition"
                  >
                    <span>Student Reviews</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-between py-2.5 hover:text-[#ff253a] text-left transition"
                  >
                    <span>Book a Free Demo</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Card 3: Student Review Carousel Card (White Card) */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-[#ff253a] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <a
                    href="https://share.google/mbQhN9ou3LcnA46d7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 transition"
                    title="View verified reviews on Google Maps"
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
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>

                <p className="text-xs text-slate-600 italic font-medium leading-relaxed">
                  &ldquo;{currentReview.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div>
                    <p className="text-xs font-black text-slate-900">{currentReview.name}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{currentReview.role}</p>
                  </div>

                  {/* Review Navigation Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setActiveReviewIdx((prev) => (prev > 0 ? prev - 1 : STUDENT_REVIEWS.length - 1))
                      }
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
                      aria-label="Previous Review"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveReviewIdx((prev) => (prev + 1) % STUDENT_REVIEWS.length)
                      }
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
                      aria-label="Next Review"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <a
                  href="https://share.google/mbQhN9ou3LcnA46d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline pt-1"
                >
                  <span>View on Google Reviews</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Card 4: Still Have Questions? (Soft Blue/Purple Card) */}
              <div className="rounded-3xl bg-[#f0f7ff] border border-blue-100 p-6 shadow-sm space-y-4 text-center">
                <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                  <Gem className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-black text-slate-900">Still Have Questions?</h3>
                  <p className="text-xs text-slate-600 font-medium">
                    We&apos;re just a message away! Reach out anytime, and we&apos;ll be happy to help you.
                  </p>
                </div>

                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#ff253a] hover:bg-[#e0182d] text-white font-bold text-xs shadow-md shadow-red-500/20 transition transform hover:scale-102 active:scale-98"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BOTTOM CTA BANNER: Book Your Free Live Demo Session Today */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#070b14] via-[#100810] to-[#070b14] border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            {/* Left Headline & CTAs (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-extrabold text-[11px] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Ready to Start?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Book Your Free Live Demo Session Today
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
                Experience our hands-on classroom teaching in Bangalore or join live online from anywhere.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
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
                  <span>Call +91 90365 24555</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script (4 cols) */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="font-serif italic text-right select-none space-y-1">
                <p className="text-xl sm:text-2xl text-slate-300 font-bold">Knowledge today</p>
                <p className="text-xl sm:text-2xl text-red-500 font-black">Opportunities tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourseSlug="python-full-stack-course"
      />
    </div>
  );
}
