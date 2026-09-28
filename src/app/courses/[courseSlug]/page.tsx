import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTASection } from "@/components/common/CTASection";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { EmbeddedLeadForm } from "@/components/forms/EmbeddedLeadForm";
import { CourseHero } from "@/components/course/CourseHero";
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
import { courses, getCourseBySlug } from "@/data/courses";
import { categories } from "@/data/categories";
import { BookOpen, Code2, Sparkles, CheckCircle2, ShieldCheck, MapPin, Phone, MessageSquare } from "lucide-react";

import { generateCourseKeywords } from "@/lib/seoKeywords";

interface CoursePageProps {
  params: Promise<{ courseSlug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseSlug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    return {
      title: "Course Not Found | LearnMore Technologies",
      description: "The requested training course could not be found. Explore our comprehensive software training catalog in Bangalore.",
    };
  }

  const canonicalUrl = course.seo.canonicalUrl || `https://learnmoretechnologies.in/courses/${course.slug}`;

  return {
    title: course.seo.metaTitle || `${course.title} in Bangalore | LearnMore Technologies`,
    description: course.seo.metaDescription || course.overview,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: course.title,
      description: course.overview,
      type: "website",
      url: canonicalUrl,
      siteName: "LearnMore Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.overview,
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    notFound();
  }

  const category = categories.find((c) => c.slug === course.categorySlug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    ...(category ? [{ label: category.name, href: `/courses/category/${category.slug}` }] : []),
    { label: course.title },
  ];

  const relatedCourses = courses.filter((c) =>
    course.relatedCourseSlugs.includes(c.slug)
  );

  // Schema.org Structured Data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: "LearnMore Technologies",
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
      location: "Bangalore, India",
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://learnmoretechnologies.in${item.href}` : `https://learnmoretechnologies.in/courses/${course.slug}`,
    })),
  };

  const faqSchema = course.faqs && course.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* 1. Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="pb-24 space-y-16">
        {/* 2 & 3. Course Hero Section & Key Metrics */}
        <CourseHero course={course} category={category} />

        {/* MAIN COURSE CONTENT & STICKY SIDEBAR */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN CONTENT AREA (8 COLS) */}
            <div className="lg:col-span-8 space-y-16">
              {/* 4 & 5. Learning Outcomes / Core Competencies */}
              <LearningOutcomes
                skills={course.skillsGained}
                courseTitle={course.title}
              />

              {/* 6. Curriculum Breakdown */}
              <section id="curriculum" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                      <BookOpen className="w-4 h-4" />
                      <span>Syllabus Breakdown</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                      Detailed Curriculum &amp; Hands-On Labs
                    </h2>
                  </div>
                </div>

                <CurriculumAccordion modules={course.curriculum} />
              </section>

              {/* 7. Practical Training & Lab Infrastructure */}
              <PracticalTraining
                courseTitle={course.title}
                practicalTraining={course.practicalTraining}
              />

              {/* 8. Real-World Industry Projects */}
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

              {/* 9. Tools, Libraries & Frameworks */}
              <TechnologyList technologies={course.toolsAndTechnologies} />

              {/* 10. Certification Credentials */}
              <CertificationSection
                certifications={course.certifications}
                courseTitle={course.title}
              />

              {/* 11. Placement Assistance & Career Support */}
              <PlacementSection courseTitle={course.title} />

              {/* 11b. Target Job Roles & Career Opportunities */}
              <JobRolesSection
                courseTitle={course.title}
                categorySlug={course.categorySlug}
                courseSlug={course.slug}
              />

              {/* 12. Faculty & Trainer Mentors */}
              <TrainerSection
                trainers={course.trainers}
                courseTitle={course.title}
              />

              {/* 13 & 14. Prerequisites & Target Audience */}
              <Prerequisites
                prerequisites={course.prerequisites}
                targetAudience={course.targetAudience}
                courseTitle={course.title}
              />

              {/* Upcoming Batches Table */}
              <section id="batch-schedule" className="space-y-6 scroll-mt-24">
                <BatchScheduleTable
                  batches={course.upcomingBatches}
                  courseTitle={course.title}
                />
              </section>

              {/* 15. Course FAQ */}
              {course.faqs && course.faqs.length > 0 && (
                <section className="space-y-6">
                  <FAQAccordion
                    title={`Frequently Asked Questions: ${course.title}`}
                    subtitle="Have questions regarding batch timings, placement support, or lab access? Find answers below."
                    faqs={course.faqs}
                  />
                </section>
              )}

              {/* 16. Related Courses */}
              <RelatedCourses
                relatedCourses={relatedCourses}
                courseTitle={course.title}
              />
            </div>

            {/* SIDEBAR LEAD FORM & CONTACT CARDS (4 COLS) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <div id="lead-form-container">
                  <EmbeddedLeadForm
                    courseTitle={course.title}
                    locationName="Bangalore & Online"
                    source={`Course Page: ${course.title}`}
                  />
                </div>

                {/* Quick Advisor Direct Contact Card */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4 shadow-lg">
                  <div className="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Talk to a Senior Advisor</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Need Help Selecting Your Training Track?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our academic counseling team is available 7 days a week to evaluate your profile and schedule a free demo session.
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
                      href={`https://wa.me/919036524555?text=Hi%20LearnMore,%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
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

        {/* 17. Final High-Impact CTA Section */}
        <CTASection
          badge="Start Your Career Transformation"
          title={`Ready to Master ${course.title}?`}
          description="Attend a free live demo session in Bangalore or join our interactive virtual classroom with 100% placement support."
        />
      </div>

      {/* 19. Sticky Mobile CTA Bar */}
      <StickyMobileCTA courseTitle={course.title} />
    </>
  );
}
