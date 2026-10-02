import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";
import { FloatingContactButtons } from "@/components/common/FloatingContactButtons";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { JsonLd } from "@/components/common/JsonLd";
import { ContentProtection } from "@/components/common/ContentProtection";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learnmoretechnologies.in"),
  title: {
    default: "LearnMore Technologies | Top Software Training Institute in Bangalore",
    template: "%s | LearnMore Technologies",
  },
  description:
    "Bangalore's #1 Software Training Institute in Marathahalli, BTM Layout & Kalyan Nagar. Certified courses in Python Full Stack, AWS, Data Science, DevOps, Java, AI & Software Testing with 100% Placement Support.",
  authors: [{ name: "LearnMore Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learnmoretechnologies.in",
    siteName: "LearnMore Technologies",
    title: "LearnMore Technologies | Top Software Training Institute in Bangalore",
    description:
      "Join LearnMore Technologies – leading Software Training Institute in Bangalore. Certified in Python, Java, AWS, DevOps, AI & Data Science with 100% job placement assistance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnMore Technologies | Software Training Institute in Bangalore",
    description: "100% Placement Assistance in Python, Java, AWS, DevOps, Data Science & AI.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "google-site-verification=LMT-GSC-Verify-2026-Domain-Ownership",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "LearnMore Technologies",
    url: "https://learnmoretechnologies.in",
    logo: "https://learnmoretechnologies.in/logo.png",
    description:
      "Top Software Training Institute in Bangalore offering IT courses with 100% placement support in Marathahalli, BTM Layout, and Kalyan Nagar.",
    telephone: "+919036524555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#43/2, Outer Ring Road, Marathahalli",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560037",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/learnmoretechnologiesbangalore",
      "https://www.linkedin.com/company/learnmoretechnologiesbangalore/",
      "https://youtube.com/@learnnmore?si=vhpKcUMcilVArZkd",
      "https://www.instagram.com/learnmore_technologies?stkn=MXJld2hldXY5ZWs3ZA==",
      "https://x.com/LearnMoreEdu",
      "https://www.trustpilot.com/review/learnmoretechnologies.in",
    ],
  };

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${caveat.variable} bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased overflow-x-hidden w-full max-w-full`}>
        <ContentProtection />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <JsonLd data={orgSchema} />
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
        <StickyBottomBar />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
