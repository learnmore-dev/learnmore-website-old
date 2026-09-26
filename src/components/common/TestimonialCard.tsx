import React from "react";
import { Star, CheckCircle2, Building2, MapPin } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-500 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500" />
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-4">
          &ldquo;{testimonial.reviewText}&rdquo;
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
            <span>{testimonial.studentName}</span>
            {testimonial.verifiedStudent && (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            )}
          </div>
          <p className="text-[11px] text-slate-500 line-clamp-1">
            {testimonial.courseTaken}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
            <MapPin className="w-3 h-3" />
            <span>{testimonial.location}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-1 text-xs font-bold text-slate-900">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            <span>{testimonial.placedCompany}</span>
          </div>
          {testimonial.salaryPackage && (
            <span className="text-[11px] font-black text-emerald-600">
              {testimonial.salaryPackage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
