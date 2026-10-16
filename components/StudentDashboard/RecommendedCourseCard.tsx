import type { RecommendedCourse } from "@/types/recommended-course"
import Link from "next/link"

interface RecommendedCourseCardProps {
  course: RecommendedCourse
}

const themeStyles = {
  purple: {
    icon: "bg-violet-100 text-violet-600",
  },
  blue: {
    icon: "bg-blue-100 text-blue-600",
  },
  green: {
    icon: "bg-emerald-100 text-emerald-600",
  },
}

export function RecommendedCourseCard({ course }: RecommendedCourseCardProps) {
  const theme = themeStyles[course.theme]

  return (
    <article className="flex min-w-0 gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-shadow hover:shadow-sm">
      {/* Course icon */}
      <div
        className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${theme.icon}`}
      >
        {course.abbreviation}
      </div>

      {/* Course details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-medium text-slate-900">
          {course.title}
        </h3>

        <p className="mt-1 text-[10px] text-slate-500">
          {course.level} · {course.durationHours} hours
        </p>

        <span className="ma x-w-full inline-flex truncate rounded-md bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500">
          {course.badge}
        </span>
      </div>

      {/* Navigate to course */}
      <div className="flex h-full flex-col justify-end">
        {" "}
        <Link
          type="button"
          aria-label={`View ${course.title}`}
          href={`/courses/${course.id}`}

          className="flex size-8 shrink-0 items-center justify-center rounded-lg text-indigo-600 transition-colors hover:bg-indigo-50 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
