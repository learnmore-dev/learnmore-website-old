import React from "react";
import { Metadata } from "next";
import { AboutUsExperience } from "@/components/about/AboutUsExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "About Us | LearnMore Technologies - Top IT Training Institute in Bangalore",
  description:
    "LearnMore Technologies is an ISO 9001:2015 certified software training institution in Bangalore providing practical lab-first education, 100% placement support, and senior MNC faculty across Marathahalli, BTM Layout & Kalyan Nagar.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/about-us",
  },
  openGraph: {
    title: "About LearnMore Technologies | Bangalore's Leading IT Training Institute",
    description:
      "Empowering technology careers through practical lab-first education, senior MNC faculty mentors, and 100% placement assistance.",
    url: "https://learnmoretechnologies.in/about-us",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "LearnMore Technologies",
  description:
    "ISO 9001:2015 certified software training institute in Bangalore offering 50+ job-oriented courses with 100% placement support.",
  url: "https://learnmoretechnologies.in/about-us",
  telephone: "+919036524555",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#43/2, Outer Ring Road, Marathahalli",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560037",
    addressCountry: "IN",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutUsExperience />
    </>
  );
}
