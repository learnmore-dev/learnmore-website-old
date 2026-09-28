import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTASection } from "@/components/common/CTASection";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { EmbeddedLeadForm } from "@/components/forms/EmbeddedLeadForm";
import { LearningOutcomes } from "@/components/course/LearningOutcomes";
import { CurriculumAccordion } from "@/components/course/CurriculumAccordion";
import { PracticalTraining } from "@/components/course/PracticalTraining";
import { ProjectShowcase } from "@/components/course/ProjectShowcase";
import { TechnologyList } from "@/components/course/TechnologyList";
import { CertificationSection } from "@/components/course/CertificationSection";
import { PlacementSection } from "@/components/course/PlacementSection";
import { JobRolesSection } from "@/components/course/JobRolesSection";
import { TrainerSection } from "@/components/course/TrainerSection";
import { Prerequisites } from "@/components/course/Prerequisites";
import { BatchScheduleTable } from "@/components/course/BatchScheduleTable";
import { RelatedCourses } from "@/components/course/RelatedCourses";
import { StickyMobileCTA } from "@/components/course/StickyMobileCTA";
import { CourseHero } from "@/components/course/CourseHero";
import { courses, getCourseBySlug } from "@/data/courses";
import { locations, getLocationBySlug } from "@/data/locations";
import { categories } from "@/data/categories";
import { wordPressPagesInventory, getPageBySlug, getAllPageSlugs, WordPressPageRecord } from "@/data/pageInventory";
import { resolveCourseForRecord, resolveRecordFromSlug } from "@/lib/courseResolver";
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  CheckCircle2,
  Clock,
  Laptop,
  Users,
  Award,
  Calendar,
  Sparkles,
  ArrowRight,
  BookOpen,
  Code2,
  ShieldCheck,
  Star,
  Building2,
  FileText,
  Download,
  GraduationCap,
} from "lucide-react";

import { generateCourseLocationKeywords, generateCourseKeywords } from "@/lib/seoKeywords";

interface DynamicInventoryPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DynamicInventoryPageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = resolvedParams?.slug || "";
  const slug = decodeURIComponent(rawSlug).trim().replace(/^\/+|\/+$/g, "").toLowerCase();

  if (slug.includes("{slug") || slug.includes("%7bslug") || slug === "slug" || slug === "{slug}") {
    return {
      title: "All Courses | LearnMore Technologies",
      description: "Explore software training programs at LearnMore Technologies.",
    };
  }

  const record = resolveRecordFromSlug(slug);

  if (!record) {
    const course = getCourseBySlug(slug);
    if (course) {
      return {
        title: course.seo.metaTitle || `${course.title} | LearnMore Technologies`,
        description: course.seo.metaDescription || course.overview,
        alternates: { canonical: `https://learnmoretechnologies.in/${slug}` },
      };
    }
    return {
      title: "Page Not Found | LearnMore Technologies",
      description: "The requested software training course or location could not be found.",
    };
  }

  const canonicalUrl = `https://learnmoretechnologies.in/${record.slug}`;
  const cleanTitle = (record.seoTitle || record.postTitle).replace(/\s*\|\s*LearnMore\s*Technologies/gi, "").trim();

  return {
    title: cleanTitle,
    description: record.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: cleanTitle,
      description: record.metaDescription,
      type: "website",
      url: canonicalUrl,
      siteName: "LearnMore Technologies",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: record.metaDescription,
    },
  };
}

