import React from "react";
import { GraduationCap, Award, Building2, CheckCircle2, ShieldCheck, UserCheck, Star } from "lucide-react";
import { CourseTrainer } from "@/types";
import { trainersList, TrainerMentor } from "@/data/trainers";

interface TrainerSectionProps {
  trainers?: CourseTrainer[];
  courseTitle: string;
}

interface FacultyDisplayItem {
  name: string;
  role: string;
  experience: string;
  bio: string;
  companies: string[];
  skills: string[];
  rating?: string;
}

/**
 * Intelligent helper pulling directly from verified technical mentors in trainersList
 * and returning 3 to 4 domain-aligned senior trainers per course/location page.
 */
function resolveFacultyProfiles(courseTitle: string, explicitTrainers?: CourseTrainer[]): FacultyDisplayItem[] {
  const normalized = courseTitle.toLowerCase();

  // 1. Data Science / Data Analytics / Power BI / Tableau / SQL / Snowflake
  if (
    normalized.includes("data") ||
    normalized.includes("analytics") ||
    normalized.includes("power bi") ||
    normalized.includes("tableau") ||
    normalized.includes("sql") ||
    normalized.includes("snowflake")
  ) {
    const matched = [
      trainersList.find((t) => t.id === "kavin-kumar"),
      trainersList.find((t) => t.id === "Suchithracl"),
      trainersList.find((t) => t.id === "SwathiNV"),
      trainersList.find((t) => t.id === "vijay"),
    ].filter(Boolean) as TrainerMentor[];

    return matched.map((t) => ({
      name: t.name,
      role: t.role,
      experience: t.experience,
      bio: t.bio,
      companies: [t.company],
      skills: t.skills,
      rating: t.rating,
    }));
  }

  // 2. Python / Full Stack / Web Development / MERN / MEAN / Frontend
  if (
    normalized.includes("python") ||
    normalized.includes("full stack") ||
    normalized.includes("mern") ||
    normalized.includes("mean") ||
    normalized.includes("web development") ||
    normalized.includes("react") ||
    normalized.includes("javascript")
  ) {
    const matched = [
      trainersList.find((t) => t.id === "kumar-abhishek"),
      trainersList.find((t) => t.id === "RiddhiSirsikar"),
      trainersList.find((t) => t.id === "JEEVAN C"),
      trainersList.find((t) => t.id === "namrata-halabannavar"),
    ].filter(Boolean) as TrainerMentor[];

    return matched.map((t) => ({
      name: t.name,
      role: t.role,
      experience: t.experience,
      bio: t.bio,
      companies: [t.company],
      skills: t.skills,
      rating: t.rating,
    }));
  }

  // 3. Cloud Computing / AWS / Azure / GCP / DevOps / SRE / Kubernetes
  if (
    normalized.includes("aws") ||
    normalized.includes("cloud") ||
    normalized.includes("devops") ||
    normalized.includes("azure") ||
    normalized.includes("gcp") ||
    normalized.includes("kubernetes") ||
    normalized.includes("docker")
  ) {
    const matched = [
      trainersList.find((t) => t.id === "Vishal B Pandey"),
      trainersList.find((t) => t.id === "kumar-abhishek"),
      trainersList.find((t) => t.id === "althaf"),
      trainersList.find((t) => t.id === "naveena"),
    ].filter(Boolean) as TrainerMentor[];

    return matched.map((t) => ({
      name: t.name,
      role: t.role,
      experience: t.experience,
      bio: t.bio,
      companies: [t.company],
      skills: t.skills,
      rating: t.rating,
    }));
  }

  // 4. Java / Spring Boot / Enterprise Backend / Database
  if (normalized.includes("java") || normalized.includes("spring") || normalized.includes("hibernate")) {
    const matched = [
      trainersList.find((t) => t.id === "kumar-abhishek"),
      trainersList.find((t) => t.id === "Vishal B Pandey"),
      trainersList.find((t) => t.id === "althaf"),
      trainersList.find((t) => t.id === "naveena"),
    ].filter(Boolean) as TrainerMentor[];

    return matched.map((t) => ({
      name: t.name,
      role: t.role,
      experience: t.experience,
      bio: t.bio,
      companies: [t.company],
      skills: t.skills,
      rating: t.rating,
    }));
  }

  // 5. Software Testing / QA Automation / Selenium
  if (normalized.includes("testing") || normalized.includes("qa") || normalized.includes("selenium")) {
    const matched = [
      trainersList.find((t) => t.id === "Vishal B Pandey"),
      trainersList.find((t) => t.id === "RiddhiSirsikar"),
      trainersList.find((t) => t.id === "kumar-abhishek"),
      trainersList.find((t) => t.id === "JEEVAN C"),
    ].filter(Boolean) as TrainerMentor[];

    return matched.map((t) => ({
      name: t.name,
      role: t.role,
      experience: t.experience,
      bio: t.bio,
      companies: [t.company],
      skills: t.skills,
      rating: t.rating,
    }));
  }

  // 6. UI / UX Design
  if (normalized.includes("ui") || normalized.includes("ux") || normalized.includes("design") || normalized.includes("figma")) {
    const matched = [
      trainersList.find((t) => t.id === "namrata-halabannavar"),
      trainersList.find((t) => t.id === "rajitha"),
      trainersList.find((t) => t.id === "RiddhiSirsikar"),
    ].filter(Boolean) as TrainerMentor[];

    return matched.map((t) => ({
      name: t.name,
      role: t.role,
      experience: t.experience,
      bio: t.bio,
      companies: [t.company],
      skills: t.skills,
      rating: t.rating,
    }));
  }

  // 7. General Default Technical Mentors Panel
  const defaultList = [
    trainersList.find((t) => t.id === "Vishal B Pandey"),
    trainersList.find((t) => t.id === "kumar-abhishek"),
    trainersList.find((t) => t.id === "RiddhiSirsikar"),
    trainersList.find((t) => t.id === "kavin-kumar"),
  ].filter(Boolean) as TrainerMentor[];

  return defaultList.map((t) => ({
    name: t.name,
    role: t.role,
    experience: t.experience,
    bio: t.bio,
    companies: [t.company],
    skills: t.skills,
    rating: t.rating,
  }));
}

