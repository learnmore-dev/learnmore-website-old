import React from "react";
import { Award, CheckCircle2, FileCheck2 } from "lucide-react";

interface CertificationItem {
  title: string;
  organization: string;
  examCode?: string;
  description: string;
}

interface CertificationSectionProps {
  certifications: CertificationItem[];
  courseTitle: string;
}

export function CertificationSection({ certifications, courseTitle }: CertificationSectionProps) {
  return (
    <section className="bg-gradient-to-br from-brand-50/70 via-orange-50/40 to-slate-50 border border-brand-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
        <Award className="w-4 h-4" />
        <span>Global &amp; Institute Credentials</span>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Official Certification Alignment &amp; Course Certificate for {courseTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Prepare for internationally recognized industry credentials and earn the verified LearnMore Course Certificate in {courseTitle}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Course Completion Certificate */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-100 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              LearnMore Certified Professional: {courseTitle}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Earn an industry-recognized certificate with a unique verification QR code and URL upon successful project completion in {courseTitle}.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-brand-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Shareable on LinkedIn, GitHub &amp; Resumes</span>
          </div>
        </div>

        {/* Global Vendor Exam Mappings */}
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-100 shadow-sm space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                  <Award className="w-5 h-5" />
                </div>
                {cert.examCode && (
                  <span className="px-2.5 py-1 bg-brand-600 text-white font-bold text-xs rounded-full">
                    Exam: {cert.examCode}
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
              Issued by: <span className="font-bold text-slate-800">{cert.organization}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
