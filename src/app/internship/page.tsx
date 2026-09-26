import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { GraduationCap, Award, Laptop, ShieldCheck, Code, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Software Internship in Bangalore | LearnMore Technologies",
  description:
    "Apply for industrial software project internships in Bangalore for B.E/B.Tech, BCA, and MCA students. Python Full Stack, Cloud/DevOps, Data Analytics, and QA with ISO experience certificates.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/internship",
  },
};

export default function InternshipPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Industrial Internship" }];

  const internshipFaqs = [
    {
      question: "Who is eligible to apply for this internship program?",
      answer: "Final year and pre-final year engineering students (B.E/B.Tech in CS, IS, EC, EEE, Mechanical), BCA, MCA, BSc IT students, and fresh graduates looking for real-world project experience.",
    },
    {
      question: "Will I receive an official ISO-certified internship letter and certificate?",
      answer: "Yes, upon successful completion and code submission of your live capstone project, you will receive an official ISO 9001:2015 certified Industrial Internship Completion Certificate.",
    },
    {
      question: "Are both classroom and remote internship modes available?",
      answer: "Yes, you can work on live projects using physical lab workstations across our Marathahalli, BTM Layout, and Kalyan Nagar branches, or participate through our virtual cohort.",
    },
    {
      question: "Does the internship include placement assistance upon graduation?",
      answer: "Yes, top performing interns are directly scheduled for technical interview rounds with our 500+ hiring partner tech companies.",
    },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* HERO */}
        <PageHero
          badge="Industrial Project Internship Program"
          title="Gain Live Production Software Experience with"
          titleHighlight="Hands-On Project Mentorship."
          description="Designed for engineering students and freshers. Work on production-grade capstone architectures in Python Full Stack, Cloud/DevOps, AI, and QA Automation under the guidance of senior MNC architects."
        />

        {/* 1. INTERNSHIP DOMAINS & SPLIT APPLICATION FORM */}
        <section className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Domains & Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Specialized Streams"
                title="5 High-Demand Internship Tracks for 2026"
                description="Select the technical domain matching your final year project or target career track."
              />

              <div className="space-y-3">
                {[
                  {
                    title: "Python & Django Full Stack Engineering",
                    desc: "Build scalable REST APIs, PostgreSQL databases, and modern frontend dashboards with automated GitHub workflows.",
                  },
                  {
                    title: "AWS Cloud & DevOps Infrastructure",
                    desc: "Deploy Docker containers, configure VPC subnets, automated CI/CD pipelines, and Terraform infrastructure as code.",
                  },
                  {
                    title: "Data Analytics, SQL & Power BI",
                    desc: "Transform enterprise raw data, build interactive Power BI executive dashboards, and automate ETL data pipelines.",
                  },
                  {
                    title: "QA Automation & Selenium Frameworks",
                    desc: "Develop TestNG/Cucumber automation suites, cross-browser testing scripts, and Postman API test automation.",
                  },
                  {
                    title: "Java Full Stack & Spring Boot Microservices",
                    desc: "Build modular enterprise backend microservices with Spring Boot, Hibernate ORM, and React frontends.",
                  },
                ].map((track, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{track.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{track.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-6">
              <ApplicationForm type="internship" title="Apply for Software Project Internship" />
            </div>
          </div>
        </section>

        {/* 2. FAQ ACCORDION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Internship Queries
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              Frequently Asked Internship Questions
            </h2>
          </div>
          <FAQAccordion faqs={internshipFaqs} />
        </section>
      </div>
    </>
  );
}
