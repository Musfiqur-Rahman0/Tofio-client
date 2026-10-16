import { WeeklyLearningGoal } from "@/app/(dashboard)/student-dashboard/page"

interface WeeklyLearningGoalCardProps {
  goal: WeeklyLearningGoal
}

export function WeeklyLearningGoalCard({ goal }: WeeklyLearningGoalCardProps) {
  const progress =
    goal.targetHours > 0
      ? Math.min(
          100,
          Math.max(
            0,
            Math.round((goal.completedHours / goal.targetHours) * 100)
          )
        )
      : 0

  const formatHours = (hours: number) =>
    Number.isInteger(hours) ? String(hours) : String(hours)

  return (
    <aside className="h-full w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Heading */}
      <h3 className="text-sm font-semibold text-slate-900">
        Weekly learning goal
      </h3>

      {/* Hours */}
      <p className="mt-10 text-xl font-bold tracking-tight text-slate-900">
        {formatHours(goal.completedHours)} / {formatHours(goal.targetHours)}{" "}
        hours
      </p>

      {/* Progress bar */}
      <div
        role="progressbar"
        aria-label="Weekly learning goal progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        className="mt-3 h-1.5 max-w-44 overflow-hidden rounded-full bg-slate-200"
      >
        <div
          className="h-full rounded-full bg-emerald-600 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-xs font-medium text-emerald-600">
        {progress}% completed
      </p>

      {/* Divider */}
      <div className="my-4 max-w-44 border-t border-slate-200" />

      {/* Next milestone */}
      <div className="mt-10">
        <p className="text-xs text-slate-500">Next milestone</p>

        {goal.nextMilestone ? (
          <p className="mt-2 text-xs font-medium text-slate-900">
            {goal.nextMilestone.title}
          </p>
        ) : (
          <p className="mt-2 text-xs font-medium text-emerald-600">
            All milestones completed!
          </p>
        )}
      </div>
    </aside>
  )
}
