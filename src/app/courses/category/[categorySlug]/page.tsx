import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CourseCatalogView } from "@/components/course/CourseCatalogView";
import { courses } from "@/data/courses";
import { categories } from "@/data/categories";
import { JsonLd } from "@/components/common/JsonLd";
import { CTASection } from "@/components/common/CTASection";
import { Sparkles, Layers, ArrowLeft, Phone } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) {
    return {
      title: "Category Not Found | LearnMore Technologies",
    };
  }

  return {
    title: `${category.name} Courses & Training in Bangalore | LearnMore Technologies`,
    description: `${category.shortDescription} LearnMore Technologies offers top ${category.name} training in Marathahalli, BTM Layout & Kalyan Nagar with 100% placement support.`,
    alternates: {
      canonical: `https://learnmoretechnologies.in/courses/category/${category.slug}`,
    },
  };
}

export default async function CategoryCoursePage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryCourses = courses.filter((c) => c.categorySlug === category.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: category.name },
  ];

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Training Courses`,
    description: category.longDescription || category.shortDescription,
    url: `https://learnmoretechnologies.in/courses/category/${category.slug}`,
    numberOfItems: categoryCourses.length,
  };

  return (
    <>
      <JsonLd data={categorySchema} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-12 pb-20">
        {/* Category Hero */}
        <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white pt-10 sm:pt-14 pb-14 overflow-hidden border-b border-navy-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition py-1"
            >
              <ArrowLeft className="w-4 h-4 text-brand-400" />
              <span>Back to All Courses</span>
            </Link>

            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/30 text-brand-300 border border-brand-500/30 text-xs font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>{category.totalCoursesCount} Specialized Master Programs</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {category.name} Training in Bangalore
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {category.longDescription || category.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Catalog Filtered to this Category */}
        <section className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <CourseCatalogView
            allCourses={courses}
            categories={categories}
            initialCategorySlug={category.slug}
          />
        </section>

        {/* Final Conversion Banner */}
        <CTASection
          badge={`Next ${category.name} Batch Starting This Monday`}
          title={`Ready to Master ${category.name}? Book a Free Live Demo Today.`}
          primaryBtnText="Reserve Free Demo Seat"
          primaryBtnHref="/contact-us"
          phone="+91 9036524555"
        />
      </div>
    </>
  );
}
