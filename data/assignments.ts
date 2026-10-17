import {
  Assignment,
  AssignmentStat,
  DueToday,
  RecentFeedback,
} from "@/types/assignments"

export const assignmentStats: AssignmentStat[] = [
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

export const assignments: Assignment[] = [
  {
    id: 1,
    title: "Research reflection",
    course: "Learning Science",
    dueDate: "Today, 11:59 PM",
    status: "Due soon",
  },
  {
    id: 2,
    title: "Module 4 quiz",
    course: "UX Design",
    dueDate: "Oct 18, 5:00 PM",
    status: "In progress",
  },
  {
    id: 3,
    title: "Python mini project",
    course: "Python basics",
    dueDate: "Oct 21, 11:59 PM",
    status: "Not started",
  },
  {
    id: 4,
    title: "Group presentation",
    course: "Communication",
    dueDate: "Oct 24, 2:00 PM",
    status: "Not started",
  },
  {
    id: 5,
    title: "Reading response",
    course: "AI foundations",
    dueDate: "Oct 26, 11:59 PM",
    status: "Submitted",
  },
]

export const dueToday: DueToday = {
  title: "Research reflection",
  course: "Learning Science · Week 3",
  deadline: "Submit before 11:59 PM",
}

export const recentFeedback: RecentFeedback = {
  status: "GRADED",
  title: "Module 3 knowledge check",
  score: 18,
  totalScore: 20,
  instructorNote:
    "Great explanation. Add one more example to strengthen your answer.",
}
