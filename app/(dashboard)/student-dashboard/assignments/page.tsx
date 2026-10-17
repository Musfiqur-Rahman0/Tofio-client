import { AssignmentDashboard } from "@/components/Assignments/AssignmentDashboard"
import OverviewCard from "@/components/shared/OverviewCard"
import PageHeading from "@/components/shared/Pageheading"

interface AssignmentStat {
  id: number
  value: string
  label: string
  accentColor: string
}

const assignmentStats: AssignmentStat[] = [
  {
    id: 1,
    value: "03",
    label: "Due this week",
    accentColor: "bg-amber-600",
  },
  {
    id: 2,
    value: "07",
    label: "To submit",
    accentColor: "bg-violet-600",
  },
  {
    id: 3,
    value: "14",
    label: "Submitted",
    accentColor: "bg-blue-500",
  },
  {
    id: 4,
    value: "92%",
    label: "Average score",
    accentColor: "bg-emerald-500",
  },
]

interface StatsCardProps {
  item: AssignmentStat
}

export default function page() {
  return (
    <div className="space-y-8">
      <PageHeading
        title="Assignments"
        subtitle="STUDENT WORKSPACE"
        description="Know what’s due, what’s in progress, and what you’ve already finished."
        visibleButton={false}
      />

      <div className="flex w-full flex-wrap gap-5">
        {assignmentStats.map((item) => (
          <StatsCard item={item} key={item.id} />
        ))}
      </div>
      <AssignmentDashboard />
    </div>
  )
}

export function StatsCard({ item }: StatsCardProps) {
  return (
    <div
      key={item.id}
      className="flex flex-1 items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2"
    >
      <div className="min-w-0">
        <p className="text-xs leading-4 font-semibold text-slate-900">
          {item.value}
        </p>

        <p className="mt-1 truncate text-[9px] leading-3 text-slate-500">
          {item.label}
        </p>
      </div>

      <span
        aria-hidden="true"
        className={`ml-2 h-6 w-0.5 shrink-0 rounded-full ${item.accentColor}`}
      />
    </div>
  )
}
