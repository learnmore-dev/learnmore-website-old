"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  Laptop,
  ShieldCheck,
  Users,
  Award,
  Calendar,
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Phone,
  Target,
  Eye,
  BarChart3,
  Sparkles,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";

// Campus data matching the design
const CAMPUSES = [
  {
    name: "Marathahalli Campus (Flagship Branch)",
    location: "Marathahalli, Bangalore",
    slug: "marathahalli",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "BTM Layout Campus",
    location: "BTM Layout, Bangalore",
    slug: "btm",
    image: "/images/locations/btm-campus.png",
  },
  {
    name: "Kalyan Nagar Branch",
    location: "Kalyan Nagar, Bangalore",
    slug: "kalyan-nagar",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
];

// Faculty mentors matching uploaded team data and assets
const FACULTY = [
  {
    name: "Vishal B Pandey",
    role: "Senior Project Manager",
    bio: "12+ years of experience leading enterprise project delivery, agile sprint architecture, and full stack governance.",
    tags: ["Project Management", "Agile / Scrum", "Enterprise Systems"],
    location: "Bangalore, India",
    rating: "4.9",
    reviews: "135",
    image: "/trainers/VishalBPandey.png",
  },
  {
    name: "Namrata Halabannavar",
    role: "UI & UX Designer, Frontend Expert",
    bio: "Specialist in intuitive digital experiences, design systems, Figma prototypes, and modern React frontend architectures.",
    tags: ["UI/UX Design", "Frontend Expert", "React.js"],
    location: "Bangalore, India",
    rating: "4.9",
    reviews: "140",
    image: "/trainers/NamrataHalabannavar.png",
  },
  {
    name: "Kumar Abhishek",
    role: "Software Developer",
    bio: "11+ years in enterprise backend development, distributed microservices, scalable API gateways, and cloud infrastructure.",
    tags: ["Software Development", "Python", "Cloud Systems"],
    location: "Bangalore, India",
    rating: "4.9",
    reviews: "120",
    image: "/trainers/KumarAbhishek.png",
  },
  {
    name: "Riddhi Sirsikar",
    role: "Full Stack Developer",
    bio: "Expertise in full stack web platforms, reactive Node.js & React interfaces, and production microservices architecture.",
    tags: ["Full Stack", "React.js", "Node.js"],
    location: "Bangalore, India",
    rating: "4.8",
    reviews: "115",
    image: "/trainers/RiddhiSirsikar.png",
  },
  {
    name: "Naveena",
    role: "Database Management & Designer",
    bio: "Specialist in enterprise database schema design, PostgreSQL & SQL Server performance optimization, and data governance.",
    tags: ["Database Design", "PostgreSQL", "SQL Server"],
    location: "Bangalore, India",
    rating: "4.8",
    reviews: "98",
    image: "/trainers/Naveena.png",
  },
  {
    name: "Althaf",
    role: "Backend Developer",
    bio: "Architecting high-throughput backend APIs, microservices, asynchronous task queues, and secure server architectures.",
    tags: ["Backend Architecture", "Node.js", "REST APIs"],
    location: "Bangalore, India",
    rating: "4.9",
    reviews: "110",
    image: "/trainers/altaf.png",
  },
];

export function AboutUsExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [campusScrollIndex, setCampusScrollIndex] = useState(0);

  const handlePrevCampus = () => {
    setCampusScrollIndex((prev) => (prev === 0 ? CAMPUSES.length - 1 : prev - 1));
  };

  const handleNextCampus = () => {
    setCampusScrollIndex((prev) => (prev === CAMPUSES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Navy / Black with glowing accents & students visual) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#060a12] text-white pt-12 pb-0 lg:pt-16 lg:pb-0 overflow-hidden">
        {/* Background Ambient Glow & Geometric Wireframes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
          {/* Subtle Wireframe Polygon Accents */}
          <svg
            className="absolute top-16 left-1/3 w-28 h-28 text-slate-700/30 opacity-60 hidden lg:block"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="90" y1="25" x2="10" y2="75" />
            <line x1="90" y1="75" x2="10" y2="25" />
          </svg>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md">
                <span className="text-amber-400">👑</span>
                <span>Bangalore's #1 IT Training Institute</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight leading-[1.12] text-white">
                Empowering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#EF4444]">
                  Technology Careers
                </span> <br />
                Through Practical <br />
                Lab-First Education.
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Hands-on training, real-world projects and expert mentorship to help you build in-demand skills and a successful tech career.
              </p>

              {/* 4 Feature Pills in a Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    Real-time Projects
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    Industry Expert Trainers
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    100% Placement Support
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    Flexible Learning
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/courses"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-red-600/30 transition transform active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Right Visuals */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                {/* Handwritten Doodle Annotation */}
                <div className="absolute -top-6 right-6 z-20 text-right hidden sm:block">
                  <div className="font-serif italic text-slate-300 text-sm font-semibold tracking-wide leading-tight flex flex-col items-end">
                    <span>Learn</span>
                    <span>Build</span>
                    <span>Grow</span>
                  </div>
                  <svg
                    className="w-10 h-8 text-red-500 ml-auto -mt-1"
                    viewBox="0 0 50 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M 10 5 Q 35 15 42 30" />
                    <path d="M 36 28 L 43 31 L 44 23" />
                  </svg>
                </div>

                {/* Hero Students Collage Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 aspect-[4/4.6] bg-gradient-to-t from-[#0b101d] via-slate-900 to-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                    alt="LearnMore Technologies Students and Faculty"
                    className="w-full h-full object-cover object-center brightness-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Bottom Right Glassmorphism Card */}
                <div className="absolute -bottom-5 right-2 sm:-right-4 z-20 bg-[#131726]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-4 shadow-2xl max-w-[280px]">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-xs sm:text-sm leading-tight">
                      Your Tech Career Starts Here
                    </h4>
                  </div>
                  <button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center flex-shrink-0 transition shadow-md cursor-pointer"
                    aria-label="Enquire now"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STATS BAR (Dark Surface with 4 Columns and Dividers) */}
          {/* ========================================================================= */}
          <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                15,000+
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Students Trained
              </div>
            </div>

            <div className="space-y-1 md:border-l border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-1.5">
                <span>4.8</span>
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Average Rating
              </div>
            </div>

            <div className="space-y-1 border-l border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                500+
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Hiring Partners
              </div>
            </div>

            <div className="space-y-1 border-l border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                24 LPA
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Highest Package
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Curved Wave Transition into WHO WE ARE Section */}
        <div className="w-full overflow-hidden leading-none z-10 pointer-events-none mt-12 sm:mt-16 block -mb-0.5">
          <svg
            className="relative block w-full h-10 sm:h-16 lg:h-24 text-[#f8fafc] fill-[#f8fafc]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C380,95 1060,95 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE SECTION (Light Background + 2x2 Feature Cards Grid) */}
      {/* ========================================================================= */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-black text-red-600 uppercase tracking-widest">
                WHO WE ARE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Bangalore's Trusted Technology Upskilling Partner
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                LearnMore Technologies is an ISO 9001:2015 certified IT training institution based in Bangalore. We focus on practical, industry-relevant learning with expert trainers, modern infrastructure and dedicated placement support.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#E52535] hover:bg-[#c91827] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 2x2 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    100% Practical Labs
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Gain real-world experience with live projects and hands-on training.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    100% Placement Support
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dedicated career guidance and interview preparation.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Senior MNC Faculty
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Learn from industry professionals with real-world experience.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Global Certifications
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Prepare for certifications like AWS, Azure, Google Cloud and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE VALUES & QUOTE STRIP */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
            {/* Value 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Our Mission</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Make high-quality tech education accessible to every learner.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Our Vision</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  To be the most trusted IT training institute in India.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Student-First Approach</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Your goals, our priority.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Proven Track Record</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Thousands of successful careers and counting.
                </p>
              </div>
            </div>

            {/* Value 5: Quote Card */}
            <div className="lg:border-l lg:border-slate-200 lg:pl-6 flex items-start gap-3">
              <span className="text-3xl text-red-400 font-serif leading-none select-none">“</span>
              <div>
                <div className="text-sm font-black text-slate-900 leading-snug">
                  Skills today, <br />
                  A better tomorrow.
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-1">
                  — LearnMore Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INSTRUCTORS & MENTORS (Dark Navy Section) */}
      {/* ========================================================================= */}
      <section className="pt-16 sm:pt-24 pb-0 bg-[#070b14] text-white relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-black text-red-500 uppercase tracking-widest">
                INSTRUCTORS &amp; MENTORS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Learn from Practicing Industry Architects
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Our industry mentors bring real-world experience to the classroom.
              </p>
            </div>

            <div className="flex items-center gap-4 self-start md:self-auto">
              {/* Handwritten Doodle Arrow */}
              <div className="hidden lg:flex items-center gap-1.5 text-right font-serif italic text-slate-300 text-xs">
                <span>Meet Faculty</span>
                <svg
                  className="w-8 h-6 text-red-500"
                  viewBox="0 0 40 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M 5 5 Q 25 2 30 18" />
                  <path d="M 23 18 L 30 20 L 33 12" />
                </svg>
              </div>

              <Link
                href="/trainers"
                className="px-5 py-2.5 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-white font-bold text-xs flex items-center gap-1.5 transition"
              >
                <span>View All Faculty</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3 Faculty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACULTY.map((f, i) => (
              <div
                key={i}
                className="bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition duration-200"
              >
                <div className="space-y-4">
                  {/* Avatar & Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">
                        {f.name}
                      </h3>
                      <p className="text-xs font-bold text-red-600 mt-0.5">
                        {f.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {f.bio}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span className="truncate max-w-[180px]">{f.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-slate-800">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{f.rating} ({f.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smooth Curved Wave Transition into CAMPUS NETWORK Section */}
        <div className="w-full overflow-hidden leading-none z-10 pointer-events-none mt-12 sm:mt-16 block -mb-0.5">
          <svg
            className="relative block w-full h-10 sm:h-16 lg:h-24 text-white fill-white"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C320,70 820,10 1440,50 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CAMPUS NETWORK (White Section with 5 Campus Cards & Carousel Arrows) */}
      {/* ========================================================================= */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 bg-white relative">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-black text-red-600 uppercase tracking-widest">
                CAMPUS NETWORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                5 State-of-the-Art Campuses in Bangalore
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Visit our modern labs and experience a real-world learning environment.
              </p>
            </div>

            <Link
              href="/locations"
              className="px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 text-red-600 font-bold text-xs flex items-center gap-1.5 transition self-start md:self-auto shadow-xs"
            >
              <span>View All Campuses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Campus Cards Row */}
          <div className="relative">
            {/* Carousel Control Buttons */}
            <button
              onClick={handlePrevCampus}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:text-red-600 flex items-center justify-center transition cursor-pointer"
              aria-label="Previous campus"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextCampus}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:text-red-600 flex items-center justify-center transition cursor-pointer"
              aria-label="Next campus"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Grid of 3 Campuses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {CAMPUSES.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition group flex flex-col justify-between"
                >
                  <div className="aspect-[4/2.8] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <h3 className="font-extrabold text-sm text-slate-900 leading-snug line-clamp-2">
                      {c.name}
                    </h3>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                        <span className="truncate">{c.location}</span>
                      </div>
                      <Link
                        href={`/locations/${c.slug}`}
                        className="w-7 h-7 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition flex-shrink-0"
                        aria-label={`View ${c.name}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM CTA SECTION (Exact match of reference image) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#06070c] text-white py-14 sm:py-18 overflow-hidden border-t border-red-950/40">
        {/* Background Ambient Red Glows & Laser Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Radial Ambient Glow */}
          <div className="absolute -top-24 left-1/3 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-red-700/10 rounded-full blur-[160px]" />

          {/* Left Diagonal Laser Lines */}
          <svg
            className="absolute top-0 left-0 w-48 h-48 text-red-500/30 opacity-70 hidden sm:block"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="0" y1="30" x2="160" y2="190" strokeDasharray="100 20" />
            <line x1="20" y1="0" x2="190" y2="170" strokeWidth="2" />
            <line x1="0" y1="80" x2="120" y2="200" strokeDasharray="60 30" />
          </svg>

          {/* Right Fluid Ribbon Wave Contours */}
          <svg
            className="absolute -right-10 bottom-0 w-[480px] h-[280px] text-red-600/25 opacity-80"
            viewBox="0 0 500 300"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M50 280 C 150 180, 280 290, 480 120"
              strokeWidth="2.5"
            />
            <path
              d="M80 300 C 180 200, 310 310, 500 150"
              strokeWidth="1.8"
            />
            <path
              d="M120 300 C 220 220, 340 320, 500 180"
              strokeWidth="1.2"
            />
            <path
              d="M160 300 C 260 240, 370 330, 500 210"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (Left 6.5 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              {/* Glowing Red Diamond Star Accent on left margin */}
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 text-red-500 text-xl font-bold hidden xl:block animate-pulse">
                ✦
              </div>

              {/* Limited Seats Pill Badge */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#350b13] border border-[#7f1d1d]/80 text-[#ff4d6d] text-[11px] font-extrabold uppercase tracking-wider mb-3.5 shadow-sm">
                LIMITED SEATS
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-[1.2] mb-2.5">
                Start Your Technology Transformation <br className="hidden sm:inline" />
                with Bangalore's Top Institute
              </h2>

              {/* Subtitle */}
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg mb-6 leading-relaxed">
                Book a free demo session to experience our lab-first methodology.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#e62035] hover:bg-[#d0182c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://api.whatsapp.com/send?phone=919036524555&text=Hello%20LearnMore%20Technologies,%20I%20would%20like%20to%20talk%20to%20a%20career%20counselor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#0c1017]/95 hover:bg-[#151c28] border border-slate-700/80 text-white font-semibold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Talk to a Counselor</span>
                  <span className="text-xs text-slate-400">↘</span>
                </a>
              </div>
            </div>

            {/* Middle Feature Badges (3 cols) */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-3">
              {/* Badge 1 */}
              <div className="bg-[#121624]/80 border border-slate-800/90 rounded-2xl p-3.5 flex items-center gap-3.5 backdrop-blur-md shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#330c17] border border-red-700/50 flex items-center justify-center text-red-400 flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-100">
                  Free Career Counselling
                </span>
              </div>

              {/* Badge 2 */}
              <div className="bg-[#121624]/80 border border-slate-800/90 rounded-2xl p-3.5 flex items-center gap-3.5 backdrop-blur-md shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#330c17] border border-rose-700/50 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-100">
                  Flexible Batch Timings
                </span>
              </div>

              {/* Badge 3 */}
              <div className="bg-[#121624]/80 border border-slate-800/90 rounded-2xl p-3.5 flex items-center gap-3.5 backdrop-blur-md shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#280c35] border border-purple-700/50 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-100">
                  Online &amp; Offline Options
                </span>
              </div>
            </div>

            {/* Right Handwritten Script & Curved Arrow (3 cols) */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center lg:items-end justify-center relative">
              <div className="space-y-1 transform -rotate-3 text-center lg:text-right">
                <div className="font-serif italic text-slate-200 text-sm sm:text-base font-semibold leading-tight tracking-wide drop-shadow-sm">
                  <span>Same</span> <br />
                  <span>Learning</span> <br />
                  <span>Bigger</span> <br />
                  <span>Opportunities</span>
                </div>
                {/* Curved Drawn Red Arrow */}
                <svg
                  className="w-16 h-12 text-red-500 ml-auto mr-auto lg:mr-0 mt-1"
                  viewBox="0 0 70 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 12 38 C 30 46, 52 42, 60 14" />
                  <path d="M 48 16 L 60 12 L 63 24" />
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
