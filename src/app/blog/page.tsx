import React from "react";
import { Metadata } from "next";
import { BlogExperience } from "@/components/blog/BlogExperience";

export const metadata: Metadata = {
  title: "Tech Blog & Interview Preparation Guides | LearnMore Technologies",
  description:
    "Explore in-depth technical tutorials, AWS/DevOps interview questions, Data Science career roadmaps, and software testing guides written by senior corporate architects.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/blog",
  },
  openGraph: {
    title: "Tech Blog & Interview Preparation Guides | LearnMore Technologies",
    description:
      "In-depth tutorials, interview question breakdowns, tech trends, and career roadmaps written by industry experts.",
    url: "https://learnmoretechnologies.in/blog",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogListingPage() {
  return <BlogExperience />;
}
