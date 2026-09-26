"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  User,
  BookOpen,
  ArrowRight,
  Headphones,
  FileText,
  Building2,
  BookMarked,
  Sparkles,
  TrendingUp,
  Zap,
  Play,
  CheckCircle2,
  Plus,
  Minus,
  HelpCircle,
  Laptop,
  ShieldCheck,
  Users,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

const FAQ_ITEMS = [
  {
    q: "Can I attend a free demo class at a physical campus before enrolling?",
    a: "Yes, absolutely! You can attend a free live classroom demo session at any of our 3 Bangalore branches (Marathahalli, BTM Layout, or Kalyan Nagar) or join an interactive online batch before making your decision.",
  },
  {
    q: "What are the counseling desk working hours?",
    a: "Our centralized admission and career guidance desks are active Monday through Saturday from 9:00 AM to 7:00 PM. Weekend walk-ins and phone consultations are also welcomed.",
  },
  {
    q: "Do you provide installment-based fee payments?",
    a: "Yes, we offer zero-cost flexible EMI options and milestone-based installment payment facilities for all master training programs.",
  },
  {
    q: "How can I get directions to the nearest branch?",
    a: "You can click on 'Get Directions' on this page, or simply send a WhatsApp message to +91 90365 24555 to instantly receive live Google Maps pins and landmark directions.",
  },
  {
    q: "Is placement support provided for all courses?",
    a: "Yes, all our master programs include 100% dedicated placement support with resume building, mock interviews with MNC architects, and direct interview drives until you get placed.",
  },
  {
    q: "Do you offer online or weekend batches?",
    a: "Yes, we provide flexible weekend slots (Saturday & Sunday) as well as morning and evening weekday batches in both physical classroom and interactive live online formats.",
  },
];

const OTHER_CAMPUSES = [
  {
    name: "BTM Layout Campus",
    address: "#77, 100 Feet Ring Road, BTM Layout",
    slug: "btm",
    image: "/images/locations/btm-campus.png",
  },
  {
    name: "Kalyan Nagar Branch",
    address: "#24, CMR Main Road, Kalyan Nagar",
    slug: "kalyan-nagar",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  },
];