export function TrainerSection({ trainers, courseTitle }: TrainerSectionProps) {
  const faculty = resolveFacultyProfiles(courseTitle, trainers);

  return (
    <section id="faculty-mentors" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-brand-600" />
          <span>Technical Mentors &amp; Faculty Panel</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          Learn From Senior Industry Mentors for <span className="text-brand-600">{courseTitle}</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Our technical mentorship panel consists of seasoned architects, engineering managers, and senior software developers with 7 to 12+ years of production experience in top tech enterprises.
        </p>
      </div>

      {/* 3 to 4 Trainer Cards in Responsive Grid (Name & Role Focused - No Images) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
        {faculty.map((trainer, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 bg-slate-50/90 hover:bg-white border border-slate-200 hover:border-brand-300 rounded-2xl space-y-4 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              {/* Top Row: Name, Role & Rating */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                      {trainer.name}
                    </h3>
                  </div>
                  <div className="text-xs font-bold text-brand-600">
                    {trainer.role}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200/90 px-2.5 py-0.5 rounded-full shrink-0 flex items-center gap-1 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{trainer.experience}</span>
                  </span>
                  {trainer.rating && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.2 rounded-full flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{trainer.rating} / 5.0</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Bio / Background */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {trainer.bio}
              </p>

              {/* Mentorship Focus & Skills */}
              {trainer.skills && trainer.skills.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Core Technical Mentorship:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Former Company & Verified Mentor Pill */}
            {trainer.companies && trainer.companies.length > 0 && (
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Background:</span>
                  <span className="text-slate-900 font-bold">{trainer.companies.join(" • ")}</span>
                </div>

                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Faculty</span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 1-on-1 Mentorship & Live Support Notice */}
      <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border border-slate-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>1-on-1 Senior Mentorship:</strong> Every batch includes live code reviews, doubt clarification sessions, and mock technical interview drills with our faculty panel.
          </span>
        </div>
        <span className="text-slate-400 text-[11px] shrink-0">
          Available across Marathahalli, BTM Layout, Kalyan Nagar &amp; Live Online
        </span>
      </div>
    </section>
  );
}
