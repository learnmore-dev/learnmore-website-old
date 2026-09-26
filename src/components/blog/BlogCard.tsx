import React from "react";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen, User } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="p-6 space-y-3">
        {/* Category Tag & Reading Time */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-slate-400 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTimeMinutes} min read</span>
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-700 truncate max-w-[120px]">{post.author.name}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="font-bold text-brand-600 group-hover:text-brand-700 flex items-center gap-1 transition"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>
    </article>
  );
}
