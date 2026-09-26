import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CourseCatalogView } from "@/components/course/CourseCatalogView";
import { courses } from "@/data/courses";
import { categories } from "@/data/categories";
import { JsonLd } from "@/components/common/JsonLd";
import { CTASection } from "@/components/common/CTASection";
import { Sparkles, BookOpen, Layers, Phone, ArrowRight, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "All IT Software Training Courses in Bangalore | LearnMore Technologies",
  description:
    "Explore 50+ job-oriented software training courses in Bangalore with 100% placement support. Python Full Stack, AWS, Data Science, DevOps, AI, Java & QA Testing across Marathahalli, BTM Layout & Kalyan Nagar.",
  keywords: [
    "software courses in bangalore",
    "it training programs marathahalli",
    "python full stack training",
    "aws certification training bangalore",
    "data science course with placement",
    "devops training bangalore",
  ],
  alternates: {
    canonical: "https://learnmoretechnologies.in/courses",
  },
};

export default function CoursesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "All Courses" },
  ];

  // Course Catalog ItemList JSON-LD Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LearnMore Technologies Master Course Directory",
    description:
      "Comprehensive catalog of software engineering and cloud master programs offered with 100% placement support in Bangalore.",
    numberOfItems: courses.length,
    itemListElement: courses.slice(0, 15).map((course, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.overview,
        provider: {
          "@type": "Organization",
          name: "LearnMore Technologies",
          sameAs: "https://learnmoretechnologies.in",
        },
        url: `https://learnmoretechnologies.in/courses/${course.slug}`,
      },
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-12 sm:space-y-16 pb-20">
        {/* 1. CATALOG PAGE HERO */}
        <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white pt-10 sm:pt-14 pb-14 overflow-hidden border-b border-navy-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-amber-300 font-bold">50+ Industry-Certified Programs</span>
              <span className="text-slate-300">• 100% Job Placement Assistance</span>
            </div>

            <div className="max-w-3xl space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Explore Technology Master Courses &amp; Certifications
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Practical lab-oriented software training programs designed by senior MNC architects. Hands-on capstones, vendor certification prep, and direct interview scheduling across 3 Bangalore campuses.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Placement Guarantee</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Global Exam Readiness</span>
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-brand-400" />
                <span>Free Live Demo Available</span>
              </span>
            </div>
          </div>
        </section>

        {/* 2. MAIN INTERACTIVE CATALOG DISCOVERY ENGINE */}
        <section className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <CourseCatalogView allCourses={courses} categories={categories} />
        </section>

        {/* 3. RELATED DOMAIN CATEGORIES HUB */}
        <section className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Domain Hubs
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Explore Courses by Technology Domain
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/courses/category/${cat.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-brand-300 p-5 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 font-bold flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition duration-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{cat.totalCoursesCount} Programs</span>
                  <span className="text-brand-600 group-hover:translate-x-1 transition flex items-center gap-0.5">
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. FINAL ADMISSION CONVERSION BANNER */}
        <CTASection
          badge="Personalized Career Counselling"
          title="Not Sure Which Technology Track Suits Your Career Goals?"
          description="Connect with our senior technical advisors for 1-on-1 profile evaluation, salary guidance, and free classroom demo pass."
          primaryBtnText="Book Free Profile Evaluation"
          primaryBtnHref="/contact-us"
          phone="+91 9036524555"
          className="pt-4"
        />
      </div>
    </>
  );
}
