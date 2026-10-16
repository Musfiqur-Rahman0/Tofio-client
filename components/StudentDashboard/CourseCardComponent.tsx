"use client"

import { CourseCard } from "@/app/(dashboard)/student-dashboard/page"
import Link from "next/link"

interface CourseCardProps {
  course: CourseCard
  onContinue?: (courseId: string) => void
}

export function CourseCardComponent({ course, onContinue }: CourseCardProps) {
  const progress = Math.min(100, Math.max(0, course.progress))

  return (
    <article className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      {/* Course banner */}
      <div className="flex h-16 items-start justify-between rounded-lg bg-violet-100 p-3">
        <span className="text-xl font-bold text-violet-600">
          {course.abbreviation}
        </span>

        <span className="max-w-[60%] truncate rounded-md bg-white px-2 py-1 text-[11px] text-slate-600">
          {course.category}
        </span>
      </div>

      {/* Course information */}
      <div className="mt-3 min-w-0">
        <h3 className="truncate text-sm font-semibold text-slate-900">
          {course.title}
        </h3>

        <p className="mt-1 truncate text-xs text-slate-500">
          Module {course.module} · {course.subtitle}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div
          role="progressbar"
          aria-label={`${course.title} completion`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          className="h-1.5 overflow-hidden rounded-full bg-slate-200"
        >
          <div
            className="h-full rounded-full bg-indigo-600 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-[11px] text-slate-500">{progress}% complete</p>
      </div>

      {/* Action */}
      <Link
        href={"#"}
        className="mt-2 w-full rounded-lg bg-indigo-600 px-3 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {course.actionLabel}
      </Link>
    </article>
  )
}
