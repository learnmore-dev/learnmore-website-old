"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Phone,
  ChevronDown,
  ArrowRight,
  Sparkles,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  MapPin,
  Mail,
  Search,
} from "lucide-react";
import { QuickEnquiryModal } from "../forms/QuickEnquiryModal";
import { CourseSearchModal } from "../search/CourseSearchModal";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  // Detect OS for shortcut display (⌘K vs Ctrl+K)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent));
    }
  }, []);

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-open enquiry modal after 3 seconds on page load / reload
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryModalOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Close all dropdowns when navigating between pages
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsResourcesOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full max-w-full bg-[#070b14]/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl">
        {/* Top Info & Social Links Bar (Visible on Tablet & Desktop, hidden on Mobile for clean view) */}
        <div className="bg-[#04060d] text-slate-300 border-b border-slate-800/80 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 xl:px-14 hidden md:block">
          <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-3">
            {/* Left Info: Contact & Campuses */}
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <a
                href="tel:+919036524555"
                className="flex items-center gap-1.5 hover:text-white transition font-bold text-slate-200 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff2a3e]" />
                <span>+91 90365 24555</span>
              </a>
              <span className="hidden lg:flex items-center gap-1.5 text-slate-400 font-medium whitespace-nowrap text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#ff2a3e] flex-shrink-0" />
                <span>3 Campuses: Marathahalli • BTM Layout • Kalyan Nagar</span>
              </span>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <span className="text-slate-400 text-[11px] font-semibold hidden sm:inline">
                Follow Us:
              </span>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/learnmore_technologies?stkn=MXJld2hldXY5ZWs3ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-slate-800/90 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-slate-800/90 hover:bg-[#0077b5] text-slate-300 hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/learnmoretechnologiesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-slate-800/90 hover:bg-[#1877f2] text-slate-300 hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@learnnmore?si=vhpKcUMcilVArZkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-slate-800/90 hover:bg-[#ff0000] text-slate-300 hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115"
                  aria-label="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/LearnMoreEdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-slate-800/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115 border border-slate-700/60"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Justdial */}
                <a
                  href="https://www.justdial.com/Bangalore/Learn-More-Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#ff6600]/20 hover:bg-[#ff6600] text-[#ff8822] hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115 text-[10px] font-black border border-[#ff6600]/40"
                  aria-label="Justdial"
                >
                  JD
                </a>

                {/* Trustpilot */}
                <a
                  href="https://www.trustpilot.com/review/learnmoretechnologies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#00b67a]/20 hover:bg-[#00b67a] text-[#00b67a] hover:text-white flex items-center justify-center transition shadow-xs hover:scale-115 text-[10px] font-black border border-[#00b67a]/40"
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

        <div className="max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-14">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-20 xl:h-24 gap-2 sm:gap-4">
            {/* Logo */}
            <Link href="/" className="logo flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="LearnMore Technologies Logo"
                  width={110}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5 text-[13px] xl:text-[14.5px] 2xl:text-[16px] font-bold text-slate-200">
              <Link
                href="/"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition whitespace-nowrap relative ${
                  pathname === "/"
                    ? "text-white font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-red-500"
                    : "hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Home
              </Link>

              <Link
                href="/courses"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition whitespace-nowrap relative ${
                  pathname === "/courses"
                    ? "text-white font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-red-500"
                    : "hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Programs
              </Link>

              {/* Courses MegaMenu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setIsResourcesOpen(false);
                  setIsMegaMenuOpen(true);
                }}
              >
                <button
                  onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                  className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg flex items-center gap-1 transition whitespace-nowrap cursor-pointer ${
                    isMegaMenuOpen
                      ? "text-red-400 bg-slate-800/80"
                      : "hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-400 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180 text-red-400" : ""}`} />
                </button>
              </div>

              <Link
                href="/corporate-training"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className="px-2 xl:px-3 2xl:px-3.5 py-2 hover:text-white rounded-lg hover:bg-slate-800/50 transition whitespace-nowrap"
              >
                Corporate
              </Link>

              <Link
                href="/placement"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className="px-2 xl:px-3 2xl:px-3.5 py-2 hover:text-white rounded-lg hover:bg-slate-800/50 transition whitespace-nowrap"
              >
                Placements
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(true);
                }}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  onClick={() => setIsResourcesOpen((prev) => !prev)}
                  className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-800/50 flex items-center gap-1 transition whitespace-nowrap cursor-pointer ${
                    isResourcesOpen ? "text-red-400 bg-slate-800/80" : ""
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-400 transition-transform duration-200 ${isResourcesOpen ? "rotate-180 text-red-400" : ""}`} />
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#0a0f1d] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-slate-700/90 p-2 z-50 backdrop-blur-2xl animate-fadeIn space-y-1">
                    <Link
                      href="/blog"
                      onClick={() => setIsResourcesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-red-500/15 hover:text-red-400 transition"
                    >
                      Technical Blog &amp; Tutorials
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setIsResourcesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-red-500/15 hover:text-red-400 transition"
                    >
                      FAQs &amp; Admissions
                    </Link>
                    <Link
                      href="/testimonials"
                      onClick={() => setIsResourcesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-red-500/15 hover:text-red-400 transition"
                    >
                      Student Reviews (4.9★)
                    </Link>
                    <Link
                      href="/trainers"
                      onClick={() => setIsResourcesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-red-500/15 hover:text-red-400 transition"
                    >
                      Faculty Directory
                    </Link>
                    <Link
                      href="/become-a-teacher"
                      onClick={() => setIsResourcesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-red-500/15 hover:text-red-400 transition"
                    >
                      Become a Trainer
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/internship"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition whitespace-nowrap relative ${
                  pathname === "/internship"
                    ? "text-white font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-red-500"
                    : "hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Internship
              </Link>

              <Link
                href="/locations"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition whitespace-nowrap relative ${
                  pathname === "/locations"
                    ? "text-white font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-red-500"
                    : "hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Locations
              </Link>

              <Link
                href="/contact-us"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition whitespace-nowrap relative ${
                  pathname === "/contact-us"
                    ? "text-white font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-red-500"
                    : "hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Contact
              </Link>

              <Link
                href="/about-us"
                onMouseEnter={() => {
                  setIsMegaMenuOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`px-2 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition whitespace-nowrap relative ${
                  pathname === "/about-us"
                    ? "text-white font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-red-500"
                    : "hover:text-white hover:bg-slate-800/50"
                }`}
              >
                About
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3.5 flex-shrink-0">
              {/* Desktop Course Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-300 hover:text-white transition text-xs xl:text-sm font-medium shadow-inner group whitespace-nowrap"
                aria-label="Search courses"
              >
                <Search className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="hidden 2xl:inline">Search courses...</span>
                <span className="2xl:hidden">Search</span>
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] xl:text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-700 rounded shadow-xs ml-1">
                  {isMac ? "⌘K" : "Ctrl+K"}
                </kbd>
              </button>

              {/* Mobile Search Button (Visible only on small screens < 640px) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="sm:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-800 border border-slate-800 transition"
                aria-label="Search courses"
              >
                <Search className="w-4 h-4 text-red-400" />
              </button>

              {/* Enquire Now Pill Button */}
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="px-3 sm:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm lg:text-[15px] shadow-lg shadow-red-600/30 transition transform active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileDrawerOpen(true)}
                className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:bg-slate-800 xl:hidden border border-slate-800 transition"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* MegaMenu Component */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Course Search Modal */}
      <CourseSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
}
