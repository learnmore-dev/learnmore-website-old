"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageSquare,
  Building2,
  Laptop,
  ArrowRight,
} from "lucide-react";
import { CourseBatch } from "@/types";
import { QuickEnquiryModal } from "../forms/QuickEnquiryModal";

interface BatchScheduleTableProps {
  batches?: CourseBatch[];
  courseTitle: string;
}

interface DynamicBatchItem {
  id: string;
  formattedDate: string;
  dayName: "Monday" | "Wednesday" | "Saturday";
  dayTag: string;
  scheduleType: "Weekdays (Mon - Fri)" | "Mid-Week Fast-Track (Wed - Fri)" | "Weekend Batch (Sat & Sun)";
  timeSlot: string;
  mode: "Classroom & Lab" | "Live Interactive Online" | "Hybrid (Classroom / Online)";
  badge?: "Weekend Special" | "Morning Slot" | "Evening Slot" | "Fast-Track" | "Admissions Open" | "Starting Today" | "Starting Tomorrow";
}

/**
 * Automatically computes upcoming batches starting on every Monday, Wednesday, and Saturday
 * in real-time from the visitor's live current date.
 */
function generateUpcomingBatches(baseDate?: Date): DynamicBatchItem[] {
  const modes: ("Classroom & Lab" | "Live Interactive Online" | "Hybrid (Classroom / Online)")[] = [
    "Classroom & Lab",
    "Live Interactive Online",
    "Classroom & Lab",
    "Hybrid (Classroom / Online)",
    "Classroom & Lab",
    "Live Interactive Online",
  ];

  const timeSlots = {
    Monday: [
      { time: "07:30 AM - 09:30 AM", type: "Weekdays (Mon - Fri)" as const, badge: "Morning Slot" as const },
      { time: "07:00 PM - 09:00 PM", type: "Weekdays (Mon - Fri)" as const, badge: "Evening Slot" as const },
    ],
    Wednesday: [
      { time: "10:00 AM - 12:30 PM", type: "Mid-Week Fast-Track (Wed - Fri)" as const, badge: "Fast-Track" as const },
      { time: "06:30 PM - 08:30 PM", type: "Mid-Week Fast-Track (Wed - Fri)" as const, badge: "Admissions Open" as const },
    ],
    Saturday: [
      { time: "10:00 AM - 02:00 PM", type: "Weekend Batch (Sat & Sun)" as const, badge: "Weekend Special" as const },
      { time: "02:30 PM - 06:30 PM", type: "Weekend Batch (Sat & Sun)" as const, badge: "Weekend Special" as const },
    ],
  };

  const results: DynamicBatchItem[] = [];
  const reference = baseDate ? new Date(baseDate) : new Date();
  reference.setHours(0, 0, 0, 0);

  // Scan next 35 days to collect 8 upcoming batches starting on Mon (1), Wed (3), Sat (6)
  for (let offset = 0; offset <= 35 && results.length < 8; offset++) {
    const candidateDate = new Date(reference);
    candidateDate.setDate(reference.getDate() + offset);

    const dayOfWeek = candidateDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    let dayKey: "Monday" | "Wednesday" | "Saturday" | null = null;

    if (dayOfWeek === 1) dayKey = "Monday";
    else if (dayOfWeek === 3) dayKey = "Wednesday";
    else if (dayOfWeek === 6) dayKey = "Saturday";

    if (dayKey) {
      const isToday = offset === 0;
      const isTomorrow = offset === 1;

      const dayTag = isToday
        ? "Starting Today"
        : isTomorrow
        ? "Starting Tomorrow"
        : `Every ${dayKey}`;

      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const formattedDate = `${dayNames[dayOfWeek]}, ${String(candidateDate.getDate()).padStart(2, "0")} ${monthNames[candidateDate.getMonth()]} ${candidateDate.getFullYear()}`;

      const slotOptions = timeSlots[dayKey];
      const slot = slotOptions[results.length % slotOptions.length];
      const mode = modes[results.length % modes.length];

      results.push({
        id: `batch-${dayKey.toLowerCase()}-${candidateDate.getTime()}-${results.length}`,
        formattedDate,
        dayName: dayKey,
        dayTag,
        scheduleType: slot.type,
        timeSlot: slot.time,
        mode,
        badge: isToday ? "Starting Today" : isTomorrow ? "Starting Tomorrow" : slot.badge,
      });
    }
  }

  return results;
}

export function BatchScheduleTable({ batches, courseTitle }: BatchScheduleTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Auto-calculated dynamic batches
  const [dynamicBatches, setDynamicBatches] = useState<DynamicBatchItem[]>(() => generateUpcomingBatches());

  // Automatically recalculate on the client side to match the live local date
  useEffect(() => {
    setDynamicBatches(generateUpcomingBatches(new Date()));

    // Automatically check and refresh dates hourly if user keeps browser open
    const interval = setInterval(() => {
      setDynamicBatches(generateUpcomingBatches(new Date()));
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
        {/* Card Top Banner */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border-b border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 border border-brand-400/40 text-brand-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fresh Batches Every Monday, Wednesday &amp; Saturday</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Limited Batch Size (12-15 Students)</span>
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Upcoming {courseTitle} Batch Timetable
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Weekday &amp; Weekend Classroom Training &amp; Live Instructor-Led Interactive Online Slots.
              </p>
            </div>

            {/* Quick Contact CTAs */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="tel:+919036524555"
                className="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 90365 24555</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs transition flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
                <span>Request Custom Slot</span>
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Start Date &amp; Day</th>
                <th className="py-3 px-4">Schedule &amp; Timings</th>
                <th className="py-3 px-4">Mode</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {dynamicBatches.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50/90 transition group">
                  {/* Start Date */}
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-extrabold text-xs sm:text-sm">
                          {b.formattedDate}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                              b.dayTag.includes("Today")
                                ? "bg-emerald-100 text-emerald-800"
                                : b.dayTag.includes("Tomorrow")
                                ? "bg-amber-100 text-amber-800"
                                : "bg-brand-100 text-brand-700"
                            }`}
                          >
                            {b.dayTag}
                          </span>
                          {b.badge && (
                            <span className="text-[10px] font-semibold text-slate-500">
                              • {b.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Schedule & Time */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-800 block">
                        {b.scheduleType}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{b.timeSlot}</span>
                      </div>
                    </div>
                  </td>

                  {/* Mode */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        b.mode.includes("Online")
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : b.mode.includes("Hybrid")
                          ? "bg-cyan-50 text-cyan-800 border border-cyan-200"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      {b.mode.includes("Online") ? (
                        <Laptop className="w-3 h-3" />
                      ) : (
                        <Building2 className="w-3 h-3" />
                      )}
                      <span>{b.mode}</span>
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="py-1.5 px-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition shadow-xs hover:shadow flex items-center gap-1.5 ml-auto"
                    >
                      <span>Reserve Seat</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Support Notice */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Free Demo Class &amp; Lab Access:</strong> You can attend 1 complimentary demo session before finalizing batch enrollment.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 font-bold text-slate-700">
            <span>Marathahalli</span> • <span>BTM Layout</span> • <span>Kalyan Nagar</span> • <span>Live Online</span>
          </div>
        </div>
      </div>

      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourseSlug={courseTitle}
      />
    </>
  );
}
