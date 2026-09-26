"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Phone,
  Clock,
  Navigation,
  CheckCircle2,
  Building2,
  Train,
  BookOpen,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Compass,
  Globe,
  Search,
  Filter,
} from "lucide-react";
import { QuickEnquiryModal } from "@/components/forms/QuickEnquiryModal";
import { allLocationsDirectory, LocationDirectoryItem } from "@/data/locationsDirectory";

// 3 Primary Physical Campuses Data
const campuses = [
  {
    name: "Marathahalli Campus",
    isFlagship: true,
    badgeText: "FLAGSHIP CAMPUS & HQ",
    tagline: "Where Careers Begin",
    slug: "marathahalli",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "Our flagship center located directly on Outer Ring Road tech corridor. Equipped with modern high-spec workstation labs and full-time faculty.",
    address: "#43/2, 2nd Floor, Above HDFC Bank, Outer Ring Road, Marathahalli, Bangalore – 560037",
    landmark: "Opposite Kalamandir & Next to Brand Factory",
    metro: "Near Marathahalli Bridge & Outer Ring Road Transit Hub",
    facility: "Spacious AC labs, Gigabit Fiber Internet & 24/7 Practice Access",
    timings: "Mon - Sun : 8:00 AM - 8:30 PM",
    phone: "+91 90365 24555",
    callNumber: "+919036524555",
    mapUrl: "https://maps.google.com/?q=LearnMore+Technologies+Marathahalli",
    popularCourses: [
      { name: "Generative AI", slug: "generative-ai-course-in-marathahalli" },
      { name: "Python Full Stack", slug: "python-full-stack-training-in-marathahalli" },
      { name: "AWS Solutions", slug: "aws-training-in-marathahalli" },
      { name: "Data Analytics", slug: "best-data-analytics-training-in-marathahalli" },
      { name: "Software Testing QA", slug: "software-testing-training-in-marathahalli" },
      { name: "Java Full Stack", slug: "java-full-stack-training-in-marathahalli" },
    ],
  },
  {
    name: "BTM Layout Campus",
    isFlagship: false,
    badgeText: "SOUTH BANGALORE HUB",
    tagline: "Learn Connect Grow",
    slug: "btm",
    image: "/images/locations/btm-campus.png",
    description: "Centrally located on 100 Feet Ring Road with direct connectivity to Koramangala, HSR Layout, Jayanagar, and Silk Board.",
    address: "#77, 100 Feet Ring Road, 2nd Stage, BTM Layout, Bangalore – 560076",
    landmark: "Near Udupi Garden Signal & Next to CCD",
    metro: "Close to Rashtreeya Vidyalaya Road Metro & Silk Board Junction",
    facility: "Modern workstation labs, dedicated interview preparation cabins",
    timings: "Mon - Sun : 8:00 AM - 8:30 PM",
    phone: "+91 90365 42555",
    callNumber: "+919036542555",
    mapUrl: "https://maps.google.com/?q=LearnMore+Technologies+BTM",
    popularCourses: [
      { name: "Generative AI", slug: "generative-ai-course-in-btm" },
      { name: "Python Full Stack", slug: "python-full-stack-training-in-btm" },
      { name: "Data Analytics", slug: "data-analytics-training-in-btm" },
      { name: "Java Full Stack", slug: "the-best-java-full-stack-training-in-btm" },
      { name: "Software Testing", slug: "software-testing-training-in-btm" },
      { name: "AWS Cloud", slug: "aws-training-in-btm" },
    ],
  },
  {
    name: "Kalyan Nagar Branch",
    isFlagship: false,
    badgeText: "NORTH & EAST BANGALORE HUB",
    tagline: "Learn Achieve Belong",
    slug: "kalyan-nagar",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    description: "Serving North and East Bangalore tech aspirants across Kammanahalli, Banaswadi, HRBR Layout, and Manyata Tech Park corridor.",
    address: "#24, CMR Main Road, HRBR Layout 2nd Block, Kalyan Nagar, Bangalore – 560043",
    landmark: "Near Kammanahalli Main Road & CMR Law College",
    metro: "Near Kalyan Nagar Bus Depot & Banaswadi Railway Station",
    facility: "Interactive digital classrooms, dedicated career counseling desks",
    timings: "Mon - Sun : 8:00 AM - 8:30 PM",
    phone: "+91 90363 54551",
    callNumber: "+919036354551",
    mapUrl: "https://maps.google.com/?q=LearnMore+Technologies+Kalyan+Nagar",
    popularCourses: [
      { name: "Generative AI", slug: "generative-ai-course-in-kalyan-nagar" },
      { name: "Python Full Stack", slug: "python-full-stack-training-in-kalyan-nagar" },
      { name: "AWS Cloud Training", slug: "aws-training-in-kalyan-nagar" },
      { name: "Software Testing QA", slug: "software-testing-training-in-kalyan-nagar" },
      { name: "Java Full Stack", slug: "java-full-stack-training-in-kalyan-nagar" },
      { name: "Microsoft Azure", slug: "microsoft-azure-training-in-kalyan-nagar" },
    ],
  },
];

