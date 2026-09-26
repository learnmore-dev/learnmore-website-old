import React from "react";
import { Metadata } from "next";
import { TestimonialsExperience } from "@/components/testimonials/TestimonialsExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Student Reviews, Testimonials & Success Stories | LearnMore Technologies",
  description:
    "Read 3,200+ verified student reviews and career transition success stories. 4.9/5 rated IT training institute in Bangalore with 100% placement support.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/testimonials",
  },
  openGraph: {
    title: "Student Reviews & Placement Success Stories | LearnMore Technologies",
    description:
      "Explore real feedback from alumni placed in TCS, Capgemini, IBM, Accenture, Cognizant, DXC & more.",
    url: "https://learnmoretechnologies.in/testimonials",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const testimonialSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "LearnMore Technologies",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3200",
  },
  url: "https://learnmoretechnologies.in/testimonials",
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={testimonialSchema} />
      <TestimonialsExperience />
    </>
  );
}
