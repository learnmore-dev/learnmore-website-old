import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { StickyMobileCTA } from "@/components/course/StickyMobileCTA";
import { courses, getCourseBySlug } from "@/data/courses";
import { locations, getLocationBySlug } from "@/data/locations";
import { categories } from "@/data/categories";
import { generateCourseLocationKeywords } from "@/lib/seoKeywords";
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
} from "lucide-react";

interface LocationCourseProps {
  params: Promise<{ slug: string; courseSlug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; courseSlug: string }[] = [];
  for (const loc of locations) {
    for (const course of courses) {
      params.push({
        slug: loc.slug,
        courseSlug: course.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: LocationCourseProps): Promise<Metadata> {
  const { slug, courseSlug } = await params;
  const loc = getLocationBySlug(slug);
  const course = getCourseBySlug(courseSlug);

  if (!loc || !course) {
    return {
      title: "Course Location Not Found | LearnMore Technologies",
      description: "The requested course or location could not be found.",
    };
  }

  const title = `${course.title} in ${loc.name}, ${loc.city} | LearnMore Technologies`;
  const description = `Join ${course.title} classroom training at LearnMore Technologies ${loc.name} campus in ${loc.city}. 100% placement support, live hands-on labs, real-world projects & certified mentors.`;
  const canonicalUrl = `https://learnmoretechnologies.in/locations/${loc.slug}/${course.slug}`;
  const keywords = generateCourseLocationKeywords(course.title, loc.name, course.categoryName);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: "LearnMore Technologies",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocationCoursePage({ params }: LocationCourseProps) {
  const { slug, courseSlug } = await params;
  const loc = getLocationBySlug(slug);
  const course = getCourseBySlug(courseSlug);

  if (!loc || !course) {
    notFound();
  }

  const category = categories.find((c) => c.slug === course.categorySlug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: loc.name, href: `/locations/${loc.slug}` },
    { label: `${course.title} in ${loc.name}` },
  ];

  // Schema.org Structured Data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.title} - ${loc.name}`,
    description: `Master ${course.title} at LearnMore Technologies ${loc.name} campus in ${loc.city}.`,
    provider: {
      "@type": "EducationalOrganization",
      name: `LearnMore Technologies (${loc.name})`,
      url: `https://learnmoretechnologies.in/locations/${loc.slug}`,
      telephone: loc.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: loc.state,
        addressCountry: "IN",
      },
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
      location: `${loc.name}, ${loc.city}, India`,
    })),
  };

