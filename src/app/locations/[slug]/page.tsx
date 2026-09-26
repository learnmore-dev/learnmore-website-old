import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd } from "@/components/common/JsonLd";
import { locations, getLocationBySlug } from "@/data/locations";
import { courses } from "@/data/courses";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Navigation,
  CheckCircle2,
  Bus,
  Laptop,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { EmbeddedLeadForm } from "@/components/forms/EmbeddedLeadForm";

import { generateLocationKeywords } from "@/lib/seoKeywords";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) {
    return {
      title: "Campus Location Not Found | LearnMore Technologies",
    };
  }

  const keywords = generateLocationKeywords(loc.name, loc.city);

  return {
    title: `${loc.name} - Software Training Institute in ${loc.city} | LearnMore Technologies`,
    description: loc.overview,
    keywords,
    alternates: {
      canonical: `https://learnmoretechnologies.in/locations/${loc.slug}`,
    },
    openGraph: {
      title: `${loc.name} | LearnMore Technologies`,
      description: loc.overview,
    },
  };
}

export default async function CampusLocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: loc.name },
  ];

  // Match popular courses for this branch
  const branchCourses = courses.filter((c) =>
    loc.popularCourses.includes(c.slug)
  );

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `LearnMore Technologies - ${loc.name}`,
    description: loc.overview,
    url: `https://learnmoretechnologies.in/locations/${loc.slug}`,
    telephone: loc.phone,
    email: loc.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 07:30-20:30",
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="pb-20 space-y-16">
        {/* 1. CAMPUS HERO */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-brand-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                    {loc.type}
                  </span>
                  {loc.isFlagship && (
                    <span className="px-3 py-1 bg-amber-500 text-slate-950 font-bold text-xs rounded-full uppercase tracking-wider">
                      ⭐ Flagship Headquarters
                    </span>
                  )}
                  <span className="text-xs text-slate-400">
                    Open 7 Days a Week (7:30 AM - 8:30 PM)
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  {loc.name}
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {loc.overview}
                </p>

                {/* ADDRESS & LANDMARK */}
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                    <span>{loc.address}</span>
                  </div>
                  {loc.landmark && (
                    <div className="flex items-center gap-2.5 text-slate-400 pl-6">
                      <span className="font-semibold text-slate-300">Landmark:</span>
                      <span>{loc.landmark}</span>
                    </div>
                  )}
                </div>

                {/* CONTACT ACTIONS */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Center: {loc.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${loc.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20LearnMore%20${loc.name},%20I%20want%20to%20visit%20the%20campus.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Campus</span>
                  </a>

                  <a
                    href={loc.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brand-400" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* STAT CARD / BADGE */}
              <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Campus Facilities at a Glance
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Air-Conditioned Workstation Labs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-Speed Gigabit Dedicated Internet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full-Time Lab Mentors for Practice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Placement Interview Cabins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN DETAILS & SIDEBAR */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* CONTENT AREA */}
            <div className="lg:col-span-8 space-y-12">
              {/* LAB FACILITIES */}
              <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                  <Laptop className="w-4 h-4" />
                  <span>Campus Infrastructure</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  High-Performance Labs &amp; Training Rooms
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {loc.labFacilities.map((fac, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* TRANSIT & CONNECTIVITY */}
              {loc.nearbyTransit && loc.nearbyTransit.length > 0 && (
                <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider">
                    <Bus className="w-4 h-4" />
                    <span>How to Reach This Campus</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Transit &amp; Nearby Commute Options
                  </h2>
                  <div className="space-y-3">
                    {loc.nearbyTransit.map((tr, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3 text-xs sm:text-sm text-slate-700"
                      >
                        <Navigation className="w-4 h-4 text-brand-600 shrink-0" />
                        <span>{tr}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* POPULAR COURSES AT THIS BRANCH */}
              <section className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Trending Courses at {loc.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      New weekday &amp; weekend batches starting this week.
                    </p>
                  </div>
                  <Link
                    href="/courses"
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>View All Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {branchCourses.map((course) => (
                    <div
                      key={course.slug}
                      className="bg-white rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:shadow-md transition space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {course.categoryName}
                        </span>
                        <Link href={`/locations/${loc.slug}/${course.slug}`}>
                          <h3 className="text-sm font-bold text-slate-900 hover:text-brand-600 transition line-clamp-2 leading-snug">
                            {course.title}
                          </h3>
                        </Link>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {course.overview}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">
                          {course.duration.weeks} Weeks ({course.duration.modes.join(", ")})
                        </span>
                        <Link
                          href={`/locations/${loc.slug}/${course.slug}`}
                          className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                        >
                          <span>Explore in {loc.name.split(" ")[0]}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* SIDEBAR LEAD FORM & HOURS */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <EmbeddedLeadForm
                  courseTitle={`Training at ${loc.name}`}
                  locationName={loc.name}
                  source={`Campus Visit Enquiry: ${loc.name}`}
                />

                {/* OTHER CAMPUSES LIST */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-wider">
                    Other Bangalore Campuses
                  </h4>
                  <div className="space-y-3">
                    {locations
                      .filter((l) => l.slug !== loc.slug)
                      .map((otherLoc) => (
                        <Link
                          key={otherLoc.slug}
                          href={`/locations/${otherLoc.slug}`}
                          className="group block p-3 rounded-xl hover:bg-slate-50 transition border border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover:text-brand-600 transition">
                            {otherLoc.name}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                            {otherLoc.address}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <CTASection
          badge="Visit Us"
          title={`Plan Your Visit to LearnMore ${loc.name}`}
          description="Walk in for a 1-on-1 career consultation, review course syllabus, and try our live lab environment."
        />
      </div>
    </>
  );
}
