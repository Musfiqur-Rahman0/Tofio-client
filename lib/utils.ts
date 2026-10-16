import { WeeklyLearningGoal } from "@/app/(dashboard)/student-dashboard/page"

export { cn } from "cn"

export function getWeeklyProgress(
  goal: Pick<WeeklyLearningGoal, "targetHours" | "completedHours">
): number {
  if (goal.targetHours <= 0) return 0

  return Math.min(
    100,
    Math.round((goal.completedHours / goal.targetHours) * 100)
  )
}
