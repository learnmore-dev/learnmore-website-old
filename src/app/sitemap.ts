import { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { blogs } from "@/data/blogs";
import { wordPressPagesInventory } from "@/data/pageInventory";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://learnmoretechnologies.in";

  const staticPages = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/courses`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/corporate-training`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/placement`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/internship`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/become-a-teacher`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/trainers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const coursePages = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/courses/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationPages = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationCoursePages = locations.flatMap((loc) =>
    courses.map((course) => ({
      url: `${baseUrl}/locations/${loc.slug}/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Migrated WordPress Inventory URLs
  const existingUrls = new Set([
    ...staticPages.map((p) => p.url),
    ...coursePages.map((p) => p.url),
    ...categoryPages.map((p) => p.url),
    ...locationPages.map((p) => p.url),
    ...locationCoursePages.map((p) => p.url),
    ...blogPages.map((p) => p.url),
  ]);

  const inventoryPages = wordPressPagesInventory
    .filter((record) => record.migrationAction === "DYNAMIC_RENDER" || record.pageType === "SYLLABUS")
    .map((record) => ({
      url: `${baseUrl}/${record.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: record.pageType === "COURSE_LOCATION" ? 0.85 : 0.8,
    }))
    .filter((item) => !existingUrls.has(item.url));

  return [
    ...staticPages,
    ...coursePages,
    ...categoryPages,
    ...locationPages,
    ...locationCoursePages,
    ...blogPages,
    ...inventoryPages,
  ];
}