  const localOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `LearnMore Technologies - ${loc.name}`,
    description: loc.overview,
    url: `https://learnmoretechnologies.in/locations/${loc.slug}/${course.slug}`,
    telephone: loc.phone,
    email: loc.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "IN",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://learnmoretechnologies.in${item.href}`
        : `https://learnmoretechnologies.in/locations/${loc.slug}/${course.slug}`,
    })),
  };

  const locationFaqs = [
    {
      question: `Are classroom batches for ${course.title} conducted at ${loc.name}?`,
      answer: `Yes, we conduct regular weekday and weekend classroom training batches for ${course.title} at our ${loc.name} campus (${loc.address}). Students have full access to our high-performance dedicated workstation labs.`,
    },
    {
      question: `What are the lab facilities available at ${loc.name} for this course?`,
      answer: `Our ${loc.name} center features high-spec workstations (Core i7, high RAM, dual displays), high-speed dedicated gigabit internet, and full-time lab mentors available to assist you during practice hours.`,
    },
    {
      question: `Do you provide 100% placement support from ${loc.name} campus?`,
      answer: `Yes! Our dedicated placement cell operates across all Bangalore campuses. We provide mock technical interviews, resume building, corporate grooming, and direct interview scheduling with over 500+ hiring partner companies.`,
    },
    {
      question: `Can I attend a free demo class at ${loc.name}?`,
      answer: `Absolutely. You can walk in or book a free demo session at our ${loc.name} branch by calling ${loc.phone} or sending a WhatsApp message to our admissions coordinator.`,
    },
    ...(course.faqs || []),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Other courses at this branch
  const otherBranchCourses = courses.filter((c) => c.slug !== course.slug);

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={localOrgSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="pb-24 space-y-16">
        {/* 2. LOCATION-SPECIFIC COURSE HERO */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-brand-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                    {course.categoryName}
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{loc.name}</span>
                  </span>
                  {course.badge && (
                    <span className="px-3 py-1 bg-amber-500 text-slate-950 font-bold text-xs rounded-full uppercase tracking-wider">
                      ⭐ {course.badge}
                    </span>
                  )}
                </div>

                {/* H1 Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  {course.title} in {loc.name}, {loc.city}
                </h1>

                {/* Subtitle / Overview */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {course.overview} Master practical skills with instructor-led classroom sessions, 1-on-1 mentorship, and 100% placement support directly at our {loc.name} campus.
                </p>

                {/* Rating & Highlights Bar */}
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{course.rating.score} / 5.0</span>
                    <span className="text-slate-400 font-normal">
                      ({course.rating.reviewCount.toLocaleString()}+ Reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span>{course.duration.hours} Hours ({course.duration.weeks} Weeks)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% Placement Assistance</span>
                  </div>
                </div>

                {/* Campus Address Snippet */}
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2.5 max-w-2xl">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Campus Address: </span>
                    <span>{loc.address}</span>
                    {loc.landmark && (
                      <span className="text-slate-400 block mt-0.5">Landmark: {loc.landmark}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Campus: {loc.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${loc.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20LearnMore%20${loc.name},%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Campus</span>
                  </a>

                  <a
                    href={loc.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brand-400" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Campus Feature Highlights Box */}
              <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Why Learn at {loc.name}?</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Air-Conditioned Workstation Labs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-Speed Gigabit Dedicated Internet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full-Time Lab Mentors for Practice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Mock Interview &amp; Career Counseling Cabins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Weekend &amp; Fast-Track Batches Available</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-slate-700">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1.5"
                  >
                    <span>View Full Campus Details &amp; Transit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MAIN CONTENT GRID WITH STICKY SIDEBAR */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN COLUMN (8 COLS) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Learning Outcomes */}
              <LearningOutcomes
                skills={course.skillsGained}
                courseTitle={`${course.title} at ${loc.name}`}
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
                      {course.title} Course Syllabus &amp; Lab Modules
                    </h2>
                  </div>
                </div>

                <CurriculumAccordion modules={course.curriculum} />
              </section>

              {/* Practical Training & Lab Infrastructure */}
              <PracticalTraining
                courseTitle={`${course.title} (${loc.name})`}
                practicalTraining={course.practicalTraining}
              />

              {/* Capstone Projects */}
              {course.projects && course.projects.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                    <Code2 className="w-4 h-4" />
                    <span>Practical Experience</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Industry Capstone Projects You Will Build
                  </h2>

                  <ProjectShowcase projects={course.projects} />
                </section>
              )}

              {/* Tools & Frameworks */}
              <TechnologyList technologies={course.toolsAndTechnologies} courseTitle={`${course.title} in ${loc.name}`} />

              {/* Certification */}
              <CertificationSection
                certifications={course.certifications}
                courseTitle={`${course.title} in ${loc.name}`}
              />

              {/* Placement Support */}
              <PlacementSection courseTitle={`${course.title} in ${loc.name}`} />

              {/* Target Job Roles & Career Opportunities */}
              <JobRolesSection
                courseTitle={course.title}
                categorySlug={course.categorySlug}
                courseSlug={course.slug}
              />

              {/* Faculty Mentors */}
              <TrainerSection
                trainers={course.trainers}
                courseTitle={`${course.title} in ${loc.name}`}
              />

              {/* Prerequisites */}
              <Prerequisites
                prerequisites={course.prerequisites}
                targetAudience={course.targetAudience}
                courseTitle={`${course.title} in ${loc.name}`}
              />

              {/* Upcoming Batches Table */}
              <section id="batch-schedule" className="space-y-6 scroll-mt-24">
                <BatchScheduleTable
                  batches={course.upcomingBatches}
                  courseTitle={`${course.title} at ${loc.name}`}
                />
              </section>

              {/* Location & Campus Info Card */}
              <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Campus Information</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  About {loc.name} Campus
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {loc.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                    <span className="font-bold text-slate-900 block">Address</span>
                    <span className="text-slate-600">{loc.address}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                    <span className="font-bold text-slate-900 block">Contact Information</span>
                    <span className="text-slate-600 block">Phone: {loc.phone}</span>
                    <span className="text-slate-600 block">Email: {loc.email}</span>
                  </div>
                </div>

                {loc.nearbyTransit && loc.nearbyTransit.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 block">Nearby Transit &amp; Landmarks:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {loc.nearbyTransit.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Navigation className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* FAQs */}
              <section className="space-y-6">
                <FAQAccordion
                  title={`Frequently Asked Questions: ${course.title} at ${loc.name}`}
                  subtitle={`Everything you need to know about batch timings, lab access, placement assistance, and fee structure at our ${loc.name} center.`}
                  faqs={locationFaqs}
                />
              </section>

              {/* Other Courses Available at this Campus */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Campus Course Catalog</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                      Other Courses Offered at {loc.name}
                    </h2>
                  </div>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>View All at Campus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherBranchCourses.slice(0, 4).map((otherCourse) => (
                    <Link
                      key={otherCourse.slug}
                      href={`/locations/${loc.slug}/${otherCourse.slug}`}
                      className="group block p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {otherCourse.categoryName}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 transition group-hover:translate-x-0.5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition line-clamp-1">
                        {otherCourse.title} in {loc.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {otherCourse.overview}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* STICKY ENQUIRY SIDEBAR (4 COLS) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <EmbeddedLeadForm
                  courseTitle={`${course.title} (${loc.name})`}
                  locationName={loc.name}
                  source={`Location Course Page: ${loc.name} - ${course.title}`}
                />

                {/* CAMPUS DETAILS WIDGET */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    {loc.name} Info
                  </h4>
                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                      <a href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`} className="hover:underline font-semibold text-slate-800">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>Open 7 Days (7:30 AM - 8:30 PM)</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <a
                      href={loc.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-3.5 h-3.5 text-brand-600" />
                      <span>Open Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* OTHER CAMPUSES LINKS */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Available in other campuses
                  </h4>
                  <div className="space-y-2">
                    {locations
                      .filter((l) => l.slug !== loc.slug)
                      .map((otherLoc) => (
                        <Link
                          key={otherLoc.slug}
                          href={`/locations/${otherLoc.slug}/${course.slug}`}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-100 text-xs font-semibold text-slate-800 hover:text-brand-600 transition group"
                        >
                          <span>{course.title.split(" ")[0]} at {otherLoc.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 transition" />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* 4. BOTTOM CTA */}
        <CTASection
          badge="Join LearnMore"
          title={`Enroll in ${course.title} at ${loc.name}`}
          description="Attend a free live demo session, review course curriculum, and discuss your career roadmap with our faculty."
        />

        {/* 5. STICKY MOBILE CTA */}
        <StickyMobileCTA
          courseTitle={`${course.title} (${loc.name})`}
          locationName={loc.name}
        />
      </div>
    </>
  );
}
