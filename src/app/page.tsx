import React from "react";
import { Metadata } from "next";
import { NewHomeExperience } from "@/components/home/NewHomeExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Best IT Software Training Institute in Bangalore | 100% Placement | LearnMore Technologies",
  description:
    "Master Next-Gen Tech and launch high-salary IT careers with LearnMore Technologies Bangalore. Industry-focused training in Python Full Stack, AWS, Data Science, AI, DevOps & Software Testing with 100% placement support.",
  keywords: [
    "software training institute in bangalore",
    "it courses in bangalore with placement",
    "python full stack training marathahalli",
    "aws certification training bangalore",
    "data science course in bangalore",
    "devops training institute btm",
    "software testing courses kalyan nagar",
    "learnmore technologies bangalore",
  ],
  alternates: {
    canonical: "https://learnmoretechnologies.in/",
  },
  openGraph: {
    title: "Master Next-Gen Tech | LearnMore Technologies Bangalore",
    description: "Industry-focused training with real-world projects, expert mentors and 100% placement support.",
    url: "https://learnmoretechnologies.in/",
    type: "website",
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "LearnMore Technologies",
    alternateName: "LearnMore Training Institute Bangalore",
    url: "https://learnmoretechnologies.in",
    logo: "https://learnmoretechnologies.in/logo.png",
    description:
      "Bangalore's #1 Software Training Institute offering certified courses in Full Stack Python, Java, Cloud Computing, DevOps, AI, and Software QA with 100% placement support.",
    telephone: "+919036524555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#43/2, Outer Ring Road, Marathahalli",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560037",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "15000",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which course is best for freshers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For freshers, Python Full Stack Development, Java Full Stack, Software Testing (Automation + Manual), and Data Analytics are highly recommended with top hiring drives in Bangalore.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide placement support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We provide 100% placement support including 1-on-1 technical mock interviews, resume and GitHub portfolio building, and direct interview scheduling with 500+ partnered IT companies.",
        },
      },
      {
        "@type": "Question",
        name: "Are the classes available online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer both offline classroom batches with live dedicated lab facilities across Bangalore and interactive live instructor-led online batches.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <NewHomeExperience />
    </>
  );
}
