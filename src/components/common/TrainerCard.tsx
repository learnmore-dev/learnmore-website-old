import React from "react";
import { Award, Briefcase, Users, Star } from "lucide-react";
import { Trainer } from "@/types";

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-4">
          {trainer.avatarUrl ? (
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md flex-shrink-0">
              <img
                src={trainer.avatarUrl}
                alt={trainer.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-700 to-navy-900 text-white font-black text-xl flex items-center justify-center shadow-md flex-shrink-0">
              {trainer.name.split(" ").map((n) => n[0]).join("")}
            </div>
          )}
          <div>
            <h4 className="text-base font-bold text-slate-900">{trainer.name}</h4>
            <p className="text-xs text-brand-600 font-semibold">{trainer.role}</p>
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
              <Briefcase className="w-3 h-3 text-slate-400" />
              <span>{trainer.experienceYears}+ Years Industry Exp.</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {trainer.bio}
        </p>

        {/* Skill Tags */}
        {trainer.tags && trainer.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {trainer.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-brand-600" />
          <span className="font-semibold text-slate-800">{trainer.studentsTrainedCount.toLocaleString()}+</span>
          <span>Engineers Trained</span>
        </div>
        <div className="flex items-center gap-1 text-amber-500 font-bold">
          <Star className="w-3.5 h-3.5 fill-amber-500" />
          <span>4.9 / 5.0</span>
        </div>
      </div>
    </div>
  );
}
