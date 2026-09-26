import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { LocationHub } from "@/types";

interface LocationCardProps {
  location: LocationHub;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-brand-300 transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {location.type}
          </span>
          {location.isFlagship && (
            <span className="text-[10px] font-black text-white bg-crimson-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Flagship HQ
            </span>
          )}
        </div>

        <Link href={`/locations/${location.slug}`}>
          <h3 className="text-lg font-bold text-slate-900 hover:text-brand-600 transition">
            {location.name}
          </h3>
        </Link>

        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {location.overview}
        </p>

        {/* Address */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
          <MapPin className="w-4 h-4 text-crimson-500 flex-shrink-0 mt-0.5" />
          <span>{location.address}</span>
        </div>

        {/* Lab Facilities */}
        <div className="mt-3 space-y-1">
          {location.labFacilities.slice(0, 2).map((fac, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              <span className="line-clamp-1">{fac}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <a
          href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
          className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center gap-1 transition"
        >
          <Phone className="w-3.5 h-3.5 text-brand-600" />
          <span>Call Desk</span>
        </a>

        <Link
          href={`/locations/${location.slug}`}
          className="py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm transition"
        >
          <span>View Campus</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
