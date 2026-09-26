import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { Users, Briefcase, Award, Clock, DollarSign, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Become an IT Instructor / Trainer in Bangalore | LearnMore Technologies",
  description:
    "Share your engineering expertise. Join LearnMore Technologies as a part-time weekend or online technology trainer in Cloud, AI, DevOps, Full Stack & Testing. Top industry compensation.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/become-a-teacher",
  },
};

export default function BecomeATeacherPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Become an Instructor" }];

  const teacherFaqs = [
    {
      question: "What are the minimum eligibility criteria for instructors?",
      answer: "We look for practicing senior software engineers, tech leads, or architects with at least 5–6+ years of live corporate project experience at reputable IT enterprises.",
    },
    {
      question: "What are the teaching schedule options?",
      answer: "We offer maximum flexibility: weekend classroom batches (Saturday/Sunday), early morning or late evening online batches, and dedicated enterprise corporate workshops.",
    },
    {
      question: "How does the compensation model work?",
      answer: "We offer highly competitive hourly or batch-based compensation above industry standards, commensurate with your architectural experience and domain expertise.",
    },
    {
      question: "What does the instructor onboarding process entail?",
      answer: "A quick 3-step process: 1) Profile review, 2) Technical interaction with our academic lead, and 3) Short demo session, followed by immediate batch assignment.",
    },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* HERO */}
        <PageHero
          badge="Faculty & Mentor Recruitment"
          title="Share Your Real-World Engineering Knowledge."
          titleHighlight="Teach at LearnMore Technologies."
          description="Join Bangalore's elite faculty network. Inspire thousands of aspiring engineers, build your personal brand, and earn industry-leading compensation with flexible weekend and online schedules."
        />

        {/* 1. WHY TEACH WITH US & SPLIT APPLICATION FORM */}
        <section className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Perks & In-Demand Tracks */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="The Instructor Advantage"
                title="Why Senior Tech Leads Choose to Teach at LearnMore"
                description="We provide the complete infrastructure, student cohorts, and LMS portal so you can focus entirely on delivering impactful practical training."
              />

              <div className="space-y-3">
                {[
                  {
                    title: "High Remuneration & Growth",
                    desc: "Earn attractive part-time income that respects your senior MNC pedigree and hands-on expertise.",
                  },
                  {
                    title: "Flexible Timings Designed for Working Engineers",
                    desc: "Teach 2-3 hours on weekends (Saturday/Sunday) or early weekday mornings without disrupting your primary job.",
                  },
                  {
                    title: "Complete Lab & Teaching Infrastructure Provided",
                    desc: "Preloaded desktop workstations across 3 Bangalore campuses, high-speed Zoom interactive setups, and teaching decks.",
                  },
                  {
                    title: "Brand Authority & Mentorship Impact",
                    desc: "Mentor ambitious freshers, help them crack Tier-1 MNC interviews, and grow your presence across LinkedIn.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-6">
              <ApplicationForm type="teacher" title="Apply as Technology Instructor / Mentor" />
            </div>
          </div>
        </section>

        {/* 2. FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Instructor FAQ
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              Frequently Asked Instructor Recruitment Questions
            </h2>
          </div>
          <FAQAccordion faqs={teacherFaqs} />
        </section>
      </div>
    </>
  );
}
