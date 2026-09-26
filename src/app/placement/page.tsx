import React from "react";
import { Metadata } from "next";
import { PlacementExperience } from "@/components/placement/PlacementExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "100% Placement Assistance & Career Support | LearnMore Technologies",
  description:
    "Achieve your dream tech career with 100% placement support in Bangalore. 500+ hiring partner MNCs, 1-on-1 mock interviews, ATS resume crafting, and verified alumni success stories.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/placement",
  },
  openGraph: {
    title: "100% Placement Support & MNC Career Transition | LearnMore Technologies",
    description:
      "Direct interview drives with 500+ partner MNCs, technical mock interviews, and career transformation support.",
    url: "https://learnmoretechnologies.in/placement",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const placementSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "LearnMore Technologies Placement Cell",
  description:
    "Dedicated career placement cell offering 1-on-1 technical mock interviews, resume optimization, and direct hiring drives with 500+ IT enterprises.",
  url: "https://learnmoretechnologies.in/placement",
  telephone: "+919036524555",
};

export default function PlacementPage() {
  return (
    <>
      <JsonLd data={placementSchema} />
      <PlacementExperience />
    </>
  );
}
