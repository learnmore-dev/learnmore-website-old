import React from "react";
import { Metadata } from "next";
import { LocationsExperience } from "@/components/locations/LocationsExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Campus Locations in Bangalore | Marathahalli, BTM Layout & Kalyan Nagar - LearnMore",
  description:
    "Locate LearnMore Technologies training centers in Bangalore. State-of-the-art classroom labs in Marathahalli, BTM Layout, and Kalyan Nagar with metro connectivity.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/locations",
  },
  openGraph: {
    title: "Campus Locations & Branch Locator | LearnMore Technologies Bangalore",
    description:
      "Explore our 3 high-tech learning hubs in Marathahalli, BTM Layout, and Kalyan Nagar. Classroom labs & interactive virtual batches.",
    url: "https://learnmoretechnologies.in/locations",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "LearnMore Technologies Bangalore Campuses",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Marathahalli Campus (Flagship)",
      url: "https://learnmoretechnologies.in/locations/marathahalli",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "BTM Layout Campus",
      url: "https://learnmoretechnologies.in/locations/btm",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kalyan Nagar Branch",
      url: "https://learnmoretechnologies.in/locations/kalyan-nagar",
    },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={locationsSchema} />
      <LocationsExperience />
    </>
  );
}
