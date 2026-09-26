import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd } from "@/components/common/JsonLd";
import { blogs } from "@/data/blogs";
import { getCourseBySlug } from "@/data/courses";
import {
  Clock,
  User,
  Calendar,
  Tag,
  ArrowLeft,
  Share2,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { EmbeddedLeadForm } from "@/components/forms/EmbeddedLeadForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | LearnMore Technologies",
    };
  }

  return {
    title: `${post.title} | LearnMore Technologies Blog`,
    description: post.summary,
    alternates: {
      canonical: `https://learnmoretechnologies.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedCourse = post.relatedCourseSlug
    ? getCourseBySlug(post.relatedCourseSlug)
    : undefined;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LearnMore Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://learnmoretechnologies.in/logo.png",
      },
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://learnmoretechnologies.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="pb-24 space-y-12">
        {/* 1. ARTICLE HEADER */}
        <header className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="max-w-4xl space-y-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to all articles</span>
              </Link>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-brand-600/30 text-brand-400 border border-brand-500/30 text-xs font-bold rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readingTimeMinutes} min read</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.publishedDate}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {post.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                {post.summary}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600/30 border border-brand-500/40 flex items-center justify-center text-brand-400 font-bold text-sm">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-slate-400">{post.author.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. MAIN CONTENT & SIDEBAR */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* ARTICLE CONTENT */}
            <div className="lg:col-span-8 space-y-8">
              {/* TABLE OF CONTENTS */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-brand-600" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className="block text-xs sm:text-sm text-slate-700 hover:text-brand-600 hover:underline font-medium transition"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* POST CONTENT BODY */}
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-brand-700">
                <div
                  className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-slate-800 space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/^## (.*$)/gim, '<h2 class="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 pb-2 border-b border-slate-200">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-slate-800 mt-6 mb-2">$1</h3>')
                      .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-slate-700 my-1">$1</li>')
                      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-slate-900">$1</strong>'),
                  }}
                />
              </div>

              {/* RELATED COURSE CALLOUT IN ARTICLE */}
              {relatedCourse && (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="px-2.5 py-1 rounded bg-brand-600 text-white font-bold text-[11px] uppercase tracking-wider">
                      Recommended Training
                    </span>
                    <h4 className="text-lg font-black text-slate-900">
                      {relatedCourse.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Master this skill with live instructor-led projects, mock interviews, and 100% placement support.
                    </p>
                  </div>
                  <Link
                    href={`/courses/${relatedCourse.slug}`}
                    className="shrink-0 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              {/* LEAD ENQUIRY FORM */}
              <div className="sticky top-28 space-y-6">
                <EmbeddedLeadForm
                  courseTitle={post.title}
                  locationName="Online & Bangalore"
                  source={`Blog Post: ${post.title}`}
                />

                {/* OTHER ARTICLES */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-wider">
                    More Technical Guides
                  </h4>
                  <div className="space-y-4">
                    {blogs
                      .filter((b) => b.slug !== post.slug)
                      .slice(0, 4)
                      .map((otherPost) => (
                        <Link
                          key={otherPost.slug}
                          href={`/blog/${otherPost.slug}`}
                          className="group block space-y-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                        >
                          <span className="text-[11px] font-semibold text-brand-600 uppercase">
                            {otherPost.category}
                          </span>
                          <h5 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-600 transition line-clamp-2 leading-snug">
                            {otherPost.title}
                          </h5>
                          <span className="text-[11px] text-slate-400">
                            {otherPost.readingTimeMinutes} min read • {otherPost.publishedDate}
                          </span>
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
          badge="Start Learning Today"
          title="Transform Your IT Career With Real-Time Projects"
          description="Join 45,000+ engineers trained at LearnMore Technologies. Get hands-on lab access, direct mentor guidance, and 100% placement support."
        />
      </article>
    </>
  );
}
