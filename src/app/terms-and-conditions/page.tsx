import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/common/PageHero";
import { ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | LearnMore Technologies",
  description:
    "Review the terms of service, enrollment guidelines, course policies, placement support terms, and refund guidelines for LearnMore Technologies Bangalore.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-12 pb-24">
        {/* HERO */}
        <PageHero
          badge="Terms &amp; Policies"
          title="LearnMore Technologies"
          titleHighlight="Terms of Service &amp; Enrollment Agreement."
          description="Last updated: January 2026. Please read these terms carefully before enrolling in our software training programs."
        />

        {/* PROSE TERMS CONTAINER */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <FileText className="w-5 h-5 text-brand-600 shrink-0" />
              <span>
                By registering on our website, attending demo sessions, or paying enrollment fees for any classroom or online course, you agree to be bound by the following terms.
              </span>
            </div>

            {/* SECTION 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">1.</span> Enrollment &amp; Batch Allocation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Admission to any LearnMore Technologies course is confirmed upon payment of the registration fee. Students are assigned to batches based on their chosen schedule (Weekday/Weekend) and learning mode (Classroom at one of our Bangalore campuses or Live Online). LearnMore Technologies reserves the right to adjust batch timings or reassign instructors in exceptional circumstances with prior notification.
              </p>
            </section>

            {/* SECTION 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">2.</span> Course Content, Intellectual Property &amp; AI Copyright Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All training materials, syllabus designs, lecture videos, LMS assignments, proprietary lab guides, code repositories, assessments, and digital assets provided by LearnMore Technologies are the exclusive intellectual property of LearnMore Technologies and protected under national and international copyright laws.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li>Materials are licensed strictly for personal, non-commercial educational use by the enrolled student.</li>
                <li>Redistribution, public sharing, recording, or re-selling of lecture videos and LMS credentials is strictly prohibited.</li>
                <li><strong>AI Training &amp; Scraping Prohibition:</strong> Unauthorized harvesting, automated data extraction, web crawling, scraping, or ingestion of website content, course materials, or code repositories for training Large Language Models (LLMs), generative AI tools, or machine learning algorithms is strictly prohibited without explicit written consent from LearnMore Technologies.</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">3.</span> Fee Payment &amp; Refund Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Course fees can be paid in full or via approved no-cost installment plans.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li>Free demo classes are provided before enrollment so candidates can make an informed evaluation.</li>
                <li>Fee refund requests submitted in writing within 48 hours of batch commencement will be processed subject to a standard administrative deduction.</li>
                <li>No fee refunds are eligible after the completion of the first 3 class sessions or once full LMS access and code repository access have been issued.</li>
                <li>Students may pause their batch and resume in a future cohort within 12 months with written approval from academic management.</li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">4.</span> Placement Assistance Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LearnMore Technologies provides 100% placement support to eligible candidates who satisfy the following criteria:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li>Minimum 85% attendance across scheduled live sessions and lab modules.</li>
                <li>Satisfactory completion and submission of all assigned course modules and capstone projects.</li>
                <li>Passing internal technical mock interview assessments conducted by our mentoring panel.</li>
                <li>Strict adherence to interview attendance and professional ethics when scheduled for client drives.</li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">5.</span> Lab Infrastructure &amp; Code of Conduct
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Students utilizing physical campus labs and virtual cloud workstations agree to use resources strictly for curriculum-related practice. Tampering with lab equipment, installing unauthorized or malicious software, or engaging in inappropriate conduct toward instructors or fellow peers will lead to immediate cancellation of admission without refund.
              </p>
            </section>

            {/* SECTION 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">6.</span> Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                These terms and conditions shall be governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bangalore, Karnataka, India</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
