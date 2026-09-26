import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/common/PageHero";
import { ShieldCheck, Lock, Mail, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | LearnMore Technologies",
  description:
    "Learn about how LearnMore Technologies collects, protects, and manages student and website visitor data in compliance with data privacy standards.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-12 pb-24">
        {/* HERO */}
        <PageHero
          badge="Legal &amp; Compliance"
          title="LearnMore Technologies"
          titleHighlight="Privacy Policy."
          description="Last updated: January 2026. Learn how we handle, process, and protect your personal information."
        />

        {/* PROSE LEGAL CONTAINER */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                LearnMore Technologies is committed to safeguarding student data, learning records, and contact details with industry-standard encryption and strict access controls.
              </span>
            </div>

            {/* SECTION 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">1.</span> Information We Collect
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you interact with our website, request a course brochure, register for a live demo, or enroll in a training program, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li><strong>Contact Details:</strong> Full Name, Email Address, Phone Number, WhatsApp Number, and City/Location.</li>
                <li><strong>Academic &amp; Professional Background:</strong> College degree, year of graduation, prior work experience, and current skill level.</li>
                <li><strong>Course Participation Data:</strong> Attendance records, assignment submissions, LMS access logs, and mock interview evaluation scores.</li>
                <li><strong>Billing &amp; Payment Data:</strong> Transaction reference numbers, billing addresses, and installment schedules (credit/debit card numbers are processed directly by certified RBI-approved payment gateways and never stored on our servers).</li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">2.</span> How We Use Your Information
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The personal data collected is utilized solely to deliver high-quality educational and career placement services, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li>Processing course admissions, batch scheduling, and student LMS portal access.</li>
                <li>Transmitting important batch reminders, class link updates, and schedule notifications via WhatsApp and SMS.</li>
                <li>Sharing student resumes with verified hiring partner companies for interview scheduling (strictly with prior student consent).</li>
                <li>Generating verifiable course completion certificates and academic credentials.</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">3.</span> Data Security &amp; Storage
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We implement robust technical and organizational security controls to safeguard your data from unauthorized access, alteration, disclosure, or destruction. All communication between your browser and our servers is secured using 256-bit SSL/TLS encryption. Internal data access is restricted strictly to authorized staff on a role-based need-to-know basis.
              </p>
            </section>

            {/* SECTION 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">4.</span> Sharing with Third Parties
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We never sell, rent, or trade your personal information to third-party marketing companies. Information is shared only with:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li><strong>Corporate Hiring Partners:</strong> For placement drives, campus interviews, and hiring evaluations upon student authorization.</li>
                <li><strong>Service Providers:</strong> Cloud infrastructure hosts, SMS gateway providers, and payment processors who adhere to strict data processing agreements.</li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">5.</span> Cookies &amp; Tracking
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our website uses essential cookies and analytics tools (e.g., Google Analytics) to improve user experience, optimize page performance, and understand how visitors navigate our course catalog. You can control or disable cookie preferences through your web browser settings.
              </p>
            </section>

            {/* SECTION 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-brand-600">6.</span> Data Rights &amp; Contact Information
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your contact information from our marketing rosters. For any privacy-related inquiries, please reach out to:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <div><strong>LearnMore Technologies Privacy &amp; Data Compliance Officer</strong></div>
                <div>Email: <a href="mailto:office.learnmore@gmail.com" className="text-brand-600 font-bold hover:underline">office.learnmore@gmail.com</a></div>
                <div>Headquarters:No-5/3, 3rd Floor, Kundalahalli Gate, Varthur Main Rd, Opposite SRK Convention Hall, Marathahalli - 560037.</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
