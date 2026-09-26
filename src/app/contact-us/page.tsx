import React from "react";
import { Metadata } from "next";
import { ContactUsExperience } from "@/components/contact/ContactUsExperience";
import { JsonLd } from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us & Campus Locations in Bangalore | LearnMore Technologies",
  description:
    "Contact LearnMore Technologies. Visit our 3 state-of-the-art Bangalore campuses in Marathahalli, BTM Layout, and Kalyan Nagar. Call +91 90365 24555 or chat on WhatsApp for admissions.",
  alternates: {
    canonical: "https://learnmoretechnologies.in/contact-us",
  },
  openGraph: {
    title: "Contact LearnMore Technologies Bangalore",
    description:
      "Get in touch with Bangalore's leading software training institute. Direct admissions helpline: +91 90365 24555.",
    url: "https://learnmoretechnologies.in/contact-us",
    siteName: "LearnMore Technologies",
    locale: "en_US",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact LearnMore Technologies",
  url: "https://learnmoretechnologies.in/contact-us",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "LearnMore Technologies",
    telephone: "+919036524555",
    email: "office.learnmore@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#43/2, 2nd Floor, Above HDFC Bank, Outer Ring Road, Marathahalli",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560037",
      addressCountry: "IN",
    },
  },
};

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactUsExperience />
    </>
  );
}
