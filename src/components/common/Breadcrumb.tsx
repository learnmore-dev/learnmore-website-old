import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const cleanItems = items.filter(
    (item) => item.label.toLowerCase() !== "home" && item.href !== "/"
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://learnmoretechnologies.in/",
      },
      ...cleanItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href
          ? `https://learnmoretechnologies.in${item.href}`
          : undefined,
      })),
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200 text-xs sm:text-sm text-slate-600">
        <div className="max-w-[1700px] mx-auto flex items-center flex-wrap gap-1.5">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-brand-600 transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {cleanItems.map((item, index) => {
            const isLast = index === cleanItems.length - 1;
            return (
              <div key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-600 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-md">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