const categoryTabs = [
  "All Locations",
  "Physical Campuses",
  "South Bangalore",
  "East Bangalore",
  "North Bangalore",
  "Indian Metro Hubs",
  "Global Virtual Hubs",
];

export function LocationsExperience() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("All Locations");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLocations = useMemo(() => {
    return allLocationsDirectory.filter((item) => {
      // Tab filter
      let matchesTab = true;
      if (selectedTab === "Physical Campuses") {
        matchesTab = item.category === "Physical Campus";
      } else if (selectedTab === "South Bangalore") {
        matchesTab = item.zone === "South Bangalore";
      } else if (selectedTab === "East Bangalore") {
        matchesTab = item.zone === "East Bangalore";
      } else if (selectedTab === "North Bangalore") {
        matchesTab = item.zone === "North Bangalore";
      } else if (selectedTab === "Indian Metro Hubs") {
        matchesTab = item.category === "Indian Metro Hub";
      } else if (selectedTab === "Global Virtual Hubs") {
        matchesTab = item.category === "International Virtual Hub";
      }

      // Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.addressSnippet.toLowerCase().includes(query) ||
        item.hubCampus.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query) ||
        item.popularCourseLinks.some((c) => c.courseName.toLowerCase().includes(query));

      return matchesTab && matchesSearch;
    });
  }, [selectedTab, searchQuery]);

  return (
    <div className="bg-[#fcfdfe] text-slate-900 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-[#070b14] text-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 w-full space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#ff334b] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#ff334b]"></span>
                <span>BANGALORE CAMPUSES &amp; GLOBAL HUBS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.12]">
                Explore All Locations<br />
                at <span className="text-[#ff3b4e]">BTM, Kalyan Nagar &amp; Marathahalli</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed">
                LearnMore Technologies provides 3 physical flagship centers across Bangalore and live virtual batches serving 40+ localities and global regions with guaranteed 100% placement support.
              </p>

              {/* 3 Quick Campus Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <a
                  href="#marathahalli"
                  className="p-3 rounded-2xl bg-[#111624]/90 border border-red-500/30 hover:border-red-500 transition shadow-sm block group"
                >
                  <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Flagship HQ</div>
                  <div className="text-sm font-black text-white group-hover:text-red-400 transition">Marathahalli</div>
                  <div className="text-[11px] text-slate-400">Outer Ring Road</div>
                </a>

                <a
                  href="#btm"
                  className="p-3 rounded-2xl bg-[#111624]/90 border border-slate-800 hover:border-red-500 transition shadow-sm block group"
                >
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">South Hub</div>
                  <div className="text-sm font-black text-white group-hover:text-red-400 transition">BTM Layout</div>
                  <div className="text-[11px] text-slate-400">100 Feet Ring Rd</div>
                </a>

                <a
                  href="#kalyan-nagar"
                  className="p-3 rounded-2xl bg-[#111624]/90 border border-slate-800 hover:border-red-500 transition shadow-sm block group"
                >
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">North/East Hub</div>
                  <div className="text-sm font-black text-white group-hover:text-red-400 transition">Kalyan Nagar</div>
                  <div className="text-[11px] text-slate-400">HRBR Layout</div>
                </a>
              </div>
            </div>

            {/* Right Visual (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-h-[460px] w-full bg-[#0d1322]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="LearnMore Technologies Campuses"
                  className="w-full h-full object-cover object-center brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/90 via-[#070b14]/30 to-transparent" />

                <div className="absolute top-6 right-6 bg-[#0c1220]/90 border border-slate-700/80 rounded-xl px-3 py-1.5 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-black text-white tracking-wide">
                    LearnMore <span className="text-red-400">Technologies</span>
                  </span>
                </div>

                <div className="absolute top-8 left-8 font-serif italic text-white text-2xl sm:text-3xl lg:text-[34px] font-bold leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] select-none space-y-0.5">
                  <div className="text-white">Marathahalli.</div>
                  <div className="text-red-300">BTM Layout.</div>
                  <div className="text-white">Kalyan Nagar.</div>
                  <div className="text-blue-300">40+ Localities.</div>
                </div>

                <div className="absolute bottom-5 right-5 left-5 sm:left-auto sm:max-w-xs bg-[#070b14]/95 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-200 font-medium leading-tight">
                    <strong className="text-white font-bold block">10,000+ Placed Students.</strong>
                    Across 3 Bangalore Campuses &amp; Global Hubs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE PRIMARY PHYSICAL TRAINING CAMPUSES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#ff334b] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#ff334b]"></span>
                <span>PRIMARY TRAINING CAMPUSES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Our 3 Physical Centers in Bangalore
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Modern high-spec classroom labs in Marathahalli, BTM Layout, and Kalyan Nagar. Walk in for a free counseling &amp; demo session anytime 8:00 AM – 8:30 PM.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#ff253a] border border-red-200 font-bold text-xs tracking-wide self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#ff253a]"></span>
              <span>Open 7 Days (8 AM – 8:30 PM)</span>
            </div>
          </div>

          {/* 3 Campus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {campuses.map((campus) => (
              <div
                key={campus.slug}
                id={campus.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-md bg-[#ff253a] text-white">
                      {campus.badgeText}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 font-serif italic text-white text-base sm:text-lg font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] select-none">
                    {campus.tagline}
                  </div>
                </div>

                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition">
                        {campus.name}
                      </h3>
                      <Link
                        href={`/locations/${campus.slug}`}
                        className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-red-50 text-slate-400 group-hover:text-red-600 flex items-center justify-center transition shrink-0"
                        aria-label={`View ${campus.name}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {campus.description}
                    </p>

                    <div className="pt-2 space-y-2.5 text-xs text-slate-600 border-t border-slate-100">
                      <a
                        href={campus.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2.5 group/addr hover:text-slate-900 transition"
                      >
                        <MapPin className="w-4 h-4 text-[#ff253a] shrink-0 mt-0.5 group-hover/addr:scale-110 transition" />
                        <span className="leading-snug group-hover/addr:underline">{campus.address}</span>
                      </a>

                      <div className="flex items-center gap-2.5 text-slate-600">
                        <Train className="w-4 h-4 text-[#ff253a] shrink-0" />
                        <span>{campus.metro}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-600">
                        <Building2 className="w-4 h-4 text-[#ff253a] shrink-0" />
                        <span>{campus.facility}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-600">
                        <Clock className="w-4 h-4 text-[#ff253a] shrink-0" />
                        <span>{campus.timings}</span>
                      </div>
                    </div>

                    {/* Popular Courses in this branch */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Popular Courses at {campus.name.split(" ")[0]}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {campus.popularCourses.map((c, idx) => (
                          <Link
                            key={idx}
                            href={`/${c.slug}`}
                            className="text-[11px] font-semibold bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 transition"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${campus.callNumber}`}
                      className="py-2.5 px-3 rounded-full border border-slate-300 hover:border-red-500 text-slate-700 hover:text-red-600 bg-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#ff253a]" />
                      <span>Call Campus</span>
                    </a>

                    <Link
                      href={`/locations/${campus.slug}`}
                      className="py-2.5 px-3 rounded-full bg-[#ff253a] hover:bg-[#e0182d] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-500/20 transition"
                    >
                      <span>Campus Details</span>
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
      {/* 3. COMPLETE ALL LOCATIONS DIRECTORY (44 LOCATIONS SEARCHABLE) */}
      {/* ========================================================================= */}
      <section id="directory" className="py-14 sm:py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#ff334b] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#ff334b]"></span>
                <span>EXPLORE ALL LOCATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Explore All Training Locations &amp; Major Tech Corridors We Serve
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Find your nearest classroom training center across Bangalore localities, major tech hubs, or connect through live interactive online training worldwide.
              </p>
            </div>

            <div className="text-xs font-bold text-slate-500 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              Showing <span className="text-red-600 font-black">{filteredLocations.length}</span> Locations &amp; Hubs
            </div>
          </div>

          {/* Search Bar & Category Tabs */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search any locality, city or country (e.g. BTM, Whitefield, Koramangala, Hebbal, Chennai, USA, Germany, Singapore)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2.5 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    selectedTab === tab
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 44 Locations Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredLocations.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {item.tag}
                    </span>
                    {item.zone && (
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {item.zone}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition">
                    {item.name}
                  </h3>

                  <div className="text-xs text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="truncate">{item.hubCampus}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-slate-500 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item.addressSnippet}</span>
                    </div>
                  </div>

                  {/* Popular Courses Links */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Popular Courses:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.popularCourseLinks.map((course, cIdx) => (
                        <Link
                          key={cIdx}
                          href={course.route}
                          className="text-[10px] font-semibold bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-700 px-2 py-0.5 rounded border border-slate-200 transition"
                        >
                          {course.courseName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={item.defaultRoute || item.popularCourseLinks[0]?.route || "/courses"}
                    className="w-full py-2 bg-slate-50 group-hover:bg-red-600 text-slate-800 group-hover:text-white font-bold text-xs rounded-xl border border-slate-200 group-hover:border-red-600 transition flex items-center justify-center gap-1.5"
                  >
                    <span>View Courses in {item.name.replace(/\(.*\)/, "").trim()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <Compass className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching location found</h3>
              <p className="text-xs text-slate-500">
                Try searching for a different area like &quot;BTM&quot;, &quot;Marathahalli&quot;, &quot;Kalyan Nagar&quot;, &quot;Whitefield&quot;, or &quot;USA&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedTab("All Locations");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE OUR CAMPUSES? */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#fff8f8] border-b border-slate-200/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#ff334b] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#ff334b]"></span>
              <span>WHY CHOOSE OUR CAMPUSES?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              More Than a Classroom.<br />
              A Better Learning Experience.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Our 3 centers in Marathahalli, BTM Layout, and Kalyan Nagar are designed to give you the right environment, mentorship, and support to build real-world skills and high-paying tech careers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl border border-red-100/80 p-6 shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#ff253a] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900">3 Prime Campuses</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Marathahalli, BTM Layout &amp; Kalyan Nagar with full metro, bus, and road connectivity.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-red-100/80 p-6 shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#ff253a] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900">Senior Mentors</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Learn hands-on from senior tech architects with 10+ years of enterprise experience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-red-100/80 p-6 shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#ff253a] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900">Production Labs</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  High-spec workstation labs, live cloud sandboxes, and enterprise capstone projects.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-red-100/80 p-6 shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#ff253a] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900">100% Placement Cell</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Direct interview scheduling with 500+ top hiring partners, resume reviews &amp; mock HR rounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#070b14] via-[#0d1424] to-[#070b14] text-white border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/girl.png"
                    alt="LearnMore Technologies Student"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-black text-[#ff334b] uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#ff334b]"></span>
                  <span>YOUR CAREER STARTS HERE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Visit BTM, Kalyan Nagar or Marathahalli
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Walk in, meet our senior faculty mentors, attend a free live demo class, and receive a personalized career roadmap.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="px-6 py-3 rounded-full bg-[#ff253a] hover:bg-[#e0182d] text-white font-extrabold text-xs shadow-lg shadow-red-600/30 transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book Free Demo Class</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:+919036524555"
                    className="px-5 py-3 rounded-full bg-[#111624] hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-2 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-400" />
                    <span>Call +91 90365 24555</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 text-xs font-bold text-slate-300">
                <div className="p-3 rounded-2xl bg-[#111624]/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span>Free 1-on-1 Counseling</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#111624]/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>Syllabus Breakdown</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#111624]/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Meet Faculty Mentors</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#111624]/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span>Lab Tour &amp; Hands-on Demo</span>
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
        defaultCourseSlug="python-full-stack-course"
      />
    </div>
  );
}
