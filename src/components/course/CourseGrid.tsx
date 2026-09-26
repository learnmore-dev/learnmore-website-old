import React from "react";
import { Course } from "@/types";
import { CourseCard } from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  if (!courses || courses.length === 0) {
    return (
      <div className="py-12 text-center text-slate-500">
        No courses found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}