export default async function DynamicInventoryPage({ params }: DynamicInventoryPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = resolvedParams?.slug || "";
  const slug = decodeURIComponent(rawSlug).trim().replace(/^\/+|\/+$/g, "").toLowerCase();

  // Safety guard for placeholder URLs
  if (slug.includes("{slug") || slug.includes("%7bslug") || slug === "slug" || slug === "{slug}") {
    redirect("/courses");
  }

  const record = resolveRecordFromSlug(slug);

  if (!record) {
    const directCourse = getCourseBySlug(slug);
    if (!directCourse) {
      notFound();
    }
  }

  // Handle redirects if needed
  if (record && record.migrationAction === "REDIRECT" && record.targetRoute !== `/${record.slug}` && record.targetRoute !== `/${slug}`) {
    redirect(record.targetRoute);
  }

  if (record && record.pageType === "STATIC_PAGE" && record.targetRoute !== `/${record.slug}` && record.targetRoute !== `/${slug}`) {
    redirect(record.targetRoute);
  }

  // Resolve Course data
  const course = record ? resolveCourseForRecord(record) : (getCourseBySlug(slug) || courses[0]);
  const category = categories.find((c) => c.slug === course.categorySlug);

  // If this is a Syllabus page
  if (record && record.pageType === "SYLLABUS") {
    return renderSyllabusPage(record, course);
  }

  // If this is a Course + Location page
  const isLocationPage = record && record.pageType === "COURSE_LOCATION" && record.locationName;
  const locationName = isLocationPage ? record.locationName : "Bangalore";
  const locationSlug = isLocationPage ? record.locationSlug : "marathahalli";
  const matchedLocationHub = locations.find(
    (l) => l.slug.toLowerCase() === locationSlug.toLowerCase() || l.name.toLowerCase() === locationName.toLowerCase()
  );

  const displayTitle = record ? record.postTitle : `${course.title} in Bangalore`;
  const heroSubtitle = record?.metaDescription || course.overview;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    ...(category ? [{ label: category.name, href: `/courses/category/${category.slug}` }] : []),
    ...(isLocationPage
      ? [
          { label: course.title, href: `/courses/${course.slug}` },
          { label: `${course.title} in ${locationName}` },
        ]
      : [{ label: displayTitle }]),
  ];

  const relatedCourses = courses.filter((c) => course.relatedCourseSlugs.includes(c.slug) || c.categorySlug === course.categorySlug);

  // Schema.org Structured Data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: displayTitle,
    description: course.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: `LearnMore Technologies - ${locationName}`,
      url: `https://learnmoretechnologies.in/${slug}`,
      sameAs: "https://learnmoretechnologies.in",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating.score,
      reviewCount: course.rating.reviewCount,
    },
    hasCourseInstance: course.upcomingBatches.map((batch) => ({
      "@type": "CourseInstance",
      courseMode: batch.mode,
      startDate: batch.startDate,
      location: `${locationName}, India`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://learnmoretechnologies.in${item.href}` : `https://learnmoretechnologies.in/${slug}`,
    })),
  };

  const dynamicFaqs = [
    {
      question: `Are classroom and live online batches available for ${displayTitle}?`,
      answer: `Yes, LearnMore Technologies conducts regular weekday, weekend, and fast-track training batches for ${displayTitle}. Students can attend in-person at our modern workstation labs or join interactive live instructor-led virtual sessions for ${displayTitle}.`,
    },
    {
      question: `What practical projects and hands-on lab exercises are included in ${displayTitle}?`,
      answer: `The ${displayTitle} program includes 50+ hours of dedicated hands-on practical labs and industry capstone projects covering real-world enterprise architectures, deployment pipelines, and troubleshooting workflows under senior mentor guidance.`,
    },
    {
      question: `Does LearnMore Technologies offer 100% placement assistance for ${displayTitle}?`,
      answer: `Yes. Our dedicated placement cell provides comprehensive career support for ${displayTitle} learners including resume preparation, LinkedIn optimization, mock technical interviews, HR grooming, and direct interview calls with 500+ top hiring partner companies.`,
    },
    {
      question: `Can I attend a free demo session before confirming enrollment in ${displayTitle}?`,
      answer: `Yes! You can reserve a free live interactive demo session for ${displayTitle} by submitting your details in the registration form or contacting our admissions team at +91 90365 24555.`,
    },
    {
      question: `What is the course duration and fee structure for ${displayTitle}?`,
      answer: `The ${displayTitle} program spans ${course.duration.weeks} weeks (${course.duration.hours} hours of training). We offer flexible batch timings and affordable installment-based fees for ${displayTitle} students.`,
    },
    {
      question: `Will I receive an industry-recognized certificate after completing ${displayTitle}?`,
      answer: `Yes, upon completing the capstone projects and practical evaluations in ${displayTitle}, you will receive the official LearnMore Technologies Certificate shareable on LinkedIn and resumes.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dynamicFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="pb-24 space-y-16">
        {/* 2. DYNAMIC HERO SECTION */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-brand-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                    {course.categoryName}
                  </span>
                  {isLocationPage && (
                    <span className="px-3 py-1 bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>{locationName}</span>
                    </span>
                  )}
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 font-bold text-xs rounded-full uppercase tracking-wider">
                    ⭐ 100% Placement Support
                  </span>
                </div>

                {/* H1 Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight capitalize">
                  {displayTitle}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {heroSubtitle} Master practical enterprise skills with certified mentors, dedicated lab infrastructure, capstone projects, and guaranteed job assistance in {displayTitle}.
                </p>

                {/* Rating & Highlights Bar */}
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{course.rating.score} / 5.0</span>
                    <span className="text-slate-400 font-normal">
                      ({course.rating.reviewCount.toLocaleString()}+ Learners)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span>{course.duration.hours} Hours ({course.duration.weeks} Weeks)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>500+ Hiring Partners</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="tel:+919036524555"
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Helpline: +91 90365 24555</span>
                  </a>

                  <a
                    href={`https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20am%20interested%20in%20the%20${encodeURIComponent(displayTitle)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  {matchedLocationHub && (
                    <a
                      href={matchedLocationHub.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                    >
                      <Navigation className="w-3.5 h-3.5 text-brand-400" />
                      <span>Get Directions ({matchedLocationHub.name})</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Campus / Training Highlights Card */}
              <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Why Choose {displayTitle}?</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1-on-1 Mentorship from Senior Tech Leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Workstation Labs &amp; Cloud Sandboxes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Production-Ready Capstone Industry Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Comprehensive Resume &amp; Mock Technical Interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Flexible Weekday, Weekend &amp; Fast-Track Slots</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-slate-700 text-xs text-slate-400">
                  <span>Classrooms available at Marathahalli, BTM Layout, Kalyan Nagar &amp; Virtual Live Classes for {displayTitle}.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MAIN CONTENT LAYOUT WITH STICKY SIDEBAR */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN COLUMN (8 COLS) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Learning Outcomes */}
              <LearningOutcomes
                skills={course.skillsGained}
                courseTitle={displayTitle}
              />

              {/* Curriculum Breakdown */}
              <section id="curriculum" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                      <BookOpen className="w-4 h-4" />
                      <span>Syllabus Breakdown</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                      {displayTitle} - Detailed Curriculum
                    </h2>
                  </div>
                </div>

                <CurriculumAccordion modules={course.curriculum} />
              </section>

              {/* Practical Training & Lab Infrastructure */}
              <PracticalTraining
                courseTitle={displayTitle}
                practicalTraining={course.practicalTraining}
              />

              {/* Capstone Projects */}
              {course.projects && course.projects.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                    <Code2 className="w-4 h-4" />
                    <span>Practical Experience</span>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Industry Capstone Projects in {displayTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Build production-ready applications with hands-on mentor reviews during your {displayTitle} training.
                    </p>
                  </div>

                  <ProjectShowcase projects={course.projects} courseTitle={displayTitle} />
                </section>
              )}

              {/* Tools & Frameworks */}
              <TechnologyList technologies={course.toolsAndTechnologies} courseTitle={displayTitle} />

              {/* Certification Section */}
              <CertificationSection
                certifications={course.certifications}
                courseTitle={displayTitle}
              />

              {/* Placement Section */}
              <PlacementSection courseTitle={displayTitle} />

              {/* Target Job Roles & Career Pathways */}
              <JobRolesSection
                courseTitle={displayTitle}
                categorySlug={course.categorySlug}
                courseSlug={course.slug}
              />

              {/* Trainer Mentors */}
              <TrainerSection
                trainers={course.trainers}
                courseTitle={displayTitle}
              />

              {/* Prerequisites */}
              <Prerequisites
                prerequisites={course.prerequisites}
                targetAudience={course.targetAudience}
                courseTitle={displayTitle}
              />

              {/* Batch Schedule Table */}
              <section id="batch-schedule" className="space-y-6 scroll-mt-24">
                <BatchScheduleTable
                  batches={course.upcomingBatches}
                  courseTitle={displayTitle}
                />
              </section>

              {/* Location Card if matched */}
              {matchedLocationHub && (
                <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Campus Details</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Training Center for {displayTitle}: {matchedLocationHub.name}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {matchedLocationHub.overview} LearnMore Technologies provides complete hands-on lab infrastructure and placement drives for {displayTitle}.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <span className="font-bold text-slate-900 block">Address</span>
                      <span className="text-slate-600">{matchedLocationHub.address}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <span className="font-bold text-slate-900 block">Contact Info</span>
                      <span className="text-slate-600 block">Phone: {matchedLocationHub.phone}</span>
                      <span className="text-slate-600 block">Email: {matchedLocationHub.email}</span>
                    </div>
                  </div>
                </section>
              )}

              {/* FAQs */}
              <section className="space-y-6">
                <FAQAccordion
                  title={`Frequently Asked Questions: ${displayTitle}`}
                  subtitle={`Find clear answers on course fees, batch timings, lab access, interview rounds, and job placement assistance for ${displayTitle}.`}
                  faqs={dynamicFaqs}
                />
              </section>

              {/* Related Courses */}
              <RelatedCourses
                relatedCourses={relatedCourses}
                courseTitle={displayTitle}
              />
            </div>

            {/* SIDEBAR (4 COLS) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <div id="lead-form-container">
                  <EmbeddedLeadForm
                    courseTitle={displayTitle}
                    locationName={locationName}
                    source={`Dynamic Route: ${slug}`}
                  />
                </div>

                {/* Direct Contact Card */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4 shadow-lg">
                  <div className="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Talk to Senior Counselor</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Need Help Selecting Your Training Track for {displayTitle}?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our academic counseling team is available 7 days a week to evaluate your profile and schedule a free demo session for {displayTitle}.
                  </p>

                  <div className="pt-2 space-y-2">
                    <a
                      href="tel:+919036524555"
                      className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call +91 90365 24555</span>
                    </a>

                    <a
                      href={`https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20am%20interested%20in%20the%20${encodeURIComponent(displayTitle)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-emerald-700/80 hover:bg-emerald-700 text-emerald-100 border border-emerald-600/50 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>Marathahalli • BTM Layout • Kalyan Nagar</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* 4. BOTTOM CTA */}
        <CTASection
          badge="Start Your Career Journey"
          title={`Enroll in ${displayTitle} Today`}
          description={`Attend a free live demo session for ${displayTitle}, review course curriculum, and discuss your career roadmap with our industry expert trainers.`}
        />
      </div>

      {/* 5. STICKY MOBILE CTA */}
      <StickyMobileCTA courseTitle={displayTitle} locationName={locationName} />
    </>
  );
}

/**
 * Dedicated renderer for Syllabus pages (e.g. sap-fico-syllabus, artificial-intelligence-syllabus)
 */
function renderSyllabusPage(record: WordPressPageRecord, course: any) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: course.title, href: `/courses/${course.slug}` },
    { label: `${record.postTitle}` },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="pb-24 space-y-16">
        {/* SYLLABUS HERO */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-brand-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                    Official Syllabus
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-full uppercase tracking-wider">
                    Updated for 2026 Industry Standards
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  {record.postTitle}
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {record.metaDescription} Explore our comprehensive, industry-curated curriculum with module-by-module breakdown, real-time lab exercises, and capstone projects.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#syllabus-modules"
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View All Modules Below</span>
                  </a>
                  <a
                    href="#lead-form-container"
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-brand-400" />
                    <span>Download Detailed Syllabus PDF</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-400" />
                  <span>Curriculum Highlights</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Industry Aligned Topics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>70% Practical Hands-On Lab Work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live Enterprise Capstone Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official Certification Exam Prep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SYLLABUS CONTENT GRID */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12" id="syllabus-modules">
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Complete Module Roadmap</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Detailed Course Syllabus &amp; Lab Exercises
                </h2>
                <CurriculumAccordion modules={course.curriculum} />
              </section>

              <LearningOutcomes skills={course.skillsGained} courseTitle={record.postTitle} />
              <PracticalTraining courseTitle={record.postTitle} practicalTraining={course.practicalTraining} />
              <TechnologyList technologies={course.toolsAndTechnologies} />
              <CertificationSection certifications={course.certifications} courseTitle={course.title} />
              <PlacementSection courseTitle={course.title} />
              <JobRolesSection
                courseTitle={course.title}
                categorySlug={course.categorySlug}
                courseSlug={course.slug}
              />
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <div id="lead-form-container">
                  <EmbeddedLeadForm
                    courseTitle={record.postTitle}
                    locationName="Bangalore & Online"
                    source={`Syllabus Page: ${record.slug}`}
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>

        <CTASection
          badge="Enroll Today"
          title={`Download the Complete ${record.postTitle} & Attend Demo`}
          description="Speak with our course coordinator to get the comprehensive syllabus breakdown and batch schedule."
        />
      </div>

      <StickyMobileCTA courseTitle={record.postTitle} />
    </>
  );
}
