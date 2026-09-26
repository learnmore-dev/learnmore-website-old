import React from "react";
import { Metadata } from "next";
import { CorporateTrainingExperience } from "@/components/corporate/CorporateTrainingExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Corporate IT Training Solutions & Enterprise Upskilling | LearnMore Technologies",
  description:
    "Customized B2B technology workforce training in Cloud, DevOps, AI, Full Stack & Data Analytics. On-premises labs, private virtual cohorts, and measurable ROI for engineering teams.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/corporate-training",
  },
  openGraph: {
    title: "Corporate Technology Training & Enterprise Upskilling | LearnMore Technologies",
    description:
      "Empower your engineering teams with custom corporate training in AWS, Azure, Agentic AI, DevOps & Full Stack.",
    url: "https://learnmoretechnologies.in/corporate-training",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const corporateSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Technology Training & Workforce Upskilling",
  provider: {
    "@type": "EducationalOrganization",
    name: "LearnMore Technologies",
    url: "https://learnmoretechnologies.in",
    telephone: "+919036524555",
  },
  areaServed: "India & Global Online",
  description:
    "Custom corporate IT training programs designed for tech enterprises, covering Cloud Infrastructure, Agentic AI, DevOps, Full Stack Development, and Data Analytics.",
};

export default function CorporateTrainingPage() {
  return (
    <>
      <JsonLd data={corporateSchema} />
      <CorporateTrainingExperience />
    </>
  );
}
