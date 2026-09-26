"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  MessageSquare,
  MapPin,
  BookOpen,
  Sparkles,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Search,
  Award,
  Users,
  GraduationCap,
  Briefcase,
  HelpCircle,
  FileText,
  Home,
  Info,
  Calendar,
} from "lucide-react";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { topUtilityBarData } from "@/data/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
  onOpenSearch?: () => void;
}

export function MobileDrawer({
  isOpen,
  onClose,
  onOpenEnquiry,
  onOpenSearch,
}: MobileDrawerProps) {
  const [coursesExpanded, setCoursesExpanded] = useState(true);
  const [locationsExpanded, setLocationsExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-[85%] max-w-sm bg-slate-900 text-white h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto border-r border-slate-800">
        {/* Drawer Header */}
        <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="LearnMore Technologies"
              width={110}
              height={32}
              className="object-contain"
            />
            <p className="text-[11px] text-red-400 font-semibold mt-1">
              Top-Rated Software Training Institute
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Announcement Strip */}
        <div className="bg-gradient-to-r from-red-950/70 to-slate-900 px-4 py-2 border-b border-red-900/40 text-[11px] text-red-200 flex items-center gap-1.5 font-medium">
          <Calendar className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
          <span>Next Classroom Batch Starts This Monday</span>
        </div>

        {/* Mobile Quick Search Bar */}
        <div className="p-3 bg-slate-950/60 border-b border-slate-800/80">
          <button
            onClick={() => {
              onClose();
              onOpenSearch?.();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white shadow-inner transition text-xs font-medium"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-red-400" />
              <span>Search 12+ courses &amp; tools...</span>
            </div>
            <span className="text-[10px] font-semibold bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
              Ctrl+K
            </span>
          </button>
        </div>

        {/* Quick Contact Bar */}
        <div className="grid grid-cols-2 gap-2 px-3 py-2 bg-slate-950/40 border-b border-slate-800 text-xs">
          <a
            href="tel:+919036524555"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span>Call Campus</span>
          </a>
          <a
            href="https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20would%20like%20details%20on%20upcoming%20courses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-950/80 border border-emerald-800/50 hover:bg-emerald-900/80 text-emerald-300 font-semibold transition"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="p-3 space-y-1.5 flex-1">
          {/* Home */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 hover:text-white transition"
          >
            <Home className="w-4 h-4 text-red-400" />
            <span>Home</span>
          </Link>

          {/* All Programs / Courses Accordion */}
          <div className="border border-slate-800 rounded-xl bg-slate-950/40 overflow-hidden">
            <button
              onClick={() => setCoursesExpanded(!coursesExpanded)}
              className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>All Courses &amp; Programs</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  coursesExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {coursesExpanded && (
              <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-900/80 border-t border-slate-800">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/courses/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                ))}
                <Link
                  href="/courses"
                  onClick={onClose}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg text-sm font-bold text-red-400 hover:bg-slate-800/80 transition"
                >
                  <span>→ View All 50+ Courses Catalog</span>
                </Link>
              </div>
            )}
          </div>

          {/* Corporate Training */}
          <Link
            href="/corporate-training"
            onClick={onClose}
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 hover:text-white transition"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Corporate Training</span>
          </Link>

          {/* Placement */}
          <Link
            href="/placement"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 hover:text-white transition"
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>100% Placement Cell</span>
            </div>
            <span className="text-[10px] bg-red-500/20 border border-red-500/40 text-red-400 px-2 py-0.5 rounded-full font-bold">
              100%
            </span>
          </Link>

          {/* Resources Dropdown Accordion */}
          <div className="border border-slate-800 rounded-xl bg-slate-950/40 overflow-hidden">
            <button
              onClick={() => setResourcesExpanded(!resourcesExpanded)}
              className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Resources &amp; Insights</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  resourcesExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {resourcesExpanded && (
              <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-900/80 border-t border-slate-800">
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="flex items-center gap-2 py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Technical Blog &amp; Tutorials</span>
                </Link>
                <Link
                  href="/faq"
                  onClick={onClose}
                  className="flex items-center gap-2 py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>FAQs &amp; Admissions</span>
                </Link>
                <Link
                  href="/testimonials"
                  onClick={onClose}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  <span>Student Reviews &amp; Stories</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded font-bold">
                    4.9 ★
                  </span>
                </Link>
                <Link
                  href="/trainers"
                  onClick={onClose}
                  className="flex items-center gap-2 py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  <span>Expert Faculty Directory</span>
                </Link>
                <Link
                  href="/become-a-teacher"
                  onClick={onClose}
                  className="flex items-center gap-2 py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Become a Trainer</span>
                </Link>
              </div>
            )}
          </div>

          {/* Industrial Internship */}
          <Link
            href="/internship"
            onClick={onClose}
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 hover:text-white transition"
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Industrial Internship</span>
          </Link>

          {/* Locations / Campuses Accordion */}
          <div className="border border-slate-800 rounded-xl bg-slate-950/40 overflow-hidden">
            <button
              onClick={() => setLocationsExpanded(!locationsExpanded)}
              className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Campuses &amp; Branches</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  locationsExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {locationsExpanded && (
              <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-900/80 border-t border-slate-800">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                  >
                    <span>📍 {loc.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                ))}
                <Link
                  href="/locations"
                  onClick={onClose}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg text-sm font-bold text-red-400 hover:bg-slate-800/80 transition"
                >
                  <span>→ View All Campus Maps &amp; Transit</span>
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link
            href="/contact-us"
            onClick={onClose}
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 hover:text-white transition"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Contact &amp; Directions</span>
          </Link>

          {/* About Us */}
          <Link
            href="/about-us"
            onClick={onClose}
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-[15px] font-bold text-slate-200 hover:bg-slate-800/60 hover:text-white transition"
          >
            <Info className="w-4 h-4 text-blue-400" />
            <span>About Us</span>
          </Link>
        </div>

        {/* Drawer Bottom CTA & Social Links */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-red-600/30 transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Free Demo Class</span>
          </button>

          <div className="text-center">
            <p className="text-[11px] text-slate-400 font-semibold mb-2">
              Follow Us on Social Media
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/learnmore_technologies?stkn=MXJld2hldXY5ZWs3ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/learnmoretechnologiesbangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:bg-[#1877f2] hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@learnnmore?si=vhpKcUMcilVArZkd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/LearnMoreEdu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:bg-black hover:text-white flex items-center justify-center transition border border-slate-700/60"
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
                className="w-8 h-8 rounded-full bg-slate-800 text-[#00b67a] hover:bg-[#00b67a] hover:text-white flex items-center justify-center transition border border-[#00b67a]/40"
                aria-label="Trustpilot Reviews"
                title="Trustpilot Reviews"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3.708 7.514 8.292 1.205-6 5.848 1.416 8.258L12 18.927l-7.416 3.898L6 14.567 0 8.719l8.292-1.205L12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
