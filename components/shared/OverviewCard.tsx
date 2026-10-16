import { CourseOverview } from "@/app/(dashboard)/student-dashboard/page"

interface CourseOverviewCardProps {
  item: CourseOverview
}

export default function OverviewCard({ item }: CourseOverviewCardProps) {
  return (
    <div key={item.id} className="flex-1 rounded-xl border bg-white p-4">
      <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>

      <p className="text-sm text-gray-500">{item.title}</p>

      <p
        className={`mt-1 text-xs font-semibold ${
          item.trendColor === "success" ? "text-emerald-600" : "text-indigo-600"
        }`}
      >
        {item.description}
      </p>
    </div>
  )
}
