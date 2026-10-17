import { assignments, dueToday, recentFeedback } from "@/data/assignments"
import { AssignmentOverview } from "./AssignmentOverview"
import { DueTodayCard } from "./DueTodayCard"
import { RecentFeedbackCard } from "../StudentDashboard/RecentFeedbackCard"

export function AssignmentDashboard() {
  return (
    <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-[minmax(0,1fr)_304px]">
      <AssignmentOverview items={assignments} />

      <aside className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <DueTodayCard item={dueToday} href="/student-dashboard/assignments/1" />

        <RecentFeedbackCard item={recentFeedback} />
      </aside>
    </div>
  )
}
