import React from "react";
import { Metadata } from "next";
import { FAQExperience } from "@/components/faq/FAQExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | LearnMore Technologies",
  description:
    "Find answers to common questions regarding course enrollments, placement support, lab access, online vs classroom batches, fee structures, and certifications at LearnMore Technologies Bangalore.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | LearnMore Technologies",
    description:
      "Clear answers to your questions about our courses, admissions, classroom facilities, online learning, placements, certifications, and more.",
    url: "https://learnmoretechnologies.in/faq",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the admission and enrollment process at LearnMore Technologies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can enroll online through our website or visit any of our 3 Bangalore campuses (Marathahalli, BTM Layout, Kalyan Nagar). You can attend a free demo class, consult with our career counselors, choose your preferred batch timing (weekday or weekend), and complete registration with flexible payment options.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free demo sessions before joining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer free interactive live demo sessions for all courses. You can experience the trainer's teaching style, inspect the curriculum, and ask technical questions before making any enrollment commitment.",
      },
    },
    {
      "@type": "Question",
      name: "How does the 100% Placement Support program work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our dedicated placement cell provides end-to-end placement assistance including resume building, GitHub portfolio optimization, LinkedIn profile reviews, 1-on-1 mock technical interviews, HR screening preparation, and unlimited interview scheduling with our 450+ hiring partner companies until you get placed.",
      },
    },
    {
      "@type": "Question",
      name: "What hardware and lab facilities are available at your campuses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our 3 physical campuses (Marathahalli HQ, BTM Layout, Kalyan Nagar) feature high-spec Core i7 workstations with 32GB RAM, dedicated gigabit fiber internet, smart interactive board classrooms, 24/7 student practice lab access, and private interview preparation cabins.",
      },
    },
    {
      "@type": "Question",
      name: "Will I receive a course completion certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Upon completing the course and submitting your capstone project, you receive an industry-recognized, verifiable Course Completion Certificate with a unique QR code credential ID that can be shared on LinkedIn and added to your resume.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchemaData} />
      <FAQExperience />
    </>
  );
}
