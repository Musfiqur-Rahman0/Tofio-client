import Link from "next/link"
import { RecommendedCourseCard } from "./RecommendedCourseCard"
import { recommendedCourses } from "@/data/recommended-courses"

export function RecommendedCourses() {
  return (
    <section aria-labelledby="recommended-courses-heading">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2
          id="recommended-courses-heading"
          className="text-sm font-semibold text-slate-900"
        >
          Recommended for you
        </h2>

        <Link
          href="/courses"
          className="shrink-0 text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          Explore catalog
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {recommendedCourses.map((course) => (
          <RecommendedCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}
