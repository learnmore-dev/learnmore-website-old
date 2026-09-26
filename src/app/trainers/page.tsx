import React from "react";
import { Metadata } from "next";
import { TrainersExperience } from "@/components/trainers/TrainersExperience";

export const metadata: Metadata = {
  title: "Industry Expert Faculty & Trainers | LearnMore Technologies",
  description:
    "Meet the senior cloud architects, full stack leads, and AI researchers who train at LearnMore Technologies. 100% active MNC practitioners with 10+ years of enterprise experience.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/trainers",
  },
};

export default function TrainersPage() {
  return <TrainersExperience />;
}