export function ContactUsExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    contactMode: "WhatsApp",
    course: "",
    campus: "Marathahalli (HQ)",
    message: "",
    agreed: true,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let targetPhone = "919036524555";
    const campusLower = (formData.campus || "").toLowerCase();
    if (campusLower.includes("btm")) {
      targetPhone = "919036542555";
    } else if (campusLower.includes("kalyan")) {
      targetPhone = "919036354551";
    } else if (campusLower.includes("marathahalli")) {
      targetPhone = "919036524555";
    }

    const textMsg = encodeURIComponent(
      `Hello LearnMore Technologies,\n\nI am submitting an admission inquiry:\n• Name: ${formData.fullName}\n• Mobile: +91 ${formData.mobile}\n• Email: ${formData.email}\n• Mode: ${formData.contactMode}\n• Program: ${formData.course || "General Inquiry"}\n• Preferred Campus: ${formData.campus}\n• Note: ${formData.message || "N/A"}\n\nPlease contact me with syllabus and batch details.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${textMsg}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full-bleed contact-hero.png background with overlays) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#06080e] text-white pt-6 pb-0 sm:pt-10 lg:pt-14 lg:pb-0 overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[580px] flex flex-col justify-between">
        {/* Mobile Full-Bleed Background Image Layer (<lg) */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden w-full h-full">
          <img
            src="/contact-hero-mobile.png"
            alt="Contact LearnMore Technologies Mobile"
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          {/* Subtle gradient overlays to keep text ultra sharp and readable without obscuring background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#06080e]/75 via-transparent to-[#06080e]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080e]/70 via-[#06080e]/20 to-transparent" />
        </div>

        {/* Tablet & Desktop Background Image Layer (lg:block) */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <img
            src="/contact-hero.jpg"
            alt="LearnMore Technologies Students & Lounge"
            className="w-full h-full object-cover object-[center_top]"
          />
          {/* Subtle dark gradient overlay on left for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10 lg:from-black/85 lg:via-black/35 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-black/30" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full flex-1 flex flex-col justify-between">
          {/* ========================================================================= */}
          {/* TABLET, LAPTOP & DESKTOP HERO LAYOUT (lg:grid) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-center pt-2">
            {/* Left Content (Left 6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4 xl:space-y-5">
              {/* Tag */}
              <div className="text-slate-300 text-xs tracking-widest uppercase font-extrabold flex items-center gap-2 drop-shadow-sm">
                <span className="w-6 h-[1.5px] bg-red-500 inline-block" />
                <span>LET&apos;S CONNECT</span>
                <span className="w-6 h-[1.5px] bg-red-500 inline-block" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[56px] font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
                Turn Your <br />
                Aspirations Into <br />
                <span className="text-[#EF4444]">
                  Opportunities.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-lg font-medium drop-shadow-sm">
                We&apos;re here to answer your questions, guide you through our programs, and help you take the next step towards a successful tech career.
              </p>

              {/* 4 Feature Pills in a Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 xl:gap-3 pt-2">
                <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </div>
                  <span className="text-[11px] xl:text-xs font-bold text-white drop-shadow-xs">
                    Talk to Experts
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </div>
                  <span className="text-[11px] xl:text-xs font-bold text-white drop-shadow-xs">
                    Personalized Guidance
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </div>
                  <span className="text-[11px] xl:text-xs font-bold text-white drop-shadow-xs">
                    Visit Our Campuses
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  </div>
                  <span className="text-[11px] xl:text-xs font-bold text-white drop-shadow-xs">
                    Explore Programs
                  </span>
                </div>
              </div>

              {/* Handwritten Left Script */}
              <div className="pt-2 hidden sm:block">
                <div className="font-serif italic text-white text-base lg:text-lg font-medium tracking-wide leading-tight select-none opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] -rotate-3">
                  <span>Good</span> <br />
                  <span className="ml-1">People</span> <br />
                  <span className="ml-2">Build</span> <br />
                  <span className="ml-3">Great Careers</span>
                </div>
              </div>
            </div>

            {/* Right Overlays (Right 6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 relative min-h-[320px] flex flex-col justify-between items-end">
              {/* Top Right Handwritten Script */}
              <div className="text-right hidden sm:block">
                <div className="font-serif italic text-white text-base lg:text-xl font-medium tracking-wide leading-tight select-none opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] rotate-2">
                  <span>Learn</span> <br />
                  <span className="mr-0.5">Today</span> <br />
                  <span className="mr-1">Lead</span> <br />
                  <span className="mr-1.5">Tomorrow</span>
                </div>
              </div>

              {/* 3 Badges on right side */}
              <div className="flex flex-col gap-2 my-4 items-end">
                <div className="px-3 py-1.5 rounded-full bg-black/60 border border-slate-700/80 backdrop-blur-md text-[11px] xl:text-xs font-bold text-white flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500" />
                  <span>More Skills</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/60 border border-slate-700/80 backdrop-blur-md text-[11px] xl:text-xs font-bold text-white flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500" />
                  <span>Match Opportunities</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/60 border border-slate-700/80 backdrop-blur-md text-[11px] xl:text-xs font-bold text-white flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500" />
                  <span>A Brighter You</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE RESPONSIVE HERO LAYOUT (<lg) */}
          {/* ========================================================================= */}
          <div className="lg:hidden flex flex-col justify-between space-y-5 pt-0 pb-2">
            {/* Top Section: Tag & Headline (Moved Up) */}
            <div className="space-y-2 pt-0">
              <div className="text-slate-300 text-[11px] tracking-widest uppercase font-extrabold flex items-center gap-2 drop-shadow-sm">
                <span className="w-5 h-[1.5px] bg-red-500 inline-block" />
                <span>LET&apos;S CONNECT</span>
                <span className="w-5 h-[1.5px] bg-red-500 inline-block" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.14] text-white drop-shadow-md">
                Turn Your Aspirations <br />
                Into <span className="text-[#EF4444]">Opportunities.</span>
              </h1>
            </div>

            {/* Middle Section: Clear Viewing Window for Mobile Students in Lounge */}
            <div className="relative h-48 sm:h-64 w-full select-none pointer-events-none" />

            {/* Bottom Section: Subtitle & 4 Feature Badges Moved Down */}
            <div className="space-y-3 bg-gradient-to-t from-[#06080e] via-[#06080e]/85 to-transparent pt-3 pb-1 rounded-2xl backdrop-blur-xs">
              <p className="text-xs text-slate-200 font-normal leading-relaxed drop-shadow-sm">
                We&apos;re here to answer your questions, guide you through our programs, and help you take the next step towards a successful tech career.
              </p>

              {/* 4 Feature Badges in 4 Columns on Mobile */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-1">
                    <Headphones className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white leading-tight">
                    Talk to Experts
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-1">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white leading-tight">
                    Guidance
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white leading-tight">
                    3 Campuses
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-slate-700/80 backdrop-blur-md shadow-md">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white leading-tight">
                    Programs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Curved Wave Transition into Light Contact Section */}
        <div className="w-full overflow-hidden leading-none z-10 pointer-events-none mt-4 sm:mt-8 lg:mt-12 block -mb-0.5">
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
      {/* 2. MAIN CONTACT & INQUIRY SECTION (2-Column Grid) */}
      {/* ========================================================================= */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: Channels + Campuses (7 Cols) */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-black text-red-600 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>GET IN TOUCH</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  We Are Here to <span className="text-red-600">Guide Your Career</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Whether you are looking for classroom or online training, corporate programs or have any queries, our team is ready to assist you. Reach out through any of the channels below or fill the form and we'll get back to you.
                </p>
              </div>

              {/* 4 Action Channels Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Call Us */}
                <a
                  href="tel:+919036524555"
                  className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition flex items-center gap-3.5 group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Call Us</div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-red-600 transition">
                      +91 90365 24555
                    </div>
                    <div className="text-[11px] text-slate-400">Mon – Sat, 9 AM – 7 PM</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=919036524555&text=Hi%20LearnMore%20Technologies,%20I%20need%20course%20details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition flex items-center gap-3.5 group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">WhatsApp</div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-emerald-600 transition">
                      Chat with Advisor
                    </div>
                    <div className="text-[11px] text-slate-400">Get instant response</div>
                  </div>
                </a>

                {/* Email Us */}
                <a
                  href="mailto:office.learnmore@gmail.com"
                  className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition flex items-center gap-3.5 group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Email Us</div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-purple-600 transition">
                      office.learnmore@gmail.com
                    </div>
                    <div className="text-[11px] text-slate-400">We reply within 24 hours</div>
                  </div>
                </a>

                {/* Visit Us */}
                <Link
                  href="/locations"
                  className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition flex items-center gap-3.5 group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Visit Us</div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-rose-600 transition">
                      Our 3 Campuses
                    </div>
                    <div className="text-[11px] text-slate-400">Across Bangalore</div>
                  </div>
                </Link>
              </div>

              {/* Main Flagship Campus Card */}
              <div className="bg-[#0a0d16] text-white rounded-3xl p-6 shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left info */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-700/60 text-red-400 text-xs font-bold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Main Campus (HQ)</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Marathahalli, Bangalore
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      #43/2, Outer Ring Road, Above HDFC Bank, Marathahalli, Bangalore, Karnataka 560037
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://maps.google.com/?q=LearnMore+Technologies+Marathahalli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e62035] hover:bg-[#d0182c] text-white font-bold text-xs shadow-md transition"
                      >
                        <span>Get Directions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Features & Photo */}
                  <div className="md:col-span-5 space-y-2 text-xs text-slate-300 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                        <Laptop className="w-3.5 h-3.5" />
                      </div>
                      <span>Modern Labs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                      <span>Spacious Classrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span>Safe &amp; Accessible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <span>Vibrant Community</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Campuses Strip */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-600 uppercase tracking-wider">
                    OUR OTHER CAMPUSES IN BANGALORE
                  </span>
                  <Link
                    href="/locations"
                    className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    <span>View All Campuses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {OTHER_CAMPUSES.map((c, idx) => (
                    <Link
                      key={idx}
                      href={`/locations/${c.slug}`}
                      className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-red-400 shadow-xs hover:shadow-md transition group block"
                    >
                      <div className="aspect-[4/2.5] rounded-xl overflow-hidden bg-slate-100 mb-2">
                        <img
                          src={c.image}
                          alt={c.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="font-extrabold text-xs text-slate-900 truncate">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center justify-between mt-0.5">
                        <span className="truncate">{c.address}</span>
                        <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Send an Admission Inquiry Form Card (5 Cols) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-7 xl:p-8 border border-slate-200/90 shadow-xl relative">
                {/* Form Header */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-red-600/30">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base sm:text-lg xl:text-xl text-slate-900 leading-tight">
                        Send an Admission Inquiry
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                        Get batch schedules, fee details, counselling or a free demo class.
                      </p>
                    </div>
                  </div>

                  {/* Doodle Top Right */}
                  <div className="hidden 2xl:block text-right flex-shrink-0">
                    <span className="font-serif italic text-red-600 text-xs font-bold leading-tight block">
                      Start Your Journey Today!
                    </span>
                    <svg
                      className="w-7 h-5 text-red-500 ml-auto"
                      viewBox="0 0 35 25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M 5 5 Q 20 2 28 18" />
                      <path d="M 20 18 L 28 19 L 29 11" />
                    </svg>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                    <h4 className="text-2xl font-black text-slate-900">
                      Inquiry Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
                      Opening WhatsApp to connect directly with your dedicated counselor.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            type="email"
                            required
                            placeholder="e.g. rahul@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Mobile Number & Preferred Mode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            maxLength={10}
                            placeholder="e.g. 10-digit mobile number"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })}
                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Preferred Mode of Contact
                        </label>
                        <select
                          value={formData.contactMode}
                          onChange={(e) => setFormData({ ...formData, contactMode: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium cursor-pointer"
                        >
                          <option value="WhatsApp">WhatsApp Message</option>
                          <option value="Phone Call">Direct Phone Call</option>
                          <option value="Email">Email Communication</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Select Course & Preferred Campus */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Select Course / Program *
                        </label>
                        <div className="relative">
                          <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                          <select
                            required
                            value={formData.course}
                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium cursor-pointer"
                          >
                            <option value="">-- Choose Technology Track --</option>
                            <option value="Python Fullstack Master Program">Python Fullstack Master Program</option>
                            <option value="Data Analytics Master Program">Data Analytics Master Program</option>
                            <option value="Cloud DevOps Master Program">Cloud DevOps Master Program</option>
                            <option value="Software Testing Master Program">Software Testing Master Program</option>
                            <option value="Data Engineering Master Program">Data Engineering Master Program</option>
                            <option value="Data Science with AI Master Program">Data Science with AI Master Program</option>
                            <option value="Java Fullstack Master Program">Java Fullstack Master Program</option>
                            <option value="AWS Cloud Practitioner">AWS Cloud Solutions Architect</option>
                            <option value="Power BI & Tableau">Power BI &amp; Tableau Business Analytics</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Preferred Campus
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                          <select
                            value={formData.campus}
                            onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium cursor-pointer"
                          >
                            <option value="Marathahalli (HQ)">Marathahalli (Flagship HQ)</option>
                            <option value="BTM Layout Campus">BTM Layout Campus</option>
                            <option value="Kalyan Nagar Branch">Kalyan Nagar Branch</option>
                            <option value="Live Interactive Online">Live Interactive Online (Pan-India)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Your Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. I would like to know about weekend batches with placement support..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition font-medium resize-none"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="agreed"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300 cursor-pointer"
                      />
                      <label htmlFor="agreed" className="text-xs text-slate-600 cursor-pointer">
                        I agree to be contacted by LearnMore Technologies.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#e62035] hover:bg-[#d0182c] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/30 transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Privacy notice */}
                    <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1 pt-1">
                      <span>🔒</span>
                      <span>100% Secure. We respect your privacy and will never share your details.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FREQUENTLY ASKED QUESTIONS SECTION */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            {/* Left Header & CTA (4-5 Cols) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-black text-red-600 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>ADMISSION QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Frequently Asked <br className="hidden sm:inline" />
                <span className="text-red-600">Questions</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                Find quick answers to the most common questions. Still have doubts? Feel free to contact us.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#e62035] hover:bg-[#d0182c] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Handwritten Script */}
              <div className="pt-4 hidden xl:block">
                <div className="font-serif italic text-slate-400 text-xs font-semibold tracking-wide">
                  <span>Same Questions</span> <br />
                  <span>Bigger Opportunities</span>
                </div>
                <svg
                  className="w-10 h-7 text-red-500 mt-1"
                  viewBox="0 0 50 35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M 5 20 C 20 28, 35 22, 40 8" />
                  <path d="M 32 8 L 40 7 L 41 15" />
                </svg>
              </div>
            </div>

            {/* Middle Accordion FAQ List (7 Cols on lg, 5 Cols on xl) */}
            <div className="lg:col-span-7 xl:col-span-5 space-y-3">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-3.5 px-4 sm:px-5 flex items-center justify-between gap-3 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-red-600 transition"
                  >
                    <span>{item.q}</span>
                    <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                      {openFaqIndex === idx ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Cards (12 Cols on lg side-by-side, 3 Cols on xl stacked) */}
            <div className="lg:col-span-12 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              {/* Quote Card */}
              <div className="bg-rose-50/60 border border-rose-200/70 rounded-2xl p-5 space-y-2">
                <span className="text-3xl text-red-500 font-serif leading-none select-none">“</span>
                <div className="text-sm font-black text-slate-900 leading-snug">
                  Your Career Matters to Us.
                </div>
                <div className="text-[11px] text-slate-500 font-semibold">
                  — LearnMore Technologies
                </div>
              </div>

              {/* Still Have Questions Box */}
              <div className="bg-[#0f1422] text-white p-5 rounded-2xl border border-slate-800 space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800/60 text-red-400 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Still Have Questions?</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Talk to our counselors and get personalized guidance.
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=919036524555&text=Hello%20LearnMore%20Technologies,%20I%20have%20questions%20regarding%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <span>Talk to a Counselor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM BANNER SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full text-white py-10 sm:py-14 lg:py-16 overflow-hidden border-t border-b border-black/80 bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-cta-banner.png"
            alt="Ready to Build a Better Future Banner"
            className="w-full h-full object-cover object-[70%_35%] sm:object-[center_35%]"
          />
          {/* Subtle Dark Vignette and Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/85 lg:from-black/85 lg:via-transparent lg:to-black/85" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column (6 Cols): Left script & Heading + Subtitle */}
            <div className="lg:col-span-7 xl:col-span-6 flex items-center gap-6 lg:gap-8">
              {/* Left Script: Learn Skill Grow */}
              <div className="hidden xl:flex flex-col items-start font-serif italic text-white text-2xl lg:text-3xl font-medium tracking-wide leading-tight select-none opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] -rotate-3 shrink-0">
                <span>Learn</span>
                <span className="ml-1">Skill</span>
                <span className="ml-2">Grow</span>
              </div>

              <div className="space-y-1.5 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Ready to Build a Better Future?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-100 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-w-lg">
                  Connect with us today and take the first step towards a successful tech career.
                </p>
              </div>
            </div>

            {/* Empty Center Space (1-2 Cols) so person silhouette remains unobstructed */}
            <div className="hidden lg:block lg:col-span-1 xl:col-span-2" />

            {/* Right Column (4-5 Cols): Enquire Now Button + New Skills Script */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-5 lg:gap-6">
              <div className="shrink-0">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-[#ff1f3d] hover:bg-[#e01431] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-red-600/50 hover:shadow-red-600/70 transition-all duration-200 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Script: New Skills Brighter Tomorrow */}
              <div className="hidden sm:flex flex-col items-end font-serif italic text-white text-xl lg:text-2xl font-medium tracking-wide leading-tight select-none opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] rotate-2 text-right shrink-0">
                <span>New</span>
                <span className="mr-0.5">Skills</span>
                <span className="mr-1">Brighter</span>
                <span className="mr-1.5">Tomorrow</span>
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
